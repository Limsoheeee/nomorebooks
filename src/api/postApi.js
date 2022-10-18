import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

export const createReviewApi = async post => {
  await axios.post(`${BASE_URL}/posts`, post);
};

export const getPostListApi = async () => {
  const response = await axios.get(`${BASE_URL}/posts`);
  return response.data;
};

export const getPostApi = async id => {
  const response = await axios.get(`${BASE_URL}/posts?id=${id}`);
  return response.data[0];
};

export const delPostApi = async id => {
  await axios.delete(`${BASE_URL}/posts/${id}`);
};

export const updatePostApi = async post => {
  console.log("api에서 받아온 payload", post);
  await axios.put(`${BASE_URL}/posts/${post.id}`, post);
};
