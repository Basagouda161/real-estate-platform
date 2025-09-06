import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
export const signup = async(req, res) => {
    console.log(req.body);
    const { username, email, password } = req.body;
    const saltRounds = 10;
    const hashedPassword = await bcryptjs.hash(password, saltRounds); 
    const newUser = new User({ username, email, password:hashedPassword });
    try{
        await newUser.save();       
        res.status(201).json({ message: "Signup successful" });
    }catch(error){
        res.status(500).json({ message: error.message });
    }
};