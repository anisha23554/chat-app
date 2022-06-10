const express = require('express')
const router = express.Router()
const Message = require("../db/schemas/MessageSchema")
const User = require("../db/schemas/UserSchema")
const Chat = require('../db/schemas/ChatSchema')

router.post('/create',async(req,res)=>{
try{
   const {senderId,chatId,content,date,time} = req.body;
   const sender = await User.findById(senderId)
   const chat = await Chat.findById(chatId)
   const message = new Message({sender,chat,date,time,content})
   await message.save()
   res.send({
       message
   })
}
catch(e){
   res.send({
       message:null,
       error:e.message
   })
}
})
router.get('/all/:chatId',async(req,res)=>{
    try{
    //  params = {chatId:}
     const {chatId} = req.params;
     const messages = await Message.find({chat:chatId}).populate("sender").populate("chat")
     res.send({
         messages
     })
    }
    catch(e){
      res.send({
        error:e.message
      })
    }

})
module.exports = router
