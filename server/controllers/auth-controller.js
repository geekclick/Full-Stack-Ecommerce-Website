const express = require('express');
const User = require('../models/user-model');
const nodemailer = require('nodemailer');

//------------------------ Home -----------------------//
const home = (req, res) => {
  try {
    res.status(200).send("This is from controllers home page")
  } catch (error) {
    console.log(error)
  }
};

//------------------------ Register -----------------------//
const register = async (req, res) => {
  try {

    const { fullName,email, password } = req.body;
    const userExits = await User.findOne({ email });

    if (userExits) {
      res.status(400).json({ msg: "Email already exist" });
      console.log("User Already exist");
      return;
    }

    // Creating a new user//
    const data = await User.create({ fullName,email,password });

    // Generating a new otp//
    const otp = await data.registerOTP()
    console.log(otp);

    // Storing the otp and email in cookie
    res.cookie('otp', otp, { maxAge: 900000, httpOnly: true });
    res.cookie('userEmail', email, { maxAge: 900000, httpOnly: true });//

    // generating token and then send the reponse //
    res.status(201).json({
      msg: "User Created Succesfully & OTP sent to your registred email address",
      token: await data.generateToken(),
      userId: data._id.toString(),
    });

  } catch (error) {
    console.log(error, "Internal Server Error");
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

//------------------------ Verify OTP -----------------------//

const verifyOTP = async (req, res) => {
  const { otp } = req.body;

  try {
    const userEmail = req.cookies.userEmail;
    const newotp = req.cookies.otp;
    if (!userEmail) {
      res.status(400).json({ msg: "Problem to store email in cookie" });
    }

    // Check if user exists
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      res.status(404).json({ success: false, message: 'User not found.' });
    }

    if (newotp == otp) {
      user.isVerified = true;
      await user.save();
      res.json({ success: true, message: "OTP verified." });
    }
    else {
      console.log("Generated otp", newotp);
      console.log("Entered Otp ", otp);
      res.status(400).json({ success: false, message: "Invalid OTP." });
    }


  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

//------------------------ login -----------------------//

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (!userExists) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    if (await userExists.passwordChecker(password) && userExists.isVerified == true) {
      const token = await userExists.generateToken();
      res.status(200).json({
        msg: "Login Successfully",
        token,
        userId: userExists._id.toString()
      });
      console.log("Login Successfully");
    } else {
      if (userExists.isVerified==false) {
        res.status(403).json({ msg: "Verify the account and then try to login" })
      }
      else {
        res.status(401).json({ msg: "Invalid Credentials" });
      }
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const getAllUser = async(req,res)=>{
  try {
    const user = await User.find();
    console.log("Products from get products : ",user);

    if(!user || user.length===0){
        res.status(404).json({msg:"No products found"});
    }

    return res.status(200).json(user)
  } catch (error) {
    res.status(500).json({msg: "Internal Server Error"});
  }
}

module.exports = {
  home,
  register,
  login,
  verifyOTP,
  getAllUser
}; 
