import axios from "axios";
const apiUrl = `${process.env.REACT_APP_API_URL}/api/search-history`;

export const saveHistory = ({ name, email, query }) => axios.post(apiUrl, { name, email, query });

export const getHistory = () => axios.get(apiUrl);

export const searchGoogleBooks = (query) => axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`);

export const getBookDetails = (id) => axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);

export const placeholderUrl = "https://via.placeholder.com/128x180/ececec/000000?text=";