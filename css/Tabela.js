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