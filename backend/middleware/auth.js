import jwt from "jsonwebtoken"

const authMiddleware = async (req, res, next) => {
        const {token} = req.headers;

        if(!token){
            res.json({success:false, message:"Not Authorised Login Again"})
        }

        try {
            const token_decode = jwt.verify(token, process.env.JWT_SECRET)
            req.body.userId = token_decode.id                               // the payload is decoded and extracted. The user's ID is retrieved from the payload.The user's ID is assigned to req.body.userId. The id property within token_decode contains the user's ID, which is then assigned to req.body.userId. hence, both are same.
            next();                                                             //once the token is generated then after decoding the userId is generated.
        } catch (error) {
            console.log(error)
            res.json({success:false, message:"Error"})
        }
}

export default authMiddleware;
//ABOUT PAYLOAD
// In JSON Web Tokens (JWT), the payload refers to the data that is stored inside the token. The payload is a JSON object that contains claims or data about the user, such as their ID, name, email, etc.
// The payload is used to transmit information between the server and the client in a secure and compact way. The payload is signed with a secret key or password, which ensures that the data cannot be tampered with or altered during transmission.

// In the context of JWT, the payload typically contains information such as:
    // - User ID
    // - Username
    // - Email
    // - Name
    // - Permissions
    // - Roles
    // - Expiration time (optional)

// The payload is base64 encoded and stored in the JWT token, along with the header and signature. When the token is verified, the payload is decoded and made available to the application.
// The use of a payload in JWT provides several benefits, including:
    // - Secure data transmission: The payload is signed and verified, ensuring that the data is not tampered with during transmission.
    // - Compact data representation: The payload is base64 encoded, making it compact and efficient to transmit.
    // - Flexibility: The payload can contain any type of data, allowing for flexibility in the types of claims or data that can be stored.

        
    // Overall, the payload is a critical component of JWT, enabling secure and efficient data transmission between the server and client.