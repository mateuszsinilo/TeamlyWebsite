import React from "react";
import {
  Flex,
  Text,
  Image,
  Input,
  Link,
  Center,
  Divider,
} from "@chakra-ui/react";
import SectionText from "../../Components/Typography/SectionText";
import MenuText from "../../Components/Typography/MenuText";
import SignUpButton from "../../Components/Buttons/SignupButton";
import TextSub from "../../Components/Typography/TextSub";

export const LoginPage = () => {
  return (
    <Flex
      justifyContent="space-between"
      p="0px 0px 0px 195px"
      alignItems="center"
      backgroundColor="#ffffff"
    >
      <Flex flexDirection="column" gridGap="20px">
        <Link href='/'><Image src="./assets/images/logos-short.png" w="35px" h="35px" /></Link>
        <SectionText>Login</SectionText>
        <Text>Find a job made for you!</Text>
        <Input
          placeholder="Login with the Google!"
          variant="unstyled"
          border="1px solid #000000"
          p="8px 0px 8px 16px"
          _focus={{ outline: "none" }}
        />
        <Flex justifyContent="center">
          <Text fontSize="12px" color="#9194a0">
          or Login with Email
          </Text>
        </Flex>
        <Input
          placeholder="Email"
          variant="unstyled"
          border="1px solid #000000"
          p="8px 0px 8px 16px"
          _focus={{ outline: "none" }}
        />
        <Input
          placeholder="Password"
          variant="unstyled"
          border="1px solid #000000"
          p="8px 0px 8px 16px"
          _focus={{ outline: "none" }}
        />
        <Text>Forgot password?</Text>
        <SignUpButton>Log In</SignUpButton>
        <Text>
          Not registered? <Link href="/prawo">Create an Account</Link>
        </Text>
        <Text>
          Looking for AngelList Venture?{" "}
          <Link href="/"> Visit Teamly.com </Link>
        </Text>
      </Flex>
      <Flex flexDirection="column" gridGap="20px" justifyContent="center">
        <Image src="./assets/images/loginbackground.webp" w="720px" />
        <Flex flexDirection="column" gridGap="10px" justifyContent="center" alignItems='center'>
        <SectionText>Find the job made for you.</SectionText>
        <Text>
          Browse over 130K jobs at top companies and fast-growing startups.
        </Text>
        </Flex>
        <Flex justifyContent="flex-end">
          <Image src="./assets/images/corner-image.webp" w="150px" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
