import React from "react";
import { Box, Container, Heading, VStack, FormControl, FormLabel, Input, Textarea, Checkbox, Stack, Button } from "@chakra-ui/react";
export const SignUp = () => {
  return <Box py={20} bg="white" width="100%" id="sign-up">
      <Container maxW="2xl">
        <VStack spacing={8} align="stretch">
          <Heading textAlign="center" size="xl" bgGradient="linear(to-r, #16CEEB, #D04C90)" bgClip="text">
            Be part of the future of AI
          </Heading>
          <form>
            <VStack spacing={6}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Your name" borderColor="gray.300" _hover={{
                borderColor: "#16CEEB"
              }} _focus={{
                borderColor: "#D04C90",
                boxShadow: "none"
              }} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="your.email@example.com" borderColor="gray.300" _hover={{
                borderColor: "#16CEEB"
              }} _focus={{
                borderColor: "#D04C90",
                boxShadow: "none"
              }} />
              </FormControl>
              <FormControl>
                <FormLabel>Phone</FormLabel>
                <Input type="tel" placeholder="Your phone number" borderColor="gray.300" _hover={{
                borderColor: "#16CEEB"
              }} _focus={{
                borderColor: "#D04C90",
                boxShadow: "none"
              }} />
              </FormControl>
              <FormControl>
                <FormLabel>LinkedIn</FormLabel>
                <Input placeholder="Your LinkedIn profile URL" borderColor="gray.300" _hover={{
                borderColor: "#16CEEB"
              }} _focus={{
                borderColor: "#D04C90",
                boxShadow: "none"
              }} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Use Case</FormLabel>
                <Textarea placeholder="Describe your use case" borderColor="gray.300" _hover={{
                borderColor: "#16CEEB"
              }} _focus={{
                borderColor: "#D04C90",
                boxShadow: "none"
              }} rows={4} />
              </FormControl>
              <FormControl>
                <FormLabel>Partnership Interests</FormLabel>
                <Stack spacing={3} pl={2}>
                  <Checkbox colorScheme="pink">Early adopter</Checkbox>
                  <Checkbox colorScheme="pink">Tech partner</Checkbox>
                  <Checkbox colorScheme="pink">Cofounder</Checkbox>
                  <Checkbox colorScheme="pink">Investor</Checkbox>
                </Stack>
              </FormControl>
              <Button type="submit" bg="#D04C90" color="white" size="lg" width="full" _hover={{
              bg: "#bb4481"
            }} mt={4}>
                Submit
              </Button>
            </VStack>
          </form>
        </VStack>
      </Container>
    </Box>;
};