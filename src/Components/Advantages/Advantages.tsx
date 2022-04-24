import { Flex, Image, Text, } from '@chakra-ui/react'
import React from 'react'
import SignUpButton from '../Buttons/SignupButton'
import SectionText from '../Typography/SectionText'
import SmallerSection from '../Typography/smallerSection'

export const Advantages = () => {
  return (
    <Flex
    justifyContent='space-between'
    padding='120px 120px 40px 120px'
    gridGap='40px'>
        <Flex justifyContent='space-between' gridGap='40px'>
            <Flex bgColor='#ffede5'>
            <Image src='./assets/images/pastel.png'/>
            </Flex>
            <Flex flexDirection='column'  gridGap='20px'>
                <SmallerSection>GET FEATURED</SmallerSection>
                <SectionText>Let us show you off</SectionText>
                <Text>Apply to be featured and we'll highlight your profile to top recruiters and companies searching for your specific skills.</Text>
                <Text>Oh, it's also 100% free.</Text>
                <SignUpButton>learn more</SignUpButton>
            </Flex>
        </Flex>
        <Flex justifyContent='space-between' gridGap='40px'>
            <Flex bgColor='#eaebff'>
            <Image src='./assets/images/calculator.png'/>
            </Flex>
            <Flex flexDirection='column'  gridGap='20px'>
                <SmallerSection>SALARY CALCULATOR</SmallerSection>
                <SectionText>Know your worth</SectionText>
                <Text>We have the data. Research by job title, industry, and company size to find your salary range and be prepared to nail your negotiations.</Text>
                <SignUpButton>Calculate your salary</SignUpButton>
            </Flex>
        </Flex>
      

    </Flex>
  )
}

export default Advantages