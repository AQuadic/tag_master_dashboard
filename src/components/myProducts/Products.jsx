import { useState } from "react"
import fproduct from '/images/Products/fproduct.png'
import sproduct from '/images/Products/sproduct.png'
import tproduct from '/images/Products/tproduct.png'
import ActiveStatus from "../icons/dashboard/ActiveStatus"
import EmptyState from "./EmptyState"
const Products = () => {
    const [activeProducts, setActiveProducts] = useState("All Product")
    const productsFilter = ["All Product", "NFC Business Card", "Poket NFC Cardholder", "NFC Sticker"]
    const cardData = [
        {
            image: fproduct,
            title: 'Tap NFC Business Card - Share Everything'
        },
        {
            image: sproduct,
            title: 'Tap NFC Business Card - Share Everything'
        },
        {
            image: tproduct,
            title: 'Tap NFC Business Card - Share Everything'
        },
    ]
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
                {cardData.map((product, index) => (
                    <div key={index} className="md:w-[275px] w-full">
                        <img
                            src={product.image}
                            alt="Product"
                            className="w-full rounded-tr-[12px] rounded-tl-[12px]"
                        />
                        <div className="h-full pb-2 border-b border-r border-l border-[#000000] rounded-b-[12px] px-3">
                            <p className="text-[#000000] text-xs pt-1.5">{product.title}</p>
                            <div className="flex items-center gap-6 mt-2">
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
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            <EmptyState />


            <div className="flex items-center justify-center mt-32">
                <button className="md:w-[255px] w-full h-[59px] bg-[#002847] rounded-[12px] text-[#FFFFFF] text-2xl font-medium">Buy a product</button>
            </div>
        </section>
    )
}

export default Products
