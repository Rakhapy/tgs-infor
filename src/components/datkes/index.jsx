import axios from "axios"

export const Datkes = (callback) => {
    const URL = "https://6634be239bb0df2359a29552.mockapi.io/data/menu" 
    axios.get(URL)
    .then((res) => {
        callback(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
}
