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

  // Renderiza el contenido del componente
    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    left: 0;
                    top: 0;
                    width: 200px;
                    height: 100vh;
                }
                .sidebar {
                    background-color: #0066cc;
                    color: white;
                    height: 100%;
                    padding-top: 20px;
                }
                .logo {
                    font-size: 24px;
                    padding: 20px;
                    margin-bottom: 20px;
                    font-weight: bold;
                }
                .nav-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .nav-item {
                    padding: 15px 20px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }
                .nav-item:hover {
                    background-color: #0052a3;
                }
                .nav-item.active {
                    background-color: #0052a3;
                }
                a {
                    color: white;
                    text-decoration: none;
                    display: block;
                }
            </style>
            <nav class="sidebar">
                <div class="logo">AirGuard</div>
                <ul class="nav-list">
                    <li class="nav-item">
                        <a href="#dashboard">Dashboard</a>
                    </li>
                    <li class="nav-item active">
                        <a href="#recomendaciones">Recomendaciones</a>
                    </li>
                    <li class="nav-item">
                        <a href="#educativo">Educativo</a>
                    </li>
                    <li class="nav-item">
                        <a href="#acerca">Acerca de</a>
                    </li>
                </ul>
            </nav>
        `;
    }

  // Método invocado cuando el componente se inserta en el DOM
    connectedCallback() {
  // Renderiza el contenido del componente
        this.render();
    }
}

customElements.define('nav-sidebar', NavSidebar);