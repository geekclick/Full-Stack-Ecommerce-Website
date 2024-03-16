import PasswordInput from "@/components/PasswordInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { handleSignUp } from "@/services/auth-services";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupSchema } from "@/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const {
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = form;
  function onSubmit(values) {
    handleSignUp(values, dispatch, navigate, setError);
  }
  return (
    <section className="flex justify-left">
      <div className="w-[845px] md:w-[55%] flex-2 xl:h-screen bg-green-200 bg-loginBG bg-contain hidden md:flex"></div>
      <div className="flex flex-1 flex-col space-y-4 justify-center items-center xl:px-32 px-8">
        <div className="w-full py-8">
          <h1 className="font-bold text-2xl">Create New Account</h1>
          <p>Please enter details</p>
          <Form {...form}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex justify-start space-y-6 w-full flex-col mt-6"
            >
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                        placeholder="Create a password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        placeholder="Confirm your password"
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
                {isSubmitting ? "Loading..." : "Sign up"}
              </Button>
              {errors.root && (
                <p className=" text-red-500 text-center mt-0">
                  {errors.root.message}
                </p>
              )}
            </form>
          </Form>
          <p className="text-center">
            Already Have account? <Link to={"/login"}>Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Signup;

// <form
//   action=""
//   className="flex justify-start space-y-6 w-full flex-col mt-6"
//   onSubmit={handleSubmit}
// >
//   <div>
//     <Label>First Name</Label>
//     <Input
//       type="text "
//       placeholder="Jhon"
//       name="fn"
//       value={formData.fn}
//       onChange={handleChange}
//     />
//   </div>
//   <div>
//     <Label>Last Name</Label>
//     <Input
//       type="text "
//       placeholder="Mical"
//       name="ln"
//       value={formData.ln}
//       onChange={handleChange}
//     />
//   </div>
//   <div>
//     <Label>Email Address</Label>
//     <Input
//       type="email"
//       placeholder="JhonMical@example.com"
//       name="email"
//       value={formData.email}
//       onChange={handleChange}
//     />
//   </div>
//   <div>
//     <Label>Password</Label>
//     <Input
//       type="password"
//       placeholder="••••••••••••••••••"
//       value={formData.password}
//       name="password"
//       onChange={handleChange}
//     />
//   </div>
//   <div className="flex justify-start space-x-3 items-center">
//     <Checkbox className="" />
//     <Label>Remember me</Label>
//   </div>
//   <Button
//     variant={`${loginButton ? "" : "disabled"}`}
//     disabled={!loginButton}
//     type="submit"
//   >
//     Sign up
//   </Button>
// </form>;
