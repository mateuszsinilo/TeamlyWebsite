import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider, Text } from "@chakra-ui/react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Newsletter from "./Components/Newsletter/Newsletter";
import UnderNewsletter from "./Components/underNewsletter/underNewsletter";
import BigInfo from "./Components/Biginfo/BigInfo";
import Slider from "./Components/Slider/Slider";
import TalentComponent from "./Components/Talent/TalentComponent";
import NeedTalentComponent from "./Components/NeedTalentComponent/NeedTalentComponent";
import IntroducingTalent from "./Components/IntroducingTalent/IntroducingTalent";
import Opinions from "./Components/Opinions/opinions";
import Advantages from "./Components/Advantages/Advantages";
import Blog from "./Components/Blog/Blog";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignUpPage from "./Pages/SingUpPage/SignUpPage";

export const App = () => (
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>

      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
