import { setIsLoggedIn, setUser } from "@/store/reducers/authSlice";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const handleLogin = async (userInfo, dispatch, navigate, setError) => {
    try {
        const response = await axios.post("/api/login", userInfo);
        if (response) {
            dispatch(setUser({ email: "", password: "" }))
            dispatch(setIsLoggedIn(true));
            navigate("/");
            toast.success("Login Success");
            console.log("Login Success");
        }
    } catch (error) {
        if (error.response.status === 400 || error.response.data.error === "Password doesn't match") {
            toast.error("Password doesn't match");
        }
        setError('root', { message: error.response.data.msg });
    }
}

export const handleSignUp = async (userInfo, dispatch, navigate, setError) => {
    try {
        const response = await axios.post("/api/register", userInfo);
        if (response) {
            dispatch(setUser({
                fullName: "",
                email: "",
                password: "",
            }));
            dispatch(setIsLoggedIn(true));
            navigate("/");
            toast.success("Successfully Registered");
            console.log("Register Success");
        }
    } catch (error) {
        if (error.response.status === 400 || error.response.data.error === "Passwords don't match") {
            toast.error("Passwords don't match");
        }
        setError('root', { message: error.response.data.msg });

    }
};