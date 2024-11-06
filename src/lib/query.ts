import { groq } from "next-sanity";

const bannerQuery = groq`*[_type == 'banner']{
...
}|order(_createdAt asc)`;

const productsQuery = groq`*[_type == 'product']{
    ...
    }|order(_createdAt asc)`;

const bestSellersQuery = groq`*[_type == 'product' && 'position' == 'Best Sellers']{
    ...
    }|order(_createdAt asc)`;

const slugQuery = groq`*[_type == 'product' && slug.current == $slug][0]{
        ...
        }`;

export { bannerQuery, productsQuery, bestSellersQuery, slugQuery };
