const Navbar = () => {
    return(
        <>
        <nav className="flex bg-slate-700 justify-between items-center p-2" >
            <div className="logo">
            <h1 className="text-2xl font-bold" ><a href="#">Rakha</a></h1>
            </div>
            <div className="ul-navbar">
                <ul className="flex font-semibold justify-center items-center gap-4">
                    <li><a href="#">Data Kesehatan</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="https://www.instagram.com/rakhaprawira_y">Social Media</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar