import Header from "./chatPageComponents/Header";
import Chats from "./chatPageComponents/Chats";
import ChatArea from "./chatPageComponents/ChatArea";
import { Flex,Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const ChatPage = () => {
    return ( 
        <Box className="Background">
          <Header />
          <Flex>
            <Chats/>
            <ChatArea />
          </Flex>
        </Box>
     );
}
 
export default ChatPage;