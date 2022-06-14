import { Box,Heading,Text,Flex,Button} from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import getUser from "../../functions/getUser";
import { useToast } from "@chakra-ui/react";

const DisplayChat = (props) => {
    // props={chat:{chatName:'',users:[{},{}],groupChat}}
    const {auth,chat} = useSelector(state=>state)
    const loggedInUser = auth.user._id
    const dispatch = useDispatch()
    const toast = useToast()
    
    const accessChat = ()=>{
       if(chat.chatOpen){
         toast({
           status:'error',
           title:'A chat is already opened, close the previous chat first!',
           position:'top'
         })
       }
       else{
        dispatch({
           type:'OPEN_CHAT',
           payload:{ 
             chatOpen:true,
             selectedChat:props.chat
           }
        })
      }
    }
    return ( <>
       <Box m={2} p={2} d={'flex'} 
       flexDirection={'column'}
       borderRadius={5}
       bg={'whitesmoke'}
       onClick={accessChat}
       cursor={'pointer'}
       _hover={{bg:'blue.100'}}
       > 
         <Flex alignItems={'center'}>
           <Avatar name={getUser(props.chat.users,loggedInUser).name} size={'sm'}></Avatar>      
           <Heading fontSize={'1.1rem'} ml={3}>{getUser(props.chat.users,loggedInUser).name}
          </Heading>
         </Flex>
       </Box>
    </> );
}
 
export default DisplayChat;