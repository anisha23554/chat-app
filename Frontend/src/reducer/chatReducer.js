const initialState = {
    chats:[],
    message:null,
    chatOpen:false,
    selectedChat:null
}
const chatReducer = (state=initialState,action)=>{
    const {type,payload} = action  
    switch(type){
      case 'CREATE_CHAT_SUCCESS':
           return payload
      case 'CREATE_CHAT_FAILED':
          return payload
      case 'LOAD_CHATS':
          return payload
      case 'LOAD_CHATS_FAILED':
          return payload
      case 'OPEN_CHAT':
          const {chatOpen,selectedChat} = payload
          return {...state,chatOpen,selectedChat}
      case 'CLOSE_CHAT':
          return payload
      default:
          return state
    }    
}
export default chatReducer