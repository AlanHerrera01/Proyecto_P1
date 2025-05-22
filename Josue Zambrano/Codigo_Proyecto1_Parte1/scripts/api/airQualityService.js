const API_KEY = '9ef902745a434a82e43a393bc1751a4e';

export class AirQualityService {
    static async fetchCurrentWeather(city = 'London', country = 'uk') {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
            );
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('Error fetching current weather:', error);
            return this.getMockWeatherData();
        }
    }

    static async fetchAirQualityData(lat = 51.5085, lon = -0.1257) {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
            );
            
            if (!response.ok) {
                console.log('API Key no activa o error, usando datos de prueba');
                return this.getMockAirQualityData();
            }
            
            const data = await response.json();
            return this.processAirQualityData(data);
            
        } catch (error) {
            console.error('Error fetching air quality data:', error);
            return this.getMockAirQualityData();
        }
    }

    static processAirQualityData(data) {
        const mainPollutant = data.list[0].main.aqi;
        const components = data.list[0].components;
        
        return {
            aqi: {
                value: mainPollutant,
                level: this.getAQILevel(mainPollutant)
            },
            pollutants: {
                pm25: components.pm2_5,
                pm10: components.pm10,
                co: components.co,
                no2: components.no2,
                o3: components.o3,
                so2: components.so2
            },
            lastUpdated: new Date().toISOString()
        };
    }

    /*static getMockWeatherData() {
        return {
            coord: { lon: -0.1257, lat: 51.5085 },
            weather: [{ id: 501, main: 'Rain', description: 'moderate rain', icon: '10d' }],
            main: {
                temp: 12.86,
                feels_like: 12.28,
                temp_min: 11.77,
                temp_max: 13.58,
                pressure: 1017,
                humidity: 80
            },
            visibility: 8000,
            wind: { speed: 3.6, deg: 310 },
            rain: { '1h': 1.68 },
            clouds: { all: 75 },
            dt: Math.floor(Date.now() / 1000),
            sys: {
                type: 2,
                id: 268730,
                country: 'GB',
                sunrise: Math.floor(Date.now() / 1000) - 3600,
                sunset: Math.floor(Date.now() / 1000) + 3600
            },
            timezone: 0,
            id: 2643743,
            name: 'London',
            cod: 200
        };
    }

    static getMockAirQualityData() {
        const hourlyData = this.generateMockHourlyData();
        const pm25Value = Math.floor(Math.random() * 30) + 10;
        const pm10Value = Math.floor(Math.random() * 50) + 15;
        const aqiValue = Math.floor(Math.random() * 300) + 1;
        
        return {
            aqi: {
                value: aqiValue,
                level: this.getAQILevel(aqiValue)
            },
            pollutants: {
                pm25: pm25Value,
                pm10: pm10Value,
                co: (Math.random() * 200).toFixed(2),
                no2: (Math.random() * 50).toFixed(2),
                o3: (Math.random() * 60).toFixed(2),
                so2: (Math.random() * 20).toFixed(2)
            },
            hourlyData: hourlyData,
            lastUpdated: new Date().toISOString()
        };
    }

    static generateMockHourlyData() {
        const hours = [];
        const pm25 = [];
        const pm10 = [];
        
        for (let i = 0; i < 24; i++) {
            hours.push(`${i}:00`);
            pm25.push(Math.floor(Math.random() * 30) + 10);
            pm10.push(Math.floor(Math.random() * 50) + 15);
        }
        
        return { hours, pm25, pm10 };
    }*/

    static getAQILevel(aqiValue) {
        if (aqiValue <= 50) return 'good';
        if (aqiValue <= 100) return 'moderate';
        if (aqiValue <= 150) return 'unhealthy-sensitive';
        if (aqiValue <= 200) return 'unhealthy';
        if (aqiValue <= 300) return 'very-unhealthy';
        return 'hazardous';
    }
}