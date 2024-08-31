const Navbar = () => {
    return(
        <>
        <nav className="flex bg-[#1b1b1b] justify-between items-center p-2" >
            <div className="logo ml-4">
            <h1 className="text-2xl font-bold" ><a href="">🆁🅺</a></h1>
            </div>
            <div className="ul-navbar">
                <ul className="flex font-semibold font-lexend justify-center items-center gap-4">
                    <li><a href="/data-kesehatan">Data Kesehatan</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="https://www.instagram.com/rakhaprawira_y">Social Media</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar