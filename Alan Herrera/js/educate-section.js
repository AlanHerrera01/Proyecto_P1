// Archivo comentado automáticamente para documentación del sistema

// Componente web personalizado para mostrar información educativa sobre PM2.5
// Definición de clase personalizada
class EducateSection extends HTMLElement {
  // Constructor para inicializar propiedades y estado
  constructor() {
    super();
    // Crea un Shadow DOM para encapsular los estilos y estructura
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

    this.initializeData();
  }

  // Inicializa los datos del componente con información sobre PM2.5
  initializeData() {
    // Array de objetos con información principal sobre PM2.5
    this.content = [
      {
      titulo: "¿Qué es el PM2.5 y PM10?",
      texto: "El PM2.5 y PM10 son partículas microscópicas suspendidas en el aire. El PM2.5 tiene un diámetro menor a 2.5 micras y el PM10 menor a 10 micras. Ambas pueden penetrar en el sistema respiratorio, pero el PM2.5 llega más profundo y es más dañino para la salud. Estas partículas pueden estar compuestas de polvo, hollín, metales pesados y compuestos orgánicos.",
      img: "img/1.webp",
      alt: "Contaminación ambiental"
      },
      {
      titulo: "Efectos en la salud",
      texto: "La exposición prolongada a PM2.5 y PM10 puede causar problemas respiratorios, cardiovasculares y aumentar la mortalidad. El PM2.5 es especialmente peligroso por su capacidad de ingresar al torrente sanguíneo. Estudios han demostrado que los niños y adultos mayores son los más vulnerables, y la contaminación puede agravar enfermedades como el asma y la bronquitis.",
      img: "img/2.png",
      alt: "Salud pulmonar"
      },
      {
      titulo: "¿Cómo protegerse?",
      texto: "Usar mascarillas, evitar actividades al aire libre en días contaminados y mantener buena ventilación ayuda a reducir la exposición tanto a PM2.5 como a PM10. Además, el uso de purificadores de aire con filtros HEPA en interiores puede disminuir significativamente la concentración de partículas nocivas.",
      img: "img/3.jpg",
      alt: "Persona usando mascarilla"
      },
      {
      titulo: "¿Dónde se mide el PM2.5 y PM10?",
      texto: "Se mide en estaciones de monitoreo ambiental y con sensores personales. Consulta los índices de calidad del aire en tu ciudad para ambos tipos de partículas. Algunas ciudades publican estos datos en tiempo real a través de aplicaciones móviles y sitios web oficiales.",
      img: "img/4.jpg",
      alt: "Estación de monitoreo ambiental"
      },
      {
      titulo: "Monitoreo en Tiempo Real",
      texto: "Las tecnologías modernas permiten monitorear la calidad del aire en tiempo real, tanto para PM2.5 como para PM10. Utiliza apps y dispositivos inteligentes para mantenerte informado. Algunos sensores pueden integrarse en sistemas de domótica para activar alertas o purificadores automáticamente.",
      img: "img/5.jpg",
      alt: "Tecnología de monitoreo"
      },
      {
      titulo: "Impacto en Ecosistemas",
      texto: "El PM2.5 y PM10 no solo afectan a los humanos, también dañan la vegetación y los ecosistemas acuáticos, alterando el equilibrio ambiental. Las partículas pueden depositarse en hojas, reducir la fotosíntesis y contaminar cuerpos de agua, afectando la biodiversidad.",
      img: "img/6.jpg",
      alt: "Ecosistema afectado"
      },
      {
      titulo: "Soluciones Urbanas",
      texto: "Las ciudades inteligentes implementan zonas verdes, restricciones vehiculares y tecnologías limpias para reducir la contaminación por PM2.5 y PM10. Además, la promoción del transporte público y el uso de energías renovables son estrategias clave para mejorar la calidad del aire.",
      img: "img/7.jpeg",
      alt: "Ciudad sostenible"
      },
      {
      titulo: "Curiosidades sobre PM2.5 y PM10",
      texto: "¿Sabías que el PM2.5 puede viajar cientos de kilómetros desde su fuente de origen? Incluso puede cruzar continentes transportado por el viento. Además, la Organización Mundial de la Salud estima que la contaminación por partículas finas causa millones de muertes prematuras cada año.",
      img: "img/8.jpeg",
      alt: "Curiosidades sobre partículas"
      }
    ];

    // Array de objetos para la galería de soluciones
    this.gallery = [
      {
        img: "img/Mascarillas N95.jpeg",
        title: "Mascarillas N95",
        description: "Protección efectiva contra partículas PM2.5"
      },
      {
        img: "img/Purificadores.webp",
        title: "Purificadores de Aire",
        description: "Tecnología HEPA para interiores"
      },
      {
        img: "img/Sensores.jpg",
        title: "Sensores Personales",
        description: "Monitoreo individual de calidad del aire"
      }
    ];

    // Array de objetos con información detallada adicional
    this.expandedInfo = [
      {
        titulo: "Datos importantes sobre PM2.5",
        texto: "Las partículas PM2.5 son 30 veces más delgadas que un cabello humano. En ciudades altamente contaminadas, respirar el aire durante un día equivale a fumar 25 cigarrillos. Los niveles seguros según la OMS son de 10 µg/m³ como promedio anual.",
        img: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=500&q=80",
        alt: "Visualización de partículas PM2.5"
      },
      {
        titulo: "Prevención y Control",
        texto: "Los sistemas de filtración HEPA pueden eliminar hasta el 99.97% de las partículas PM2.5. Las plantas como la Hiedra común y el Aloe Vera ayudan a purificar el aire interior. Se recomienda mantener niveles de humedad entre 30-50% para reducir las partículas suspendidas.",
        img: "https://images.unsplash.com/photo-1527195575508-5b138d14a35b?auto=format&fit=crop&w=500&q=80",
        alt: "Sistemas de purificación"
      }
    ];
  }

