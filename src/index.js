require('dotenv').config();
const express = require("express");

const app = express();

app.get('/', (req, res)=>{
return res.status(500).json('teste');
});

app.listen(process.env.PORT|3000);


