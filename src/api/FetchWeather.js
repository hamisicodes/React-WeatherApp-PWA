import axios from 'axios';

const URL ='https://api.openweathermap.org/data/2.5/weather'
const API_KEY ='e71424c8e20f5af13dc6c1a9194704f4'

export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params:{
            q:query,
            units:'metric',
            APP_ID:API_KEY,
        }
    });

    return data
}