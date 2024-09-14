const Layout = (props) => {

const { type } = props

    return (
        <div className="flex justify-center">
        <div className="container flex flex-col justify-center items-center w-[25rem] rounded p-3 bg-orange-500">
            <div className="title">
                <h1>{type}</h1>
            </div>
            <form onSubmit={() => {console.log()}} className="flex gap-3 flex-col justify-center items-center">
                <span>
                <label htmlFor="username">Username: </label>
                <input name="username" className="font-poppins rounded px-1 border-2 border-orange-100" type="text" />
                </span>
                <button className="bg-orange-400 rounded px-6" >{type}</button>
            </form>
        </div>
        </div>
    )
}

export default Layout