do{

var cant = prompt("Digite la cantidad de productos que vendió");
var v=false,sum=0;
var precio = new Array();
for(var i=1;i<=cant;i++){
     precio[i] = prompt("Digite el precio del producto "+ i);
}

document.write("<table>");
document.write("<th>Productos</th><th>Precio</th>");
    for(i = 1; i<=cant; i++){
        document.write("<tr><td>Producto "+ i +"</td><td>$ "+ precio[i] +"</td></tr>");
        sum = sum + parseInt(precio[i]);
    }
document.write("<tr><td>total</td><td>$ "+ sum +"</td></tr>");
document.write("</table>");

var conf = confirm("Desea registrar otros productos?");

if(conf == true){
    v=true;
}else{
    v=false;
}

}while(v==true);