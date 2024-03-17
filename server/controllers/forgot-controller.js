const User = require('../models/user-model');
const nodemailer = require('nodemailer');


//------------------------ Forgot Passord -----------------------//
const forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
     

        const user = await User.findOne({ email });

        // If user doesn't exist, return error
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found.' });
        }

        // Call sendOTP method on user instance to generate and save OTP
        const otp = await user.sendOTP()
        console.log(otp);
        res.cookie('otp',otp,{maxAge:900000, httpOnly:true});

        res.cookie('userEmail', email, { maxAge: 900000, httpOnly: true });

        res.status(200).json({ msg: "OTP sent to your email" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

//------------------------ Verify OTP-----------------------//

const verifyOtp = async (req, res) => {
    const { otp } = req.body;

    try {
        // Retrieve user by email
        // const user = await User.findOne({ email });
        const userEmail = req.cookies.userEmail;
        const newotp =req.cookies.otp;
        
        if (!userEmail) {
            return res.status(400).json({ success: false, message: 'Email not found in cookie.' });
          }

        // Check if OTP matches
        if (newotp === otp) {
            console.log("OTP from valid otp",newotp);
            return res.json({ success: true, message: "OTP verified." });
        } else {
            console.log("User email from invalid otp",newotp);
            console.log("OTP from invalid otp",otp);
            return res.status(400).json({ success: false, message: "Invalid OTP." });
        }
    } catch (error) {
        console.error("Error verifying OTP:", error);
        return res.status(500).json({ success: false, message: "Server error." });
    }
};

//------------------------ Reset Password-----------------------//
const resetPassword = (async (req, res) => {
    const { email, newPassword } = req.body;

    try {
        // Retrieve user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found.' });
        }

        // Update user's password
        user.password = newPassword;

        // Clear OTP
        user.otp = undefined;

        // Save user
        await user.save();

        return res.json({ success: true, message: 'Password reset successfully.' });
    } catch (error) {
        console.error('Error resetting password:', error);
        return res.status(500).json({ success: false, message: 'Server error.' });
    }
});

module.exports = {forgotPassword,verifyOtp,resetPassword}