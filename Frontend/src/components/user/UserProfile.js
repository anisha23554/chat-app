import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack
  } from '@chakra-ui/react';

const UserProfile = (props)=> {
  // props={user:{},isModal:bool}
    return (
      <Center py={props.isModal?10:200} >
        <Box
          maxW={'320px'}
          w={'full'}
          textAlign={'center'}>
          <Avatar
            size={'lg'}
            name={props.user.name}
            color={'white'}
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={'1.5rem'} 
          fontFamily={'body'} 
          m={4}
          >
            {props.user.name.toUpperCase()}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} 
          mb={4} m={6}
          fontSize={'1.2rem'}>
            {props.user.email}
          </Text>
         <Stack
           mt={8} direction={'column'}
           spacing={20}
           >
         <Text
          textAlign={'center'}
          px={3}
          fontSize={'1.1rem'}>
          Hey There I am using wEchat !
        </Text>
            {/* <Button
              flex={1}
              p={2}
              bg={'green.400'}
              color={'white'}
              fontSize={'1.1rem'}
              rounded={10}
              _focus={{
                bg: 'gray.200',
              }}
              >
              Edit My Profile
            </Button> */}
        </Stack>
        </Box>
      </Center>
    );
  }
export default UserProfile