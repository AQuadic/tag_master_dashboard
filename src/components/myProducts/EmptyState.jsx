import emptyCart from '/images/Products/emptyCart.png'

const EmptyState = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-32">
            <img src={emptyCart} alt="Empty cart" />
            <h2 className="text-[#9C9C9C] md:text-[28px] text-lg font-medium text-center">You have no products yet.</h2>
            <p className="text-[#000000] md:text-[22px] text-base font-medium mt-[10px] text-center">New products appear here.</p>
        </div>
    )
}

export default EmptyState
