import React from "react";
import { Box, Button, Container, Heading, Text, VStack, List, ListItem } from "@chakra-ui/react";
export const Hero = () => {
  return <Box bg="gray.50" pt="140px" pb="80px" width="100%">
      <Container maxW="6xl">
        <VStack spacing={6} align="center" textAlign="center">
          <Heading size="2xl" bgGradient="linear(to-r, #16CEEB, #D04C90)" bgClip="text">
            Custom AI Assistants in Hours, Not Months
          </Heading>
          <List spacing={4} textAlign="left" w="100%" maxW="3xl">
            <ListItem fontSize="xl" color="gray.600">
              • Fully customize your AI assistant as a specialist at the core,
              not just adapt a generalist to a specialist.
            </ListItem>
            <ListItem fontSize="xl" color="gray.600">
              • Build enterprise-grade AI solutions at a trivial cost.
            </ListItem>
            <ListItem fontSize="xl" color="gray.600">
              • Automate your project's entire software development lifecycle
              with our no-code platform.
            </ListItem>
          </List>
          <Button as="a" href="#sign-up" size="lg" bg="#D04C90" color="white" _hover={{
          bg: "#bb4481"
        }} px={8}>
            Learn more
          </Button>
          <Text fontSize="sm" color="gray.500">
            Leave your mark on the future of AI!
          </Text>
        </VStack>
      </Container>
    </Box>;
};