import { Button, Container,Flex} from "@chakra-ui/react";
import {useDispatch} from 'react-redux'
import createChat from "../../functions/createChat";
import { useSelector } from "react-redux";

const DisplaySearchResult = (props)=>{
        const {auth,chat} = useSelector(state=>state)
        const dispatch = useDispatch()
        
        const handleCreateChat = ()=>{
            // const chatName = props.searchResult.name
            const loggedInUser = auth.user._id
            const selectedUser = props.searchResult._id
            dispatch(createChat(loggedInUser,selectedUser,chat.chats))
        }
        return (
          <>
            {
              props.searchResult?
                  <Flex bg={'white'} border={'1px solid black '} m={2} alignItems={'center'} rounded={5} h={35}>
                    <Container
                    rounded={4}
                    fontSize={'1rem'}>{props.searchResult.name}</Container>
                    <Button
                     m={4} h={23} fontSize={'0.9rem'}
                     bg={'green'} color={'whitesmoke'}
                     onClick={handleCreateChat}>create chat</Button>
                   </Flex>
               :<Container m={4} bg={'red.500'} color={'whitesmoke'} 
               rounded={5} fontSize={'1rem'}>{props.message}</Container>
            }
          </>
        )
    }
export default DisplaySearchResult;