import { useQuery } from "react-query";
import { getProducts } from "@/api/products";
import EmptyState from "../myProducts/EmptyState";
import MyProductsIcon from "../icons/dashboard/MyProductsIcon";
import { Link } from "react-router";
import Spinner from "../icons/general/Spinner";

const MyProducts = () => {
    const { data: products = [], isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response = await getProducts();
            return response.data?.data || [];
        },
    });

    if (isLoading) {
        return <Spinner />;
    }

    const limitedProducts = products.slice(0, 2);

    return (
        <section className="mt-5 px-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <MyProductsIcon />
                    <h1 className="text-[#00182B] md:text-xl font-medium">My products</h1>
                </div>
                <Link to='/myProducts' className="text-[#00182B] md:text-xl font-medium underline">More</Link>
            </div>
            <div className="mt-[26px] flex flex-wrap items-center gap-[42px]">
                {limitedProducts.map((product, index) => (
                    <div key={index} className="md:w-[250px] w-full">
                        <img
                            src={product.images[0].responsive_urls[0]}
                            srcSet={product.images[0].responsive_urls.join(', ')}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 298px"
                            alt={product.name.en}
                            className="w-[298px] h-[310px] rounded-tr-[12px] rounded-tl-[12px]"
                        />
                        <div className="h-full pb-2 border-b border-r border-l border-[#000000] rounded-b-[12px] px-3">
                            <p className="text-[#000000] text-xs pt-1.5">{product.name.en}</p>
                            <div className="mt-2">
                                <p className="text-sm text-black font-medium">
                                    Price: {product.price}
                                </p>

                                {product.options?.length > 0 && (
                                    <div className={`text-xs font-medium mt-1 ${product.options.some(option => option.in_stock) ? 'text-green-600' : 'text-red-600'}`}>
                                        {product.options.some(option => option.in_stock) ? 'In Stock' : 'Out of Stock'}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {products.length === 0 && <EmptyState />}
        </section>
    )
}

export default MyProducts