import axios from 'axios'
const sendNewMessage = async(senderId,chatId,date,time,content)=>{
   try{
     const message = {senderId,chatId,content,date,time}
     console.log(date)
     const BASE_URL = "http://localhost:4000"
     const res = await axios.post(`${BASE_URL}/wEchat/api/message/create`,message)
     return res.data.message
   }
   catch(error){
     console.log(error.message)
     return error.message
   }
}

export default sendNewMessage