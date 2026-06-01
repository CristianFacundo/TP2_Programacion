document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos todos los botones de favoritos
    const favButtons = document.querySelectorAll('.btn-toggle-fav');

    favButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Encontramos la tarjeta padre más cercana
            const card = this.closest('.card-destacado');
            
            // Usamos classList.toggle para agregar o quitar la clase 'is-favorite'
            card.classList.toggle('is-favorite');

            // Cambiamos el texto del botón dependiendo del estado actual
            if (card.classList.contains('is-favorite')) {
                this.textContent = 'Quitar Favorito';
            } else {
                this.textContent = '❤ Marcar Favorito';
            }
        });
    });
});
