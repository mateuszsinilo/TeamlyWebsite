import React from 'react'
import Advantages from '../../Components/Advantages/Advantages'
import BigInfo from '../../Components/Biginfo/BigInfo'
import Blog from '../../Components/Blog/Blog'
import Header from '../../Components/Header/Header'
import IntroducingTalent from '../../Components/IntroducingTalent/IntroducingTalent'
import Navbar from '../../Components/Navbar/Navbar'
import NeedTalentComponent from '../../Components/NeedTalentComponent/NeedTalentComponent'
import Newsletter from '../../Components/Newsletter/Newsletter'
import Opinions from '../../Components/Opinions/opinions'
import Slider from '../../Components/Slider/Slider'
import TalentComponent from '../../Components/Talent/TalentComponent'
import UnderNewsletter from '../../Components/underNewsletter/underNewsletter'

export const HomePage = () => {
  return (
    <>
    <Navbar />
    <Header/>
    <Newsletter />
    <UnderNewsletter />
    <BigInfo />
    <Slider />
    <TalentComponent />
    <NeedTalentComponent />
    <IntroducingTalent />
    <Opinions />
    <Advantages />
    <Blog />
    </>
  )
}

export default HomePage