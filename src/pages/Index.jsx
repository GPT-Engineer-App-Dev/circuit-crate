import { Box, Container, VStack, Heading, Text, SimpleGrid, Image, Input, Select, Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import { useState } from "react";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    image: "https://via.placeholder.com/150",
    price: 699,
    category: "Mobile",
    brand: "Brand A",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for professionals",
    image: "https://via.placeholder.com/150",
    price: 999,
    category: "Computers",
    brand: "Brand B",
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Stylish smartwatch with health tracking",
    image: "https://via.placeholder.com/150",
    price: 199,
    category: "Wearables",
    brand: "Brand A",
  },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = sampleProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === "" || product.category === selectedCategory) &&
    (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
    product.price >= priceRange[0] &&
    product.price <= priceRange[1]
  );

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center" mt={8}>
          Welcome to Electronics Store
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Discover the latest in electronic devices
        </Text>
        <Box mt={4} width="100%">
          <Input
            placeholder="Search for products..."
            value={searchTerm}
            onChange={handleSearchChange}
            size="lg"
          />
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={8}>
          {filteredProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading as="h3" size="lg" mb={2}>
                  {product.name}
                </Heading>
                <Text mb={4}>{product.description}</Text>
                <Text fontWeight="bold" fontSize="xl">
                  ${product.price}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;