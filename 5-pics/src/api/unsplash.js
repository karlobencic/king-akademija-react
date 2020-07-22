import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 34d6a9a63a5a929186629acb5c30ec1c2f7d564e428ae77da9a8db97b596e0a6'
    }
});