import { Text } from '@chakra-ui/react'
import React from 'react'

export const TextSub = ({children}:any) => {
  return (
    <Text
    fontFamily='Galano Classic'
    fontSize='28px'
    fontWeight='700'
    color='#000000'
    >
        {children}
    </Text>
  )
}

export default TextSub