import axios from 'axios';

const httpClient = axios.create({
  baseURL: "https://microapisoftware.herokuapp.com/api/",
  headers: {
    'Content-Type': 'application/json'
  }
});

export default httpClient;