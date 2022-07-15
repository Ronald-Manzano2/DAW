
//Funcion ABS

document.write("<h1>Objeto Math</h>");
document.write("<h2>Función abs()</h2>");
document.write("<p>La función Math.abs() devuelve el valor absoluto de un número. Es decir, devuelve x si x es positivo o cero, y la negación de x si x es negativo.</p>");
document.write("<h2>Ejemplo</h2>");
document.write("<label for='num'>Escriba un número entero: </label><input type='text' id='num'><input type='submit' value='comprobar' onclick=' comprobar();'>");

function comprobar(){
    var num = document.getElementById('num').value;
    document.write("<h3>El valor absoluto del número es: "+ Math.abs(Number(num)) +"</h3>");
}

//FUncion ROUND

document.write("<h2>Función round()</h2>");
document.write("<p>La función Math.round() retorna el valor de un número redondeado al entero más cercano.</p>");
document.write("<h2>Ejemplo</h2>");
document.write("<label for='num2'>Escriba un número decimal: </label><input type='text' id='num2'><input type='submit' value='comprobar' onclick=' comprobar2();'>");

function comprobar2(){
    var num2 = document.getElementById('num2').value;
    document.write("<h3>El valor redondeado del número es: "+ Math.round(Number(num2)) +"</h3>");
}

//Funcion CEIL

document.write("<h2>Función ceil()</h2>");
document.write("<p>La función Math.ceil() devuelve el entero mayor o igual más próximo a un número dado.</p>");
document.write("<h2>Ejemplo</h2>");
document.write("<label for='num3'>Escriba un número decimal: </label><input type='text' id='num3'><input type='submit' value='comprobar' onclick=' comprobar3();'>");

function comprobar3(){
    var num3 = document.getElementById('num3').value;
    document.write("<h3>El valor más cercano del número es: "+ Math.ceil(Number(num3)) +"</h3>");
}

//Funcion FLOOR

document.write("<h2>Función floor()</h2>");
document.write("<p>Devuelve el máximo entero menor o igual a un número.</p>");
document.write("<h2>Ejemplo</h2>");
document.write("<label for='num4'>Escriba un número decimal: </label><input type='text' id='num4'><input type='submit' value='comprobar' onclick=' comprobar4();'>");

function comprobar4(){
    var num4 = document.getElementById('num4').value;
    document.write("<h3>El valor más cercano del número es: "+ Math.floor(Number(num4)) +"</h3>");
}

//Funcion EXP

document.write("<h2>Función exp()</h2>");
document.write("<p>La función Math.exp() devuelve ex, donde x es el argumento, y e es El número de Euler (también conocido como la constante de Napier), la base de los algoritmos naturales.</p>");
document.write("<h2>Ejemplo</h2>");
document.write("<label for='num5'>Escriba un número decimal: </label><input type='text' id='num5'><input type='submit' value='comprobar' onclick=' comprobar5();'>");

function comprobar5(){
    var num5 = document.getElementById('num5').value;
    document.write("<h3>El valor euler elevado al número es: "+ Math.exp(Number(num5)) +"</h3>");
}

//Funcion LOG

document.write("<h2>Función log()</h2>");
document.write("<p>La función Math.log() devuelve la base neutral de un número (base e). La función en JavaScrcrip Math.log() es equivalente a ln(x) en matematicas.</p>");
document.write("<h2>Ejemplo</h2>");
document.write("<input type='submit' value='comprobar' onclick=' comprobar6();'>");

function comprobar6(){
    document.write("<h3>El numero aleatorio es: "+ Math.random() +"</h3>");
}