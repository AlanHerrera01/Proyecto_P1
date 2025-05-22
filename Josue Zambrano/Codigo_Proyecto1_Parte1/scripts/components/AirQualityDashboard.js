import { AirQualityService } from '../api/airQualityService.js';

class AirQualityDashboard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.city = 'London';
        this.country = 'uk';
    }

    connectedCallback() {
        this.renderDashboard();
    }

    async renderDashboard() {
        const weather = await AirQualityService.fetchCurrentWeather(this.city, this.country);
        const airQuality = await AirQualityService.fetchAirQualityData(
            weather.coord.lat,
            weather.coord.lon
        );

        this.shadowRoot.innerHTML = `
            <style>
                .dashboard {
                    background: #e3f2fd;
                    border-radius: 12px;
                    padding: 32px 32px 24px 32px;
                    max-width: 600px;
                    font-family: Arial, sans-serif;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                    margin: 0 auto;
                }
                .dashboard h2 {
                    margin-top: 0;
                    color: #1976d2;
                    font-size: 2rem;
                }
                .section {
                    margin-bottom: 18px;
                }
                .label {
                    font-weight: bold;
                    color: #222;
                }
                .aqi {
                    font-size: 2em;
                    font-weight: bold;
                    margin-bottom: 16px;
                }
                .good { color: #388e3c; }
                .moderate { color: #fbc02d; }
                .unhealthy-sensitive { color: #f57c00; }
                .unhealthy { color: #d32f2f; }
                .very-unhealthy { color: #7b1fa2; }
                .hazardous { color: #6d4c41; }
                .pollutants {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 16px;
                    margin-bottom: 10px;
                }
                .pollutant {
                    background: #fff;
                    border-radius: 8px;
                    padding: 12px 18px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.04);
                    font-size: 1.1em;
                    margin-bottom: 8px;
                }
                .city-selector {
                    margin-bottom: 1.5rem;
                }
                .city-selector label {
                    font-weight: bold;
                    margin-right: 0.5rem;
                }
                @media (max-width: 700px) {
                    .dashboard {
                        padding: 16px;
                    }
                    .pollutants {
                        flex-direction: column;
                        gap: 8px;
                    }
                }
            </style>
            <div class="city-selector">
                <label for="citySelect">Ciudad:</label>
                <select id="citySelect">
                    <option value="London,uk"${this.city === 'London' ? ' selected' : ''}>Londres</option>
                    <option value="Quito,ec"${this.city === 'Quito' ? ' selected' : ''}>Quito</option>
                    <option value="New York,us"${this.city === 'New York' ? ' selected' : ''}>New York</option>
                    <option value="Madrid,es"${this.city === 'Madrid' ? ' selected' : ''}>Madrid</option>
                    <option value="Tokyo,jp"${this.city === 'Tokyo' ? ' selected' : ''}>Tokyo</option>
                </select>
            </div>
            <div class="dashboard">
                <div class="section">
                    <h2>Clima actual en ${weather.name}</h2>
                    <div><span class="label">Temperatura:</span> ${weather.main.temp}°C</div>
                    <div><span class="label">Condición:</span> ${weather.weather[0].description}</div>
                    <div><span class="label">Humedad:</span> ${weather.main.humidity}%</div>
                </div>
                <div class="section">
                    <h2>Calidad del Aire</h2>
                    <div class="aqi ${airQuality.aqi.level}">
                        AQI: ${airQuality.aqi.value} (${this.getAQIText(airQuality.aqi.level)})
                    </div>
                    <div class="pollutants">
                        <div class="pollutant"><span class="label">PM2.5:</span> ${airQuality.pollutants.pm25} µg/m³</div>
                        <div class="pollutant"><span class="label">PM10:</span> ${airQuality.pollutants.pm10} µg/m³</div>
                        <div class="pollutant"><span class="label">CO:</span> ${airQuality.pollutants.co} µg/m³</div>
                        <div class="pollutant"><span class="label">NO₂:</span> ${airQuality.pollutants.no2} µg/m³</div>
                        <div class="pollutant"><span class="label">O₃:</span> ${airQuality.pollutants.o3} µg/m³</div>
                        <div class="pollutant"><span class="label">SO₂:</span> ${airQuality.pollutants.so2} µg/m³</div>
                    </div>
                    <div style="margin-top:10px;font-size:0.9em;color:#555;">
                        Última actualización: ${new Date(airQuality.lastUpdated).toLocaleString()}
                    </div>
                </div>
            </div>
        `;

        // Escucha el cambio de ciudad dentro del shadow DOM
        this.shadowRoot.getElementById('citySelect').addEventListener('change', (e) => {
            const [city, country] = e.target.value.split(',');
            this.city = city;
            this.country = country;
            this.renderDashboard();
            // Evento para que el gráfico también se actualice
            this.dispatchEvent(new CustomEvent('city-changed', {
                detail: { city, country },
                bubbles: true,
                composed: true
            }));
        });
    }

    getAQIText(level) {
        switch(level) {
            case 'good': return 'Bueno';
            case 'moderate': return 'Moderado';
            case 'unhealthy-sensitive': return 'Dañino para grupos sensibles';
            case 'unhealthy': return 'Dañino';
            case 'very-unhealthy': return 'Muy dañino';
            case 'hazardous': return 'Peligroso';
            default: return level;
        }
    }
}

customElements.define('air-quality-dashboard', AirQualityDashboard);