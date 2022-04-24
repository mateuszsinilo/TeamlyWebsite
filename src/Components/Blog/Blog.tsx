import { Flex, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import LoginButton from '../Buttons/LoginButton'
import SignUpButton from '../Buttons/SignupButton'
import SectionText from '../Typography/SectionText'

export const Blog = () => {
  return (
    <Flex flexDirection='column'
    padding='100px 120px 40px 120px'>
        <Flex justifyContent='space-between'>
            <SectionText>From the blog</SectionText>
            <LoginButton>More posts</LoginButton>
        </Flex>
        <Grid paddingTop='60px' templateColumns='repeat(3, 2fr)' gap={6}>
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
        </Grid>
    </Flex>
  )
}

export default Blog