  // Se ejecuta cuando el componente es añadido al DOM
  // Método invocado cuando el componente se inserta en el DOM
  connectedCallback() {
  // Renderiza el contenido del componente
    this.render();
    this.setupEventListeners();
  }

  // Define los estilos CSS del componente
  getStyles() {
    return `
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
      <style>
        :host {
          --primary-color: #546E7A;
          --accent-color: #78909C;
          --text-color: #37474F;
          --bg-light: #ECEFF1;
          --highlight: #90A4AE;
        }
        
        /* Base Styles */
        .custom-background {
          min-height: 100vh;
          background: linear-gradient(135deg, var(--bg-light) 0%, #CFD8DC 100%);
          font-family: 'Roboto', sans-serif;
          padding: 2rem 0;
        }
        
        /* Card Styles */
        .content-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          backdrop-filter: blur(8px);
          border: none;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .card {
          background: white !important;
          border: none !important;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          transition: transform 0.3s ease;
        }

        /* Interactive Elements */
        .card:hover {
          transform: translateY(-5px);
        }

        .btn-custom {
          background: var(--accent-color);
          color: white;
          border: none;
          padding: 0.8rem 2rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .btn-custom:hover {
          background: var(--primary-color);
          transform: translateY(-2px);
          color: white;
        }

        /* Typography */
        .card-title {
          color: var(--primary-color) !important;
          font-weight: 600;
        }

        .card-text {
          color: var(--text-color) !important;
        }

        .section-title {
          color: var(--primary-color);
          font-weight: 700;
          margin-bottom: 2rem;
        }

        /* Images */
        img {
          border-radius: 12px;
          object-fit: cover;
        }

        /* Footer Styles */
        .footer {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          padding: 3rem 0;
          margin-top: 4rem;
          box-shadow: 0 -4px 15px rgba(0,0,0,0.05);
          border-radius: 16px 16px 0 0;
        }

        .team-member {
          text-align: center;
          margin-bottom: 2rem;
        }

        .team-member img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          margin-bottom: 1rem;
          transition: transform 0.3s ease;
        }

        .team-member img:hover {
          transform: scale(1.05);
        }

        .copyright {
          text-align: center;
          color: var(--text-color);
          padding-top: 2rem;
          border-top: 1px solid var(--bg-light);
          margin-top: 2rem;
        }
      </style>
    `;
  }

  // Renderiza el contenido principal en formato de tarjetas
  renderMainContent() {
    return `
      <section class="content-card">
        <div class="row g-4">
          ${this.content.map(item => this.renderContentCard(item)).join('')}
        </div>
      </section>
    `;
  }

