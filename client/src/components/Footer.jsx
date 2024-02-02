import {
  FaLocationDot,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { LuMail } from "react-icons/lu";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function Footer() {
  return (
    <footer className="relative bottom-0  w-full px-20 py-2 bg-secondary text-secondary-foreground">
      <div className="flex justify-center items-center text-xs">
        <div className="flex-1 g-3 text-sm">
          <h1 className="font-bold text-4xl p-3">ABCXYZ</h1>
          <div className="flex space-x-2 justify-start items-center">
            <FaLocationDot /> <p>Amravati, Maharashtra</p>
          </div>
          <div className="flex space-x-2 justify-start items-center">
            <IoIosCall /> <p>+91 1111111111</p>
          </div>
          <div className="flex space-x-2 justify-start items-center">
            <LuMail /> <p>abcxyz@gmail.com</p>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-base">About Us</p>
          <ul className="flex flex-col justify-start items-start gap-2">
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Corporate Information</li>
            <li>ABCXYZ Stories</li>
          </ul>
        </div>
        <div className="flex-1">
          <p className=" text-base">Help</p>
          <ul className="flex flex-col justify-start items-start gap-2">
            <li>Shipping</li>
            <li>Payment</li>
            <li>Cancellation and Return</li>
            <li>FAQ</li>
            <li>Report Bug</li>
          </ul>
        </div>
        <div className="flex-1">
          <p className=" text-base">Consumer Policies</p>
          <ul className="flex flex-col justify-start items-start gap-2">
            <li>Cancellation and Return</li>
            <li>Terms of Use</li>
            <li>Security</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="flex-1">
          <p className=" text-base">About Us</p>
          <ul className="flex flex-col justify-start items-start gap-2">
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Corporate Information</li>
            <li>ABCXYZ Stories</li>
          </ul>
        </div>
        <div className="flex-1">
          <p className=" text-center text-[16px]">Join Our Newsletter Now</p>
          <ul className="flex flex-col justify-center items-center gap-3">
            <li className="text-[10px] w-[80%]">
              Get E-mail updates about our latest shop and special offers.
            </li>
            <li>
              <Input placeholder="Enter your Email" className="h-8" />
            </li>
            <li>
              <Button className="bg-[#cee892] text-black h-6">Subscribe</Button>
            </li>
            <li className="flex gap-2">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaTiktok />
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-[80%] m-auto my-2" />
      <div className="flex justify-center p-1">
        <p className="text-muted/80 text-sm m-auto">
          Copyrights @2024 All Rights Reserved by ABCXYZ
        </p>
      </div>
    </footer>
  );
}

export default Footer;
