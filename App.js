const mongoose=require("mongoose")
const express=require("express")
const cors=require("cors")
const { teachermodel }=require("./Models/Teacher")

const app=express()
app.use(cors())
app.use(express.json())

app.post("/add",(req,res)=>{
    let input=req.body
    let Teacher=new teachermodel(input)
    Teacher.save()
    console.log(Teacher)
    res.json({"status":"success"})
})

app.listen(8080,()=>{
    console.log("server started")
})