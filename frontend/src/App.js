import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/weather/${city}`);
      setWeather(res.data);
    } catch {
      setWeather(null);
      alert('City not found');
    }
  };

  return (
    <div style={{ padding: '20px' , textAlign: 'center' }}>
      <h2 style={{
    fontSize: '50px',
    fontWeight: 'bold',
    color: 'white',
    background: 'linear-gradient(to right, #4facfe, #00f2fe)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'center',
    textShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)',
    marginBottom: '20px'
  }}>Weather Info</h2>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={e => setCity(e.target.value)}
         style={{
    padding: '10px 15px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '2px solid #00aaff',
    marginRight: '10px',
    outline: 'none',
    width: '200px'
  }}
      />
      <button onClick={getWeather}
      style={{
    padding: '10px 15px',
    fontSize: '16px',
    backgroundColor: '#00aaff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: '0.3s',
  }}
  onMouseOver={e => e.target.style.backgroundColor = '#0088cc'}
  onMouseOut={e => e.target.style.backgroundColor = '#00aaff'}>Get Weather</button>

      {weather && (
        <div  style={{
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '15px',
    padding: '20px',
    color: 'white',
    textAlign: 'center',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    marginTop: '30px',
    width: '300px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }}>
          <h3 style={{ fontSize: '28px', marginBottom: '10px' }}>{weather.name}</h3>
          <p style={{ fontSize: '20px', margin: '5px 0' }}>🌡️ Temp: {weather.main.temp}°C</p>
          <p style={{ fontSize: '18px', margin: '5px 0', textTransform: 'capitalize' }}>🌥️ Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
