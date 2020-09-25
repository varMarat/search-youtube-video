import axios from 'axios';
const KEY = 'AIzaSyC7R-6iYq99aZ5sVj2kx2cLUDNyJVTaj5E';

export default axios.create({
    baseURL: 'http://localhost:8080/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 12,
        key: KEY
    }
})
