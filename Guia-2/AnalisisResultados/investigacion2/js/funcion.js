document.write("<h1>Funciones push y pop</h1>");
document.write("<h2>Método push()</h2>");
document.write("<p>El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.</p>");
document.write("<h2>Ejemplo</h2>");
var frutas = ["papaya","cereza","banana","toronja"];
document.write("Las frutas son:<br>");
for(var i = 0;i<frutas.length;i++){
    document.write("- "+frutas[i]+"<br>");
}
document.write("Desea añadir más?");
document.write("<input type='text' id='fru'><input type='submit' value='agregar' onclick=' Agregar();'");
function Agregar(){
    var newfruta = document.getElementById('fru').value;
    frutas.push(newfruta);

    document.write("Las frutas son:<br>");
    for(var i = 0;i<frutas.length;i++){
        document.write("- "+frutas[i]+"<br>");
    }
}
document.write("<h2>Método pop</h2>");
document.write("<p>El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.</p>");
document.write("<h2>Ejemplo</h2>");
document.write("Las frutas son:<br>");
for(var i = 0;i<frutas.length;i++){
    document.write("- "+frutas[i]+"<br>");
}
document.write("<input type='submit' value='modificar' onclick=' modificar();'>");
function modificar(){
    frutas.pop();

    document.write("Las frutas son:<br>");
    for(var i = 0;i<frutas.length;i++){
        document.write("- "+frutas[i]+"<br>");
    }
}

document.write("<h2>Función reverse()</h2>");
document.write("<p>El método reverse() invierte el orden de los elementos de un array. El primer elemento pasa a ser el último y el último pasa a ser el primero.</p>"),
document.write("Las frutas son:<br>");
for(var i = 0;i<frutas.length;i++){
    document.write("- "+frutas[i]+"<br>");
}
document.write("<input type='submit' value='invertir' onclick=' invertir();'>");
function invertir(){
    frutas.reverse();

    document.write("Las frutas son:<br>");
    for(var i = 0;i<frutas.length;i++){
        document.write("- "+frutas[i]+"<br>");
    }
}