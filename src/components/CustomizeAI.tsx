import React from "react";
import { Box, Container, Heading, Text, VStack, Image } from "@chakra-ui/react";
export const CustomizeAI = () => {
  return <Box py={20} width="100%" bg="white">
      <Container maxW="6xl">
        <VStack spacing={12} align="stretch">
          <Heading textAlign="center" size="xl" bgGradient="linear(to-r, #16CEEB, #D04C90)" bgClip="text">
            Customize your own AI assistant
          </Heading>
          <Box>
            <Text fontSize="xl" fontWeight="medium" mb={4} color="#D04C90">
              Select the reading level:
            </Text>
            <Box borderRadius="lg" overflow="hidden" boxShadow="md">
              <Image src="/Screenshot_from_2025-02-24_01-38-48.png" alt="Reading level selection interface" width="100%" />
            </Box>
          </Box>
          <Box>
            <Text fontSize="xl" fontWeight="medium" mb={4} color="#D04C90">
              Select your custom foundation model's areas of subject matter
              expertise:
            </Text>
            <Box borderRadius="lg" overflow="hidden" boxShadow="md">
              <Image src="/Screenshot_from_2025-02-24_01-40-29.png" alt="Subject matter expertise selection interface" width="100%" />
            </Box>
          </Box>
          <Box>
            <Text fontSize="xl" fontWeight="medium" mb={4} color="#D04C90">
              Select your content moderation options:
            </Text>
            <Box borderRadius="lg" overflow="hidden" boxShadow="md">
              <Image src="/Screenshot_from_2025-02-24_01-41-28.png" alt="Content moderation options interface" width="100%" />
            </Box>
          </Box>
          <Box>
            <Text fontSize="xl" fontWeight="medium" mb={4} color="#D04C90">
              Set your project budget:
            </Text>
            <Box borderRadius="lg" overflow="hidden" boxShadow="md">
              <Image src="/Screenshot_from_2025-02-24_01-43-24.png" alt="Project budget selection interface" width="100%" />
            </Box>
          </Box>
          <Box>
            <Text fontSize="xl" fontWeight="medium" mb={4} color="#D04C90" maxW="4xl">
              Once your custom foundation model has trained, upload example
              documents, questions and answers, and prompts and work products to
              fine tune your custom model to your nuanced tasks:
            </Text>
            <Box borderRadius="lg" overflow="hidden" boxShadow="md">
              <Image src="/Screenshot_from_2025-01-16_11-02-10.png" alt="Model fine-tuning interface" width="100%" />
            </Box>
          </Box>
          <Box>
            <Text fontSize="xl" fontWeight="medium" mb={4} color="#D04C90" maxW="4xl">
              For each example you upload, select how many synthetic samples to
              generate to up-sample your fine tuning data:
            </Text>
            <Box borderRadius="lg" overflow="hidden" boxShadow="md">
              <Image src="/Screenshot_from_2025-01-16_11-03-52.png" alt="Sample up-sampling interface" width="100%" />
            </Box>
          </Box>
          <Box>
            <Text fontSize="xl" fontWeight="medium" mb={4} color="#D04C90" maxW="4xl">
              Click permute to multiply your samples further:
            </Text>
            <Box borderRadius="lg" overflow="hidden" boxShadow="md">
              <Image src="/upsample-2.png" alt="Sample permutation interface" width="100%" />
            </Box>
          </Box>
          <Box>
            <Text fontSize="xl" fontWeight="medium" mb={4} color="#D04C90" maxW="4xl">
              Review and approve your test samples, Click [fine tune], and in
              minutes, deploy your choice of a Chat Assistant or an Inference
              API Endpoint.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>;
};