const express = require('express');
const User = require('../models/user-model');

//------------------------ Home -----------------------//
const home = (req, res) => {
    try {
        res.status(200).send("This is from controllers home page")
    } catch (error) {
        console.log(error)
    }
}

//------------------------ Register -----------------------//
const register = async (req, res) => {
    try {

        const { fn, ln, email, password } = req.body;
        const userExits = await User.findOne({ email });

        // hashing a password
        // const salt = 10;
        // const hash_password = await bcrypt.hash(password,salt);

        if (userExits) {
            res.status(400).json({ msg: "Email already exits" });
            console.log("User Already exits you idiot");
            return;
        }

        const data = await User.create({ fn, ln, email, password });
        // res.status(200).json({msg:"user Created Succesfully"});
        res.status(201).json({
            msg: "User Created Succesfully",
            token: await data.generateToken(),
            userId: data._id.toString(),
        });
        console.log(data);

    } catch (error) {

        console.log(error, "Internal Server Error");
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

//------------------------ login -----------------------//

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExists = await User.findOne({ email });

        if (!userExists) {
            return res.status(400).json({ msg: "Invalid Credentials" });
        }

        if (await userExists.passwordChecker(password)) {
            const token = await userExists.generateToken();
            res.status(200).json({
                msg: "Login Successfully",
                token,
                userId: userExists._id.toString()
            });
            console.log("Login Successfully");
        } else {
            return res.status(401).json({ msg: "Invalid email or password" });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

module.exports = { home, register, login}; 