const express=require('express')
const app=express();
const port=3000
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/Test',()=>{
    console.log('connected to db')
})
const userroutes=require('./routes/userroutes')
app.use(express.json())
app.use('/',userroutes)
app.listen(port,()=>{
    console.log('server is running on'+port)
})