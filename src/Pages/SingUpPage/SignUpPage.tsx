import { Flex, Image, Text, Input, Link } from "@chakra-ui/react";
import React from "react";
import SignUpButton from "../../Components/Buttons/SignupButton";
import SectionText from "../../Components/Typography/SectionText";
import TextSub from "../../Components/Typography/TextSub";

export const SignUpPage = () => {
  return (
    <Flex justifyContent="space-between" p="0px 250px 0px 0px">
      <Flex direction="column" gridGap="40px" justifyContent="center">
        <Image src="./assets/images/signup-background.webp" w="600px" />
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          gridGap="10px"
        >
          <SectionText>Find the job made for you.</SectionText>
          <Text>
            Browse over 130K jobs at top companies and fast-growing startups.
          </Text>
        </Flex>
        <Flex justifyContent='flex-start'>
            <Image src='./assets/images/corner-signup.webp' w='250px'/>
        </Flex>
      </Flex>

      <Flex paddingTop='35px' flexDirection='column' gridGap='20px'>
      <Link href='/'><Image src="./assets/images/logos-short.png" w="35px" h="35px" /></Link>
        <SectionText>Create Account</SectionText>
        <Text fontSize='20px'>Find your next opportunity!</Text>
        <Input
          placeholder="Login with the Google!"
          variant="unstyled"
          border="1px solid #000000"
          p="8px 0px 8px 16px"
          _focus={{ outline: "none" }}
        />
          <Flex justifyContent="center">
          <Text fontSize="12px" color="#9194a0">
          or Sign up with Email
          </Text>
        </Flex>
        <Flex justifyContent="center" flexDirection='column'>
          <Text fontSize='16px' fontWeight='bold'>Full Name</Text>
        <Input
          placeholder="Enter text"
          variant="unstyled"
          border="1px solid #000000"
          p="8px 0px 8px 16px"
          _focus={{ outline: "none" }}
        />
        </Flex>
        <Flex justifyContent="center" flexDirection='column'>
          <Text fontSize='16px' fontWeight='bold'>Email</Text>
        <Input
          placeholder="mail@website.com"
          variant="unstyled"
          border="1px solid #000000"
          p="8px 0px 8px 16px"
          _focus={{ outline: "none" }}
        />
        </Flex>
        <Flex justifyContent="center" flexDirection='column'>
          <Text fontSize='16px' fontWeight='bold'>Password</Text>
        <Input
          placeholder="minimum 8 characters"
          variant="unstyled"
          border="1px solid #000000"
          p="8px 0px 8px 16px"
          _focus={{ outline: "none" }}
        />
        </Flex>
        <SignUpButton>Sign Up</SignUpButton>
        <Flex justifyContent="center" flexDirection='column' alignItems='center' >
          <Text fontSize='12px'>By continuing you accept our standard terms and conditions</Text>
          <Text fontSize='12px'>and our privacy</Text>
          <Text p='15px'fontSize='16px'>Already have an account?<Link href="/login"> Login </Link></Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignUpPage;
