require("dotenv").config();
const {connectDB} = require("./db/connect");
const Verse = require("./models/verse");

const VersesJson = require("./verses.json");

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        await Verse.deleteMany();
        await Verse.create(VersesJson);
        console.log("success");
    }catch(error){
        console.log(error);
    }
};

start();
