class EducateSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.content = [
      {
        titulo: "¿Qué es el PM2.5?",
        texto: "Son partículas muy pequeñas que penetran profundamente en los pulmones y el sistema circulatorio.",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        alt: "Contaminación ambiental"
      },
      {
        titulo: "Efectos en la salud",
        texto: "La exposición prolongada puede causar problemas respiratorios, cardiovasculares y aumentar la mortalidad.",
        img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
        alt: "Salud pulmonar"
      },
      {
        titulo: "¿Cómo protegerse?",
        texto: "Usar mascarillas, evitar actividades al aire libre en días contaminados y mantener buena ventilación.",
        img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
        alt: "Persona usando mascarilla"
      },
      {
        titulo: "¿Dónde se mide el PM2.5?",
        texto: "Se mide en estaciones de monitoreo ambiental y con sensores personales. Consulta los índices de calidad del aire en tu ciudad.",
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        alt: "Estación de monitoreo ambiental"
      },
      {
        titulo: "Monitoreo en Tiempo Real",
        texto: "Las tecnologías modernas permiten monitorear la calidad del aire en tiempo real. Utiliza apps y dispositivos inteligentes para mantenerte informado.",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
        alt: "Tecnología de monitoreo"
      },
      {
        titulo: "Impacto en Ecosistemas",
        texto: "El PM2.5 no solo afecta a los humanos, también daña la vegetación y los ecosistemas acuáticos, alterando el equilibrio ambiental.",
        img: "https://images.unsplash.com/photo-1500252185289-40708b7a5190?auto=format&fit=crop&w=400&q=80",
        alt: "Ecosistema afectado"
      },
      {
        titulo: "Soluciones Urbanas",
        texto: "Las ciudades inteligentes implementan zonas verdes, restricciones vehiculares y tecnologías limpias para reducir la contaminación.",
        img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=400&q=80",
        alt: "Ciudad sostenible"
      }
    ];

    this.gallery = [
      {
        img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b",
        title: "Mascarillas N95",
        description: "Protección efectiva contra partículas PM2.5"
      },
      {
        img: "https://images.unsplash.com/photo-1599687267812-75c487d09d55",
        title: "Purificadores de Aire",
        description: "Tecnología HEPA para interiores"
      },
      {
        img: "https://images.unsplash.com/photo-1573511860302-28c524319d2a",
        title: "Sensores Personales",
        description: "Monitoreo individual de calidad del aire"
      }
    ];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        section {
          padding: 1.5rem 1rem;
          font-family: 'Merriweather', 'Georgia', serif;
          background: rgba(35,41,70,0.98);
          border-radius: 24px;
          max-width: 750px;
          margin: 2rem auto;
          box-shadow: 8px 8px 32px 0 #23294633, -8px -8px 32px 0 #b8c1ec33;
          color: #eaeaea;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        article {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1.5rem;
          background: linear-gradient(90deg, #232946 60%, #b8c1ec22 100%);
          border-radius: 16px;
          padding: 1.2rem 1rem;
          box-shadow: 0 2px 8px #b8c1ec22;
          border-left: 4px solid #b8c1ec;
          animation: fadeIn 0.7s ease forwards;
        }
        article:nth-child(even) {
          flex-direction: row-reverse;
          background: linear-gradient(90deg, #b8c1ec22 0%, #232946 100%);
          border-left: 4px solid #eebf63;
        }
        .img-wrap {
          flex-shrink: 0;
          width: 110px;
          height: 110px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px #23294644;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
        }
        h2 {
          color: #eebf63;
          margin-bottom: 0.5rem;
          font-size: 1.3rem;
        }
        p {
          color: #eaeaea;
          line-height: 1.5;
          margin-bottom: 0;
          font-size: 1.08rem;
        }
        .info {
          flex: 1;
        }
        @media (max-width: 700px) {
          section {
            padding: 1rem 0.3rem;
            border-radius: 14px;
          }
          article, article:nth-child(even) {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.8rem;
            padding: 1rem 0.5rem;
          }
          .img-wrap {
            width: 100%;
            height: 160px;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px);}
          to { opacity: 1; transform: translateY(0);}
        }
      </style>
      <section>
        ${this.content.map(item => `
          <article>
            <div class="img-wrap">
              <img src="${item.img}" alt="${item.alt}">
            </div>
            <div class="info">
              <h2>${item.titulo}</h2>
              <p>${item.texto}</p>
            </div>
          </article>
        `).join('')}
        
        <div class="gallery-section">
          <h2 class="gallery-title">Galería de Soluciones</h2>
          <div class="gallery-grid">
            ${this.gallery.map(item => `
              <div class="gallery-item">
                <img src="${item.img}" alt="${item.title}">
                <div class="gallery-info">
                  <h3>${item.title}</h3>
                  <p>${item.description}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }
}

window.customElements.define('educate-section', EducateSection);
