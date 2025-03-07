import React from "react";
import { Box, Container, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { Bot, Clock, DollarSign, Shield, Pencil, Cpu } from "lucide-react";
const FeatureCard = ({
  icon: Icon,
  title,
  description
}: any) => <VStack spacing={4} p={6} bg="white" rounded="lg" shadow="md" align="start">
    <Box color="#16CEEB">
      <Icon size={32} />
    </Box>
    <Heading size="md">{title}</Heading>
    <Text color="gray.600">{description}</Text>
  </VStack>;
export const Features = () => {
  return <Box py={20} id="features" width="100%">
      <Container maxW="6xl">
        <VStack spacing={12}>
          <Heading textAlign="center" size="xl" bgGradient="linear(to-r, #16CEEB, #D04C90)" bgClip="text">
            Why Choose Cerebros?
          </Heading>
          <Grid templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)"
        }} gap={8}>
            <FeatureCard icon={Clock} title="Rapid Development" description="Deploy custom AI solutions in hours instead of months with our automated SDLC platform." />
            <FeatureCard icon={DollarSign} title="Cost Effective" description="Customize a [not so] large language model at the foundation model level for as little as $75." />
            <FeatureCard icon={Bot} title="Custom AI Assistants and Agents" description="Others adapt generalist AI models to passively fit your task. We customize AI assistants at the foundation model level so it actively fits your specific business needs and industry." />
            <FeatureCard icon={Pencil} title="Brand Voice" description="Your assistant that writes how your organization writes." />
            <FeatureCard icon={Shield} title="Enterprise Security" description="Defense-grade security with TLS service mesh, mTLS, and secure Kubernetes." />
            <FeatureCard icon={Cpu} title="Neuromorphic AI" description="Software-level Neuromorphic language model for efficient training, fast inference (writing), and low cost." />
          </Grid>
        </VStack>
      </Container>
    </Box>;
};