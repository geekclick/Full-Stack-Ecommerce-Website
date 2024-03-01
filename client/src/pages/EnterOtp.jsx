import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaAngleLeft, FaReact } from "react-icons/fa";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { Link } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IoIosCheckmarkCircle } from "react-icons/io";

function EnterOtp() {
  return (
    <section className="flex justify-left">
      <div className="w-[845px] flex-2 h-screen bg-green-200 bg-loginBG bg-contain hidden lg:flex"></div>
      <div className="flex flex-1 flex-col space-y-4 justify-center items-start xl:px-24 px-8 py-10">
        <Link
          to={"/forgot-password"}
          className="flex justify-center items-center space-x-2 text-lg"
        >
          <FaAngleLeft />
          <h1>Back</h1>
        </Link>
        <h1 className="font-bold text-xl">Enter OTP</h1>
        <p>
          We have share a code of your registered email address
          JhonMical@example.com
        </p>
        <div className="w-full py-4">
          <form
            action=""
            className="flex justify-start space-y-6 w-full flex-col"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex space-x-10 justify-around items-center">
              <Input
                type="number"
                className="text-xl font-bold aspect-square"
              />
              <Input
                type="number"
                className="text-xl font-bold aspect-square"
              />
              <Input
                type="number"
                className="text-xl font-bold aspect-square"
              />
              <Input
                type="number"
                className="text-xl font-bold aspect-square"
              />
              <Input
                type="number"
                className="text-xl font-bold aspect-square"
              />
              <Input
                type="number"
                className="text-xl font-bold aspect-square"
              />
            </div>
            <Dialog className="bg-white">
              <DialogTrigger>
                <Button className="w-full">Verify</Button>
              </DialogTrigger>
              <DialogContent className="bg-white">
                <DialogHeader className="flex justify-center items-center">
                  <DialogTitle className="p-6 bg-black rounded-full outline outline-gray-500 ring-offset-4">
                    <IoIosCheckmarkCircle className="scale-150 text-white" />
                  </DialogTitle>
                </DialogHeader>
                <div className="flex items-center justify-center flex-col w-full space-y-8">
                  <div>
                    <h1 className="font-bold text-xl text-center ">
                      Password Changed Successfully
                    </h1>
                    <p className="text-center">
                      Your password has been updated successfully
                    </p>
                  </div>
                  <Button className="w-11/12">
                    <Link to={"/login"}>Back to Login</Link>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EnterOtp;
