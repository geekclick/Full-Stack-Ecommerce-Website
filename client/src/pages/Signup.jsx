import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signup() {


  const [formData, setFormData] = useState({
    fn: "",
    ln: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [loginButton, setLoginButton] = useState(false);
  // const [error, setError] = useState({
  //   phn_error: false,
  //   password_error: false,
  // });
  const handleSubmitButtonState = () => {
    if (
      formData.fn.trim() !== "" &&
      formData.ln.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.password.trim() !== "" 
    ) {
      setLoginButton(true);
    } else {
      setLoginButton(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData.phn.length);
    // if (formData.phn.length === 10) {
    //   setError({ ...error, phn_error: false });
    // } else {
    //   console.log("baby");
    //   setError({ ...error, phn_error: true });
    // }

    // if (formData.password === formData.cpassword) {
    //   setError({ ...error, password_error: false });
    // } else setError({ ...error, password_error: true });

    // console.log("data is submited safely");

    // Api connection 
    try {

      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormData({
          fn: "",
          ln: "",
          email: "",
          password: ""
        });
        navigate('/login');
      }
      console.log(response);

    } catch (error) {
      console.log("Api coonection error", error);
    }

  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // console.log(formData.phn.length);
  };
  useEffect(() => {
    handleSubmitButtonState();
  }, [formData]);



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
            onSubmit={handleSubmit}
          >
            <div>
              <Label>First Name</Label>
              <Input type="text "
                placeholder="Jhon"
                name="fn"
                value={formData.fn}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label>Last Name</Label>
              <Input type="text "
                placeholder="Mical"
                name="ln"
                value={formData.ln}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label>Email Address</Label>
              <Input type="email"
                placeholder="JhonMical@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label>Password</Label>
              <Input type="password"
                placeholder="••••••••••••••••••"
                value={formData.password}
                name="password"
                onChange={handleChange}
              />

            </div>
            <div className="flex justify-start space-x-3 items-center">
              <Checkbox className="" />
              <Label>Remember me</Label>
            </div>
            <Button
              variant={`${loginButton ? "" : "disabled"}`}
              disabled={!loginButton}
              type="submit"
            >Sign up</Button>
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
