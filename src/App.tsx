import * as React from "react"
import {
  ChakraProvider,
  Text,
} from "@chakra-ui/react"
import Navbar from "./Components/Navbar/Navbar"
import Header from "./Components/Header/Header"
import Newsletter from "./Components/Newsletter/Newsletter"
import UnderNewsletter from "./Components/underNewsletter/underNewsletter"
import BigInfo from "./Components/Biginfo/BigInfo"
import Slider from "./Components/Slider/Slider"
import TalentComponent from "./Components/Talent/TalentComponent"
import NeedTalentComponent from "./Components/NeedTalentComponent/NeedTalentComponent"
import IntroducingTalent from "./Components/IntroducingTalent/IntroducingTalent"
import Opinions from "./Components/Opinions/opinions"
import Advantages from "./Components/Advantages/Advantages"
import Blog from "./Components/Blog/Blog"

export const App = () => (
  <ChakraProvider>
    <Navbar/>
    <Header/>
    <Newsletter/>
    <UnderNewsletter />
    <BigInfo/>
    <Slider/>
    <TalentComponent />
    <NeedTalentComponent />
    <IntroducingTalent/>
    <Opinions />
    <Advantages/>
    <Blog />
  </ChakraProvider>
)
