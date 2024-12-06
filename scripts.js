// Función para mostrar una alerta cuando se hace clic en el botón "Ver Detalles"
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('¡Gracias por interesarte en nuestros productos!');
    });
});
