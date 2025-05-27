
// Web Component <main-menu> con diseño moderno profesional
class MainMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
      <style>
        :host {
          display: block;
          --primary-color: #1E2A38;
          --accent-color: #1976D2;
          --bg-color: #F4F6F8;
          --text-color: #333;
          font-family: 'Inter', sans-serif;
        }

        .layout {
          background: var(--bg-color);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .navbar {
          background: white;
          border-bottom: 1px solid #ddd;
          padding: 0.75rem 1.5rem;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }

        .navbar-brand {
          font-weight: 600;
          color: var(--primary-color);
          font-size: 1.25rem;
        }

        .nav-link {
          margin-left: 1rem;
          cursor: pointer;
          color: var(--text-color);
          transition: color 0.3s, background 0.3s;
          padding: 0.5rem 1rem;
          border-radius: 8px;
        }

        .nav-link:hover {
          background: var(--accent-color);
          color: white;
        }

        #content {
          flex: 1;
          padding: 2rem;
        }

        .card-welcome {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          text-align: center;
        }

        .card-welcome h2 {
          color: var(--primary-color);
        }

        .card-welcome p {
          color: #555;
        }
      </style>

      <div class="layout">
        <nav class="navbar d-flex align-items-center justify-content-between">
          <div class="navbar-brand">Proyecto Unificado</div>
          <div class="d-flex">
            <span class="nav-link" id="inicioBtn">Inicio</span>
            <span class="nav-link" id="educacionBtn">Educación</span>
            <span class="nav-link" id="crudBtn">CRUD</span>
            <span class="nav-link" id="aireBtn">Calidad Aire</span>
          </div>
        </nav>
        <div id="content"></div>
      </div>
    `;

    this.setupNavigation();
  }

    setupNavigation() {
      const content = this.shadowRoot.getElementById("content");

      this.shadowRoot.getElementById("inicioBtn").onclick = () => {
        content.innerHTML = `
          <div class="card-welcome">
            <h2>Bienvenido al Proyecto Unificado</h2>
            <p>Selecciona una sección del menú para comenzar a explorar los módulos disponibles.</p>
            <ul style="text-align:left; margin: 2rem auto; max-width: 500px;">
              <li><strong>Educación:</strong> Accede a recursos y materiales educativos sobre calidad del aire y su impacto.</li>
              <li><strong>CRUD:</strong> Gestiona datos relevantes y recomendaciones personalizadas para los usuarios.</li>
              <li><strong>Calidad Aire:</strong> Visualiza información en tiempo real y gráficos sobre la calidad del aire.</li>
            </ul>
            <p style="color:#888; font-size:0.95em;">Este proyecto integra diferentes módulos para ofrecerte una experiencia completa y educativa sobre el medio ambiente.</p>
          </div>
        `;
      };

    this.shadowRoot.getElementById("educacionBtn").onclick = () => {
      content.innerHTML = "";
      const educate = document.createElement("educate-section");
      content.appendChild(educate);
    };

    this.shadowRoot.getElementById("crudBtn").onclick = () => {
      content.innerHTML = "";
      const crud = document.createElement("data-crud");
      content.appendChild(crud);
    };

    this.shadowRoot.getElementById("aireBtn").onclick = () => {
      content.innerHTML = "";
      const aire = document.createElement("air-quality-dashboard");
      const aire2 = document.createElement("air-quality-chart");
      
      content.appendChild(aire);
      content.appendChild(aire2);
    };
  }
}

customElements.define('main-menu', MainMenu);
