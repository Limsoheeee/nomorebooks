import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

export const createReviewApi = async post => {
  await axios.post(`${BASE_URL}/posts`, post);
};
