const User = require("../db/schemas/UserSchema")

const express = require("express")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.post('/signup',async(req,res)=>{
    try{
    const {name,email,password} = req.body
    const userExists = await User.findOne({email})
    if(userExists){
        console.log(userExists)
        return res.json({
            status:'FAILED',
            message:'USER ALREADY EXISTS!'
        })
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    const user = new User({name,email,password:hashedPassword})
    await user.save()
    return res.json({
        status:'SUCCESS',
        user,
        message:'ACCOUNT CREATED!'
      })
    }
    catch(error){
        return res.json({
            status:'FAILED',
            message:error.message 
       })
    }
})
router.post('/login',async(req,res)=>{
  try{
     const {email,password} = req.body
     if(!email || !password){
         return res.json({
             message:'invalid credentials'
         })
     }
     else{
     const user = await User.findOne({email})
     if(!user){
         console.log(user)
         return res.json({
             status:'FAILED',
             message:"Incorrect Credentials"
         })
     }
     const passwordMatched = await bcrypt.compare(password,user.password)
     console.log(passwordMatched)
     if(passwordMatched){
         const payload = {userId:user._id}
         const token = jwt.sign(payload,process.env.JWT_SECRET)
         return res.json({
             status:'SUCESS',
             message:'Logged in!',
             token,
             user
         })
     }
     return res.json({
        status:'FAILED',
        message:'Incorrect Credentials',
        token:null
    })
   } 
  }
  catch(error){
    return res.json({
        status:'FAILED',
        error:error.message 
   })
  }
})
router.post('/searchUser/:search',async(req,res)=>{
    try{
        const name = req.params.search
        if(!name){
            return res.json({
                users:[],
                message:'error:search field can not be empty'
            })
        }
        const users = await User.find({name})
        if(users.length === 0){
            return res.json({
                users,
                message:'no user found'
            })
        }
        if(users){
        return res.json({
            users,
            message:'user found'
        })
       }
    }
    catch(error){
        res.json({
            users:null,
            message:error.message
        })
    }
})

module.exports = router