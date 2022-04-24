import React from 'react'
import { Flex, Image, Text, AspectRatio } from '@chakra-ui/react'
import LoginButton from '../Buttons/LoginButton'
import SignUpButton from '../Buttons/SignupButton'
import SectionText from '../Typography/SectionText'
import SmallerSection from '../Typography/smallerSection'

export const IntroducingTalent = () => {
  return (
    <Flex
    justifyContent='space-between'
    gridGap='80px'
    padding='100px 120px 40px 120px'
    >
   <AspectRatio width='775px'>
  <iframe
    title='investing'
    src="https://www.youtube.com/embed/3Fx5Q8xGU8k">
      </iframe>
</AspectRatio>

    <Flex flexDirection='column' gridGap='30px'>
            <SmallerSection>INTRODUCING:</SmallerSection>
            <SectionText>REMOTE by Teamly Talent</SectionText>
            <Flex flexDirection='column' gridGap='30px'>
            <Flex alignItems='center' gridGap='10px'>
                <Image src='./assets/icons/star.svg'/>
                <Text>Showcase & search by remote job preferences</Text>
            </Flex>
            <Flex alignItems='center' gridGap='10px'>
                <Image src='./assets/icons/mouse.svg'/>
                <Text>Use engineering & video assessments to help showcase or evaluate skills</Text>
            </Flex>
            <Flex alignItems='center' gridGap='10px'>
                <Image src='./assets/icons/newspaper.svg'/>
                <Text>Top remote engineers across the US & outside of the US will be featured directly to companies hiring for their skillset</Text>
            </Flex>
            <Flex alignItems='center' gridGap='10px'>
                <Image src='./assets/icons/arrows.svg'/>
                <Text>Coming soon: Hire & get hired from anywhere in the world - easily start contracts for non-US hires through our new partnerships with Panther, Deel, & Remote</Text>
            </Flex>
            </Flex>
      
            <Flex gridGap='20px'>
                <SignUpButton>Learn more - job seekers</SignUpButton>
                <SignUpButton>Learn more - recruiters</SignUpButton>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default IntroducingTalent