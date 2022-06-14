import { Heading,Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import OpenChat from "./OpenChat";


const ChatArea = () => {
     const {chat} = useSelector(state=>state)
  
     return ( 
        <Box className="chatBackground"
        w={{base:'100%',md:'57%'}} 
        borderRadius={'10px'}
        h={'85vh'}
        boxShadow={'0.5px 0.5px'}>
            {
               chat.chatOpen?
                 <OpenChat chat={chat.selectedChat} />
              :<Heading
               textAlign={'center'} color={'gray.400'} 
               mt={200} fontSize={40}
               fontFamily={'Ubuntu'}>
                 Start Chatting..
               </Heading>
            }
         </Box>
        );
}
 
export default ChatArea;