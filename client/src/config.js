import axios from 'axios';

export const getClientId = async () => {
    try {
        const res= await axios.get('/api/client_id');
        return res.data.clientId;
    } catch (error) {
        console.log('Config.js-Error fetching client id', error);
    }
};