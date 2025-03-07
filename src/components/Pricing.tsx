import React from "react";
import { Box, Container, Heading, Text, VStack, List, ListItem } from "@chakra-ui/react";
export const Pricing = () => {
  return <Box py={20} bg="gray.50" width="100%" id="pricing">
      <Container maxW="6xl">
        <VStack spacing={12} align="stretch">
          <Heading textAlign="center" size="xl" bgGradient="linear(to-r, #16CEEB, #D04C90)" bgClip="text">
            Pricing
          </Heading>
          <List spacing={6}>
            <ListItem p={8} bg="white" borderRadius="lg" boxShadow="md">
              <Text fontSize="xl" fontWeight="bold" color="#D04C90" mb={2}>
                Base subscription
              </Text>
              <Text fontSize="lg" color="gray.700">
                Starting at{" "}
                <Text as="span" fontWeight="bold">
                  $20/mo per user
                </Text>
              </Text>
            </ListItem>
            <ListItem p={8} bg="white" borderRadius="lg" boxShadow="md">
              <Text fontSize="xl" fontWeight="bold" color="#D04C90" mb={2}>
                Train a fully customized assistant
              </Text>
              <Text fontSize="lg" color="gray.700">
                Starting at{" "}
                <Text as="span" fontWeight="bold">
                  $75
                </Text>
              </Text>
            </ListItem>
          </List>
        </VStack>
      </Container>
    </Box>;
};