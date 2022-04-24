import { Flex, Image, Text, Button } from '@chakra-ui/react'
import React from 'react'
import LoginButton from '../Buttons/LoginButton'
import SignUpButton from '../Buttons/SignupButton'
import MenuText from '../Typography/MenuText'

export const Navbar = () => {
  return (
    <Flex 
    justifyContent='space-between'
    alignItems='center'
    backgroundColor='#ffffff'
    padding='30px 80px 30px 80px'
    >
    <Image src='./assets/images/teamly-icon.svg' />
    <Flex gridGap='30px'> 
        <MenuText isActive>Home</MenuText>
        <MenuText>Features</MenuText>
        <MenuText>About</MenuText>
        <MenuText>Contact</MenuText>

    </Flex>
    <Flex gridGap='20px'>
        <LoginButton>Login</LoginButton>
        <SignUpButton>Sign Up</SignUpButton>
    </Flex>
    </Flex>
  )
}

export default Navbar