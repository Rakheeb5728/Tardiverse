const bcrypt=require('bcryptjs')
const gethash=(plaintext)=>{
    return bcrypt.hash(plaintext,1)
}
const verify=(plaintext,hash)=>{
    return bcrypt.compare(plaintext,hash)
}
module.exports={
    gethash,verify
}