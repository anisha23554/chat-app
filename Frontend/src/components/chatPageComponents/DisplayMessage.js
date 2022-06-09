import { useSelector } from "react-redux";
import { Flex, Text } from "@chakra-ui/react";
const DisplayMessage = (props) => {
    // props = {message:{chat:{},sender:{},content,date,time}}
    const {auth} = useSelector(state=>state)
    const loggedInUser = auth.user._id
    return (  
   <>
       {
        props.message.sender._id === loggedInUser?
         <Flex bg={'green.100'} borderRadius={5} p={1.5} 
         m={4} flexDirection={'column'} width={'20%'} alignSelf={'flex-end'}>
           <Text alignSelf={'flex-start'} boxSizing={'border-box'}>
             {props.message.content}
           </Text>
         </Flex>
        :<Flex bg={'whitesmoke'} flexDirection={'column'} borderRadius={5} p={2}  m={4} width={'20%'} alignSelf={'flex-start'}>
           <Text alignSelf={'flex-start'}>{props.message.content}</Text>
         </Flex>
       }
   </>
    )
}
 
export default DisplayMessage;