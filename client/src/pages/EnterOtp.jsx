import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IoIosCheckmarkCircle } from "react-icons/io";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { otpSchema } from "@/schemas/authSchema";
import { verifyOtp } from "@/services/auth-services";

function EnterOtp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const {
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = form;

  function onSubmit(values) {
    verifyOtp(values, dispatch, navigate, setError);
  }
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
        <p>We have shared a code on your registered email address</p>
        <div className="w-full py-4">
          <Form {...form}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex justify-start space-y-6 w-full flex-col"
              a
            >
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter OTP</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="* * * * * *"
                        className="text-lg"
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-black text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Verifying..." : "Verify OTP"}
              </Button>
              {errors.root && (
                <p className=" text-red-500 text-center mt-0">
                  {errors.root.message}
                </p>
              )}
            </form>
          </Form>
          {/* <Dialog className="bg-white">
              <DialogTrigger></DialogTrigger>
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
                  <Button className="bg-black text-white w-11/12">
                    <Link to={"/login"}>Back to Login</Link>
                  </Button>
                </div>
              </DialogContent>
            </Dialog> */}
        </div>
      </div>
    </section>
  );
}

export default EnterOtp;
