import { Flex, Text, Image } from '@chakra-ui/react'
import React from 'react'
import SectionText from '../Typography/SectionText'
import SmallerSection from '../Typography/smallerSection'

export const Opinions = () => {
  return (
    <Flex
    padding='120px 120px 0px 120px'
    flexDirection='column'
    justifyContent='center'
    alignItems='center'
    gridGap='40px'>
        
        <SmallerSection>FROM OUR USERS</SmallerSection>
        <SectionText>Dreams do come true!</SectionText>
        <Flex justifyContent='center' alignItems='top' gridGap='20px'>
            <Flex gridGap='20px'>
                <Image src='./assets/icons/quote.svg' paddingTop='-30px' position='absolute' zIndex={-9999} opacity='60%'/>
                <Text fontWeight='medium' fontFamily='Sora' padding='15px'>I got my tech job on AngelList 4 years ago and I'm still happy! Pays well, great culture, and unlimited PTO.</Text>
            </Flex>
            <Flex gridGap='20px'>
                <Image src='./assets/icons/quote.svg' paddingTop='-30px' position='absolute' zIndex={-9999} opacity='60%'/>
                <Text fontWeight='medium' fontFamily='Sora' padding='15px'>I love AngelList. I got my current job at a startup entirely through AngelList in November! It's super easy to use and I love the UI.</Text>
            </Flex>
            <Flex gridGap='20px'>
                <Image src='./assets/icons/quote.svg' paddingTop='-30px' position='absolute' zIndex={-9999} opacity='60%'/>
                <Text fontWeight='medium' fontFamily='Sora' padding='15px'>I can't imagine my day to day without this platform. Life would be a lot more difficult.</Text>
            </Flex>
            <Flex gridGap='20px'>
                <Image src='./assets/icons/quote.svg' paddingTop='-30px' position='absolute' zIndex={-9999} opacity='60%'/>
                <Text fontWeight='medium' fontFamily='Sora' padding='15px'>Half of the offers I give are sourced from AngelList Talent. It's the best product for anyone looking for startup talent.</Text>
            </Flex>
          
        
        </Flex>
    </Flex>
  )
}

export default Opinions