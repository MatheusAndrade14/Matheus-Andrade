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
    // document.body.style.background = '#F5DEB3'
    
    
    }
    else
    if ( result <=10 && sexo == 1){
    img.src = 'img/criancaF.jpg'
    // document.body.style.background = '#FFDEAD'
    }
    
    else
    if( result > 10 && result <=20 && sexo == 1){
    img.src = 'img/AdolescenteF.jpg'
    // document.body.style.background = '#F0E68C'
    
    }
    else if(result > 10 && result <=20 && sexo == 0){
    img.src = 'img/AdolescenteH.jpg'
    // document.body.style.background = '#5F9EA0'
    }
    else
    if (result > 20 && result <=45 && sexo == 0){
    img.src = 'img/AdultoH.jpg'
    // document.body.style.background = '#87CEFA'
    
    }
    else if(result > 20 && result <=45 && sexo == 1){
    img.src = 'img/AdultoF.jpg'
    // document.body.style.background = '#778899'
    }
    else
    if(result > 45 && result < 120 && sexo == 0){
    img.src = 'img/IdosoH.jpg'
    // document.body.style.background = '#DCDCDC'
    
    }
    else if(result > 45 && result < 120 && sexo == 1){
    img.src = 'img/IdosoF.jpg'
    // document.body.style.background = '#A52A2A'
    }
    
    }