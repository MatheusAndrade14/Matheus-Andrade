
function CalcularIMC() {

    var peso = document.getElementById('peso').value
    
    var altura = document.getElementById('altura').value
    
    console.log(altura)
    
    
    pesoR = peso.replace("," , ".")
    alturaR = altura.replace("," , ".")
    
    
    var imc = pesoR / (alturaR * alturaR)
    
    
    
    
    var msgIMC = document.getElementById('imc')
    
    msgIMC.innerHTML= `O seu imc é ${imc.toFixed(2)}`
    
    var normal1= document.getElementById('normal1')
    var normal2= document.getElementById('normal2')
    normal1.innerHTML= "Peso Normal:"
    normal2.innerHTML= "IMC entre 20 e 24"
    
    var acima1= document.getElementById('acima1')
    var acima2= document.getElementById('acima2')
    acima1.innerHTML= "Acima do Peso:"
    acima2.innerHTML= "IMC entre 25 e 29"
    
    var obeso1 = document.getElementById('obesidade1')
    var obeso2 = document.getElementById('obesidade2')
    obeso1.innerHTML= "Obesidade:"
    obeso2.innerHTML= "IMC entre 30 e 34"
    
    var morbida1 = document.getElementById('morbida1')
    var morbida2 = document.getElementById('morbida2')
    morbida1.innerHTML= "Obesidade Morbida"
    morbida2.innerHTML= "IMC Superior a 35"
    
     var stylediv1 = document.getElementById('normal')
     var stylediv2 = document.getElementById('acima')
     var stylediv3 = document.getElementById('obesidade')
     var stylediv4 = document.getElementById('morbida')
    
    stylediv1.style.width = '180px'
    stylediv2.style.width = '180px'
    stylediv3.style.width = '180px'
    stylediv4.style.width = '180px'
    
    var feed = document.getElementById('feed')
    
    if(imc < 20){
    feed.innerHTML= "Eita, Você não acha que está muito magra(o) ? "
    
    }
     if(imc >= 20 && imc < 25){
     feed.innerHTML= "Parabéns, O seu Peso é ideal !"
     stylediv1.style.border = 'solid 2px'
     stylediv1.style.boxShadow = '2px 5px 2px rgba(0,0,0,0.4)'
     stylediv1.style.borderColor = '#808080'
     stylediv4.style.boxShadow = 'none'
     stylediv4.style.borderColor = 'white'
     stylediv2.style.boxShadow = 'none'
     stylediv2.style.borderColor = 'white'
     stylediv3.style.boxShadow = 'none'
     stylediv3.style.borderColor = 'white'
    }
    
    else if (imc >= 25 && imc < 30){
    feed.innerHTML= "Quase lá, Você precisa emagrecer um pouco <br> Só está com sobre peso !"
    stylediv2.style.border = 'solid 2px'
    stylediv2.style.boxShadow = '2px 5px 2px rgba(0,0,0,0.4)'
    stylediv2.style.borderColor = '#808080'
    stylediv1.style.boxShadow = 'none'
    stylediv1.style.borderColor = 'white'
    stylediv4.style.boxShadow = 'none'
    stylediv4.style.borderColor = 'white'
    stylediv3.style.boxShadow = 'none'
    stylediv3.style.borderColor = 'white'
    }
    else if (imc >= 30 && imc < 35){
    feed.innerHTML= "Ooow, Tome cuidado com seu peso <br> Você está com Obesidade !"
    stylediv3.style.border = 'solid 2px'
    stylediv3.style.boxShadow = '2px 5px 2px rgba(0,0,0,0.4)'
    stylediv3.style.borderColor = '#808080'
    stylediv1.style.boxShadow = 'none'
    stylediv1.style.borderColor = 'white'
    stylediv2.style.boxShadow = 'none'
    stylediv2.style.borderColor = 'white'
    stylediv4.style.boxShadow = 'none'
    stylediv4.style.borderColor = 'white'
    }
    else if (imc > 35){
    feed.innerHTML= "Poxa, hora de emagrecer <br> Você está com Obesidade Morbida !"
    stylediv4.style.border = 'solid 2px'
    stylediv4.style.boxShadow = '2px 5px 2px rgba(0,0,0,0.4)'
    stylediv4.style.borderColor = '#808080'
    stylediv1.style.boxShadow = 'none'
    stylediv1.style.borderColor = 'white'
    stylediv2.style.boxShadow = 'none'
    stylediv2.style.borderColor = 'white'
    stylediv3.style.boxShadow = 'none'
    stylediv3.style.borderColor = 'white'
    }
    
    
    }
    
    function CalcularTot(){
    var frutas = document.getElementsByClassName('produto')
    var frutasvalor = document.getElementsByClassName('valor')
    var frutasqtd = document.getElementsByClassName('quantidade')
    
    
    var frutasvalorNumero = parseInt(frutasvalor[0].textContent)
    var frutasqtdNumero = parseInt(frutasqtd[0].textContent)
    
    var frutasvalorNumero1 = parseInt(frutasvalor[1].textContent)
    var frutasqtdNumero1 = parseInt(frutasqtd[1].textContent)
    
    var frutasvalorNumero2 = parseInt(frutasvalor[2].textContent)
    var frutasqtdNumero2 = parseInt(frutasqtd[2].textContent)
    
    var totalF1 = frutasqtdNumero * frutasvalorNumero
    var total1 = document.getElementById('total1')
    total1.innerHTML = `${totalF1.toFixed(1)}`
    
    var totalF2 = frutasqtdNumero1 * frutasvalorNumero1
    var total2 = document.getElementById('total2')
    total2.innerHTML = `${totalF2.toFixed(1)}`
    
    var totalF3 = frutasqtdNumero2 * frutasvalorNumero2
    var total3 = document.getElementById('total3')
    total3.innerHTML = `${totalF3.toFixed(1)}`
    }