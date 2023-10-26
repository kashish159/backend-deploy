const express=require("express");
const studentRoute= express.Router();
const studentSchema=require("../model/schema");
const mongoose=require("mongoose");
studentRoute.post("/create-student",(req,res)=>{
    console.log("hello");
    studentSchema.create(req.body,(err,data)=>{
        if(err)
             return err;
        else 
            res.json(data);
    })
})
studentRoute.get("/",(req,res)=>{
    studentSchema.find((err,data)=>
    {
        if(err)
            return err;
        else 
           res.json(data);
    })
})
// studentRoute.route()
// .get()
// .put()
// studentRoute.delete()


// studentRoute.get("/update-student/:id",(req,res)=>{})
// studentRoute.put("/update-student/:id",(req,res)=>{})


studentRoute.route("/update-student/:id")
.get((req,res)=>{
    studentSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
.put((req,res)=>{
    studentSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})


studentRoute.delete("/delete-student/:id",(req,res)=>{
    studentSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
//http://localhost:4000/students/update-student/ and PUT method

module.exports = studentRoute;
/* Client enters the data as 
Name=Raj
email= raj@gmail.com
Roll no =1
//http://localhost:4000/students/create-student :request made to this to update record
//http://localhost:4000/about : called by Axios.post(http://localhost:4000/students/create-student)
Cleint side 
const handleClick = () =>{
    Axios.post("http://localhost:4000/students/create-student",{"name":"kashish",email:".....","rollno":1})
}
<button onClick={handleClick}>Create student </buton>
Data is sent to server
this will be in request side of server
/*
app.get()
app.post() -> create
app.put()
app.delete()
----------------------
app.use()
*/

//http://localhost:4000/students/ --> All the records

//[{"_id":"6530bb7238482a910135e1ab","name":"kashish ","email":"kash2@gmail.com","rollno":4,"__v":0}]
//http://localhost:4000/students/update-student/6530bb7238482a910135e1ab  -> Kashish..specific record