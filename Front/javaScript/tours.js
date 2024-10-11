const nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuántos años tienes?");
const mensaje = `Hola, ${nombre}. Tienes ${edad} años. ¡Bienvenido!`;
console.log(mensaje);



if (nombre.length>2 &&nombre!=null && edad>= 18){
    alert (mensaje);
}
else{
    if (nombre.length<=2)
        alert ("Tienes que tener mas de 2 letras");
    if (edad<18)
        alert ("Eres menor de edad!!!");
}
    
 Saludar () {
     swal ( Hola, Bienvenido, ok)
}
