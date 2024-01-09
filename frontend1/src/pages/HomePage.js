import { Box, Container, Text, Tab, Tabs, TabList, TabPanel, TabPanels} from "@chakra-ui/react";
import SignUp from "../components/Authentication/SignUp";
import Login from "../components/Authentication/Login";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const HomePage = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
   

    if (user) navigate("/chats");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);


  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        
      >
        <Text fontSize="4xl" fontFamily="Work sans" >
         Chat-App
        </Text>
      </Box>
      <Box
        bg={"white"}
        w="100%"
        
        p={2}
        borderRadius="lg"
        borderWidth="1px"
      >
<Tabs variant='soft-rounded' colorScheme='green'>
  <TabList mb="1em">
    <Tab width="50%">Login</Tab>
    <Tab width="50%">Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
      <SignUp/>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
    </Container>
  );
};
export default HomePage;
