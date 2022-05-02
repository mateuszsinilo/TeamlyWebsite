import { Flex, Input, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import LoginButton from '../Buttons/LoginButton'
import SignUpButton from '../Buttons/SignupButton'

export const Newsletter = () => {
  return (
    <Stack borderRadius='5px' borderWidth='1px' margin='10px 80px 0px 80px'padding='30px 40px 30px 40px'>
    <Flex 
    justifyContent='space-between'
    alignItems='center'
    backgroundColor='#ffffff'
    gridGap='20px'>
        <Input border='1px solid #848484' _focus={{outline: 'none'}} placeholder='Your email' />
        <Flex gridGap='20px' alignItems='center'>
            <SignUpButton>Sign Up</SignUpButton>
            <Text>or</Text>
            <LoginButton>Sign up with google</LoginButton>
        </Flex>
    </Flex>
    </Stack>
  )
}

export default Newsletter