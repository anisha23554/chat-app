import axios from 'axios'

const loadChats = (userId)=>async(dispatch)=>{
    try{
      const baseURL = 'http://localhost:4000/wEchat/api'
      const res = await axios.get(`${baseURL}/chats/all`)
      // res.data = {message,allChats}
      const {allChats} = res.data
      console.log(allChats)
      if(allChats===null){
          dispatch({
              type:'LOAD_CHATS',
              payload:{chats:[],message:res.data.message}
          })
      }
      if(allChats){
          // allChats=[{chatName,_id,users:[{},{}]},{},..] 
          const userChats = []
          allChats.forEach(chat => {
              chat.users.forEach(user=>{
                  if(user._id===userId){
                      userChats.push(chat)
                      return
                  }
              })
          })
         dispatch({
             type:'LOAD_CHATS',
             payload:{chats:userChats,message:'chats loaded'}
         })
       }
    }
    catch(error){
        dispatch({
            type:'LOAD_CHATS_FAILED',
            payload:{chats:[],message:error.message}
        })
    }
}
export default loadChats