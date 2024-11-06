import Container from "@/components/Container";
import { ProductData } from "../../../../../type";
import { getBestSellersData, getProductId } from "@/lib/getData";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import ProductCard from "@/components/ProductCard";

interface Props {
  params: {
    slug: string;
  };
}
const SingleProductPage = async ({ params: { slug } }: Props) => {
  const product: ProductData = await getProductId(slug);
  const bestSellersData: ProductData[] = await getBestSellersData();
  console.log(bestSellersData);

  return (
    <Container className="my-10 bg-bgLight">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6  gap-4 h-full p-4">
        <div className="h-full xl:col-span-2">
          <Image
            src={urlFor(product?.image).url()}
            alt={product?.title}
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {bestSellersData?.map((item) => (
          <ProductCard key={item?._id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default SingleProductPage;
