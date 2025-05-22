class MainMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
      
      <style>
        :host {
          --primary-color: #546E7A;
          --accent-color: #78909C;
          --text-color: #37474F;
          --bg-light: #ECEFF1;
          --highlight: #90A4AE;
        }
        
        .custom-background {
          min-height: 100vh;
          background: linear-gradient(135deg, var(--bg-light) 0%, #CFD8DC 100%);
          font-family: 'Roboto', sans-serif;
        }
        
        .custom-nav {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 15px rgba(0,0,0,0.08);
        }
        
        .nav-link {
          color: var(--text-color) !important;
          font-weight: 500;
          padding: 0.8rem 1.5rem !important;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .nav-link:hover {
          background: var(--accent-color);
          color: white !important;
          transform: translateY(-2px);
        }
        
        .content-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          backdrop-filter: blur(8px);
          border: none;
        }
        
        .title-text {
          color: var(--primary-color);
          font-weight: 700;
        }
        
        .subtitle-text {
          color: var(--accent-color);
        }
        
        .info-box {
          background: var(--bg-light);
          border-left: 4px solid var(--accent-color);
          border-radius: 8px;
        }
      </style>

      <div class="custom-background">
        <nav class="navbar navbar-expand-lg custom-nav sticky-top">
          <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul class="navbar-nav gap-3">
                <li class="nav-item">
                  <a class="nav-link" href="#inicio">Inicio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#acerca">Acerca de</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#educate">Educate</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#login">Login/Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="container py-5">
          <div class="content-card p-5">
            <h1 class="display-4 title-text mb-3">Proyecto Integrador</h1>
            <h3 class="subtitle-text mb-4 fw-light">
              Materia: 21602 - Program Integrativa de Compone
            </h3>
            
            <div class="info-box p-3 mb-4">
              <strong>Integrantes:</strong> Josue Zambrano, Cesar Arico, Alan Herrera
            </div>
            
            <div class="info-box p-4">
              <p class="lead text-secondary">
                Plataforma educativa interactiva basada en <b>Web Components</b> para la materia 
                <b>21602 - Program Integrativa de Compone</b>.<br><br>
                El objetivo es fomentar el aprendizaje colaborativo y el acceso a recursos académicos, 
                integrando módulos informativos, ejercicios y autenticación personalizada.<br><br>
                Inspirado en el ambiente universitario y el desarrollo web moderno, este proyecto 
                simula una experiencia de aula digital, promoviendo el desarrollo de competencias 
                y el trabajo en equipo.
              </p>
            </div>
          </div>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    `;
  }

  navComponent() {
    const nav = document.createElement('nav');
    const links = [
      { href: '#inicio', text: 'Inicio' },
      { href: '#acerca', text: 'Acerca de' },
      { href: '#educate', text: 'Educate' },
      { href: '#login', text: 'Login/Logout' }
    ];
    links.forEach(link => {
      const a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.text;
      nav.appendChild(a);
    });
    return nav;
  }

  titleComponent() {
    const title = document.createElement('div');
    title.classList.add('project-title');
    title.textContent = 'Proyecto Integrador';
    const subtitle = document.createElement('div');
    subtitle.classList.add('subtitle');
    subtitle.textContent = 'Materia: 21602 - Program Integrativa de Compone';
    const fragment = document.createDocumentFragment();
    fragment.appendChild(title);
    fragment.appendChild(subtitle);
    return fragment;
  }

  integrantesComponent() {
    const integrantes = document.createElement('div');
    integrantes.classList.add('integrantes');
    integrantes.innerHTML = '<strong>Integrantes:</strong> Josue Zambrano, Cesar Arico, Alan Herrera';
    return integrantes;
  }

  explicacionComponent() {
    const explicacion = document.createElement('div');
    explicacion.classList.add('explicacion');
    explicacion.innerHTML = `
      Plataforma educativa interactiva basada en <b>Web Components</b> para la materia <b>21602 - Program Integrativa de Compone</b>.<br>
      El objetivo es fomentar el aprendizaje colaborativo y el acceso a recursos académicos, integrando módulos informativos, ejercicios y autenticación personalizada.<br>
      Inspirado en el ambiente universitario y el desarrollo web moderno, este proyecto simula una experiencia de aula digital, promoviendo el desarrollo de competencias y el trabajo en equipo.
    `;
    return explicacion;
  }

  containerComponent() {
    const container = document.createElement('section');
    container.classList.add('container');
    container.appendChild(this.titleComponent());
    container.appendChild(this.integrantesComponent());
    container.appendChild(this.explicacionComponent());
    return container;
  }
}

window.customElements.define('main-menu', MainMenu);
