import axios from 'axios';
const instance =  axios.create({
    baseURL:'https://meakio.herokuapp.com/'
    
});

export default instance;