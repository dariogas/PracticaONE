let numeroSecreto = Math.floor(Math.random()*10) +1;
let numero = 0;
let intentos = 0;
console.log(numeroSecreto);

while (intentos<3){
    intentos++;
    numero= parseInt(prompt("Ingrese un numero del 1 al 10: "));

    //console.log(numero);
    if(numero==numeroSecreto){
        alert(`Lo lograste, acertaste el numero en ${intentos} ${intentos==1? 'intento' : 'intentos'} `);
        break;
    }else{
        if(numero<numeroSecreto){
        alert("El numero secreto es mayor");}
    else{
        alert("El numero secreto es menor");
    }
   }
   if(intentos==3) alert("Lo siento, se acabaron las oportunidades");
}