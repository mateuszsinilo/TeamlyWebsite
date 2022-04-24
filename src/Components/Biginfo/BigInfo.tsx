import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const BigInfo = () => {
  return (
    <Flex justifyContent='space-between' alignItems='center' padding='20px 80px 60px 80px'>
        <Flex flexDir='column' alignItems='center' fontFamily='Galano Classic' fontSize='38px' fontWeight='bold' color='#54CC9E'>
            <Text fontSize='38px'>130K +</Text>
            <Text fontSize='22px'>Jobs</Text>
        </Flex>
        <Flex flexDir='column' alignItems='center' fontFamily='Galano Classic' fontWeight='bold' color='#f0591c'>
            <Text fontSize='38px'>6000000 +</Text>
            <Text fontSize='22px'>Matches Made</Text>
        </Flex>
        <Flex flexDir='column' alignItems='center' fontFamily='Galano Classic' fontWeight='bold' color='#0c7134'>
            <Text fontSize='38px'>8M +</Text>
            <Text fontSize='22px'>Startup-ready candidates</Text>
        </Flex>
        
    </Flex>
  )
}

export default BigInfo