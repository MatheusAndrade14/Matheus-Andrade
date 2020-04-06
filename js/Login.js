var usuarioCad = null
var senhacad = null
function Login() {
    var login = document.getElementById('user').value
    var senha = document.getElementById('senha').value
    if (login == "admin" && senha == "admin") {


        localStorage.setItem("user", login);



        localStorage.setItem("senha", senha);

        window.location = "exercicioJS.html"
    }

    else if (login == localStorage.getItem("user1") && senha == localStorage.getItem("senha1")) {
        localStorage.setItem("user", login);



        localStorage.setItem("senha", senha);
        window.location = "exercicioJS.html"
    }
    else {
        document.getElementById('form').reset();
        var erro = document.getElementById('erro')
        erro.innerHTML = "Usuario ou senha inválido <br> Tente novamente !"
        erro.style.color = "gray"




    }
}

const cont2 = "<nav id='menu'><img  style=' width: 40px;height: 45px;top: 25%;position: absolute;padding-right: 43%;' src='img/logo.jpg'><div style='width:60%; text-align:center; text-size:auto; width:50%;'><h1 style='color:gray;'> Matheus Sousa de Andrade</h1></div><img  style=' width: 40px;height: 45px;top: 25%;position: absolute;padding-left: 43%;' src='img/logo.jpg'></nav> <section class='section' ><div id='Login'><h1 style='color:gray;'> Login </h1><form id='form' action='javascript:Login()'><label>Usuario:</label><input class='campos'type='text' id='user' autofocus placeholder='Login' required><br><label>Senha:</label><input class='campos' type='password' id='senha' placeholder='Senha' required><br><br><input class='btn' type='submit' value='Login'><p id='erro'></p><br></div></form><p style='color:gray;'id='erros'></p><p><a style='text-decoration: none ;' href='javascript:cadastrar()'>Quero me cadastrar</a></p></section> <footer><p style='padding-top:250px;'>&copy; MatheusAndrade </p></footer><div style='margin-top: 68px; ;background-color:white ; width: 100%; height: 50px;    display: flex;align-items: center; justify-content: center; '> <a  href='https://www.linkedin.com/in/matheusandrade14/'> <img src='img/linkedin.png' alt='linkedin' style='width: 30px;height: 30px;'></a></div>"

function VoltarLogin() {
    document.body.innerHTML = cont2
}
