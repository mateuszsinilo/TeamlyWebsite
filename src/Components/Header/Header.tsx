import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import LoginButton from '../Buttons/LoginButton'
import SignUpButton from '../Buttons/SignupButton'
import HeaderText from '../Typography/HeaderText'

export const Header = () => {
  return (
    <Flex 
    justifyContent='space-between'
    alignItems='center'
    backgroundColor='#ffffff'
    padding='30px 80px 30px 80px'
    >   
      <Flex flexDir='column' gridGap='20px'>
        <HeaderText>Startup jobs & startup talent you can find anywhere else!</HeaderText>
        <Text fontFamily='Sora' fontSize='20px'>Join the world's #1 startup community specialized in remote & local technical talent and opportunities </Text>
          <Flex justifyContent='flex-start' gridGap='20px' alignItems='center'>
            <SignUpButton>Find a Job</SignUpButton>
            <LoginButton>Find Talent</LoginButton>
          </Flex>
      </Flex>
        <Image src='./assets/images/faces1.png' w='1000px' h='560px'></Image>
    </Flex>
  )
}

export default Header