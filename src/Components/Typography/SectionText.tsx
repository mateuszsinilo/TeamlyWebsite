import { Text } from '@chakra-ui/react'
import React from 'react'

export const SectionText = ({children}:any) => {
  return (
    <Text
    fontFamily='Galano Classic'
    fontSize='38px'
    fontWeight='700'
    color='#000000'
    >
        {children}
    </Text>
  )
}

export default SectionText