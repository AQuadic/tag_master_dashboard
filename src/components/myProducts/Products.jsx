import { useState } from "react"
// import ActiveStatus from "../icons/dashboard/ActiveStatus"
import EmptyState from "./EmptyState"
import { useQuery } from "react-query"
import { getProducts } from "@/api/products"
import Spinner from "../icons/general/Spinner"
const Products = () => {
    const [activeProducts, setActiveProducts] = useState("All Product")
    const productsFilter = ["All Product", "NFC Business Card", "Poket NFC Cardholder", "NFC Sticker"]

    const { data: products = [], isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response = await getProducts();
            return response.data || [];
        },
    });

    if (isLoading) {
        return <Spinner />
    }

    return (
        <section>
            <div className="flex flex-wrap items-center gap-5">
                {productsFilter.map((products) => (
                    <div
                        key={products}
                        onClick={() => setActiveProducts(products)}
                        className={`md:py-3 md:px-6 p-1 border-[0.88px] border-[#000000] rounded-[7px] flex items-center justify-center cursor-pointer transition-colors ${activeProducts === products
                            ? "bg-[#002847] text-white border-none"
                            : "bg-transparent text-[#000000]"
                            }`}
                    >
                        <p className="md:text-[21.02px] text-base font-medium">{products}</p>
                    </div>
                ))}
            </div>
            <div className="mt-[26px] flex flex-wrap items-center gap-[42px]">
                {products.map((product, index) => (
                    <div key={index} className="md:w-[250px] w-full">
                        {product.images?.[0]?.url ? (
                            <img
                                src={product.images[0].url}
                                alt="Product Image"
                                className="w-[298px] h-[310px] rounded-tr-[12px] rounded-tl-[12px] object-cover"
                            />
                        ) : (
                            <img
                                src="/images/Products/placeholder.jpg"
                                alt="Placeholder Image"
                            />
                        )}

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

                            {/* <div className="flex items-center gap-6 mt-2">
                                <div className="flex items-center gap-2">
                                    <p className="text-[#7B7E80] text-[10px]">(5)</p>
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-[#FFB74A] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg className="w-4 h-4 text-[#FFB74A] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg className="w-4 h-4 text-[#FFB74A] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg className="w-4 h-4 text-[#FFB74A] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg className="w-4 h-4  text-[#FFB74A]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className="text-[#000000] text-[10px]">Active</p>
                                    <ActiveStatus />
                                </div>
                            </div> */}

                        </div>
                    </div>
                ))}
            </div>

            {products.length === 0 && <EmptyState />}


            <div className="flex items-center justify-center mt-32">
                <button className="md:w-[255px] w-full h-[59px] bg-[#002847] rounded-[12px] text-[#FFFFFF] text-2xl font-medium">Buy a product</button>
            </div>
        </section>
    )
}

export default Products
