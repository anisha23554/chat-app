const Chat = require("../db/schemas/ChatSchema")
const User = require("../db/schemas/UserSchema")
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

router.post('/create',async(req,res)=>{
   try{
      // loggedInUser,selectedUser are _id of the users
       const {loggedInUser,selectedUser} = req.body 
       const user1 = await User.findById(loggedInUser)
       const user2 = await User.findById(selectedUser)
       const users = [user1,user2]
       const chatAlreadyExists = await Chat.findOne({users})
       if(chatAlreadyExists){
           return res.json({
            message:'chat already exists',
            chat:null
        })
       }
       const chat = new Chat({
           chatName:'',
           users
       })
       await chat.save()
       res.json({
           message:'chat created',
           chat
       })
   }
   catch(error){
      res.json({
          message:error.message,
          chat:null
      })
   }
})
router.get('/all',async(req,res)=>{  
    try{
      const allChats = await Chat.find().populate("users")
      return res.json({
          message:'fetched chats',
          allChats
      })
    }
    catch(error){
        res.json({
            message:error.message,
            allChats:null
         })
    }
})

module.exports = router