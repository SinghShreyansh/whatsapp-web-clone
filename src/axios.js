import axios from 'axios'

const instance = axios.create({
    baseURL:'http://localhost:9000'
});
// http://localhost:9000
// https://whatsapp-clone-mern-k70i8oihf-singhshreyansh.vercel.app

export default instance;