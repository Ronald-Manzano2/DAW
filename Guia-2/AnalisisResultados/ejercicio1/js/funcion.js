var numero = prompt("Digite un número entero");
var par=0,i=0,cont=0,sumPar;

document.write("<h1>Cantidad de cifras: "+ numero.length +"</h1>");


for(i=0;i<=numero.length;i++){
    par = parseInt(numero[i])%2;
    if(par==0){
        cont++;
        sumPar=parseInt(numero[i]);
    }
}

document.write("<h1>Cantidad de cifras pares: "+ cont +"</h1>");

document.write("<h1>Suma de cifras pares: "+ sumPar +"</h1>")

cont=0;
for(i=0;i<=numero.length;i++){
    impar = parseInt(numero[i])%2;
    if(impar==1){
        cont++;
    }
}

document.write("<h1>Cantidad de cifras impares: "+ cont +"</h1>")