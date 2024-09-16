const Navbar = () => {
    const email = localStorage.getItem("username");
    return(
        <>
        <nav className="flex bg-[#1b1b1b] justify-between items-center p-2" >
            <div className="logo ml-4">
            <h1 className="text-2xl font-bold" ><a href="">🆁🅺</a></h1>
            </div>
            <div className="ul-navbar flex flex-row justify-center items-center">
                <h3 className="font-normal mr-6" >{email}</h3>
                <ul className="max-md:hidden flex font-semibold font-lexend justify-center items-center gap-4">
                    <li><a href="/data-kesehatan">Data Kesehatan</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/medsos">Social Media</a></li>
                </ul>
            <div className="md:hidden  menu mx-4 w-[1rem] ">
                <img src="img/menu.png" alt="" />
            </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar