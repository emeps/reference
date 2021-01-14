// //Pegando dados em JSON
// fetch('pessoas.json').then(resposta => resposta.json()).then(json => carregaDados(json))
axios('pessoas.json').then(resposta =>{
  carregaDados(resposta.data)
})
function carregaDados(json){
const table = document.createElement('table')
for( let pessoa of json){
  const tr = document.createElement('tr')
  let td = document.createElement('td')
  
  td.innerHTML = `Nome: ${pessoa.nome}`
  tr.appendChild(td)

  td = document.createElement('td')
  td.innerHTML = `Idade: ${pessoa.idade}`
  tr.appendChild(td)

  td = document.createElement('td')
  td.innerHTML = `Salário (R$): ${pessoa.salario}`
  tr.appendChild(td)

  table.appendChild(tr)
  
}
const resultado = document.querySelector('.resultado')
resultado.appendChild(table)
}