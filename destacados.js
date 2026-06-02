document.addEventListener('DOMContentLoaded', () => {
    const favButtons = document.querySelectorAll('.btn-toggle-fav');
    const spanContador = document.getElementById('contador-seleccionados');

    const actualizarContador = () => {
        const seleccionados = document.querySelectorAll('.card-destacado.is-favorite').length;
        spanContador.textContent = seleccionados;
    };

    favButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card-destacado');
            
            card.classList.toggle('is-favorite');

            if (card.classList.contains('is-favorite')) {
                this.textContent = 'Quitar Favorito';
            } else {
                this.textContent = '❤ Marcar Favorito';
            }

            actualizarContador();
        });
    });
});
