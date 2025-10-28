// "linear-gradient(135deg,rgb(17, 7, 57) 100%,rgb(16, 32, 54) 0%)"

import React, { useEffect, useState } from "react";
import { Avatar, Heading, Text, Link, Box, Container, HStack, Button } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";
import "./LandingSection.css";
import { FaBook, FaPlane, FaBriefcase, FaMountain } from "react-icons/fa";
import myPdf from "./../images/IshaniKapoorResume.pdf";
import FullScreenSection from "./FullScreenSection";

const name = "Ishani Kapoor";
const roles = ["Full Stack Developer", "React Developer", "UI/UX Enthusiast"];

const MotionIcon = motion(Box);

const iconVariants = {
  hover: { scale: 1.2, rotate: 5, transition: { duration: 0.3 } },
};

const LandingSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const [displayText, setDisplayText] = useState(roles[0]);
  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayText(roles[0]);
      return;
    }

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout;

    const tick = () => {
      const current = roles[roleIndex];
      if (!deleting) {
        charIndex += 1;
        setDisplayText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timeout = setTimeout(tick, 1200);
          return;
        }
      } else {
        charIndex -= 1;
        setDisplayText(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      timeout = setTimeout(tick, deleting ? 60 : 120);
    };

    timeout = setTimeout(tick, 500);
    return () => clearTimeout(timeout);
  }, [shouldReduceMotion]);

  return (
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
        initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
      >
        <motion.div whileHover={{ rotate: -6, scale: 1.03 }} style={{ display: "inline-block" }}>
          <Avatar
            name="Ishani Kapoor"
            src={require("./../images/profile-pic.jpg")}
            size={{ base: "xl", md: "2xl" }}
            mb={4}
            boxShadow="lg"
            borderRadius="full"
            alt="Ishani Kapoor profile"
            className="landing-avatar"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <Heading
          as="h1"
          size={{ base: "xl", md: "2xl", lg: "3xl" }}
          color="white"
          fontFamily="serif"
          mb={2}
          className="name-gradient"
        >
          {name}
        </Heading>
        <Text fontSize={{ base: "lg", md: "xl" }} color="white" fontFamily="serif" className="typing-line">
          {displayText}
          <span className="typing-cursor" aria-hidden="true">|</span>
        </Text>
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.45 }}
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
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.7 }}
      >
        <Box mt={6} display="flex" gap={4} justifyContent="center">
          <Button
            as="a"
            href={myPdf}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            colorScheme="teal"
            bgGradient="linear(to-r, teal.400, teal.600)"
            _hover={{ transform: "translateY(-3px)", boxShadow: "lg" }}
          >
            📄 View Resume
          </Button>
        </Box>
      </motion.div>
    </Container>
    </FullScreenSection>
  );
};

export default LandingSection;
