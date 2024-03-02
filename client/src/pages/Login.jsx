// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { FaReact } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import PasswordInput from "@/components/ui/passwordInput";
// import { useNavigate } from "react-router-dom";



// function Login() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [loginButton, setLoginButton] = useState(false);

//   const handleSubmit = async(e)=>{
//     e.preventDefault();
//     if (formData.email !== "" && formData.password !== "") {
//       setLoginButton(true);
//     } else {
//       setLoginButton(false);
//     }

//     try {
//       const response = await fetch("http://localhost:5000/api/login", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if(response.ok){
//         setFormData({
//           email: "",
//           password: ""
//         });
//         navigate("/");
//         console.log("Login Succesfully");
//         alert("Login Succesfully");
//       }
//       console.log(response);
//     } catch (error) {
//       console.log("Api coonection error", error);
//     }
  
//   };
// }


//   const handleChange = async (e) => {
//     const { name, value } = e.target;
//     console.log(name, value);
//     setFormData({ ...formData, [name]: value });
//   }

//   useEffect(() => {
//     handleSubmit();
//   }, [formData]);


//   return (
//     <section className="flex justify-left items-center">
//       <div className="w-[845px] flex-2 h-screen bg-green-200 bg-loginBG bg-contain"></div>
//       <div className="flex flex-1 flex-col space-y-4 justify-center items-center px-24">
//         <div className="flex justify-center items-center space-x-2 text-2xl">
//           <FaReact />
//           <h1>ABCXYZ</h1>
//         </div>
//         <h1 className="font-bold text-xl">Welcome</h1>
//         <div className="w-full">
//           <form
//             onSubmit={handleSubmit}
//             className="flex justify-start space-y-6 w-full flex-col"
//           >
//             <p>Please login here</p>
//             <div>
//               <Label>Email Address</Label>
//               <Input type="email"
//                 placeholder="JhonMical@example.com"
//                 name="email"
//                 value={formData.email}
//                 onChange={(e) => handleChange(e)}
//               />
//             </div>
//             <div>
//               <Label>Password</Label>
//               {/* <Input type="password" 
//               placeholder="••••••••••••••••••"
//                /> */}
//               <PasswordInput
//                 value={formData.password}
//                 onChange={(e) => handleChange(e)}
//               />
//               <small>Forgot Password?</small>
//             </div>
//             <Button
//               className="w-full"
//               variant={`${loginButton ? "" : "disabled"}`}
//               disabled={!loginButton}
//             >
//               Log in
//             </Button>
//             <div className="flex justify-start space-x-3 items-center">
//               <Checkbox className="" />
//               <Label>Remember me</Label>
//             </div>
//             {/* <Button>Login</Button> */}
//           </form>
//         </div>
//         <p>
//           Don't Have Account? <Link to={"/signup"}>Signup</Link>
//         </p>
//       </div>
//     </section>
//   );
  

// export default Login












import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import PasswordInput from "@/components/ui/passwordInput";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loginButton, setLoginButton] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.email !== "" && formData.password !== "") {
      setLoginButton(true);
    } else {
      setLoginButton(false);
    }

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          email: "",
          password: ""
        });
        navigate("/");
        console.log("Login Succesfully");
        alert("Login Succesfully");
      }
      console.log(response);
    } catch (error) {
      console.log("Api coonection error", error);
    }
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });

    if (formData.email !== "" && formData.password !== "") {
      setLoginButton(true);
    } else {
      setLoginButton(false);
    }
  };

  useEffect(() => {
    // handleSubmitButtonState();
  }, [formData]);

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
          <form
            onSubmit={handleSubmit}
            className="flex justify-start space-y-6 w-full flex-col"
          >
            <p>Please login here</p>
            <div>
              <Label>Email Address</Label>
              <Input type="email"
                placeholder="JhonMical@example.com"
                name="email"
                value={formData.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <Label>Password</Label>
              <PasswordInput
                value={formData.password}
                onChange={(e) => handleChange(e)}
              />
              <small>Forgot Password?</small>
            </div>
            <Button
              className="w-full"
              variant={`${loginButton ? "" : "disabled"}`}
              disabled={!loginButton}
            >
              Log in
            </Button>
            <div className="flex justify-start space-x-3 items-center">
              <Checkbox className="" />
              <Label>Remember me</Label>
            </div>
          </form>
        </div>
        <p>
          Don't Have Account? <Link to={"/signup"}>Signup</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
