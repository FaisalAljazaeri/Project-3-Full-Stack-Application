
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

// Create a new Post
const createPost = (post) => {
  return axios.post(`${apiUrl}/posts`, post);
}

export { getAllPosts, deletePostById, createPost }