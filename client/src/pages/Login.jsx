import PasswordInput from "@/components/PasswordInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { handleLogin } from "@/services/auth-services";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/schemas/authSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FaReact } from "react-icons/fa6";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = form;

  function onSubmit(values) {
    handleLogin(values, dispatch, navigate, setError);
  }
  return (
    <section className="flex justify-left">
      <div className="w-[845px] md:w-[55%] flex-2 h-screen bg-green-200 bg-loginBG bg-contain hidden md:flex"></div>
      <div className="flex flex-1 flex-col space-y-4 justify-center items-center xl:px-24 px-6 ">
        <div className="flex justify-center items-center space-x-2 text-2xl md:p-0 p-8">
          <FaReact />
          <h1>ABCXYZ</h1>
        </div>
        <h1 className="font-bold text-2xl">Welcome</h1>
        <div className="w-full">
          <Form {...form}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex justify-start space-y-6 w-full flex-col"
              a
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <small className="text-black">Forgot password?</small>
              <Button
                type="submit"
                className="w-full bg-black text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Loading..." : "Log in"}
              </Button>
              {errors.root && (
                <p className=" text-red-500 text-center mt-0">
                  {errors.root.message}
                </p>
              )}
            </form>
          </Form>
        </div>
        <p>
          Don't Have Account? <Link to={"/signup"}>Signup</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
