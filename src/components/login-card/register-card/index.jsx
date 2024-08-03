const Register = () => {
    return(
        <div className="card-register">
            <div className="input-register">
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button>Register</button>
            </div>
        </div>
    )
}