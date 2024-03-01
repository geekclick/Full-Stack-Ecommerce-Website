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
      <div className="w-[845px] md:w-[55%] flex-2 h-screen bg-green-200 bg-loginBG bg-contain hidden md:flex"></div>
      <div className="flex flex-1 flex-col space-y-4 justify-center items-start xl:px-24 px-8 py-10">
        <Link
          to={"/"}
          className="flex justify-center items-center space-x-2 text-lg"
        >
          <FaAngleLeft />
          <h1>Back</h1>
        </Link>
        <h1 className="font-bold text-xl">Forgot Password</h1>
        <p>
          Enter your registered email address. we&apos;ll send you a code to
          reset your password.
        </p>
        <div className="w-full py-4">
          <form
            action=""
            className="flex justify-start space-y-6 w-full flex-col"
          >
            <div>
              <Label>Email Address</Label>
              <Input type="email" placeholder="JhonMical@example.com" />
            </div>
            <Button>Send OTP</Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
