import React from "react";
import { Box, Button, Flex, Image, Input, Link, Text } from "@chakra-ui/react";

import ChatSvg from "../Icons/ChatSvg.svg";
const SignUp = () => {
  return (
    <Box
      display="flex"
      w="full"
      h="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        w="880px"
        h="auto"
        borderRadius="30px"
        boxShadow="2xl"
        py="50px"
        display="flex"
        flexDirection="row"
      >
        <Box w="440px" p={10}>
          <Box textAlign="center">
            <Text
              fontSize="3xl"
              fontWeight="900"
              fontFamily="cursive"
              mb={7}
              color="#6B62FF"
            >
              Chat App
            </Text>
          </Box>
          <Box mt={3}>
            <Text fontSize="25px" fontFamily="monospace">
              Welcome Back
            </Text>
            <Box mt={3}>
              <Input
                w="full"
                h="40px"
                variant="flushed"
                type="text"
                placeholder="UserName"
                borderColor="#CCCCCC"
                focusBorderColor="blackAlpha.900"
              ></Input>
            </Box>
            <Box mt={3}>
              {" "}
              <Input
                w="full"
                h="40px"
                variant="flushed"
                type="email"
                placeholder="Email"
                borderColor="#CCCCCC"
                focusBorderColor="blackAlpha.900"
              ></Input>
            </Box>
            <Box mt={3}>
              <Input
                w="full"
                h="40px"
                variant="flushed"
                type="password"
                placeholder="Password"
                borderColor="#CCCCCC"
                focusBorderColor="blackAlpha.900"
              ></Input>
            </Box>
            <Box mt={5} display="flex">
              <Text fontSize="16px" fontFamily="monospace">
                Upload Avatar
              </Text>
              {/* <Box></Box> */}
              <Input
                // border="1px"
                type="file"
                accept="image/*"
                position="absolute"
                ml={36}
                w="20px"
                aria-hidden="true"
                opacity="0"
              ></Input>
              <Image
                w="30px"
                h="30px"
                ml={5}
                src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_960_720.png"
              ></Image>
            </Box>

            <Box mt={7}>
              <Button
                w="full"
                backgroundColor="#6B62FF"
                color="white"
                borderRadius={10}
                _hover={{ bg: "#6B62FF" }}
              >
                Submit
              </Button>
            </Box>
            <Flex mt={3}>
              <Text color="black" mr={2}>
                Alredy Have Account
              </Text>
              <Link fontStyle="italic" color="#6B62FF">
                Login
              </Link>
            </Flex>
          </Box>
        </Box>
        <Box p={5} w="440px">
          <Image src={ChatSvg} mt="80px"></Image>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
