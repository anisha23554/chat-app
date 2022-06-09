const mongoose = require("mongoose")

const chatSchema = mongoose.Schema({
    chatName:{
        type:String
    },
    groupChat:{
        type:Boolean,
        default:false
    },
    groupAdmin:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    users:[{
            type:mongoose.Types.ObjectId,
            ref:"User"
          }],
    latestMessage:{
        type:mongoose.Types.ObjectId,
        ref:"Message"
    }
})

const Chat = mongoose.model("Chat",chatSchema)
module.exports=Chat
