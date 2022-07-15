var numero = prompt("Digite un número entero");
var par=0,i=0,cont=0,sumPar=0,j=0;7
var max=0, min=0;

document.write("<h1>Cantidad de cifras: "+ numero.length +"</h1>");


for(i=0;i<=numero.length;i++){
    par = parseInt(numero[i])%2;
    if(par==0){
        cont++;
        sumPar=sumPar + parseInt(numero[i]);
    }
}

document.write("<h1>Cantidad de cifras pares: "+ cont +"</h1>");

document.write("<h1>Suma de cifras pares: "+ sumPar +"</h1>");

cont=0;
sumPar=0;
for(i=0;i<=numero.length;i++){
    impar = parseInt(numero[i])%2;
    if(impar==1){
        cont++;
        sumPar=sumPar + parseInt(numero[i]);
    }
}

document.write("<h1>Cantidad de cifras impares: "+ cont +"</h1>");

document.write("<h1>Suma de cifras impares: "+ sumPar +"</h1>");

for(i=0;i<numero.length;i++){
    if(numero[i]>max){
        max=numero[i];
    }
}

document.write("<h1>La mayor cifra es: "+ max +"</h1>");

min=numero[0];

for(i=0; i<=numero.length; i++){
    if(min>numero[i]){
        min=numero[i];
    }
}

document.write("<h1>La menor cifra es: "+ min +"</h1>");