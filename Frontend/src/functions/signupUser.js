import axios from 'axios'

const signupUser = async(name,email,password)=>{
   try{
      // http://localhost:4000/wEchat/api/auth/signup
      const baseURL = `http://localhost:4000`
      const userCreds = {name,email,password}
      const res = await axios.post(`${baseURL}/wEchat/api/auth/signup`,userCreds)
      return {response:res.data} // data={status,user,message} or {status,message}
    }
   catch(error){
      console.log(error.message)
      return {response:null,message:error.message}
   }
}
export default signupUser