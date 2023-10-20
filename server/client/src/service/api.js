import axios from 'axios';

export const authenticateSignup = async (data) => {
    try {
        return await axios.post(`/signup`, data)
    }catch (error) {
        console.log('Error while calling signup api', error);
    }
}

export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`/login`, data)
    }catch (error) {
        console.log('Error while calling login api', error);
        return error.response;
    }
}
