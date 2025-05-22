class MainMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Crear Shadow DOM
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: linear-gradient(135deg, #6b73ff, #000dff);
          padding: 1rem;
          display: flex;
          gap: 1.5rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        a {
          color: white;
          text-decoration: none;
          font-weight: bold;
          transition: color 0.3s ease;
          cursor: pointer;
        }
        a:hover {
          color: #ffd700;
        }
        @media (max-width: 600px) {
          nav {
            flex-direction: column;
            gap: 0.8rem;
          }
        }
      </style>
      <nav>
        <a href="#inicio">Inicio</a>
        <a href="#acerca">Acerca de</a>
        <a href="#educate">Educate</a>
        <a href="#login">Login/Logout</a>
      </nav>
    `;
  }
}

customElements.define('main-menu', MainMenu);
