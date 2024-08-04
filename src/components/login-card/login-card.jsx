const Logcard = (props) => {

    const {judul} = props

    return(
        <>
        <div className="judul text-3xl font-medium flex justify-center items-center">
            <h1>List</h1>
        </div>
        <div className="card flex justify-center min-h-screen items-center text-2xl font-medium">
            <div className="input">
                <h1>{judul}</h1>
            </div>
        </div>
        </>
    )
}

export default Logcard