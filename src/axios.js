import axios from 'axios';

const instance = axios.create({
    // Local URL
    // baseURL: 'http://localhost:5001/react--app-silver/us-central1/api'
    baseURL: 'https://us-central1-react--app-silver.cloudfunctions.net/api'
})

export default instance;