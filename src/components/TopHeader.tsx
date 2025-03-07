import React from "react";
import { Box, Container, Text, Flex } from "@chakra-ui/react";
export const TopHeader = () => {
  return <Box bg="#D04C90" color="white" py={1} position="fixed" top={0} width="100%" zIndex="1001">
      <Container maxW="7xl">
        <Flex justify="center" align="center">
          <Text fontSize="sm" fontWeight="medium">
            Cerebros NotGPT david@cerebros.one (650) 789-4375
          </Text>
        </Flex>
      </Container>
    </Box>;
};