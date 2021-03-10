import React from "react";
import { Box, Image, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ProductObj } from "../types";

//PAGE WHERE WE DISPLAY ALL THE PRODUCTS ON THE CATALOGUE
type Props = {
  product: ProductObj;
  onAdd: (product: ProductObj) => void;
};
//GETTING PROPS FROM ProductsList

const Product: React.FC<Props> = ({ product, onAdd }) => {
  return (
    <Box key={product._id}>
      <Box
        m={3}
        border="1px"
        borderColor="gray.300"
        w="17rem"
        minH="17rem"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        boxShadow="lg"
        p="3"
        rounded="lg"
      >
        <Link to={`/products/${product._id}`}>
          <Box>
            <Image src={`/${product.images[0]}`}></Image>
            <Text fontWeight="semibold">{product.productBrand}</Text>
            <Text>{product.productName}</Text>
            <Text fontSize="lg" fontWeight="semibold">{`${product.price.toFixed(
              2
            )}€`}</Text>
          </Box>
        </Link>
        <Button colorScheme="pink" onClick={() => onAdd(product)} m={2}>
          ADD TO CART
        </Button>
      </Box>
    </Box>
  );
};

export default Product;
