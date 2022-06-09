import { Box,FormControl,Input,Flex,Button } from "@chakra-ui/react";
import {SearchIcon} from '@chakra-ui/icons'
import { Avatar } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Menu ,MenuButton,MenuList,MenuItem,MenuDivider} from '@chakra-ui/react'
import {Link as routerLink} from 'react-router-dom'
import { useState } from "react";
import searchUser from "../../functions/searchUser";
import { useDispatch } from "react-redux";
import DisplaySearchResult from "./DisplaySearchResult";
import { useEffect } from "react";
import { Text } from "@chakra-ui/react";

const Header = () => {
    const {auth} = useSelector(state=>state)
    const [search,setSearch] = useState('')
    const dispatch = useDispatch()
    
    const handleSearch = ()=>{
        dispatch(searchUser(search))
    }
    useEffect(()=>{
      if(auth.search){
        dispatch({
          type:'SET_SEARCH_TO_FALSE',
          payload:{
            token:auth.token,
            user:auth.user,
            message:auth.message,
            search:false
          }
        })
      }
    },[search])
    return ( <>
       <Box fontSize={20}>
           <Flex p={5} justifyContent={'space-between'}>
             <Box className="logo"
             marginLeft={{md:'20px'}}>wEchat</Box>
             <Flex w={{base:'80%',md:'39%'}} bg={'white'} borderRadius={5} h={8} >
                <FormControl>
                  <Input type="text"
                   bg={'white'} w={'95%'} h={8}
                   placeholder="Search people.."
                   fontFamily={'ubuntu'}
                   border={'none'}
                   outline={'none'}
                   border-width={'0px'}
                   onChange={(e)=>{setSearch(e.target.value)}}>
                  </Input>
                  {auth.search?
                   <Menu>
                     {
                      auth.searchResult.length==0?<DisplaySearchResult message={'no user found'} />
                      :auth.searchResult.map(user=>
                      <DisplaySearchResult searchResult={user}/>)
                     }
                   </Menu>:''}
                </FormControl>
                <SearchIcon color={'gray.400'} 
                mr={4} mt={1} 
                onClick={handleSearch}
                cursor={'pointer'}/>
             </Flex>
             <Flex w={'8%'} justifyContent={'space-evenly'} alignItems={'center'}>
             <Menu>
              <MenuButton>
               <Avatar size={'sm'}
               cursor={'pointer'}
               name={auth.user.name}
               color={'white'}
               bg={'blue'}
               >
               </Avatar>
              </MenuButton>
              <MenuList>
               <MenuItem fontSize={16} as={routerLink} to={'/userProfile'}>Profile</MenuItem>
               <MenuDivider />
               <MenuItem fontSize={16}>Logout</MenuItem>
              </MenuList>
             </Menu>
             <Text fontSize={16} color="white">{auth.user.name.charAt(0).toUpperCase()+auth.user.name.slice(1)}</Text>
             </Flex>
           </Flex>
       </Box>
    </> );
}

export default Header;