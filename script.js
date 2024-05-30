document.getElementById('cadastrar').addEventListener('click', function() {
    var nome = document .getElementById('*nome').value;
    var matricula = document .getElementById('matricula').value;
    fazerRequisicao(1, undefined, nome, matricula);
    fazerRequisicao(2, undefined, undefined, undefined);
});
    
document.getElementById('listar').addEventListener('click', function() {
    fazerRequisicao(2, undefined, undefined, undefined);
});

document.getElementById('atualizar').addEventListener('click', function (){
    var id = document.getElementById('id').value;
    var nome = document.getElementById('nome').value;
    var matricula = document.getElementById('matricula').value

    fazerRequisicao(3, id, nome, matricula);
    fazerRequisicao(2, undefined, undefined, undefined)
});

document.getElementById('deletar').addEventListener('click', function(){
    var id = document.getElementById('id').value

    fazerRequisicao(4, id, undefined, undefined)
    fazerRequisicao(2, undefined, undefined,undefined)
});

function fazerRequisicao(tipo, id, nome, matricula){
    var url = `http://localhost/ProjetoAlunos/back/index.php=${tipo}&`

    if (id != undefined){
        url += `id=${id}&`;
    }

    if (nome != undefined) {
        url += `nome=${nome}&`;
    }

    if (matricula != undefined){
        url += `matricula=${matricula}&`
    }

    fetch(url, { method: 'get'}).then(function(response){
        if (tipo == 2) {
            return response.json();
        }
    }).then(function (data) {
        let alunos = data;

        let table = document.getElementsByTagName("table")

        let linhas = "";

        for (var i = 0; i < alunos.lenght; i++) {
        linhas += "<tr>"
        +   `<td>${alunos[i].id}</td>`
        +   `<td>${alunos[i].id}</td>`
        +   `<td>${alunos[i].id}</td>`
        +   `<td>${alunos[i].id}</td>`
        + "</tr>"
        }

        table[0].innerHTML = ""

        table[0].innerHTML = "<tr>"
        +"<th>id</th>"
        +"<th>Nome</th>"
        +"<th>Matricula</th>"
        +"</tr>"
        + linhas;
        })


    .catch(function(error) {
        console.log(error);
    });

    document.getElementById('id').value = "";
    document.getElementById('nome').value = "";
    document.getElementsById('matricula').value = "";
   
}































$(document).ready(function() {
    $('#formCadastro').submit(function(event) {
        event.preventDefault(); // Impede o envio do formulário

        var nome = $('#nomeCadastro').val().trim();
        var tel = $('#telCadastro').val().trim();
        var email = $('#emailCadastro').val().trim();
        var senha = $('#senhaCadastro').val().trim();

        if (nome === '' || tel === '' || email === '' || senha === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Envie os dados do formulário via AJAX
        $.ajax({
            url: 'http://localhost/ledidi/index.php',
            method: 'GET',
            data: {
                tipo: 1, // Tipo 1 para adicionar
                nome: nome,
                telefone: tel,
                email: email,
                senha: senha
            },
            dataType: 'json',
            success: function(response) {
                if (response.success) {
                    alert(response.message || 'Cliente adicionado com sucesso');
                    // Redirecionar para dados.html após o cadastro bem-sucedido
                    window.location.href = 'dados.html';
                } 
            },
            error: function(xhr, status, error) {
                console.error('Erro na requisição:', xhr, status, error);
                alert('Erro na requisição: ' + xhr.responseText);
            }
        });
    });
});
