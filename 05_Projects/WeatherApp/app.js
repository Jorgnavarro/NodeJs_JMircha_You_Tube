import axios from "axios";
import chalk from "chalk";

const API_KEY = "6bf74a9019dedc498542e7f54d58e462";

async function getAPIWeather(city){
    try {
        let enpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
        const response = await axios.get(enpoint, {
            params: {
                q: city,
                appid: API_KEY,
                units: "metric"
            }
        });
        return response.data;
    } catch (err) {
        console.log(chalk.redBright(err));
        throw new Error(`its not possible obtain the information from the ${city}`)
    }
}

function getData(){
    let city = process.argv[2];
    //console.log(city);
    if(!city){
        console.log(chalk.redBright("Please introduce a city name"));
        console.log(chalk.redBright("Execute the instruccion in this way: node app.js [City name]"));
    }
    getAPIWeather(city);
}

getData()
