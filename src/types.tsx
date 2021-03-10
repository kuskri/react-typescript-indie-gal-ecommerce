export type ProductObj = {
  _id: string;
  images: string[];
  productName: string;
  productBrand: string;
  category: string;
  price: number;
  description: string;
  ingredients: string;
};

export type CartItemObject = {
  qty: number;
} & ProductObj;
