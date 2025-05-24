// Archivo comentado automáticamente para documentación del sistema

// Definición de clase personalizada
class NavSidebar extends HTMLElement {
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

  }

  // Método invocado cuando el componente se inserta en el DOM
  connectedCallback() {
  // Renderiza el contenido del componente
    this.render();
    this.setupEventListeners();
  }

  setupEventListeners() {
    this.shadowRoot.querySelectorAll('nav a').forEach(link => {
  // Asignación de eventos a elementos DOM
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const event = new CustomEvent('section-change', {
          bubbles: true,
          composed: true,
          detail: { section: link.getAttribute('href').substring(1) }
        });
        this.dispatchEvent(event);
      });
    });
  }

  // Renderiza el contenido del componente
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .sidebar {
          width: 240px;
          background: #1976d2;
          color: #fff;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 24px 16px;
          box-sizing: border-box;
        }
        .logo h1 {
          margin: 0 0 24px 0;
          font-size: 2em;
          letter-spacing: 2px;
        }
        nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
          width: 100%;
        }
        nav li {
          margin-bottom: 16px;
        }
        nav a {
          color: #fff;
          text-decoration: none;
          font-size: 1.1em;
          display: flex;
          align-items: center;
          padding: 8px 12px;
          border-radius: 6px;
          transition: background 0.2s;
        }
        nav a.active, nav a:hover {
          background: #1565c0;
        }
        .user-section {
          margin-top: auto;
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .login-btn {
          background: #fff;
          color: #1976d2;
          border: none;
          border-radius: 4px;
          padding: 8px 16px;
          font-size: 1em;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .login-btn:hover {
          background: #1565c0;
          color: #fff;
        }
      </style>
      <aside class="sidebar">
        <div class="logo">
          <h1>AirGuard</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#dashboard" class="active">Dashboard</a></li>
            <li><a href="#recommendations">Recomendaciones</a></li>
            <li><a href="#educational">Educativo</a></li>
            <li><a href="#about">Acerca de</a></li>
          </ul>
        </nav>
      </aside>
    `;
  }
}

window.customElements.define('nav-sidebar', NavSidebar);