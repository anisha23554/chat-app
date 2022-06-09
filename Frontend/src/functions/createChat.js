import axios from 'axios'

const createChat = (loggedInUser,selectedUser,chats)=>async(dispatch)=>{
    try{
       const baseURL = 'http://localhost:4000/wEchat/api'
       const res = await axios.post(`${baseURL}/chats/create`,{loggedInUser,selectedUser})
       console.log(res.data)
       if(res.data.chat){
           dispatch({
               type:'CREATE_CHAT_SUCCESS',
               payload:{
                   chats:[...chats,res.data.chat],
                   message:res.data.message
               }
           })
       }
       else{
           dispatch({
               type:'CREATE_CHAT_FAILED',
               payload:{
                   chats,
                   message:res.data.message
               }
           })
       }
    }
    catch(error){
        dispatch({
            type:'CREATE_CHAT_FAILED',
            payload:{
                chats,
                message:error.message
            }
        })
    }
}
export default createChat