import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js'
import axios from 'axios'

const getWeather = async (city) => {
    // const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${key}`
    const token = await getKeyValue(TOKEN_DICTIONARY.token)
    if (!token) {
        throw new Error('Не задан ключ API, задайте его через команду -t [API_KEY]')
    }

    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'ru',
            units: 'metric'
        }
    })

    return data

}

export {getWeather}


// const url = new URL('https://api.openweathermap.org/data/2.5/weather')
// url.searchParams.append('lat', '44.34')
// url.searchParams.append('lon', '10.99')
// url.searchParams.append('appid', token)
// url.searchParams.append('lang', 'ru')
// url.searchParams.append('units', 'metric')

// https.get(url, (response) => {
//     let result = ''
//     response.on('data', (chunk) => {
//         result += chunk
//     })

//     response.on('end', ()=> {
//         console.log(result)
//     })

// })