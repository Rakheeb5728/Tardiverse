const express=require('express')
const userctrl=require('../controllers/userctrl')
const router=express.Router()
router.get('/',userctrl.get)
// router.post('/signin',userctrl.signin)
router.post('/',userctrl.post)
router.delete('/:id',userctrl.deletee)
router.put('/:id',userctrl.update)
module.exports=router