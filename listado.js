// Arreglo de objetos (libros)
const libros = [
    { id: 1, titulo: "JavaScript Moderno", autor: "Juan Perez", categoria: "Frontend", desc: "Guía completa de ES6+." },
    { id: 2, titulo: "Node.js al Extremo", autor: "Maria Lopez", categoria: "Backend", desc: "Escalando aplicaciones con Node." },
    { id: 3, titulo: "React para Principiantes", autor: "Carlos Gomez", categoria: "Frontend", desc: "Crea tu primera SPA." },
    { id: 4, titulo: "Microservicios", autor: "Ana Silva", categoria: "Arquitectura", desc: "Diseñando sistemas distribuidos." },
    { id: 5, titulo: "Python y Django", autor: "Luis Martinez", categoria: "Backend", desc: "Desarrollo web rápido y seguro." },
    { id: 6, titulo: "CSS Grid y Flexbox", autor: "Laura Torres", categoria: "Frontend", desc: "Domina el layout en la web." }
];

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('listado-container');
    const botonesFiltro = document.querySelectorAll('.btn-filter');

    // Función para renderizar los libros en el DOM
    const renderLibros = (librosMostrados) => {
        // Limpiamos el contenedor
        contenedor.innerHTML = '';

        if (librosMostrados.length === 0) {
            contenedor.innerHTML = '<p>No se encontraron libros para esta categoría.</p>';
            return;
        }

        // Iteramos para crear los elementos HTML
        librosMostrados.forEach(libro => {
            const article = document.createElement('article');
            article.className = 'card';
            
            article.innerHTML = `
                <div class="card-content">
                    <h3>${libro.titulo}</h3>
                    <p class="author">${libro.autor}</p>
                    <span class="category">${libro.categoria}</span>
                    <p>${libro.desc}</p>
                </div>
            `;
            
            contenedor.appendChild(article);
        });
    };

    // Renderizamos todos los libros al inicio
    renderLibros(libros);

    // Agregamos eventos a los botones de filtrado
    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', (e) => {
            // Manejo de clase active visual
            botonesFiltro.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            const categoria = e.target.getAttribute('data-category');

            // Lógica de filtrado usando array.filter
            if (categoria === 'Todos') {
                renderLibros(libros);
            } else {
                const librosFiltrados = libros.filter(libro => libro.categoria === categoria);
                renderLibros(librosFiltrados);
            }
        });
    });
});
