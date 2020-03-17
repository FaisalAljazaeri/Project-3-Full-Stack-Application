import apiUrl from "../apiConfig";
import axios from "axios";

// get all user
const getAllUsers = () => {
    return axios.get(`${apiUrl}/users`);
};
//post New User 
const createNewUser =(name)=>{
    return axios.post(`${apiUrl}/users`,{user:{name}})
}
export { getAllUsers ,createNewUser };
