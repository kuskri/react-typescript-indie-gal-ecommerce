import React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import { ProductObj } from "../types";

type Props = {
  products: ProductObj[];
  onAdd: (product: ProductObj) => void;
};

const Category: React.FC<Props> = ({ products, onAdd }) => {
  let { category } = useParams<Record<string, string>>();

  //the new array has objs with a category key that match the category param
  const categoryProducts = products.filter(
    (prod: ProductObj) => prod.category === category
  );

  //to capitalize the first letter of the category param
  const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Box width="96%" m={10}>
      <Box m={20}>
        <Heading my={10}>{capitalizeFirstLetter(category)}</Heading>
        <Text fontSize="lg">{`Our choise of the best ${category} only for you`}</Text>
      </Box>
      <Flex
        flexWrap="wrap"
        alignItems="center"
        justifyContent="start"
        marginY={20}
      >
        {categoryProducts.map((product: ProductObj) => {
          return <Product product={product} onAdd={onAdd} />;
        })}
      </Flex>
    </Box>
  );
};

export default Category;
