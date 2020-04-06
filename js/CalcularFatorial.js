
function CalcularFat(){
    var numeroFat = document.getElementById('numeroFat').value
    numeroFat = parseInt(numeroFat)
    var result = 1
    
    for (var i =1 ; i <= numeroFat ;  i++) {
    result  *= i
    }
    
    var msgFat =  document.getElementById('msgFat')
    msgFat.innerHTML= `${numeroFat} `
    var fat = "";
    console.log(fat)
    
    for(i = 1; i < numeroFat  ; i++){
    
    fat += `${i}. `
    
    }
    var fatIn = fat.split('').reverse().join('');
    msgFat.innerHTML+= `${fatIn}  = ${result}`
    }
    
    var numeros = []
    //numeros.length = prompt("Digite qauntos numeros você deseja adicionar")
    var tamanho = numeros.length
    //console.log(tamanho)
    
    for(var z = 0 ; z < tamanho ; z++ ){
    numeros.push(prompt("digite um numero"))
    }
    var numeroPar = []
    var numeroImpar = []
    
    for (var f = 0 ; f < numeros.length ; f++){
     if(numeros[f] % 2 == 0 ){
     numeroPar.push(numeros[f])
    
     }
     else { numeroImpar.push(numeros[f])
     }
     }
    
    
    for(i = 0 ; i < numeros.length ; i ++){
    if (numeroPar[i] != undefined){
    
    console.log("Este numero é par: " + numeroPar[i] + " e foi adicionado ao array de numeros pares" )}
    
    if(numeroImpar[i] != undefined){
    console.log("Este numero é impar: " + numeroImpar[i] + " e foi adicionado ao array de numeros impares" )}
    
    }