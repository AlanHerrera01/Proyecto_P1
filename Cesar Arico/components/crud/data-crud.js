class DataCrud extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        // Cargar datos desde localStorage o usar datos por defecto
        this.recommendations = JSON.parse(localStorage.getItem('recommendations')) || [
            { id: 1, title: 'Usar mascarilla', description: 'En días de alta contaminación' },
            { id: 2, title: 'Evitar ejercicio al aire libre', description: 'Cuando el índice de calidad del aire es malo' }
        ];
    }

    connectedCallback() {
        this.render();
        this.addEventListeners();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .crud-container {
                    padding: 30px;
                    max-width: 800px;
                    margin: 0 auto;
                    background: #ffffff;
                    border-radius: 12px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                .recommendation-form {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    margin-bottom: 30px;
                    background: #f8f9fa;
                    padding: 25px;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                }
                input, textarea {
                    padding: 12px;
                    border: 2px solid #e0e0e0;
                    border-radius: 6px;
                    font-size: 16px;
                    transition: all 0.3s ease;
                    font-family: inherit;
                }
                input:focus, textarea:focus {
                    outline: none;
                    border-color: #0066cc;
                    box-shadow: 0 0 0 3px rgba(0,102,204,0.1);
                }
                textarea {
                    min-height: 100px;
                    resize: vertical;
                }
                button[type="submit"] {
                    background: #0066cc;
                    color: white;
                    padding: 12px 20px;
                    border: none;
                    border-radius: 6px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                button[type="submit"]:hover {
                    background: #0052a3;
                    transform: translateY(-1px);
                }
                .delete-btn {
                    background: #dc3545;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    padding: 8px 16px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .delete-btn:hover {
                    background: #c82333;
                }
                h2 {
                    color: #2c3e50;
                    margin-bottom: 25px;
                    font-size: 24px;
                    text-align: center;
                }
                .recommendation-item {
                    background: white;
                    padding: 20px;
                    margin: 10px 0;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                    transition: transform 0.2s ease;
                }
                .recommendation-item:hover {
                    transform: translateY(-2px);
                }
            </style>
            <div class="crud-container">
                <h2>Recomendaciones de Protección</h2>
                <form class="recommendation-form">
                    <input type="text" id="title" placeholder="Título" required>
                    <textarea id="description" placeholder="Descripción" required></textarea>
                    <button type="submit">Agregar Recomendación</button>
                </form>
                <ul class="recommendation-list">
                    ${this.recommendations.map(rec => `
                        <li class="recommendation-item" data-id="${rec.id}">
                            <div>
                                <h3>${rec.title}</h3>
                                <p>${rec.description}</p>
                            </div>
                            <div>
                                <button class="delete-btn" data-id="${rec.id}">
                                    Eliminar
                                </button>
                            </div>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }

    addEventListeners() {
        const form = this.shadowRoot.querySelector('.recommendation-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = this.shadowRoot.querySelector('#title').value;
            const description = this.shadowRoot.querySelector('#description').value;
            
            this.addRecommendation(title, description);
            form.reset();
        });

        // Nuevo: Manejador de eventos para botones de eliminar
        const deleteButtons = this.shadowRoot.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                this.deleteRecommendation(id);
            });
        });
    }

    addRecommendation(title, description) {
        const newId = this.recommendations.length + 1;
        this.recommendations.push({ id: newId, title, description });
        this.saveToLocalStorage();
        this.render();
    }

    deleteRecommendation(id) {
        this.recommendations = this.recommendations.filter(rec => rec.id !== id);
        this.saveToLocalStorage();
        this.render();
    }

    // Nuevo método para guardar en localStorage
    saveToLocalStorage() {
        localStorage.setItem('recommendations', JSON.stringify(this.recommendations));
    }
}

customElements.define('data-crud', DataCrud);