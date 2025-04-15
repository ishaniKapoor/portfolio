// "linear-gradient(135deg,rgb(17, 7, 57) 100%,rgb(16, 32, 54) 0%)"

import React from "react";
import { Avatar, Heading, Text, Link, Box, Container, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaBook, FaPlane, FaBriefcase, FaMountain } from "react-icons/fa";
import myPdf from "./../images/IshaniKapoorResume.pdf";
import FullScreenSection from "./FullScreenSection";

const name = "Ishani Kapoor";
const title = "Full Stack Developer";

const MotionIcon = motion(Box);

const iconVariants = {
  hover: { scale: 1.2, rotate: 5, transition: { duration: 0.3 } },
};

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    background="linear-gradient(135deg,rgb(17, 7, 57) 100%,rgb(16, 32, 54) 0%)"
    textAlign="center"
    width="100vw"
    minH="100vh"
    px={{ base: 4, md: 8, lg: 16 }}
    id="landing-section"
  >
    <Container maxW="container.md" centerContent>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }}
      >
        <Avatar 
          name="Ishani Kapoor" 
          src={require("./../images/profile-pic.jpg")} 
          size={{ base: "xl", md: "2xl" }}
          mb={4}
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Heading 
          as="h1" 
          size={{ base: "xl", md: "2xl", lg: "3xl" }} 
          color="white"
          fontFamily="serif"
          mb={2}
        >
          {name}
        </Heading>
        <Text fontSize={{ base: "lg", md: "xl" }} color="white" fontFamily="serif">
          {title}
        </Text>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.6 }}
      >
        <HStack spacing={6} mt={4} color="white">
          <Box>
            <MotionIcon whileHover="hover" variants={iconVariants}>
              <FaBook size={24} />
            </MotionIcon>
            <Text mt={2}>Reading</Text>
          </Box>

          <Box>
            <MotionIcon whileHover="hover" variants={iconVariants}>
              <FaPlane size={24} />
            </MotionIcon>
            <Text mt={2}>Traveling</Text>
          </Box>

          <Box>
            <MotionIcon whileHover="hover" variants={iconVariants}>
              <FaMountain size={24} />
            </MotionIcon>
            <Text mt={2}>Bouldering</Text>
          </Box>

          <Box>
            <MotionIcon whileHover="hover" variants={iconVariants}>
              <FaBriefcase size={24} />
            </MotionIcon>
            <Text mt={2}>Frontend Development</Text>
          </Box>
        </HStack>
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
            bg="linear-gradient(135deg,rgb(39, 123, 112) 100%,rgb(50, 124, 96) 0%)"
            px={6}
            py={3}
            borderRadius="md"
            _hover={{ bg: "linear-gradient(135deg,rgb(44, 130, 118) 100%,rgb(50, 124, 96) 0%)", textDecoration: "none" }}
          >
            📄 View My Resume
          </Link>
        </Box>
      </motion.div>
    </Container>
  </FullScreenSection>
);

export default LandingSection;
