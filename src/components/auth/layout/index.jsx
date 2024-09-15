const Layout = (props) => {

const { type } = props

const handelLogin = (event) => {
    localStorage.clear();
    localStorage.setItem("username", event.target.username.value);
    localStorage.setItem("password", event.target.password.value);
    event.preventDefault();
    window.location.href = "/"
}
    return (
        <div className="flex justify-center">
        <div className="container flex flex-col justify-center items-center w-[25rem] rounded p-3 bg-orange-500">
            <div className="title">
                <h1>{type}</h1>
            </div>
            <form method="post" onSubmit={handelLogin} className="flex gap-3 flex-col justify-center items-center">
                <span>
                <label htmlFor="username">Username: </label>
                <input name="username" className="font-poppins rounded px-1 border-2 border-orange-100" type="email" />
                </span>
                <span>
                <label htmlFor="password">Password: </label>
                <input name="password" className="font-poppins rounded px-1 border-2 border-orange-100" type="password" />
                </span>
                <button type="submit" className="bg-orange-400 rounded px-6" >{type}</button>
            </form>
        </div>
        </div>
    )
}

export default Layout