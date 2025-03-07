import React from "react";
import { Box } from "@chakra-ui/react";
import { TopHeader } from "./components/TopHeader";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { CustomizeAI } from "./components/CustomizeAI";
import { Pricing } from "./components/Pricing";
import { Security } from "./components/Security";
import { SignUp } from "./components/SignUp";
export function App() {
  return <Box width="100%" minHeight="100vh">
      <TopHeader />
      <Navbar />
      <Hero />
      <Features />
      <CustomizeAI />
      <Pricing />
      <Security />
      <SignUp />
    </Box>;
}