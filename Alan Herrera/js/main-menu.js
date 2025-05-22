class MainMenu extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    // Estilos
    const style = document.createElement('style');
    style.textContent = `
      :host {
        min-height: 100vh;
        width: 100vw;
        display: block;
      }
      .background {
        min-height: 100vh;
        width: 100vw;
        background: linear-gradient(120deg, #232946 70%, #b8c1ec 100%);
        background-size: 1200% 1200%;
        animation: moveGradient 18s ease infinite;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
      }
      @keyframes moveGradient {
        0% {background-position: 0% 50%;}
        50% {background-position: 100% 50%;}
        100% {background-position: 0% 50%;}
      }
      nav {
        width: 100%;
        background: #121629;
        display: flex;
        justify-content: center;
        gap: 2rem;
        padding: 1.2rem 0;
        box-shadow: 0 2px 12px #0003;
        position: sticky;
        top: 0;
        z-index: 10;
      }
      nav a {
        color: #eebf63;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.13rem;
        letter-spacing: 0.5px;
        transition: color 0.3s, background 0.2s, transform 0.2s;
        cursor: pointer;
        padding: 0.4rem 1.2rem;
        border-radius: 8px;
      }
      nav a:hover {
        color: #232946;
        background: #eebf63;
        transform: scale(1.07);
      }
      .container {
        background: rgba(35,41,70,0.98);
        border-radius: 18px;
        box-shadow: 0 8px 32px 0 rgba(44, 62, 80, 0.25);
        padding: 2.5rem 2rem 2rem 2rem;
        margin: 2.5rem 0 0 0;
        max-width: 720px;
        width: 95vw;
        font-family: 'Merriweather', 'Georgia', serif;
        color: #eaeaea;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
      .project-title {
        font-size: 2.7rem;
        font-weight: bold;
        color: #eebf63;
        text-shadow: 0 2px 8px #0007, 0 1px 0 #fff2;
        margin-bottom: 0.3rem;
        letter-spacing: 1.5px;
      }
      .subtitle {
        font-size: 1.2rem;
        color: #b8c1ec;
        margin-bottom: 1.1rem;
        font-style: italic;
      }
      .integrantes {
        background: #121629;
        border-left: 5px solid #eebf63;
        border-radius: 8px;
        padding: 0.8rem 1.2rem;
        margin-bottom: 1.3rem;
        font-size: 1.08rem;
        color: #eaeaea;
        box-shadow: 0 2px 8px #0002;
      }
      .explicacion {
        background: linear-gradient(90deg, #232946 60%, #b8c1ec22 100%);
        border-radius: 10px;
        padding: 1.1rem 1.2rem;
        font-size: 1.13rem;
        color: #eebf63;
        margin-bottom: 1.7rem;
        box-shadow: 0 2px 8px #0002;
        border-left: 4px solid #b8c1ec;
      }
      @media (max-width: 700px) {
        .container {
          padding: 1.2rem 0.5rem;
          margin-top: 1.2rem;
        }
        nav {
          flex-direction: column;
          gap: 0.8rem;
          padding: 0.7rem 0;
        }
      }
    `;

    // Estructura principal
    const background = document.createElement('div');
    background.classList.add('background');

    background.appendChild(this.navComponent());
    background.appendChild(this.containerComponent());

    shadow.appendChild(style);
    shadow.appendChild(background);
  }

  navComponent() {
    const nav = document.createElement('nav');
    const links = [
      { href: '#inicio', text: 'Inicio' },
      { href: '#acerca', text: 'Parte II' },
      { href: '#educate', text: 'Parte III' },
      { href: '#login', text: 'Educate' }
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
