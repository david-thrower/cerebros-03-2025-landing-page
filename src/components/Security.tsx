import React from "react";
import { Box, Container, Heading, Text, VStack, Link, List, ListItem, HStack } from "@chakra-ui/react";
import { Shield, Lock, FileKey } from "lucide-react";
export const Security = () => {
  return <Box py={20} bg="white" width="100%" id="security">
      <Container maxW="6xl">
        <VStack spacing={12} align="stretch">
          <Heading textAlign="center" size="xl" bgGradient="linear(to-r, #16CEEB, #D04C90)" bgClip="text">
            Security
          </Heading>
          <List spacing={8}>
            <ListItem>
              <HStack align="start" spacing={4}>
                <Box color="#16CEEB" pt={1}>
                  <Shield size={24} />
                </Box>
                <Text fontSize="lg" color="gray.700">
                  Military Grade Security
                </Text>
              </HStack>
            </ListItem>
            <ListItem>
              <HStack align="start" spacing={4}>
                <Box color="#16CEEB" pt={1}>
                  <Lock size={24} />
                </Box>
                <Text fontSize="lg" color="gray.700">
                  We never access your data or use it to train models other than
                  yours
                </Text>
              </HStack>
            </ListItem>
            <ListItem>
              <HStack align="start" spacing={4}>
                <Box color="#16CEEB" pt={1}>
                  <FileKey size={24} />
                </Box>
                <Text fontSize="lg" color="gray.700">
                  TLS / mTLS, data encrypted at rest and in transit
                </Text>
              </HStack>
            </ListItem>
          </List>
          <Box>
            <Text fontSize="lg" color="gray.700">
              Track our SOC II Progress at:{" "}
              <Link href="https://cerebros-automl-platform.trustshare.com/home" color="#16CEEB" isExternal fontWeight="medium">
                cerebros-automl-platform.trustshare.com
              </Link>
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>;
};