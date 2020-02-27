import axios from "axios";

const getProduct = (page, limit=4)=>{
    return axios({
        method: "get",
        url: `http://localhost:3001/users?_page=${page}&_limit=${limit}`
      })
}
export {
    getProduct
}