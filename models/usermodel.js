const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    Name:String,
    Email:String,
    Password:String
})
const model=mongoose.model('users',schema)
module.exports=model;