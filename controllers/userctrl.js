const userrpstry=require('../repositories/userpstry')
const crypto=require('../utils/crypto')
// const jwt=require('jsonwebtoken')
// const bcrypt=require('bcrypt')
const get=async(req,res)=>{
const hash=await crypto.gethash(req.body.Password)
    req.body.Password=hash
    console.log('hash',hash)
    const data=await userrpstry.get()
    res.json(data)
    res.status(200)
}
const post=async(req,res)=>{
    const data=req.body
    console.log(data)
    await userrpstry.post(data)
    res.send('created')
    res.status(201)
}
const deletee=async(req,res)=>{
    const id=req.params.id
    await userrpstry.remove(id)
    res.send('deleted')
    res.status(200)
    
}
const update=async(req,res)=>{
    const id=req.params.id
    const data=req.body
    await userrpstry.update(id,data)
    res.send('')
    res.status(200)
}
// const signin=async(req,res)=>{
//     const data=req.body
//     const user=await userrpstry.signin(data.email)
//     if(!user){
//         res.statsu(401)
//         res.send('unauthorised')
//     }
//     const valid=await crypto.verify(data.Password,user.Password)
//     const token=jwt.sign({Email:user.Email},'secret')
//     if(valid){
//         res.status(200)
//         res.json({
//             email:user.email,
//             token:token
//         })
//     }
// }
module.exports={
    get,post,deletee,update,
}