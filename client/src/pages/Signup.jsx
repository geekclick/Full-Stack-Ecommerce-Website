import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <section className="flex justify-left">
      <div className="w-[845px] md:w-[55%] flex-2 xl:h-screen bg-green-200 bg-loginBG bg-contain hidden md:flex"></div>
      <div className="flex flex-1 flex-col space-y-4 justify-center items-center xl:px-32 px-8">
        <div className="w-full py-8">
          <h1 className="font-bold text-2xl">Create New Account</h1>
          <p>Please enter details</p>
          <form
            action=""
            className="flex justify-start space-y-6 w-full flex-col mt-6"
          >
            <div>
              <Label>First Name</Label>
              <Input type="text " placeholder="Jhon" />
            </div>
            <div>
              <Label>Last Name</Label>
              <Input type="text " placeholder="Mical" />
            </div>
            <div>
              <Label>Email Address</Label>
              <Input type="email" placeholder="JhonMical@example.com" />
            </div>
            <div>
              <Label>Password</Label>
              <Input type="password" placeholder="••••••••••••••••••" />
            </div>
            <div className="flex justify-start space-x-3 items-center">
              <Checkbox className="" />
              <Label>Remember me</Label>
            </div>
            <Button>Sign up</Button>
          </form>
          <p className="text-center">
            Already Have account? <Link to={"/login"}>Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Signup;
