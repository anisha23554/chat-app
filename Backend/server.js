// Express node server which enables socket.io connection

const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const app = express()
const userRoutes = require("./routes/userRoutes")
const chatRoutes = require('./routes/chatRoutes')
const messageRoutes = require('./routes/messageRoutes')
const cors = require('cors')
const connectDb = require("./db/connectDb")
const port = process.env.PORT

app.use(express.json())
app.use(cors())

connectDb()

app.use("/wEchat/api/auth",userRoutes)
app.use("/wEchat/api/chats",chatRoutes)
app.use("/wEchat/api/message",messageRoutes)

const server = app.listen(port,()=>{
    console.log(`SERVER LISTENING AT PORT ${port}`)
})
const users = {}
const io = require('socket.io')(server)
io.on('connection',socket=>{
    console.log(`user connected to socket.io server with socket id:${socket.id}`)
    socket.on('user-joined',data=>{
         socket.join(data.room)
         console.log(`user joined room: ${data.room}`)
         users[socket.id]={room:data.room,username:data.username}
    })
    // data = {message:'',chatId:''}
    socket.on('send-message',data=>{
        console.log("hi")
        // console.log(io.sockets.in(data.chatId).emit('recieve-message',data.message))
        var receiver;
        for(socketId in users){
           if(socket.id!=socketId && users[socketId].room===data.chatId){
               receiver = {
                   socketId,
                   name:users[socketId].username
               }
           }
        }
        console.log(receiver)
        if(receiver){
            io.to(receiver.socketId).emit("recieve-message",data.message)
        }
    })
})














