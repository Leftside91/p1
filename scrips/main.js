// cambia el h5 por Hola mundo
const hola = document.querySelector('h5');
hola.textContent = '¡Hola' + ' Mundo!';
// practica de if else
if (suma == 0) {
    num1=5;
} else {num2=5;
}
// practica de crear funcion
function suma(n1,n2) {
let total=n1 + n2;
return total;
}
// da una alerta con el mensaje ouch cuando se da un click en el html
document.querySelector('h3').onclick = function() {
    alert('¡Ouch! ¡Deja de pincharme!');
}
// lo anterior es igual a esto
// let miHTML = document.querySelector('html');
// miHTML.onclick = function() {
//    alert('¡Ouch! ¡Deja de pincharme!');
// }



// toma la imágen, almacena la ubicación, compara la ubicacion y la cambia
let ratafoto = document.querySelector('img');
ratafoto.onclick = function () {
    let miSrc = ratafoto.getAttribute('src');
    if (miSrc === "C:/Users/LeftSide/Desktop/Web en progreso/Clase 1/a1.jpg") {
        ratafoto.setAttribute('src','C:/Users/LeftSide/Desktop/Web en progreso/Clase 1/a2.png');
    } else {
        ratafoto.setAttribute('src', 'C:/Users/LeftSide/Desktop/Web en progreso/Clase 1/a1.jpg');
    }
}
// declara a h6 y a h4 variables
let miBoton = document.querySelector('h4');
let miTitulo = document.querySelector('h6');
// usa las varialbes para el nombre de usuario
function Usuario() {
    let miNombre = prompt('Suck it');
    //almacena en la memoria local como nombre la variable miNombre
    if (!miNombre) {
        Usuario();
    } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'morcilla, solo morcilla,' + miNombre;
    }
}
// este if es para comprobar que esta almacenado el nombre
if (!localStorage.getItem('nombre')) {
    Usuario();
}
// este else es para cuando recarga la página se recupere el nombre anterior
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Si no sale hay tabla,' + nombreAlmacenado;
}
// este te deja almacenar un nuevo nombre con cada click en h4
miBoton.onclick = function() {
    Usuario();
    }