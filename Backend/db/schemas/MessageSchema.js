const mongoose = require("mongoose")

const messageSchema = mongoose.Schema({
    chat:{
      type:mongoose.Types.ObjectId,
      ref:"Chat"
    },
    sender:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    content:{
       type:String
    },
    time:{
      type:String
    },
    date:{
      type:String
    }
})

const Message = mongoose.model("Message",messageSchema)
module.exports=Message
