const User = require("../models/user.model");
const crypto = require("crypto");


// * LOGIN CONTROLLER 
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password) {
            throw new Error("Email and password are required");
        };

        const user = await User.findOne({ email: email });
        if(!user) {
            throw new Error("Invalid Credentials");
        };

        const passwordsMatch = await user.comparePasswords(password);
        if (passwordsMatch == false) {
            throw new Error("Invalid Credentials");
        };

        // * VERIFICATION 

        const token = user.createToken();

        res.status(200).json({ message: "Successfully logged in", accessToken: token });
    } catch(e) {
        res.status(400).send("No access" + e.message);
    }
}


// * REGISTER CONTROLLER 
const register = async (reg, res) => {
    const { email, name, password } = req.body;
    const emailAlreadyExists = await User.findOne({ email });
    if (emailAlreadyExists) {
        return res.status(400).json({ msg: 'Email already in use' });
    }
    
    const isFirstAccount = (await User.countDocuments({})) === 0;
    const role = isFirstAccount ? 'admin' : 'user';

    const user = await User.create({
        name, 
        email,
        password,
        role
    });
    const token = user.createToken();

    res.status(201).json({ message: "Hurrah, user account created!  Please check your email to verify your existence", accessToken: token });
};

// * VERIFY EMAIL CONTROLLER


module.exports = {
    login, register
}