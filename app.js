require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const verses_routes = require("./routes/verses");
const { connectDB } = require("./db/connect");

app.get("/", (req,res) => {
    res.send("Hi, i am LIVE");
});

//middleware
app.use("/api/verses",verses_routes);

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(" Yes I am Connected"+PORT);
        });
    } catch(error){
        console.log(error);
    }
}

start();