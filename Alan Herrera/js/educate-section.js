class EducateSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.content = [
      { titulo: "¿Qué es el PM2.5?", texto: "Son partículas muy pequeñas que penetran profundamente en los pulmones y el sistema circulatorio." },
      { titulo: "Efectos en la salud", texto: "La exposición prolongada puede causar problemas respiratorios, cardiovasculares y aumentar la mortalidad." },
      { titulo: "¿Cómo protegerse?", texto: "Usar mascarillas, evitar actividades al aire libre en días contaminados y mantener buena ventilación." }
    ];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        section {
          padding: 1rem;
          font-family: Arial, sans-serif;
          background: #f0f4f8;
          border-radius: 10px;
          max-width: 700px;
          margin: 1rem auto;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        h2 {
          color: #003366;
          margin-bottom: 0.5rem;
        }
        p {
          color: #555;
          line-height: 1.5;
          margin-bottom: 1rem;
        }
        article {
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #ddd;
          animation: fadeIn 0.5s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      </style>
      <section>
        ${this.content.map(item => `
          <article>
            <h2>${item.titulo}</h2>
            <p>${item.texto}</p>
          </article>
        `).join('')}
      </section>
    `;
  }
}

window.customElements.define('educate-section', EducateSection);
