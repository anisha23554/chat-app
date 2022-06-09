import React from "react";
import {Routes,Route} from 'react-router'
import Home from "./components/Home";
import ChatPage from "./components/ChatPage";
import UserProfile from "./components/user/UserProfile";
import { useSelector } from "react-redux";

const App = () => {
  const {auth} = useSelector(state=>state)
  const loggedInUser = auth.user
  return ( 
    <>
       <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/chats' element={<ChatPage/>}></Route>
         <Route path='/userProfile' element={<UserProfile user={loggedInUser} isModal={false}/>}></Route>
       </Routes>
    </>
   );
}
 
export default App;