import "./App.css"
import Logcard from "./components/auth/login"
import Register from "./components/auth/register"
import { Link } from "react-router-dom"

const Home = () => {
  return(
    <div>
    <div className="button flex gap-4">
    <button className="btn bg-blue-500 font-medium rounded p-1 hover:p-1.5 duration-300" ><Link to="/about">About</Link></button>
    <button className="btn bg-blue-500 font-medium rounded p-1 hover:p-1.5 duration-300" ><Link to="/menu">Login</Link></button>
    <button className="btn bg-blue-500 font-medium rounded p-1 hover:p-1.5 duration-300" ><Link to="/register">Register</Link></button>
    </div>

    </div>
  )
}

export default Home