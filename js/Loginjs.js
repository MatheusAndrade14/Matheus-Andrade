function Login(){
var login = document.getElementById('user').value
var senha = document.getElementById('senha').value
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



