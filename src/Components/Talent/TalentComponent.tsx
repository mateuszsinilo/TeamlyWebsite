import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import LoginButton from '../Buttons/LoginButton'
import SignUpButton from '../Buttons/SignupButton'
import SectionText from '../Typography/SectionText'
import SmallerSection from '../Typography/smallerSection'

export const TalentComponent = () => {
  return (
    <Flex
    gridGap='80px'
    padding='120px 120px 0px 120px'
    justifyContent='space-between'>
        <Image src='./assets/images/sectionimage.png' w='600' h='600'/>
        <Flex flexDirection='column' gridGap='30px'>
            <SmallerSection>GOT TALENT?</SmallerSection>
            <SectionText>Why job seekers love us?</SectionText>
            <Flex flexDirection='column' gridGap='30px'>
            <Flex justifyContent='space-between' gridGap='10px'>
                <Image src='./assets/icons/star.svg'/>
                <Text>Unique jobs at startups and tech companies you can't find anywhere else</Text>
            </Flex>
            <Flex justifyContent='space-between' gridGap='10px'>
                <Image src='./assets/icons/mouse.svg'/>
                <Text>Say goodbye to cover letters - your profile is all you need. One click to apply and you're done.</Text>
            </Flex>
            <Flex justifyContent='space-between' gridGap='10px'>
                <Image src='./assets/icons/newspaper.svg'/>
                <Text>Everything you need to know to job search - including seeing salary and stock options upfront when looking</Text>
            </Flex>
            <Flex justifyContent='space-between' gridGap='10px'>
                <Image src='./assets/icons/arrows.svg'/>
                <Text>Connect directly with founders at top startups - no third party recruiters allowed</Text>
            </Flex>
            </Flex>
      
            <Flex gridGap='20px'>
                <LoginButton>Learn more</LoginButton>
                <SignUpButton>Sign Up Now</SignUpButton>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default TalentComponent