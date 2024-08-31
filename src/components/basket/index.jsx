const Basket = () => {
    return(
        <>
        <div className="bg-[#202020] border-2 border-[#492c6c] w-[7rem] fixed right-2 bottom-6 h-10 flex justify-center items-center gap-2 rounded cursor-pointer">
            <div>
                <img className="h-[1.2rem]" src="img/add-to-basket.png" alt="" />
            </div>
            <div>
                <h1 className="font-semibold" >Cart</h1>
            </div>
        </div>
        </>
    )
}


export default Basket