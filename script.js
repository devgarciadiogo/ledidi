document.getElementById('cadastro').addEventListener('click', function(){
    var nome = document.getElementById("nomeCadastro").value;
    var tel = document.getElementById("telCadastro").value;
    var email = document.getElementById("emailCadastro").value;
    var senha = document.getElementById("senhaCadastro").value;

    fazerRequisição(1, undefined, nome, tel, email, senha);
    fazerRequisição(2, undefined,undefined, undefined);
});

document.getElementById('listar').addEventListener('click', function(){
    fazerRequisição(2, undefined, undefined, undefined);
})

document.getElementById('atualizar-dados').addEventListener('click', function(){
    var nome = document.getElementById('nome').value
    var tel = document.getElementById('tel').value
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value

    fazerRequisição(3,nome,tel,email,senha);
    fazerRequisição(2, undefined,undefined,undefined)
});

document.getElementById('deletar-dados').addEventListener('click', function(){
    var nome = document.getElementById('nome').value
    var tel = document.getElementById('tel').value
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value

    fazerRequisição(4, id, undefined, undefined, undefined, undefined)
    fazerRequisição(2, undefined, undefined, undefined, undefined, undefined)
})

function fazerRequisição(tipo, id, nome, tel, email, senha){
    var url = `http://localhost/ledidi/index.php?tipo=${tipo}&`

    if(id != undefined){
        url += `id=${id}&`
    }
    if(nome != undefined){
        url += `id=${nome}&`
    }
    if(tel != undefined){
        url += `id=${tel}&`
    }
    if(email != undefined){
        url += `id=${email}&`
    }
    if(senha != undefined){
        url += `id=${senha}&`
    }

    fetch(url, {method: 'get'}).then(function(response){
        if(tipo == 2){
            return response.json();
        }
    }).then(function(data){
        
        let alunos = data;
        
        let table = document.getElementsByName('table');

        let linhas = "";

        for (var i = 0; i < alunos.length; i++) {
        linhas += "<tr>"
        +    `<td> ${alunos[i].id}</td>`
        +    `<td> ${alunos[i].nome}</td>`
        +    `<td> ${alunos[i].tel}</td>`
        +    `<td> ${alunos[i].email}</td>`
        +     `<td> ${alunos[i].senha}</td>`
        +  "</tr>";
        }
        

        table[0].innerHTML = ""

        table[0].innerHTML = "<tr>"
        +"<th>Id</th>"
        +"<th>nome</th>"
        +"<th>tel</th>"
        +"<th>email</th>"
        +"<th>senha</th>"
        +linhas;
    })

    .catch(function(error){
        console.log(error);
    });

    document.getElementById('id').value = "";
    document.getElementById('nome').value = "";
    document.getElementById('tel').value = "";
    document.getElementById('email').value = "";
    document.getElementById('senha').value = "";
}