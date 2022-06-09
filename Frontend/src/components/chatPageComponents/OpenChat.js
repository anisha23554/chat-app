import { Heading ,
         Box,
         Flex,
         Avatar,
         MenuButton,
         Menu,
         MenuList,
         MenuItem,
         IconButton,
         Modal,
         useDisclosure,
         ModalContent,
         ModalBody,
         ModalCloseButton,
         Input,
         Button,
         toast
} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import UserProfile from '../user/UserProfile'
import { useState } from "react";
import getUser from "../../functions/getUser";
import sendNewMessage from "../../functions/sendNewMessage"
import { useEffect } from "react";
import DisplayMessage from "./DisplayMessage";
import axios from "axios";
import {io} from 'socket.io-client'
import { useToast } from "@chakra-ui/react";

const OpenChat = (props) => {
    // props={chat:{}}
    const {auth,chat} = useSelector(state=>state)
    const loggedInUser = auth.user
    const dispatch = useDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = useState('md')
    const [messages,setMessages] = useState([])

    const [messageContent,setMessageContent] = useState('')
    const handleSizeClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }
    const loadMessages = async()=>{
    try{
      const res = await axios.get(`http://localhost:4000/wEchat/api/message/all/${props.chat._id}`)
      setMessages(res.data.messages)
    }
    catch(error){
     console.log(error.message)
     }
    }  
    var socket;  
    useEffect(()=>{
       loadMessages()
       socket = io("http://localhost:4000")
       socket.emit('user-joined',chat.selectedChat._id)
       },[])
    const sendMessage = async()=>{
       const senderId = loggedInUser._id
       const chatId = chat.selectedChat._id
       const today = new Date()
       const date = today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear()
       const time = today.getHours()+":"+today.getMinutes();
       const message = await sendNewMessage(senderId,chatId,date,time,messageContent)
       await setMessages([...messages,message])
       socket.emit('send-message',{message:message.content,chatId:chat.selectedChat._id})
       socket.on('recieve-message',message=>{
       })
      }
    const closeChat = ()=>{
        dispatch({
            type:'CLOSE_CHAT',
            payload:{...chat,chatOpen:false,selectedChat:null}
        })
    }
    return (
       <Flex className="chatContainer" bg={'white'} flexDirection={'column'} h={'100%'} justifyContent={'space-between'}>
       <Flex justifyContent={'space-between'} borderRadius={'10px'} bg={'green.400'}>
         <Flex ml={4} alignItems={'center'} w={'14%'} justifyContent={'space-evenly'} >
           <Heading ml={3} color={'white'}  fontSize={'1.4rem'}>{getUser(props.chat.users,auth.user._id).name}</Heading>
         </Flex>
         <Flex alignItems={'center'}>
         <Button onClick={closeChat} bg={'white'} h={7} p={4} borderRadius={100}>close chat</Button>
         <Menu>
         <MenuButton
          m={3}
          fontSize={'1.2rem'}
          as={IconButton}
          icon={<HamburgerIcon />}
          variant=''
          _hover={{color:'black',bg:'whitesmoke'}}
         />
         <MenuList>
             <MenuItem color="black" 
             onClick={()=>handleSizeClick('xs')}
             key={size}>
               view profile
             </MenuItem>
             <Modal onClose={onClose} size={size} isOpen={isOpen}>
              <ModalContent bg={'whitesmoke'}>
                <ModalCloseButton _hover={{bg:'red.500',color:'white'}}/>
               <ModalBody>
                 <UserProfile user={getUser(props.chat.users,auth.user._id)} isModal={true}/>
               </ModalBody>
               </ModalContent>
             </Modal>
             <MenuItem onClick={closeChat}>
               close chat
             </MenuItem>
         </MenuList>
       </Menu>
       </Flex>
        </Flex>
        <Flex flexDirection={'column'} overflowY={'scroll'} overflowX={'hidden'}>
          {messages.length!=0?messages.map(message=><DisplayMessage message={message} />):''}
        </Flex>
        <Flex alignItems={'center'}>
         <Input value={messageContent} onChange={(e)=>{setMessageContent(e.target.value)}} borderRadius={50} type='text' bg={'gray.200'} w={'90%'} m={4}/>
         <Button m={2}
          onClick={sendMessage} 
          bg={'blue'} color={'white'}
         _hover={{'bg':'blue.100', color:'blue'}}
         borderRadius={'100px'}>send</Button>
        </Flex>
       </Flex>
        
      );
}
 
export default OpenChat;