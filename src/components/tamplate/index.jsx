import { Link } from "react-router-dom"
import Card from "../../components/card/index.jsx"
import Basket from "../basket/index.jsx"


const Tamplate = () => {
    return (
        <>
        {/* div utama */}
        <div className="main bg-slate-100">
          {/* wrapper div judul */}
          <div className="main-hero bg-[#393939] flex justify-center items-center max-h-[30rem] max-w-full gap-3 flex-col p-[4rem]">
        <div className="judul">
          <h1 className="text-3xl font-bold select-none " >🆁🅺 Store</h1>
        </div>
        <div className="subjudul">
          <h2 className="text-base select-none" >All you need in one place</h2>
        </div>
        <div className="login-register-btn flex gap-4 flex-wrap max-h-32">
          <button className="btn bg-blue-500 font-medium rounded py-1.5 px-3 hover:px-3.5 duration-300" ><Link to="/login">Login</Link></button>
          <button className="btn bg-transparent border-2 text-blue-500 border-blue-500 font-medium rounded py-1.5 px-3 hover:px-3.5 hover:text-white duration-300" ><Link to="/register">Register</Link></button>
        </div>
          </div>
      </div>
      <Basket></Basket>
      <Card/>
        </>
    )
}

export default Tamplate