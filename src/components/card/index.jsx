import { useState, useEffect } from "react"
import { Datkes } from "../datkes"
const Card = () => {

const [product, setProduct] = useState([]);
const [cart, setCart] = useState(1);

useEffect(() => {
    Datkes((data) => {
        setProduct(data)
    })
},[])
return(
    <>
    <h1 className="text-2xl m-4 font-bold">Daftar Menu</h1>
        <div className="flex items-center justify-center flex-wrap my-11">
    {product.length > 0 ? product.map((product) => (
        <div className="bg-[#202020] border-2 shadow-xl border-[#181818] w-[20rem] h-fit p-2 m-2 mx-4 rounded-md">
            <img className="h-[15rem]" src={product.foto} alt="" />
            <div className="pl-2">
        <h1 className="text-2xl font-bold">{product.nama}</h1>
        <h2>Energi: {product.Energi}</h2>
        <h2>Protein: {product.Protein}</h2>
        <h2>Lemak: {product.Lemak}</h2>
        <h2>Karbo: {product.karbo}</h2>
        <h2>Harga: Rp.{product.harga}</h2>
        <div className="button flex pt-4 gap-4 ">
            <button className="bg-blue-500 px-4 w-auto h-auto text-lg font-semibold shadow-sm rounded duration-200 hover:bg-blue-700">Beli</button>
            <button className="bg-transparent border-2 border-blue-500 px-4 w-auto h-auto text-lg font-semibold shadow-sm rounded duration-200 hover:bg-blue-500 " onClick={() => {
                setCart(cart + 1)
                console.log(cart)
                }}>Add to cart</button>
        </div>
            </div>
    </div>
    )) : (
    <div>
        <h1 className="text-xl font-bold"><b>Tidak ada data</b></h1>
        <p>Kalo ga servernya</p>
        <p>ya internet lu yang burik</p>
    </div>
    
    )}
    </div>
    </>
)



}
export default Card