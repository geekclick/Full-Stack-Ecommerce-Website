const User = require('../models/user-model')
const nodemailer = require('nodemailer');


//------------------------ Forgot Passord -----------------------//
const forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        console.log("User from forgot",user);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        await user.sendOTP();

        res.status(200).json({ msg: "OTP sent to your email" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

//------------------------ Verify OTP-----------------------//

const verifyOtp = async (req, res) => {
    const { email, otp } = req.body;

    try {
        // Retrieve user by email
        const user = await User.findOne({ email });

        // Check if OTP matches
        if (user && user.otp === otp) {
            return res.json({ success: true, message: "OTP verified." });
        } else {
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