import axios from "axios";

const getProduct = (page)=>{
    return axios({
        method: "get",
        url: `http://localhost:3001/users?_page=${page}&_limit=4`
      })
}
export {
    getProduct
}