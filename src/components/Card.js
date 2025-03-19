import { Heading, VStack, Text, Box, Wrap, WrapItem, Badge } from "@chakra-ui/react";
import React from "react";

const Card = ({ title, description, languages }) => {
  return (
    <VStack 
      bg="white" 
      borderRadius="lg" 
      boxShadow="lg" 
      p={5} 
      align="start" 
      spacing={4} 
      width="100%"
    >
      <Heading color="black" size="md">{title}</Heading>
      <Text color="gray.600">{description}</Text>

      <Wrap>
        {languages.map((language, index) => (
          <WrapItem key={index}>
            <Badge colorScheme="teal" px={4} py={1} borderRadius="md" fontSize="sm">
              {language}
            </Badge>
          </WrapItem>
        ))}
      </Wrap>
    </VStack>
  );
};

export default Card;
