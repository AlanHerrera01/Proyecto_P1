class UserRecommendations extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .recommendations-container {
                    padding: 20px;
                    background-color: #f5f5f5;
                }
                .recommendation-card {
                    background: white;
                    padding: 15px;
                    margin: 10px 0;
                    border-radius: 5px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
            </style>
            <div class="recommendations-container">
                <h2>Recomendaciones Personalizadas</h2>
                <data-crud></data-crud>
            </div>
        `;
    }
}

customElements.define('user-recommendations', UserRecommendations);