  // Renderiza cada tarjeta de contenido individual
  renderContentCard(item) {
    return `
      <article class="col-12 col-md-6">
        <div class="card h-100">
          <div class="row g-0">
            <div class="col-4">
              <img src="${item.img}" alt="${item.alt}" class="img-fluid h-100">
            </div>
            <div class="col-8">
              <div class="card-body">
                <h2 class="card-title h5">${item.titulo}</h2>
                <p class="card-text">${item.texto}</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  // Renderiza la sección de galería
  renderGallery() {
    return `
      <section class="content-card">
        <h2 class="section-title text-center">Galería de Soluciones</h2>
        <div class="row g-4">
          ${this.gallery.map(item => this.renderGalleryItem(item)).join('')}
        </div>
      </section>
    `;
  }

  // Renderiza cada elemento de la galería
  renderGalleryItem(item) {
    return `
      <div class="col-12 col-md-4">
        <div class="card h-100">
          <img src="${item.img}" alt="${item.title}" class="card-img-top">
          <div class="card-body">
            <h3 class="card-title h5">${item.title}</h3>
            <p class="card-text">${item.description}</p>
          </div>
        </div>
      </div>
    `;
  }

  // Renderiza la sección de información expandida (oculta por defecto)
  renderExpandedInfo() {
    return `
      <div class="expanded-info collapse">
        <div class="content-card">
          <div class="row g-4">
            ${this.expandedInfo.map(item => this.renderExpandedItem(item)).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // Renderiza cada elemento de la información expandida
  renderExpandedItem(item) {
    return `
      <div class="col-12">
        <div class="card">
          <div class="row g-0">
            <div class="col-md-8">
              <div class="card-body">
                <h3 class="card-title">${item.titulo}</h3>
                <p class="card-text">${item.texto}</p>
              </div>
            </div>
            <div class="col-md-4">
              <img src="${item.img}" alt="${item.alt}" class="img-fluid h-100">
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderFooter() {
    return `
      <footer class="footer">
        <div class="container">
          <div class="row mb-5">
            <div class="col-12">
              <h2 class="section-title text-center mb-5">Nuestro Equipo</h2>
            </div>
            ${this.renderTeamMembers()}
          </div>
          <div class="copyright">
            <p>© ${new Date().getFullYear()} Proyecto Integrador PM2.5. Todos los derechos reservados.</p>
            <p class="small">Desarrollado por el equipo de la materia 21602 - Program Integrativa de Compone</p>
          </div>
        </div>
      </footer>
    `;
  }

  renderTeamMembers() {
    const team = [
      { name: 'Josue Zambrano', role: 'Desarrollo Frontend' },
      { name: 'Cesar Arico', role: 'Desarrollo Backend' },
      { name: 'Alan Herrera', role: 'Diseño UI/UX' }
    ];

    return team.map(member => `
      <div class="col-md-4">
        <div class="team-member">
          <img src="https://ui-avatars.com/api/?name=${member.name.replace(' ', '+')}&background=random" 
               alt="${member.name}">
          <h4>${member.name}</h4>
          <p>${member.role}</p>
        </div>
      </div>
    `).join('');
  }

  // Renderiza el contenido del componente
  render() {
    this.shadowRoot.innerHTML = `
      ${this.getStyles()}
      <div class="custom-background">
        <div class="container">
          ${this.renderMainContent()}
          ${this.renderGallery()}
          <div class="text-center my-4">
            <button class="btn btn-custom ver-mas-btn">Ver más información</button>
          </div>
          ${this.renderExpandedInfo()}
          ${this.renderFooter()}
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    `;
  }

  // Método principal de renderizado que combina todos los elementos
  // Renderiza el contenido del componente
  render() {
    this.shadowRoot.innerHTML = `
      ${this.getStyles()}
      <div class="custom-background">
        <div class="container">
          ${this.renderMainContent()}
          ${this.renderGallery()}
          <div class="text-center my-4">
            <button class="btn btn-custom ver-mas-btn">Ver más información</button>
          </div>
          ${this.renderExpandedInfo()}
          ${this.renderFooter()}
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    `;
  }

  // Configura los eventos interactivos del componente
  setupEventListeners() {
    // Maneja el botón "Ver más" para mostrar/ocultar información adicional
    const verMasBtn = this.shadowRoot.querySelector('.ver-mas-btn');
    const expandedSection = this.shadowRoot.querySelector('.expanded-info');
    
  // Asignación de eventos a elementos DOM
    verMasBtn.addEventListener('click', () => {
      expandedSection.classList.toggle('show');
      verMasBtn.textContent = expandedSection.classList.contains('show') 
        ? 'Ver menos' 
        : 'Ver más información';
    });
  }
}

// Registra el componente web personalizado para su uso en HTML
window.customElements.define('educate-section', EducateSection);