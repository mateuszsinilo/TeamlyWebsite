import { Text } from '@chakra-ui/react'
import React from 'react'

export const SmallerSection = ({children}:any) => {
  return (
    <Text
    fontFamily='Galano Classic'
    fontWeight='700'
    fontSize='14px'
    lineHeight='17px'
    >{children}
    </Text>
  )
}

export default SmallerSection