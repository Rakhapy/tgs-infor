import { useState, useEffect } from "react"
import { Datkes } from "../datkes"
const Card = () => {

const [product, setProduct] = useState([])

useEffect(() => {
    Datkes((data) => {
        setProduct(data)
    })
},[])
console.log(product)
return(
    <>
    <h1 className="text-2xl m-4 font-bold">Daftar Menu</h1>
        <div className="flex justify-space-between flex-wrap">
    {product.length > 0 && product.map((product) => (
        <div className="bg-slate-600 border-2 shadow-lg border-slate-500 w-[20rem] h-[10rem] p-2 m-2 rounded">
        <h1 className="text-2xl font-bold">{product.nama}</h1>
        <h2><b>Kategori: {product.kategori}</b></h2>
        <h2><b>Harga: {product.harga}</b></h2>
    </div>
    ))}
    </div>
    </>
)



}
export default Card