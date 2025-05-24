// Archivo comentado automáticamente para documentación del sistema

import { AirQualityService } from '../api/airQualityService.js';

// Definición de clase personalizada
class AirQualityChart extends HTMLElement {
  // Constructor para inicializar propiedades y estado
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });


// Insertamos estilos modernos al componente
const style = document.createElement('style');
style.textContent = `
  :host {
    display: block;
    font-family: 'Inter', sans-serif;
    background: #ffffff;
    color: #333;
    padding: 1rem;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    margin-bottom: 1rem;
  }
  h2, h3 {
    color: #1E2A38;
  }
  p {
    color: #555;
  }
`;
this.shadowRoot.appendChild(style);

    this.city = 'London';
    this.country = 'uk';
    this.chart = null;
  }

  // Método invocado cuando el componente se inserta en el DOM
  connectedCallback() {
  // Renderiza el contenido del componente
    this.render();
    this.loadChartData();

    // Escucha el evento de cambio de ciudad
  // Asignación de eventos a elementos DOM
    window.addEventListener('city-changed', (e) => {
      this.city = e.detail.city;
      this.country = e.detail.country;
      this.loadChartData();
    });
  }

  async loadChartData() {
    const weather = await AirQualityService.fetchCurrentWeather(this.city, this.country);
    const airQuality = await AirQualityService.fetchAirQualityData(
      weather.coord.lat,
      weather.coord.lon
    );
    this.setChartData(airQuality);
  }

 setChartData(data) {
  const canvas = this.shadowRoot.getElementById('airQualityChart');
  if (this.chart) {
    this.chart.destroy();
  }
  this.chart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: ['PM2.5', 'PM10'],
      datasets: [{
        label: 'Concentración (µg/m³)',
        data: [data.pollutants.pm25, data.pollutants.pm10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Concentración actual de partículas',
          font: { size: 16 }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Concentración (µg/m³)'
          }
        }
      }
    }
  });
}

  // Renderiza el contenido del componente
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .chart-container {
          position: relative;
          margin: 2rem 0;
          padding: 1rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          animation: fadeIn 1s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      </style>
      <div class="chart-container">
        <canvas id="airQualityChart" width="350" height="180"></canvas>
      </div>
    `;
  }
}

customElements.define('air-quality-chart', AirQualityChart);