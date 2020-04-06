var usuarioCad = null
var senhacad = null
// setTempo(function(){document.body.innerHTML = cont1},5000);
function cadastro(){
    usuarioCad = document.getElementById('usercad').value
     senhacad = document.getElementById('senhacad').value
    
    document.getElementById('form').reset();
    var erros1 = document.getElementById('erros')

    erros1.innerHTML = 'Cadastro efetuado com sucesso'

    localStorage.setItem("user1", usuarioCad);
    
    localStorage.setItem("senha1", senhacad);
    
}
function Login(){
    var login = document.getElementById('user').value
    var senha = document.getElementById('senha').value
if(login == "admin" && senha == "admin"){
    

    localStorage.setItem("user", login);
    
   
    
    localStorage.setItem("senha", senha);
    
window.location = "exercicioJS.html"
}

else if(login == localStorage.getItem("user1") && senha == localStorage.getItem("senha1")){
    localStorage.setItem("user", login);
    
    
    
    localStorage.setItem("senha", senha);
    window.location = "exercicioJS.html"
    }
    else{
        document.getElementById('form').reset();
    var erro = document.getElementById('erro')
    erro.innerHTML = "Usuario ou senha inválido <br> Tente novamente !"
    erro.style.color = "gray"

   
    
    
    }
    


}


function cadastrar(){
    const cont = "<nav id='menu'><img  style=' width: 40px;height: 45px;top: 25%;position: absolute;padding-right: 43%;' src='img/logo.jpg'><div style='width:60%; text-align:center; text-size:auto; width:50%;'><h1 style='color:gray;'> Matheus Sousa de Andrade</h1></div><img  style=' width: 40px;height: 45px;top: 25%;position: absolute;padding-left: 43%;' src='img/logo.jpg'></nav><form id='form'action='javascript:cadastro()'><section class='section'><h1 style='color:gray;' >Cadastrar</h1><form action='javascript:Cadastro()'><label>Usuario:</label><input type='text' id='usercad'placeholder='Digite seu login' class='campos'><br><label>Senha:</label><input type='password' placeholder='Digite sua senha' id='senhacad' class='campos'> <br><br><input type='submit'value='Cadastro' class='btn'></form><p style='color:gray;'id='erros'></p><br></div> <p> <a style='text-decoration: none;  ' href='javascript:VoltarLogin()'> Quero me Logar </a> </p> </section> <footer><p style='padding-top:250px;'>&copy; MatheusAndrade </p></footer><div style='margin-top: 68px; ;background-color:white ; width: 100%; height: 50px;    display: flex;align-items: center; justify-content: center; '> <a  href='https://www.linkedin.com/in/matheusandrade14/'> <img src='img/linkedin.png' alt='linkedin' style='width: 30px;height: 30px;'></a></div>"
document.body.innerHTML = cont
    
}
const cont1 =  "<nav id='menu'><img  style=' width: 40px;height: 45px;top: 25%;position: absolute;padding-right: 43%;' src='img/logo.jpg'><div style='width:60%; text-align:center; text-size:auto; width:50%;'><h1 style='color:gray;'> Matheus Sousa de Andrade</h1></div><img  style=' width: 40px;height: 45px;top: 25%;position: absolute;padding-left: 43%;' src='img/logo.jpg'></nav> <section class='section' ><div id='Login'><h1 style='color:gray;'> Login </h1><form id='form' action='javascript:Login()'><label>Usuario:</label><input class='campos'type='text' id='user' autofocus placeholder='Login' required><br><label>Senha:</label><input class='campos' type='password' id='senha' placeholder='Senha' required><br><br><input class='btn' type='submit' value='Login'><p id='erro'></p><br></div></form><p style='color:gray;'id='erros'></p><p><a style='text-decoration: none ;' href='javascript:cadastrar()'>Quero me cadastrar</a></p></section> <footer><p style='padding-top:250px;'>&copy; MatheusAndrade </p></footer><div style='margin-top: 68px; ;background-color:white ; width: 100%; height: 50px;    display: flex;align-items: center; justify-content: center; '> <a  href='https://www.linkedin.com/in/matheusandrade14/'> <img src='img/linkedin.png' alt='linkedin' style='width: 30px;height: 30px;'></a></div>"

function VoltarLogin(){
document.body.innerHTML = cont1
}
jQuery(document).ready(function(){
  
      
    
    jQuery("#subirTopo").hide();
    
    jQuery('#subirTopo').click(function () {
             jQuery('body,html').animate({
               scrollTop: 0
             }, 800);
            return false;
       });
    
    jQuery(window).scroll(function () {
             if (jQuery(this).scrollTop() > 200) {
                jQuery('#subirTopo').fadeIn();
             } else {
                jQuery('#subirTopo').fadeOut();
             }
         });
    });

