import { Heading, VStack, Text, Box, Wrap, WrapItem, Badge, Button, Collapse } from "@chakra-ui/react";
import React, { useState } from "react";
import "./LandingSection.css";
import { motion } from "framer-motion";

const CardExperience = ({ title, description, languages }) => {
  const [showLang, setShowLang] = useState(false);

  return (
    <motion.div whileHover={{ translateY: -6 }} style={{ width: "100%" }}>
      <VStack
        bg="rgba(255,255,255,0.03)"
        borderRadius="lg"
        boxShadow="0 8px 24px rgba(2,6,23,0.6)"
        p={5}
        align="start"
        spacing={4}
        width="100%"
        style={{ backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.04)" }}
      >
        <Heading color="white" size="md">
          {title}
        </Heading>
        <Text color="gray.200">{description}</Text>

        <Button size="sm" variant="ghost" colorScheme="teal" onClick={() => setShowLang((s) => !s)}>
          {showLang ? "Hide skills" : "Show skills"}
        </Button>

        <Collapse in={showLang} animateOpacity>
          <Box mt={2}>
            <Wrap>
              {languages.map((language, index) => (
                <WrapItem key={index}>
                  <Badge
                    px={4}
                    py={1}
                    borderRadius="md"
                    fontSize="sm"
                    style={{ background: "rgba(255,255,255,0.03)", color: "#9AE6B4", border: "1px solid rgba(255,255,255,0.04)" }}
                  >
                    {language}
                  </Badge>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        </Collapse>
      </VStack>
    </motion.div>
  );
};

export default CardExperience;
