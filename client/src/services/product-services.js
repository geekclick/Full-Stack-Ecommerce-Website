import { addToProductList, setProductList } from "@/store/reducers/productSlice";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const addProduct = async (productInfo, dispatch, navigate, setError) => {
    console.log(productInfo)
    try {
        const response = await axios.post("/api/addProduct", productInfo);
        if (response) {
            dispatch(addToProductList({
                name: "",
                description: "",
                price: "",
                available: "",
                category: "",
            }))
            navigate("/admin/products");
            toast.success("Product Added Successfully");
            console.log("Success");
        }
    } catch (error) {
        if (error.response.status === 400 || error.response.data.error === "Password doesn't match") {
            toast.error("Product error");
        }
        setError('root', { message: error.response.data.msg });
        console.log(error)
    }
}


export const getProductList = async (dispatch, navigate) => {
    const path = location.pathname
    try {
        const response = await axios.get("/api/getProduct");
        if (response) {
            dispatch(setProductList(response.data))
            navigate(path);
            console.log("Success");
        }
    } catch (error) {
        if (error.response.status === 400 || error.response.data.error === "Password doesn't match") {
            toast.error("get Product error");
        }
        console.log(error)
    }
}