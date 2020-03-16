import apiUrl from "../apiConfig";
import axios from "axios";

// Get all Organizations
const getAllOrganizations = () => {
    return axios.get(`${apiUrl}/organizations`);
};
//Add New Organization
const addNewOrganization =(name)=>{
    return axios.post(`${apiUrl}/organizations`,{organization:{name}})
}
// Delete Organization by ID

const deleteOrganization = (id) => {
    return axios.delete(`${apiUrl}/organizations/${id}`);
  }
export { getAllOrganizations ,addNewOrganization,deleteOrganization};
