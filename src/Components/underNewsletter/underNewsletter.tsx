import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const UnderNewsletter = () => {
  return (
    <Flex 
    justifyContent='space-between'
    padding='10px 80px 30px 80px'
    alignItems='center'
    fontFamily='Sora'fontSize='14px' fontWeight='regular' color='#777777'>
        <Text>Looking for a Teamly Venture? Visit techcrunch.com</Text>
        <Text>Alreade have an account? Log In</Text>
    </Flex>
  )
}

export default UnderNewsletter