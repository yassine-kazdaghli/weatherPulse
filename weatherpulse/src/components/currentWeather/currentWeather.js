import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Belgrade</p>
          <p className="weather-description">Sunny</p>
        </div>
        <img alt="weather" className="weather-icon" src="//sunny icon" />
      </div>
      <div className="bottom">
        <p className="temperature">18C</p>
        <div className="details">
            <div className="parameter-row">
                <span className="parameter-label">Details</span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">Feels like</span>
                <span className="parameter-label">22</span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">Wind</span>
                <span className="parameter-value">22c</span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">Humidity</span>
                <span className="parameter-value">15%</span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">Pressure</span>
                <span className="parameter-value">15%</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
