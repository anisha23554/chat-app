import { FormControl, FormLabel ,Input,Container,Button,Flex} from "@chakra-ui/react";
import signupUser from "../../functions/signupUser";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

const Signup = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const toast = useToast()

    const handleSignup = async()=>{
          const {response} = await signupUser(name,email,password)
          console.log(response)
          if(response===null){
            toast({
              title:response.message,
              position:'top',
              isClosable:true,
              status:'error'
            })
          }
          else if(response.user){
           toast({
            title:response.message,
            position:'top',
            isClosable:true,
            status:'success'
          })      
        }
          else{
            toast({
              title:response.message,
              position:'top',
              isClosable:true,
              status:'error',
              duration:1800
            })
        }
        setName('')
        setEmail('')
        setPassword('')
      }
    return ( 
        <>
        <Container
         m={'auto auto'} 
        marginTop={5} >
        <FormControl >
              <FormLabel fontSize={20} textAlign={'center'} mt={4}>Name</FormLabel>
              <Input bg={'white'} fontSize={20} type="text"
              border={'4px solid black'}
              value={name}
              onChange={(e)=>{
                  setName(e.target.value)
                  }}
                  ></Input>
          </FormControl>
          <FormControl mb={2} mt={2} >
              <FormLabel textAlign={'center'} fontSize={20}>Email</FormLabel>
              <Input
               value={email}
               bg={'white'} fontSize={20} type="email"
               border={'4px solid black'}
               p={2}
               onChange={(e)=>{
                setEmail(e.target.value)
                   }}
                >

            </Input>
          </FormControl>
          <FormControl mb={8}>
              <FormLabel fontSize={20} textAlign={'center'}>Password</FormLabel>
              <Input bg={'white'} fontSize={20} type="password"
              border={'4px solid black'}
              onChange={(e)=>{
                setPassword(e.target.value)
                  }}
                value={password}
                  >
            </Input>
          </FormControl>
          <Flex justifyContent={'center'}>
          <Button 
         fontSize={18} m={4} width={150}
          onClick={handleSignup}
           cursor={'pointer'}
           _hover={{bg:'blue.800',color:'white'}}>
               create account
         </Button>
        </Flex>
          </Container>
        </>
     );
}
 
export default Signup;