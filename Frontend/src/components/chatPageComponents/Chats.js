import { Box,Flex,Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import DisplayChat from "./DisplayChat";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import loadChats from "../../functions/loadChats";

const Chats = () => {
    const {chat,auth} = useSelector(state=>state)
    const dispatch = useDispatch()
    const fetchUserChats = ()=>{
        dispatch(loadChats(auth.user._id))
    }
    useEffect(()=>{
       fetchUserChats()
    },[])

    return ( <>
      <Box bg={'white'}
       width={{base:'100%',md:'35%'}} ml={{base:0,sm:0,md:10}} 
       borderRadius={'5px'} mr={{base:0,sm:0,md:10}}
       h={'85vh'}
       boxShadow={'0.5px 0.5px'}>
       <Heading p={4} fontSize={25}>
          Chats
       </Heading>
       <Flex flexDirection={'column'} overflowY={'scroll'} overflowX={'hidden'}>
          {chat.chats.map(chat=><DisplayChat chat={chat}/>)}
       </Flex>
      </Box>
    </> );
}
 
export default Chats;