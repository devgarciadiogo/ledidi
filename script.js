    document.getElementById('cadastro').addEventListener('click', function() {
        var nome = document.getElementById('nomeCadastro').value;
        var email = document.getElementById('emailCadastro').value;
        var senha = document.getElementById('senhaCadastro').value;
        fazerRequisicao(1, undefined, nome, email, senha);
        fazerRequisicao(2, undefined, undefined, undefined, undefined);
        window.location.href = 'acesso.html';
    });
        
    document.getElementById('listar').addEventListener('click', function() {
        fazerRequisicao(2, undefined, undefined, undefined, undefined);
    });

    document.getElementById('atualizar').addEventListener('click', function (){
        var id = document.getElementById('id').value;
        var nome = document.getElementById('nomeCadastro').value;
        var email = document.getElementById('emailCadastro').value
        var senha = document.getElementById('senhaCadastro').value

        fazerRequisicao(3, id, nome, email, senha);
        fazerRequisicao(2, undefined, undefined, undefined, undefined)
    });

    document.getElementById('deletar').addEventListener('click', function(){
        var id = document.getElementById('id').value

        fazerRequisicao(4, id, undefined, undefined, undefined)
        fazerRequisicao(2, undefined, undefined, undefined, undefined)
    });

    function fazerRequisicao(tipo, id, nome, telefone, email, senha){
        var url = `http://localhost/ledidi/index.php?tipo=${tipo}&`

        if (id != undefined){
            url += `id=${id}&`;
        }

        if (nome != undefined) {
            url += `nome=${nome}&`;
        }

        if (email != undefined){
            url += `email=${email}&`
        }

        if (senha != undefined){
            url += `senha=${senha}&`
        }

        fetch(url, { method: 'get'}).then(function(response){
            if (tipo == 2) {
                return response.json();
            }
        }).then(function (data) {
            let clientes = data;

            let table = document.getElementsByTagName("table")

            let linhas = "";

            for (var i = 0; i < clientes.length; i++) {
            linhas += "<tr>"
            +   `<td>${clientes[i].id}</td>`
            +   `<td>${clientes[i].nome}</td>`
            +   `<td>${clientes[i].email}</td>`
            +   `<td>${clientes[i].senha}</td>`
            + "</tr>"
            }

            table[0].innerHTML = ""

            table[0].innerHTML = "<tr>"
            +"<th>id</th>"
            +"<th>Nome</th>"
            +"<th>Email</th>"
            +"<th>Senha</th>"
            +"</tr>"
            + linhas;
            })


        .catch(function(error) {
            console.log(error);
        });

        document.getElementById('id').value = "";
        document.getElementById('#nomeCadastro').value = "";
        document.getElementById('#emailCadastro').value = "";
        document.getElementById('#senhaCadastro').value = "";
    }































    /*$(document).ready(function() {
        $('#formCadastro').submit(function(event) {
            event.preventDefault(); // Impede o envio do formulário

            var nome = $('#nomeCadastro').val().trim();
            var email = $('#emailCadastro').val().trim();
            var senha = $('#senhaCadastro').val().trim();

            if (nome === '' || email === '' || senha === '') {
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
    });*/
