import { Box, Text, Image } from '@chakra-ui/react';

const About = () => (
  <Box p={5} maxW="480px" m="auto" mt="20vh" bg="white" boxShadow="md">
    <Text fontSize="2xl" fontWeight="bold">About the Todo App</Text>
    <Image src="/images/todo-about.png" alt="Todo App Image" boxSize="300px" m="auto" />
    <Text mt={4}>This Todo App helps you manage your daily tasks efficiently. Add tasks, mark them as complete, or delete them as needed. It's simple and easy to use!</Text>
  </Box>
);

export default About;