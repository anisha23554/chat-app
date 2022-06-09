import Signup from "./homePageComponents/Signup";
import Login from "./homePageComponents/Login";
import { Accordion,AccordionItem,AccordionIcon,AccordionButton,AccordionPanel} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

const Home = () => {
    return ( 
        <>
          <Accordion defaultIndex={[0]} allowMultiple marginTop={200}>
  <AccordionItem >
    <h2>
      <AccordionButton >
        <Box  flex='1' textAlign='left'>
         <Heading p={2} 
          fontSize={28} 
         fontFamily={'kalam'}
          textAlign={'center'}
          fontFamily={'Ubuntu'} bg='blue.400'
          color='white'>Login</Heading> 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Login />
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        <Heading p={2} _hover={{bg:'blue.400',color:'white'}} 
        fontSize={28} fontFamily={'kalam'}
         textAlign={'center'}
         fontFamily={'Ubuntu'}
         bg='blue.400'
         color='white'
         >Signup</Heading> 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel p={4}>
     <Signup />
    </AccordionPanel>
  </AccordionItem>
</Accordion>
        </>
     );
}
 
export default Home;