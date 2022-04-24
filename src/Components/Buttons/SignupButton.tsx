import { Button } from '@chakra-ui/react'
import React, { FC } from 'react'

interface Props {
    onClick?: () => void;
}

export const SignUpButton:FC<Props> = ({onClick, children}) => {
  return (
    <Button
    onClick={onClick}
    justifyContent='center'
    alignContent='cener'
    backgroundColor = '#000000'
    border='1px solid #000000'
    borderRadius='5px'
    fontFamily='Sora'
    fontSize='14px'
    color='#ffffff'
    _hover={{backgroundColor:'#54CC9E', transition: 'all 300ms ease'}}
    >{children}</Button>
  )
}

export default SignUpButton