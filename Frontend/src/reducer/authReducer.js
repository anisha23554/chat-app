const initialState = {
    token:null,
    user:null,
    message:null,
    attemptToLogin:false
}
const authReducer = (state=initialState,action)=>{
    const {type,payload} = action  
    switch(type){
      case 'LOGIN_SUCCESS':
          return payload
      case 'LOGIN_FAILED':
          return payload
      case 'SEARCH_USER':
          const {search,searchMessage,searchResult} = payload
          return {...state,search,searchMessage,searchResult}
      case 'SET_SEARCH_TO_FALSE':
          return payload
      default:
          return state
    }    
}
export default authReducer