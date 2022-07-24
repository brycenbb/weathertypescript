import './index.css';
const celcius = '\u2103';

type chosenData = {
  min: number;
  max: number;
  forecast: number;
  icon: string;
};

function Card(props: chosenData) {
  return (
    <div className="dailyCard">
      <div>
        H:{props.max}
        {celcius}
      </div>
      <div>
        L:{props.min}
        {celcius}
      </div>
      <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}></img>
      <div>{props.forecast}</div>
    </div>
  );
}

export default Card;
