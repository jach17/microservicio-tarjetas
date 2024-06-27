const express = require('express');
const morgan = require('morgan');

const app= express();

app.set('port',process.env.PORT||1000);

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const protectedRoutes = require("./src/routes/datos") 
app.use("/api/cards/", protectedRoutes)


module.exports= app;