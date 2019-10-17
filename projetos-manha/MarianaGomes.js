function somar(v1, v2){
    var resposta = v1 + v2;
    return  resposta;
   }
   function subtrair(v1, v2){
     var resposta = v1 - v2;
     return resposta;
   }
   function multiplicar(v1, v2){
    var resposta = v1 * v2;
    return resposta; 
   }
   function dividir(v1, v2){
    var resposta = v1 / v2;
       if(v1 === 0){
           console.log("A conta nao pode ser feita pois não numero divisivel por 0 ");
       }else {
           return resposta;
       }
   var a;
     var t1 = +prompt ("Digite o valor1");
     var t2 = +prompt ("Digite o valor2");
     
     a = somar(t1, t2);
    console.log ("O valor retornado pela funçao da somar é: " + a);
    
      a = subtrair(t1, t2);
    console.log ("O valor retornado pela funçao da subtrair é: " + a);
   
     a = multiplicar(t1, t2);
    console.log ("O valor retornado pela funçao da multiplicar é: " + a);
    
      a = dividir(t1, t2);
    console.log ("O valor retornado pela funçao da dividir é: " + a);
   
   