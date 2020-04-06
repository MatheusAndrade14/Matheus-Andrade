var usuarioCad = null
var senhacad = null
// setTempo(function(){document.body.innerHTML = cont1},5000);
function cadastro(){
    usuarioCad = document.getElementById('usercad').value
     senhacad = document.getElementById('senhacad').value
    
    document.getElementById('form').reset();
    var erros1 = document.getElementById('erros')

    alert('Cadastro efetuado com sucesso  \n Redirecionando para página de Login ... \n Clique e "Ok"')

    localStorage.setItem("user1", usuarioCad);
    
    localStorage.setItem("senha1", senhacad);
    var mudar = document.getElementById(mudar)




   setTimeout(function(){
    document.body.innerHTML = cont2
        
  
 });

    
}

function cadastrar(){

    const cont = "<nav id='menu'><img  style=' width: 40px;height: 45px;top: 25%;position: absolute;padding-right: 43%;' src='img/logo.jpg'><div style='width:60%; text-align:center; text-size:auto; width:50%;'><h1 style='color:gray;'> Matheus Sousa de Andrade</h1></div><img  style=' width: 40px;height: 45px;top: 25%;position: absolute;padding-left: 43%;' src='img/logo.jpg'></nav><form id='form'action='javascript:cadastro()'><section class='section'><h1 style='color:gray;' >Cadastrar</h1><form action='javascript:Cadastro()'><label>Usuario:</label><input type='text' required id='usercad'placeholder='Digite seu login' class='campos'><br><label>Senha:</label><input type='password' required placeholder='Digite sua senha' id='senhacad' class='campos'> <br><br><input type='submit'value='Cadastro' class='btn'></form><p style='color:gray;'id='erros'></p><br></div> <p> <a style='text-decoration: none;  ' href='javascript:VoltarLogin()'> Quero me Logar </a> </p> </section> <footer><p id='mudar'style='padding-top:250px;'>&copy; MatheusAndrade </p></footer><div style='margin-top: 153px; ;background-color:white ; width: 100%; height: 50px;    display: flex;align-items: center; justify-content: center; '> <a  href='https://www.linkedin.com/in/matheusandrade14/'> <img src='img/linkedin.png' alt='linkedin' style='width: 30px;height: 30px;'></a></div>"
document.body.innerHTML = cont
    
}
