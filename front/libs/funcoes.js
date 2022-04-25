let botao = window.document.getElementById("butao")
botao.addEventListener('click', printar)
function printar(){
    let data = window.document.getElementById('data').value
    let tasks = window.document.getElementById('squads').value
    let texto = window.document.getElementById('texto').value
    let arquivos = window.document.getElementById('arwuivos').value
    let relatorio = {}
    relatorio[data] = {
        "data":data,
        "tasks_jira":tasks,
        "texto":texto,
        "arquivos":arquivos
    }
    relatorio = JSON.stringify(relatorio)

    console.log(relatorio)

    fetch('http://localhost:3333/endpoint', { method: 'POST', body: relatorio, headers: {"Content-type": "application/json; charset=UTF-8"}})
        .then(results => results.json())
        .then(console.log)

    botao.value = "Salvo!!"
   /*fetch("http://localhost:3333/")
        .then(results => results.json())
        .then(console.log)*/
}