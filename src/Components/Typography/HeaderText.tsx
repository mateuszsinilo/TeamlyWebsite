import { Text } from '@chakra-ui/react'
import React from 'react'

export const HeaderText = ({children}:any) => {
  return (
    <Text
    fontFamily='Galano Classic'
    fontSize='48px'
    fontWeight='700'
    color='#000000'
    >
        {children}
    </Text>
  )
}

export default HeaderText