import { FormControl ,FormLabel,Input, useToast} from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import loginUser from '../../functions/loginUser';
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('') 
    const dispatch = useDispatch()
    const toast = useToast()  
    const navigate = useNavigate()

    const {auth} = useSelector(state=>state)

    const handleLogin = ()=>{
       dispatch(loginUser(email,password))
    }
    useEffect(()=>{
       if(auth.token){
         toast({
           position:'top',
           title:`Hello ${auth.user.name}, welcome to wEchat!`,
           status:'info'
         })
         navigate('/chats')
       }
    },[auth.token])
    return ( <>
      <Container m={'auto auto'} marginTop={10}>
        <FormControl>
              <FormLabel fontSize={20} textAlign={'center'}>email</FormLabel>
              <Input
               onChange={(e)=>{setEmail(e.target.value)}}
               fontSize={20}
               type="email"></Input>
          </FormControl>
        <FormControl>
              <FormLabel fontSize={20} textAlign={'center'}>password</FormLabel>
              <Input 
              onChange={(e)=>{setPassword(e.target.value)}}
              type="password"
              fontSize={20}></Input>
         </FormControl>
         <Flex justifyContent={'center'}>
         <Button 
         fontSize={18} m={4} width={20}
          onClick={handleLogin}
           cursor={'pointer'}
           _hover={{bg:'blue.800',color:'white'}}
           fontFamily={'Ubuntu'}
           bg={'midnightblue'}
           color={'white'}
           _hover={{bg:'blue'}}>
               login
         </Button>
         </Flex>
         </Container>
    </> );
}
 
export default Login;