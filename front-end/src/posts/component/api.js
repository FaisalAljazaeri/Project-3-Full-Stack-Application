
import apiUrl from '../../apiConfig';
import axios from 'axios';

// Get All Posts
const getAllPosts = () => {
  return axios.get(`${apiUrl}/posts`);
};

// Delete Post By ID
const deletePostById = (id) => {
  return axios.delete(`${apiUrl}/posts/${id}`)
}

export { getAllPosts, deletePostById}