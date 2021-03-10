import React from "react";
import { Box, Image, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Link } from "react-router-dom";
//TYPE
import { ProductObj } from "../types";
// import {Product} from "../DATA"
type Props = {
  product: ProductObj;
};

const RecentlyRestockedItem: React.FC<Props> = ({ product }) => {
  //getting props from SiteGrid

  return (
    <>
      <Box key={product._id} boxShadow="lg" width={270} p={5}>
        <LinkBox>
          <LinkOverlay as={Link} to={`/products/${product._id}`}>
            <Image src={product.images[0]} height={250}></Image>
            <Text fontWeight="semibold">{product.productBrand}</Text>
            <Text>{product.productName}</Text>
            <Text fontSize="md">{`${product.price}€`}</Text>
          </LinkOverlay>
        </LinkBox>
      </Box>
    </>
  );
};

export default RecentlyRestockedItem;
