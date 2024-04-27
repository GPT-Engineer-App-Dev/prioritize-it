import { useState } from 'react';
import { Box, Button, Input, Image, SimpleGrid, useToast } from '@chakra-ui/react';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [imageURL, setImageURL] = useState('');
  const toast = useToast();

  const handleAddImage = () => {
    if (imageURL.trim() !== '') {
      const newImages = [...images, imageURL];
      setImages(newImages);
      setImageURL('');
      toast({
        title: 'Image added.',
        description: "Your image has been added to the gallery.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={5} maxW="960px" m="auto" mt="20vh" bg="white" boxShadow="md">
      <Box display="flex" mb={4}>
        <Input
          placeholder="Enter image URL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddImage()}
        />
        <Button onClick={handleAddImage} ml={2} colorScheme="blue">Add Image</Button>
      </Box>
      <SimpleGrid columns={3} spacing={4}>
        {images.map((src, index) => (
          <Image key={index} src={src} alt={`Gallery image ${index + 1}`} boxSize="300px" />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Gallery;