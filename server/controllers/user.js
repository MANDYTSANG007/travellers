import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import dotenv from 'dotenv';

dotenv.config();

export const signin = async (req, res) => {
    console.log("Controllers-user.js-signin-function called")
    const { email, password } = req.body;
    const SECRET = process.env.JWT_SECRET;

    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser){
            return res.status(404).json({ message: "User doesn't exist." })
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const credential = jwt.sign({ email: existingUser.email, id: existingUser._id}, SECRET, {expiresIn: '1h' });
        console.log('user.js-jwt-Token(credential):', credential);
        res.setHeader('Set-Cookie', 'mycookie=value; SameSite=Strict');

        res.status(200).json({ userObject: existingUser, credential });
        // res.status(200).json({ message: "Sign in successful." });


    } catch (error){
        res.status(500).json({ message: "something went wrong."});
    }
};

export const signup = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;
    const SECRET = process.env.JWT_SECRET;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser){
            return res.status(404).json({ message: "User already exist." })
        }

        if (password !== confirmPassword) {
            return res.status(400).json({message: "Password doesn't match"});
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const userObject = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`});
        const credential = jwt.sign({ email: userObject.email, id: userObject._id }, SECRET , {expiresIn: '1h' });
        res.status(200).json({ userObject, credential });

    } catch (error){
        res.status(500).json({ message: "something went wrong."});
        console.log(error);
    }
};