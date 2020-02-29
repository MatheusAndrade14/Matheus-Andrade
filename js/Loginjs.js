function Login(){
var login = document.getElementById('user').value

localStorage.setItem("user", login);

var senha = document.getElementById('senha').value

localStorage.setItem("senha", senha);

console.log(login)
console.log(senha)

if(login == "admin" && senha == "admin"){

window.location = "exercicioJS.html"
}
else{
var erro = document.getElementById('erro')
erro.innerHTML = "Usuario ou senha inválido <br> Tente novamente !"
erro.style.color = "gray"


}
}
