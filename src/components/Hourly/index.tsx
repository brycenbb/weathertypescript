import Card from './Card/index';
import { nanoid } from 'nanoid';

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
type test = {
  data: Array<dataHourly>;
};

function Hourly({ data }: test) {
  return (
    <section id="hourly">
      {data.map((item) => {
        let currentDate = new Date(data[0].dt * 1000).toLocaleDateString(
          'en-GB'
        );
        if (
          currentDate !== new Date(item.dt * 1000).toLocaleDateString('en-GB')
        ) {
          return <div key={nanoid()} className="hide"></div>;
        }
        return (
          <Card
            key={nanoid()}
            time={new Date(item.dt * 1000).toLocaleTimeString('en-GB')}
            wind={item.wind_speed}
            uv={item.uvi}
            temp={item.feels_like}
            forecast={item.weather[0].main}
            icon={item.weather[0].icon}
          ></Card>
        );
      })}
    </section>
  );
}

export default Hourly;
