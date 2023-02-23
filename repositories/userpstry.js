const usermodel=require('../models/usermodel')
const get=()=>{
    return usermodel.find()
}
const post=(data)=>{
    const product=new usermodel(data)
    return product.save()
}
const remove=(id)=>{
    return usermodel.remove({_id:id})
}
// const signin=(email)=>{
//     return usermodel.find({email:email})
// }
const update=(id,data)=>{
    return usermodel.updateOne({_id:id},{$set:{
        name:data.name,
        email:data.email,
        password:data.password
    }}) 
}
module.exports={
    get,post,remove,update
}