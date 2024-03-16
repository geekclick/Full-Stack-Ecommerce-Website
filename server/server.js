const express = require('express');
const app = express();
const authRoute  = require('./router/auth-route');
const productRoute = require('./router/product-route');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const connectionDB = require('./utils/db');
const cors=require('cors');


const corsOptions = {
    origin:"http://localhost:5173",
    methods:"POST ,GET, DELETE, PATCH, HEAD",
    credentials:true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api",authRoute);
app.use("/api",productRoute);


const PORT = 5000;
connectionDB().then(()=>{
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})
});