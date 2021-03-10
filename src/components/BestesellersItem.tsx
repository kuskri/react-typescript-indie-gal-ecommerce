import React from "react";
import { Box, Image, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ProductObj } from "../types";

type Props = {
  product: ProductObj;
};

const BestesellersItem: React.FC<Props> = ({ product }) => {
  return (
    <>
      <Box key={product._id} boxShadow="lg" minWidth={250} textAlign="center">
        <LinkBox>
          <LinkOverlay
            as={Link}
            to={`/products/${product._id}`}
            color="gray.900"
            p={2}
            m={1}
          >
            <Image src={product.images[0]} height={250}></Image>
            <Text fontWeight="semibold" marginTop={4}>
              {product.productBrand}
            </Text>
            <Text>{product.productName}</Text>
            <Text fontSize="md">{`${product.price}€`}</Text>
          </LinkOverlay>
        </LinkBox>
      </Box>
    </>
  );
};

export default BestesellersItem;
