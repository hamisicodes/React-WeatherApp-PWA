import axios from 'axios';

const URL ='https://api.openweathermap.org/data/2.5/weather'
const API_KEY ='e71424c8e20f5af13dc6c1a9194704f4'

// const URL = 'https://api.openweathermap.org/data/2.5/weather';
// const API_KEY = 'f33a484cf794d08d0148764789aaba32';

export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params:{
            q:query,
            units:'metric',
            APPID:API_KEY,
        }
    });

    return data
}