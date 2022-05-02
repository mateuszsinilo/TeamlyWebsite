import { Button } from '@chakra-ui/react'
import React, { FC } from 'react'

interface Props {
    onClick?: () => void;

}

export const LoginButton:FC<Props> = ({onClick, children}) => {
  return (
    <Button
    onClick={onClick}
    justifyContent='center'
    alignContent='cener'
    backgroundColor = '#ffffff'
    border='1px solid #000000'
    borderRadius='5px'
    fontFamily='Sora'
    fontSize='14px'
    _hover={{backgroundColor:'#54CC9E', transition: 'all 300ms ease'}}
    _focus={{outline: 'none'}}
    >{children}</Button>
  )
}

export default LoginButton