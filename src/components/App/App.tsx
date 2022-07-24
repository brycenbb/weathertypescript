import './App.css';
import '../../assets/index.css';
import { useEffect, useState } from 'react';
import Daily from '../Daily';
import Hourly from '../Hourly';
type dataHourly = {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: Array<any>;
  pop: number;
};
type dataDaily = {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: any;
  feels_like: any;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: Array<any>;
  pop: number;
};
// type data = {
//   lat: number;
//   lon: number;
//   timezone: string;
//   timezone_offset: number;
//   current: dataCurrent;
//   hourly: Array<any>;
//   daily: Array<any>;
// };
function App() {
  const [searchTerm, setSearchTerm] = useState('leicester');
  const [dailyData, setDailyData] = useState<Array<dataDaily>>(
    [] as Array<dataDaily>
  );
  const [hourlyData, setHourlyData] = useState<Array<dataHourly>>(
    [] as Array<dataHourly>
  );
  function handleClick() {
    setSearchTerm(document.querySelector('input')!.value);
  }

  useEffect(() => {
    async function Fetch() {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${process.env.REACT_APP_WEATHER}`
      );
      let json = await response.json();
      console.log(process.env.REACT_APP_WEATHER, json);
      let lat = json.coord.lat;
      let lon = json.coord.lon;
      let weatherResponse = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=${process.env.REACT_APP_WEATHER}`
      );
      let weatherjson = await weatherResponse.json();
      setDailyData(weatherjson.daily);
      setHourlyData(weatherjson.hourly);
      console.log(weatherjson);
    }
    Fetch();
  }, [searchTerm]);
  return (
    <div className="App">
      <div>
        <input type="text" placeholder={searchTerm}></input>
        <button type="button" onClick={handleClick}>
          Search
        </button>
        <Daily data={dailyData}></Daily>
        <Hourly data={hourlyData}></Hourly>
      </div>
    </div>
  );
}

export default App;
