const About = () => {
    return(
        <div className="flex justify-center items-center min-h-screen">
            <div className="text flex flex-col items-center gap-2">
                <h1 className="font-bold text-4xl" >About</h1>
                <h2 className="text-2xl">This is the About Page</h2>
                <button onClick={() => history.back()}className="btn bg-blue-500 font-medium rounded p-1 hover:p-1.5 duration-300" >Go Back</button>
            </div>
        </div>
    )
}

export default About