const express = require('express');

const app = express();
const port = 3000 || process.env.port;

app.get('/', () => {
    
})

app.listen(port, ()=>{
    console.log(`app listen at ${port}`);
})