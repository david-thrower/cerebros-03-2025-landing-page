import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Checkbox,
  Stack,
  Button,
  useToast,
} from "@chakra-ui/react";
interface FormData {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  useCase: string;
  partnerships: {
    earlyAdopter: boolean;
    techPartner: boolean;
    cofounder: boolean;
    investor: boolean;
  };
}
export const SignUp = () => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    useCase: "",
    partnerships: {
      earlyAdopter: false,
      techPartner: false,
      cofounder: false,
      investor: false,
    },
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleCheckboxChange = (checkboxName: string) => {
    setFormData((prev) => ({
      ...prev,
      partnerships: {
        ...prev.partnerships,
        [checkboxName]:
          !prev.partnerships[checkboxName as keyof typeof prev.partnerships],
      },
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        "api/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );
      if (!response.ok) {
        throw new Error("Submission failed");
      }
      toast({
        title: "Success!",
        description: "Your application has been submitted successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        linkedin: "",
        useCase: "",
        partnerships: {
          earlyAdopter: false,
          techPartner: false,
          cofounder: false,
          investor: false,
        },
      });
    } catch (error) {
      toast({
        title: "Error",
        description:
          "There was an error submitting your application. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Box py={20} bg="white" width="100%" id="sign-up">
      <Container maxW="2xl">
        <VStack spacing={8} align="stretch">
          <Heading
            textAlign="center"
            size="xl"
            bgGradient="linear(to-r, #16CEEB, #D04C90)"
            bgClip="text"
          >
            Be part of the future of AI
          </Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={6}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  borderColor="gray.300"
                  _hover={{
                    borderColor: "#16CEEB",
                  }}
                  _focus={{
                    borderColor: "#D04C90",
                    boxShadow: "none",
                  }}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  borderColor="gray.300"
                  _hover={{
                    borderColor: "#16CEEB",
                  }}
                  _focus={{
                    borderColor: "#D04C90",
                    boxShadow: "none",
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Phone</FormLabel>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your phone number"
                  borderColor="gray.300"
                  _hover={{
                    borderColor: "#16CEEB",
                  }}
                  _focus={{
                    borderColor: "#D04C90",
                    boxShadow: "none",
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>LinkedIn</FormLabel>
                <Input
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  placeholder="Your LinkedIn profile URL"
                  borderColor="gray.300"
                  _hover={{
                    borderColor: "#16CEEB",
                  }}
                  _focus={{
                    borderColor: "#D04C90",
                    boxShadow: "none",
                  }}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Use Case</FormLabel>
                <Textarea
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleInputChange}
                  placeholder="Describe your use case"
                  borderColor="gray.300"
                  _hover={{
                    borderColor: "#16CEEB",
                  }}
                  _focus={{
                    borderColor: "#D04C90",
                    boxShadow: "none",
                  }}
                  rows={4}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Partnership Interests</FormLabel>
                <Stack spacing={3} pl={2}>
                  <Checkbox
                    colorScheme="pink"
                    isChecked={formData.partnerships.earlyAdopter}
                    onChange={() => handleCheckboxChange("earlyAdopter")}
                  >
                    Early adopter
                  </Checkbox>
                  <Checkbox
                    colorScheme="pink"
                    isChecked={formData.partnerships.techPartner}
                    onChange={() => handleCheckboxChange("techPartner")}
                  >
                    Tech partner
                  </Checkbox>
                  <Checkbox
                    colorScheme="pink"
                    isChecked={formData.partnerships.cofounder}
                    onChange={() => handleCheckboxChange("cofounder")}
                  >
                    Cofounder
                  </Checkbox>
                  <Checkbox
                    colorScheme="pink"
                    isChecked={formData.partnerships.investor}
                    onChange={() => handleCheckboxChange("investor")}
                  >
                    Investor
                  </Checkbox>
                </Stack>
              </FormControl>
              <Button
                type="submit"
                bg="#D04C90"
                color="white"
                size="lg"
                width="full"
                _hover={{
                  bg: "#bb4481",
                }}
                mt={4}
                isLoading={isLoading}
                loadingText="Submitting"
              >
                Submit
              </Button>
            </VStack>
          </form>
        </VStack>
      </Container>
    </Box>
  );
};
