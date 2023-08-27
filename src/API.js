import axios from 'axios';
const API_KEY = '36536171-20dffb6feebbd7a17f40a2c96';
axios.defaults.baseURL = "https://pixabay.com/api/";
axios.defaults.params = { key: API_KEY }

 export  const API = async (query, page) =>{
    try {
        const response = await axios.get(`/?q=${query}&page=${page}&per_page=12&orientation=horizontal`);
        return response.data
      } catch (error) {
        console.error('Error fetching images:', error);
      }
 }