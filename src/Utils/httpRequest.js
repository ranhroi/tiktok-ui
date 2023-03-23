import axios from 'axios';

const httpRequest = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});
export const get = async (path, option = {}) => {
  const reponses = await httpRequest.get(path, option);
  return reponses.data;
};
export default httpRequest;
