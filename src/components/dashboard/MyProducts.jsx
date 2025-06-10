import { Link } from "react-router"
import MyProductsIcon from "../icons/dashboard/MyProductsIcon"
import Product1 from '../../../public/images/Dashboard/product1.png'
import Product2 from '../../../public/images/Dashboard/product2.png'

const MyProducts = () => {
    const ProductsData = [
        {
            image: Product1,
            title: "Tap NFC Business Card Share With A"
        },
        {
            image: Product2,
            title: "Pocket™ - World's Most Advanced NFC Cardholder"
        }
    ]

    return (
        <section className="mt-5">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <MyProductsIcon />
                    <h1 className="text-[#00182B] text-xl font-medium">My products</h1>
                </div>
                <Link to='' className="text-[#00182B] text-xl font-medium underline">More</Link>
            </div>
            <div className="mt-3 flex flex-wrap gap-[42px]">
                {ProductsData.map((product, index) => {
                    return (
                        <div key={index} className="w-[252px]">
                            <img src={product.image} alt="Product" />
                            <div className="border border-[#000000] rounded-br-[8px] rounded-bl-[8px] h-12">
                                <p className="text-[#000000] text-xs p-2">{product.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default MyProducts