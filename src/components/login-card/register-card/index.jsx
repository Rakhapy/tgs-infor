import { Link } from "react-router-dom"

const Register = () => {
    return(
        <div className="card-register bg-slate-500">
            <div className="input-register">
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <Link to="/about" >Register</Link>
            </div>
        </div>
    )
}

export default Register