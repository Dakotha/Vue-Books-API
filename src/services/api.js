import axios from 'axios';

axios.defaults.baseURL = 'http://lara-books-api.local/api';
axios.defaults.headers.common = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

export default axios;