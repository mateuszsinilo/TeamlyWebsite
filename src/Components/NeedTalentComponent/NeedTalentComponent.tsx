import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import LoginButton from '../Buttons/LoginButton'
import SignUpButton from '../Buttons/SignupButton'
import SectionText from '../Typography/SectionText'
import SmallerSection from '../Typography/smallerSection'

export const  NeedTalentComponent = () => {
  return (
    <Flex 
    justifyContent='space-between'
    gridGap='80px'
    padding='100px 120px 40px 120px'
    >
    <Flex flexDirection='column' gridGap='30px'>
            <SmallerSection>NEED TALENT?</SmallerSection>
            <SectionText>Why recruiters love us</SectionText>
      <Flex alignItems='center'  gridGap='10px'>
          <Image src='./assets/icons/star.svg'/>
          <Text>8 million responsive and startup-ready candidates, with all the information you need to vet them</Text>
      </Flex>
      <Flex alignItems='center'  gridGap='10px'>
          <Image src='./assets/icons/star.svg'/>
          <Text>Everything you need to kickstart your recruiting - get job posts, company branding, and HR tools set up within 10 minutes, for free</Text>
      </Flex>
      <Flex alignItems='center'  gridGap='10px'>
          <Image src='./assets/icons/star.svg'/>
          <Text>A free applicant tracking system, or free integration with any ATS you may already use</Text>
      </Flex>
      <Flex gridGap='20px' flexDirection='column'>
                <Text>Plus, we can do the vetting for you! With Curated or Curated Global, we review the world's top tech talent and highlight candidates directly to you 2x a week.</Text>
                  <Flex paddingTop='10px' gridGap='20px'> 
                    <LoginButton>Learn more</LoginButton>
                    <SignUpButton>Sign Up Now</SignUpButton>
                  </Flex>
      </Flex>
    </Flex>
      <Image src='./assets/images/elements.png' w='600' h='600'/>
      
    </Flex>
    
    
  
  )
}

export default NeedTalentComponent