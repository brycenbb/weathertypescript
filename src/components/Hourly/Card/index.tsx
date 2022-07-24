import './index.css';
const celcius = '\u2103';
type chosenData = {
  time: string;
  wind: number;
  uv: number;
  temp: number;
  forecast: number;
  icon: string;
};
function Card(props: chosenData) {
  return (
    <div className="hourlyCard">
      <div>{props.time.slice(0, props.time.length - 3)}</div>
      <img
        alt="weather icon"
        id="smallImg"
        src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
      ></img>

      <div> {props.forecast}</div>
      <div>
        {' '}
        {props.temp}
        {celcius}
      </div>
      <div>UV index: {props.uv}</div>
      <div>Wind speed: {props.wind}</div>
    </div>
  );
}

export default Card;
