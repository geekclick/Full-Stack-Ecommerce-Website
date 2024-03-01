import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaAngleLeft, FaReact } from "react-icons/fa";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <section className="flex justify-left items-center">
      <div className="w-[845px] flex-2 h-screen bg-green-200 bg-loginBG bg-contain"></div>
      <div className="flex flex-1 flex-col space-y-4 justify-center items-center px-24">
        <div className="flex justify-start items-center space-x-2 text-2xl">
          <FaAngleLeft />
          <h1>Back</h1>
        </div>
        <h1 className="font-bold text-xl">Welcome</h1>
        <div className="w-full">
          <form
            action=""
            className="flex justify-start space-y-6 w-full flex-col"
          >
            <p>Please login here</p>
            <div>
              <Label>Email Address</Label>
              <Input type="email" placeholder="JhonMical@example.com" />
            </div>
            <div>
              <Label>Password</Label>
              <Input type="password" placeholder="••••••••••••••••••" />
              <small>Forgot Password?</small>
            </div>
            <div className="flex justify-start space-x-3 items-center">
              <Checkbox className="" />
              <Label>Remember me</Label>
            </div>
            <Button>Login</Button>
          </form>
        </div>
        <p>
          Don't Have Account? <Link to={"/signup"}>Signup</Link>
        </p>
      </div>
    </section>
  );
}

export default ForgotPassword;
