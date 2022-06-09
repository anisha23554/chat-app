import axios from "axios"

// create a thunk function to dispatch actions asynchronously
const loginUser = (email,password)=>async(dispatch)=>{
        try{
           const baseURL="http://localhost:4000"
           const userCreds = {email,password}
           const res = await axios.post(`${baseURL}/wEchat/api/auth/login`,userCreds)
           if(res.data.token){
              dispatch({
                  type:'LOGIN_SUCCESS',
                  payload:{
                      token:res.data.token,
                      user:res.data.user,
                      message:res.data.message,
                      search:false
                  }
              })
              console.log(res.data.message)
           }
           else{
               dispatch({
                   type:'LOGIN_FAILED',
                   payload:{
                       token:null,
                       user:null,
                       message:res.data.message
                   }
               })
               console.log(res.data.message)
           }   
        }
        catch(error){
            dispatch({
                type:'LOGIN_FAILED',
                payload:{
                    token:null,
                    user:null,
                    message:error.message
                }
            })
            console.log(error.message)
        }
}
export default loginUser
