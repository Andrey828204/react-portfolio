import { useEffect, useState } from 'react';
import { getWeather } from '../api/weatherApi';
import './Pages.css';

function MyCity() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeather();
        setWeather(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div>

      <section className="card">

        <h1>Моє місто — Київ</h1>

        <p>
          Київ — столиця України та одне з
          найкрасивіших міст країни.
          Тут поєднуються історія,
          сучасність та технології.
        </p>

      </section>

      {weather && (
        <section className="card weather-card">

          <h2>
            {weather.location.name},
            {' '}
            {weather.location.country}
          </h2>

          <h3>{weather.current.temp_c}°C</h3>

          <p>
            Погода:
            {' '}
            {weather.current.condition.text}
          </p>

          <p>
            Координати:
            {' '}
            {weather.location.lat},
            {' '}
            {weather.location.lon}
          </p>

        </section>
      )}

    </div>
  );
}

export default MyCity;