import axios from 'axios';

export const getClientId = async () => {
    try {
        const res= await axios.get('/api/client_id');
        console.log("config.js-here is client_id(res):", res);
        console.log("config.js-here is client_id(res.data):", res.data);
        return res.data.clientId;
    } catch (error) {
        console.log('Config.js-Error fetching client id', error);
    }
};