import React from "react";
import { Avatar, Heading, VStack, Text, Link, Box, Container } from "@chakra-ui/react";
import { motion } from "framer-motion"; 
import myPdf from "./../images/IshaniKapoorResume.pdf";
import FullScreenSection from "./FullScreenSection";

const name = "Ishani Kapoor";
const bio1 = "Full Stack Developer @ General Motors";
const bio2 = `I'm a developer passionate about building solutions that are accessible, simple, 
and user-friendly. My skills range from designing these solutions to implementing them.`;
const bio3 = `Currently, I'm a Full Stack Dev at GM, working on the OTA internal platform.
I contribute to the creation of UI components and dabble with backend work.`;
const bio4 = `In my spare time, I can be found reading, bouldering, hanging out with my cat Matcha,
or traveling the world.`;

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    background="linear-gradient(135deg, #1A1A1A 0%,rgb(16, 32, 54) 100%)"
    textAlign="center"
    width="100vw"
    minH="100vh"
    px={{ base: 4, md: 8, lg: 16 }} 
    id="landing-section"
  >
    <Container maxW="container.md" centerContent>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }}
      >
        <Avatar 
          name="Ishani Kapoor" 
          src={require("./../images/profile-pic.jpg")} 
          size={{ base: "xl", md: "2xl" }}
          mb={4}
          boxShadow="0px 8px 20px rgba(0, 0, 0, 0.3)"
        />
      </motion.div>

      
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Heading 
          as="h1" 
          size={{ base: "xl", md: "2xl", lg: "3xl" }} 
          color="white" 
          mb={2}
        >
          {name}
        </Heading>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.6 }}
      >
        <VStack spacing={3} maxW="800px">
          <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color="gray.300">
            {bio1}
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} color="gray.400" px={{ base: 2, md: 4 }}>
            {bio2}
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} color="gray.400" px={{ base: 2, md: 4 }}>
            {bio3}
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} color="gray.400" px={{ base: 2, md: 4 }}>
            {bio4}
          </Text>
        </VStack>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.9 }}
      >
        <Box mt={5}>
          <Link
            href={myPdf}
            isExternal
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="bold"
            color="white"
            bg="teal.500"
            px={6}
            py={3}
            borderRadius="md"
            _hover={{ bg: "teal.400", textDecoration: "none" }}
          >
            📄 View My Resume
          </Link>
        </Box>
      </motion.div>
    </Container>
  </FullScreenSection>
);

export default LandingSection;
