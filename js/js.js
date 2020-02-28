
function Calcular(){
var data= new Date()
var ano =  data.getFullYear()
var nascimento = document.getElementById('Nascimento').value
var msg = document.getElementById('msg')
var result = (ano - nascimento)

if(nascimento < ano && result < 120  ){


msg.innerHTML = `Você tem  ${result}  Anos de Idade`
msg.style.color = "gray"

}
else{
msg.innerHTML = "Ano inválido, tente  novamente"
msg.style.color = "#ff4d4d"
}

var sexo = document.querySelector('input[name="sexo"]:checked').value;



var img = document.getElementById('imagem')

 if(result <= 10 && sexo == 0) {

img.src= 'img/criancaH.jpg'
document.body.style.background = '#F5DEB3'


}
else
if ( result <=10 && sexo == 1){
img.src = 'img/criancaF.jpg'
document.body.style.background = '#FFDEAD'
}

else
if( result > 10 && result <=20 && sexo == 1){
img.src = 'img/AdolescenteF.jpg'
document.body.style.background = '#F0E68C'

}
else if(result > 10 && result <=20 && sexo == 0){
img.src = 'img/AdolescenteH.jpg'
document.body.style.background = '#5F9EA0'
}
else
if (result > 20 && result <=45 && sexo == 0){
img.src = 'img/AdultoH.jpg'
document.body.style.background = '#87CEFA'

}
else if(result > 20 && result <=45 && sexo == 1){
img.src = 'img/AdultoF.jpg'
document.body.style.background = '#778899'
}
else
if(result > 45 && result < 120 && sexo == 0){
img.src = 'img/IdosoH.jpg'
document.body.style.background = '#DCDCDC'

}
else if(result > 45 && result < 120 && sexo == 1){
img.src = 'img/IdosoF.jpg'
document.body.style.background = '#A52A2A'}

}
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

function CriarElemento(){

  var nFruta=document.getElementById('nFruta').value
  var vFruta=document.getElementById('vFruta').value
  var qFruta=document.getElementById('qFruta').value

  console.log(nFruta);

  var tabela1 = document.getElementById('tabela1')


  var tr = document.createElement('tr')
  tabela1.appendChild(tr)
    var td = document.createElement('td')
    tr.appendChild(td)
    var td1 = document.createElement('td')
    tr.appendChild(td1)
    var td2 = document.createElement('td')
    tr.appendChild(td2)
    var td3 = document.createElement('td')
    tr.appendChild(td3)

    var qfrutaR = qFruta.replace("," , ".")
    var vfrutaR = vFruta.replace("," , ".")

var totalForm = (qfrutaR * vfrutaR).toFixed(1)


  td.innerHTML =  ` ${nFruta} `
  td1.innerHTML = parseFloat(vfrutaR).toFixed(1)
  td2.innerHTML = parseFloat(qfrutaR).toFixed(1)
  td3.innerHTML = totalForm
  var td2 = document.createElement('td')
  var td3 = document.createElement('td')




}
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
function Inverter(){
var nome = document.getElementById('frase').value

var frase = document.getElementById('msgFrase')
var inverse =  nome.split('').reverse().join('');
frase.innerHTML= `${inverse}`
}



 //var colors = ["white", "black"];
 //var colors1 = ["black","white"];
 //var i = 0;
 //setInterval(function(){
   //document.getElementById('menu').style.background = colors[i];
	//document.getElementById('menu').style.color = colors1[i];
   //i = (i == (colors.length -1)) ? 0 : i+1;
 //},800);


 jQuery(document).ready(function(){

jQuery("#subirTopo").hide();

jQuery('#subirTopo').click(function () {
         jQuery('body,html').animate({
           scrollTop: 0
         }, 800);
        return false;
   });

jQuery(window).scroll(function () {
         if (jQuery(this).scrollTop() > 400) {
            jQuery('#subirTopo').fadeIn();
         } else {
            jQuery('#subirTopo').fadeOut();
         }
     });
});
