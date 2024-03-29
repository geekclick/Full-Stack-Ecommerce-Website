const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
require("dotenv").config();


const userSchema = new mongoose.Schema({
   fullName:{
    type:String,
    required:true
   },
    email:{
        type:String,
        require:true
    },
    otp:{
        type:String,
        require:false
    },
    password:{
        type:String,
        require:true
    },
    isVerified: {
            type: Boolean,
            default: false,
    }    
});

//------------------------ Hashing a password using Bcryptjs -----------------------//

userSchema.pre("save",async function(next){
    // console.log("pre method",this);
    const user = this;
    console.log(user.isModified("password"));

    if(! user.isModified("password")){
        next();
    }

    try {
        const saltround = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password,saltround);
        user.password = hash_password
        console.log(hash_password);
    } catch (error) {
        next(error);
    }

     
})

//------------------------ JWT token generator -----------------------//

userSchema.methods.generateToken=function(){
    try {
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            // isAdmin:this.isAdmin
        },
        "jhajhfajbfjbh",
        {
            expiresIn:"30d"
        }
        )

    } catch (error) {
        console.log(error);
        
    }
}

//------------------------ Password matching -----------------------//

userSchema.methods.passwordChecker=async function(newpass){
    try {
        return  await bcrypt.compare(newpass,this.password);

        }

     catch (error) {
        console.log(error,"Indicating password Checker")
    }
}

//------------------------ Send OTP for Forgot password-----------------------//

userSchema.methods.sendOTP = async function() {
    try {
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        this.otp = otp;
        await this.save();


        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'ecomuser24@gmail.com',  // Use your actual Gmail address
              pass: 'tbwbhyurwgyydtcf'  // Use the app password, not your regular password
            }
          });
          

        const mailOptions = {
            
            from: 'ecomuser24@gmail.com',
            to: this.email,
            subject: 'OTP for Password Reset',
            text: `Your OTP for password reset is: ${otp}`
        };

        await transporter.sendMail(mailOptions);
        return otp;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to send OTP');
    }
}

//------------------------ Send OTP for registration verification -----------------------//

userSchema.methods.registerOTP = async function() {
    try {
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        this.otp = otp;
        await this.save();


        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'ecomuser24@gmail.com',  // Use your actual Gmail address
              pass: 'tbwbhyurwgyydtcf'  // Use the app password, not your regular password
            }
          });
          

        const mailOptions = {
            
            from: 'ecomuser24@gmail.com',
            to: this.email,
            subject: 'Verify Your Email Address',
            text: `Your OTP for account creation is: ${otp}`
        };

        await transporter.sendMail(mailOptions);
        return otp;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to send OTP');
    }
}  

const User = new mongoose.model("User",userSchema);

module.exports = User;