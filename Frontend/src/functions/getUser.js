// for one to one chat
const getUser = (users,loggedInUser)=>{
    if(users[0]._id===loggedInUser)
    {return users[1]}
    else{
      return users[0] 
    }
}
export default getUser