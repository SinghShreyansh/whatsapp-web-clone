import axios from 'axios'

const instance = axios.create({
    baseURL:'https://whatsapp-backend.vercel.app/'
});
// http://localhost:9000
// https://whatsapp-clone-mern-k70i8oihf-singhshreyansh.vercel.app

export default instance;
