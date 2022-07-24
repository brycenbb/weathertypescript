// import Item from "antd/lib/list/Item";
import { nanoid } from 'nanoid';
import Card from './Card/index';

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

type test2 = {
  data: Array<dataDaily>;
};
function Daily({ data }: test2) {
  return (
    <section id="daily">
      {data.map((item) => {
        return (
          <Card
            key={nanoid()}
            min={item.temp.min}
            max={item.temp.max}
            forecast={item.weather[0].main}
            icon={item.weather[0].icon}
          ></Card>
        );
      })}
    </section>
  );
}

export default Daily;
