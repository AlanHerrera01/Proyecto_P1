// Archivo comentado automáticamente para documentación del sistema

// Definición de clase personalizada
class DataCrud extends HTMLElement {
  // Constructor para inicializar propiedades y estado
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.editingId = null; // Añadimos variable para controlar el modo edición


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

        // Cargar datos desde localStorage o usar datos por defecto
        this.recommendations = JSON.parse(localStorage.getItem('recommendations')) || [
            { id: 1, title: 'Usar mascarilla', description: 'En días de alta contaminación' },
            { id: 2, title: 'Evitar ejercicio al aire libre', description: 'Cuando el índice de calidad del aire es malo' }
        ];
    }

  // Método invocado cuando el componente se inserta en el DOM
    connectedCallback() {
  // Renderiza el contenido del componente
        this.render();
  // Asignación de eventos a elementos DOM
        this.addEventListeners(); // Cambiamos setupEventListeners por addEventListeners
    }

  // Renderiza el contenido del componente
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
                .edit-btn {
                    background: #ffc107;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    padding: 8px 16px;
                    margin-right: 8px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .edit-btn:hover {
                    background: #e0a800;
                }
            </style>
            <div class="crud-container">
                <h2>Recomendaciones de Protección</h2>
                <form class="recommendation-form">
                    <input type="text" id="title" placeholder="Título" required>
                    <textarea id="description" placeholder="Descripción" required></textarea>
                    <button type="submit">${this.editingId ? 'Actualizar' : 'Agregar'} Recomendación</button>
                </form>
                <div class="recommendations-list">
                    ${this.recommendations.map(rec => `
                        <div class="recommendation-card">
                            <h3>${rec.title}</h3>
                            <p>${rec.description}</p>
                            <div class="actions">
                                <button class="edit-btn" data-id="${rec.id}">Editar</button>
                                <button class="delete-btn" data-id="${rec.id}">Eliminar</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

  // Asignación de eventos a elementos DOM
    addEventListeners() {
        const form = this.shadowRoot.querySelector('.recommendation-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Previene el comportamiento por defecto
            
            const title = this.shadowRoot.querySelector('#title').value.trim();
            const description = this.shadowRoot.querySelector('#description').value.trim();
            
            if (!title || !description) return; // Validación básica
            
            if (this.editingId) {
                this.updateRecommendation(this.editingId, title, description);
                this.editingId = null;
            } else {
                this.addRecommendation(title, description);
            }
            
            // Limpiamos el formulario de manera controlada
            this.shadowRoot.querySelector('#title').value = '';
            this.shadowRoot.querySelector('#description').value = '';
            
            // Mensaje de confirmación
            const button = form.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            button.textContent = '¡Guardado!';
            button.style.background = '#28a745';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '#0066cc';
            }, 1500);
        });

        // Manejadores para botones editar y eliminar
        this.shadowRoot.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-btn')) {
                const id = parseInt(e.target.dataset.id);
                this.deleteRecommendation(id);
            } else if (e.target.classList.contains('edit-btn')) {
                const id = parseInt(e.target.dataset.id);
                this.startEditing(id);
            }
        });
    }

    startEditing(id) {
        const recommendation = this.recommendations.find(rec => rec.id === id);
        if (recommendation) {
            this.editingId = id;
            const titleInput = this.shadowRoot.querySelector('#title');
            const descriptionInput = this.shadowRoot.querySelector('#description');
            titleInput.value = recommendation.title;
            descriptionInput.value = recommendation.description;
        }
    }

    updateRecommendation(id, title, description) {
        this.recommendations = this.recommendations.map(rec =>
            rec.id === id ? { ...rec, title, description } : rec
        );
        this.saveToLocalStorage();
        this.render();
        this.addEventListeners(); // <-- Añade esto
    }

    addRecommendation(title, description) {
        const newId = this.recommendations.length + 1;
        this.recommendations.push({ id: newId, title, description });
        this.saveToLocalStorage();
        this.render();
        this.addEventListeners(); // <-- Añade esto
    }

    deleteRecommendation(id) {
        this.recommendations = this.recommendations.filter(rec => rec.id !== id);
        this.saveToLocalStorage();
        this.render();
        this.addEventListeners(); // <-- Añade esto
    }

    // Nuevo método para guardar en localStorage
    saveToLocalStorage() {
        localStorage.setItem('recommendations', JSON.stringify(this.recommendations));
    }
}

customElements.define('data-crud', DataCrud);