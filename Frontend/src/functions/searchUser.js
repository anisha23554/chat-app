import axios from 'axios'

const searchUser = (search)=>async(dispatch)=>{
     try{
        const baseURL = 'http://localhost:4000'
        const res = await axios.post(`${baseURL}/wEchat/api/auth/searchUser/${search}`)
        const {users,message} = res.data
        console.log(users)
        console.log(message)
        dispatch({
           type:'SEARCH_USER',
           payload:{
                   search,
                   searchMessage:message,
                   searchResult:users
                }
           })
      }
     catch(error){
         console.log(error.message)
        dispatch({
            type:'SEARCH_USER_FAILED',
            payload:{}
        })
     }
}
export default searchUser