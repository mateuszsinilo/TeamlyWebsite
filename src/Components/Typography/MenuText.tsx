import { Text } from '@chakra-ui/react'
import React, { FC } from 'react'

export const ButtonText = ({children}:any) => {
  return (
    <Text
    fontFamily='Sora'
    fontSize='16px'
    fontWeight='regular'
    _hover={{ fontWeight: 'semibold', color: '#54CC9E', transition: 'all 300ms ease', borderBottom: '2px'}}
    cursor='pointer'
    >
        {children}
    </Text>
  )
}

export default ButtonText