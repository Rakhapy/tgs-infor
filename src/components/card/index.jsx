import { useState, useEffect } from "react"
import { Datkes } from "../datkes"
import Modal from "../modal";

const Card = () => {

const [product, setProduct] = useState([]);
const [open, setOpen] = useState(false);

function openmodal() {
    setOpen(!open)
}

useEffect(() => {
    Datkes((data) => {
    setProduct(data)
    })
},[])

return(
    <>
    <Modal open={open} close={() => setOpen(!open)} product={product} />
    <h1 className="text-2xl m-4 font-bold">Pruducts</h1>
        <div className="flex items-center justify-center flex-wrap my-11">
    {product.length > 0 ? product.map((product) => (
        <div key={product.id} className="bg-[#202020] border-2 shadow-xl border-[#181818] w-[20rem] h-fit p-2 pb-4 m-2 mx-4 rounded-md">
            <img className="h-[15rem] mx-auto rounded-sm my-2" src={product.foto} alt="" />
            <div className="pl-2">
        <h1 className="text-2xl font-bold">🆁🅺 {product.nama}</h1>
        <div className="deskripsi flex flex-wrap mt-2 ">
            <h2>𝐿𝑖𝑚𝑖𝑡𝑒𝑑</h2>
        </div>
        <h2 className="mt-4 text-lg" ><b>Rp.{product.harga}</b></h2>
        <div className="button flex pt-4 gap-4 ">
            <button onClick={openmodal} className="bg-blue-500 px-4 w-auto h-auto text-lg font-semibold shadow-sm rounded duration-200 hover:bg-blue-700">Lihat</button>
            <button className="bg-transparent border-2 border-blue-500 px-4 w-auto h-auto text-lg font-semibold shadow-sm rounded duration-200 hover:bg-blue-500 ">Add to cart</button>
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