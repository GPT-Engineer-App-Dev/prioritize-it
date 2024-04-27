import { useState } from 'react';
import { Box, Button, Input, List, ListItem, IconButton, Text } from '@chakra-ui/react';
import { FaPlus, FaTrash, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    if (input.trim() !== '') {
      const newTasks = [...tasks, { id: Date.now(), text: input, isCompleted: false }];
      setTasks(newTasks);
      setInput('');
    }
  };

  const handleDeleteTask = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  };

  const handleCompleteTask = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <Box p={5} maxW="480px" m="auto" mt="20vh" bg="white" boxShadow="md">
      <Text fontSize="2xl" fontWeight="bold">Todo App</Text>
      <Box mt={4} display="flex">
        <Input
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
        />
        <IconButton
          icon={<FaPlus />}
          onClick={handleAddTask}
          ml={2}
          colorScheme="blue"
          aria-label="Add task"
        />
      </Box>
      <List spacing={3} mt={4}>
        {tasks.map(task => (
          <ListItem key={task.id} display="flex" alignItems="center">
            <Text as={task.isCompleted ? 's' : 'span'} flex="1">
              {task.text}
            </Text>
            <IconButton
              icon={<FaCheck />}
              onClick={() => handleCompleteTask(task.id)}
              colorScheme="green"
              aria-label="Complete task"
              mr={2}
            />
            <IconButton
              icon={<FaTrash />}
              onClick={() => handleDeleteTask(task.id)}
              colorScheme="red"
              aria-label="Delete task"
            />
          </ListItem>
        ))}
      </List>
      <Link to="/about" style={{ marginTop: '20px', display: 'block', textAlign: 'center' }}>
        <Button colorScheme="teal">About This App</Button>
      </Link>
    </Box>
  );
};

export default Index;