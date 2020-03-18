import apiUrl from "../apiConfig";
import axios from "axios";

// Get all Organizations
const getAllOrganizations = () => {
    return axios.get(`${apiUrl}/organizations`);
};
//Add New Organization
const addNewOrganization =(organization)=>{
    return axios.post(`${apiUrl}/organizations`,{organization})
}
// Delete Organization by ID

const deleteOrganization = (id) => {
    return axios.delete(`${apiUrl}/organizations/${id}`);
  }
export { getAllOrganizations ,addNewOrganization,deleteOrganization};
