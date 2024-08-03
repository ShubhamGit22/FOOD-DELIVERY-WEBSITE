import userModel from "../models/userModel.js";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      res.json({ success: false, message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password); //user.password is password stored in the database.
    if (!isMatch) {
      return res.json({ success: false, message: "invalid Credentials" });
    }

    const token = createToken(user._id); //at the time of login, a token will be generated if logged in successfully.
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

//token creation
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
}; // jwt.sign() is a method from the jsonwebtoken library that creates a signed JWT token. The jwt.sign() method is called with the payload {id: 123} and the secret key.
// process.env.JWT_SECRET:- This is the secret key used to sign the token. It's stored in an environment variable named JWT_SECRET. the payload is an object that contains a single property called "id", which holds the user's ID. When the JWT token is created, the payload is generated and signed with a secret key.

// register user
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    //checking if user already exists or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    //validating email format & strong format
    if (!validator.isEmail(email)) {
      //if email is not valid
      return res.json({ success: false, message: "Please enter valid email" });
    }

    //checking password length
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    //hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

export { loginUser, registerUser };
