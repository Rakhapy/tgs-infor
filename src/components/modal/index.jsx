
const Modal = ({open, close, product}) => {

    if (!open) return null

    return(
        <>
        <div className="modal inset-0 fixed backdrop-blur-sm flex justify-center items-center">
            <div className="container flex bg-[#202020] w-[25rem] h-[35rem] flex-col rounded-lg overflow-auto no-scrollbar ">
                <div className="top flex justify-between items-center m-5 font-lexend">
                    <h1 className="font-semibold text-xl " >🆁🅺 Store</h1>
                    <h2 className="font-light cursor-pointer" onClick={close} >Back</h2>
                </div>
                <div className="img bg-gradient-to-br from-purple-800 to-pink-500 flex justify-center flex-col font-bold ">
                    <div className="text-xl flex justify-center items-center p-3" >
                        <h1>Limited Edition</h1>
                    </div>
                    <div>
                        <img src="https://i.pinimg.com/564x/cd/0a/f7/cd0af7dd8375502b13041573192eaf19.jpg" alt="" />
                    </div>
                </div>
                <div className="detail">
                    <div className="judul text-xl m-3 font">
                        <h1>{product.id}</h1>
                    </div>
                    <div className="deskripsi mx-3 ">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut tenetur odit non unde cum porro doloribus numquam consequuntur earum quaerat, ullam qui! Nulla vel sit necessitatibus totam facilis impedit itaque aliquam fugit eos laboriosam corrupti tempore aut repellat rem, deserunt sed ullam voluptate consequatur. Omnis perspiciatis aperiam unde neque minima!
                        </p>
                    </div>
                    <div className="harga mx-4 my-3 text-lg ">
                        <h1><b>Rp. 100.000</b></h1>
                    </div>
                    <div className="tombol">
                    <button className="bg-transparent border-2 border-blue-500 px-4 w-auto h-auto text-lg font-semibold shadow-sm rounded duration-200 mb-5 hover:bg-blue-500 " >Add to cart</button>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Modal