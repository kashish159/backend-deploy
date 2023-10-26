const express= require ("express");
const mongoose= require("mongoose");
const studentRoute = require("./controller/router.js");
const cors= require("cors");
const bodyParser= require("body-parser");
mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://kashish:12345@cluster0.v1o51wo.mongodb.net/schooldb");
var db= mongoose.connection;
db.on("open",()=> console.log("connected to db"));
db.on("error",()=>console.log("error occurrred"));
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use("/students",studentRoute); //middleware introduced

app.listen(4000,()=>{
    console.log("server started at 4000");
})