import axios from "axios";
const KEY = 'KEY';

const instance = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
        part: 'snippet',
        maxResults: 1,
        key: KEY
    }
});

export default instance;