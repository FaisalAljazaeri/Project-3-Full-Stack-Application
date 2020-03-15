import apiUrl from "../apiConfig";
import axios from "axios";

// Get all Organizations
const getAllOrganizations = () => {
    return axios.get(`${apiUrl}/organizations`);
};

export { getAllOrganizations };
