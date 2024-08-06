const Layout = (props) => {

const { type } = props

    return (
        <>
        <nav className="flex justify-center items-center bg-slate-700 p-2" >
            <h1 className="text-2xl font-medium" >Navbar</h1>
        </nav>
        <main>
            <h2>This is {type} page</h2>
        </main>
        </>
    )
}

export default Layout