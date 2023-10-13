import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const auth = async (req, res, next) => {
    const SECRET = process.env.JWT_SECRET;

    try {
        // Check if the user's credential is correct.
        const credential = req.headers.authorization.split(" ")[1];
        const isCustomAuth = credential.length < 500;

        let decodedData;

        if(credential && isCustomAuth){
            decodedData = jwt.verify(credential, SECRET);
            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(credential);
            req.userId = decodedData?.sub;
        }
        next();
    } catch (error){
        console.log(error);
    }
}

export default auth;