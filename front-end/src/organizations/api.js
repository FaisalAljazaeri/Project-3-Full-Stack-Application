import apiUrl from "../apiConfig";
import axios from "axios";

// Get all Organizations
const getAllOrganizations = () => {
    return axios.get(`${apiUrl}/organizations`);
};
const addNewOrganization =(name)=>{
    return axios.post(`${apiUrl}/organizations`,name)
}
export { getAllOrganizations ,addNewOrganization};
