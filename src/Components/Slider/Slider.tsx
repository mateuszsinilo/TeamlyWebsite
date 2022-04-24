import { Flex, Text, Image, Stack } from '@chakra-ui/react'
import React from 'react'

export const Slider = () => {
  return (
      <Stack borderRadius='5px' borderWidth='1px' margin='10px 80px 0px 80px'padding='30px 40px 30px 40px'> 
    <Flex
    flexDirection='column'
    justifyContent='center'
    alignItems='center'>
        <Text 
        fontFamily='Galano Classic'
        fontWeight='500'
        fontSize='32px'
        color='#777777'
        paddingBottom='10px'>Our investments</Text>
        <Text
        fontFamily='Sora'
        fontSize='16px'
        color='#777777'
        paddingBottom='10px'
        >"We wanted flying cars, instead we got 140 characters". We don't scare to invest in the best Silicon Valey tech companies!</Text>
        <Flex
        paddingTop='20px'
        alignItems='center'
        gridGap='20px'> 
            <Image src='./assets/partners/postmates.svg' />
            <Image src='./assets/partners/airtable.svg' />
            <Image src='./assets/partners/peloton.svg' />
            <Image src='./assets/partners/honey.svg' />
            <Image src='./assets/partners/nerdwallet.svg' />
            <Image src='./assets/partners/plaid.svg' />
            <Image src='./assets/partners/doordash.svg' />
        </Flex>
    </Flex>
    </Stack>
  )
}

export default Slider