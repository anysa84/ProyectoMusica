

    const nombre = prompt("¿Cuál es tu nombre?");
    let edad = prompt("¿Cuántos años tienes?");
    
    // Convertir edad a número para asegurarnos de que las comparaciones funcionen correctamente
    edad = Number(edad);
    
    const mensaje = `Hola, ${nombre}. Tienes ${edad} años. ¡Bienvenido!`;
    console.log(mensaje);
    
    if (nombre && nombre.length > 2 && !isNaN(edad) && edad >= 18) {
        Swal.fire({
            icon: "success",
            title: "¡Genial!",
            text: mensaje
        });
    } else {
        if (nombre.length <= 2) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Tienes que tener más de 2 letras.",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
        if (isNaN(edad) || edad < 18) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Eres menor de edad o no has introducido una edad válida."
            });
        }
    }

/* Compra de Tickets */

let ticketsDisponibles = 100;

document.getElementById('comprarTicket').addEventListener('click', comprarTicket);

function comprarTicket() {
    if (ticketsDisponibles > 0) {
        ticketsDisponibles--;
        document.getElementById('ticketsDisponibles').innerText = ticketsDisponibles;
        if (ticketsDisponibles == 0) {
            const boton = document.getElementById('comprarTicket');
            boton.innerText = "Agotado";
            boton.disabled = true;
            boton.classList.add('agotado');
        }
    }
}




/*   corazon  */

const corazon = document.getElementById('corazon');
const colores = ['#f55959', '#fdfdfd' ];


corazon.addEventListener('corazon', () => {
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    corazon = colorAleatorio;
});
