const mongoose=require("mongoose")
const express=require("express")
const cors=require("cors")
const { teachermodel }=require("./Models/Teacher")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://abijith0a31:abijith1415@cluster0.fodkdeb.mongodb.net/teacherDB?retryWrites=true&w=majority&appName=Cluster0")


app.post("/add",(req,res)=>{
    let input=req.body
    let Teacher=new teachermodel(input)
    Teacher.save()
    console.log(Teacher)
    res.json({"status":"success"})
})

app.post("/search",(req,res)=>{
    let input=req.body
    teachermodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    )
})

app.post("/view",(req,res)=>{
    teachermodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})




app.listen(8080,()=>{
    console.log("server started")
})