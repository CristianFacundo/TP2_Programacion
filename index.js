document.addEventListener('DOMContentLoaded', () => {
    const btnContar = document.getElementById('btn-contar');
    const spanContador = document.getElementById('contador');
    
    let cuenta = 0;

    btnContar.addEventListener('click', () => {
        cuenta++;
        spanContador.textContent = cuenta;
    });
});
