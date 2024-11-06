import { client } from "@/sanity/lib/client";
import {
  bannerQuery,
  bestSellersQuery,
  productsQuery,
  slugQuery,
} from "./query";

export const revalidate = 0;

const getBannersData = async () => {
  const bannersData = await client.fetch(bannerQuery);
  return bannersData;
};

const getProductData = async () => {
  const productData = await client.fetch(productsQuery);
  return productData;
};

const getBestSellersData = async () => {
  const bestSellersData = await client.fetch(bestSellersQuery);
  return bestSellersData;
};
const getProductId = async (slug: string) => {
  const productData = await client.fetch(slugQuery, { slug });
  return productData;
};

export { getBannersData, getProductData, getBestSellersData, getProductId };
