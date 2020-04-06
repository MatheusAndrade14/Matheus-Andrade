
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
    
    