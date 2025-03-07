import React from "react";
import { Box, Flex, Button, Link, HStack, Image } from "@chakra-ui/react";
export const Navbar = () => {
  return <Box as="nav" py={4} px={8} bg="white" borderBottom="1px solid" borderColor="gray.100" position="fixed" width="100%" zIndex="1000" top="28px">
      <Flex justify="space-between" align="center" maxW="7xl" mx="auto">
        <Flex align="center" gap={2}>
          <Image src="/Screenshot_from_2025-01-24_11-02-05.png" alt="Cerebros Logo" height="40px" />
          <Box fontSize="2xl" fontWeight="bold" color="#D04C90">
            Cerebros
          </Box>
        </Flex>
        <HStack spacing={8}>
          <Link href="#features">Features</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#security">Security</Link>
          <Button as="a" href="#sign-up" colorScheme="blue" bg="#16CEEB" _hover={{
          bg: "#14b8d2"
        }}>
            Apply for our waiting list
          </Button>
        </HStack>
      </Flex>
    </Box>;
};