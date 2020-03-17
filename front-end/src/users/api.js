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

// Delete user By ID
const deleteUserById =(id)=>{
    return axios.delete(`${apiUrl}/users/${id}`)
};

export { getAllUsers ,createNewUser, deleteUserById };
