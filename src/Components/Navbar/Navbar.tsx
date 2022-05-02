import { Flex, Image, Text, Button } from "@chakra-ui/react";
import React from "react";
import LoginButton from "../Buttons/LoginButton";
import SignUpButton from "../Buttons/SignupButton";
import MenuText from "../Typography/MenuText";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="#ffffff"
      padding="30px 80px 30px 80px"
    >
      <a href="/"><Image src="./assets/images/teamly-icon.svg" /></a>
      <Flex gridGap="30px">
        <MenuText isActive>Home</MenuText>
        <MenuText>Features</MenuText>
        <MenuText>About</MenuText>
        <MenuText>Contact</MenuText>
      </Flex>
      <Flex gridGap="20px">
        <LoginButton onClick={() => navigate("/login")}>Login</LoginButton>
        <SignUpButton onClick={() => navigate("/signup")}>Sign Up</SignUpButton>
      </Flex>
    </Flex>
  );
};

export default Navbar;
