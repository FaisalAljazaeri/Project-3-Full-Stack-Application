import apiUrl from "../apiConfig";
import axios from "axios";

// Get all Organizations
const getAllOrganizations = () => {
    return axios.get(`${apiUrl}/organizations`);
};
const addNewOrganization =()=>{
    return axios.post(`${apiUrl}/organizations`)
}
export { getAllOrganizations ,addNewOrganization};
