import axios from 'axios'

const instance = axios.create({
    baseURL:'https://whatsapp-web-server.herokuapp.com'
});
// http://localhost:9000
// https://whatsapp-clone-mern-k70i8oihf-singhshreyansh.vercel.app

export default instance;
