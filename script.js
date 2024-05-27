$(document).ready(function() {
    $('#cadastro').click(function(event) {
        var nome = $('#nomeCadastro').val();
        var tel = $('#telCadastro').val();
        var email = $('#emailCadastro').val();
        var senha = $('#senhaCadastro').val();

        fazerRequisição(1, undefined, nome, tel, email, senha);
        fazerRequisição(2, undefined, undefined, undefined);
        
        event.preventDefault(); // Impede o envio do formulário
    });

    $('#listar').click(function() {
        fazerRequisição(2, undefined, undefined, undefined);
    });

    $('#atualizar-dados').click(function() {
        var nome = $('#nome').val();
        var tel = $('#tel').val();
        var email = $('#email').val();
        var senha = $('#senha').val();

        fazerRequisição(3, undefined, nome, tel, email, senha);
        fazerRequisição(2, undefined, undefined, undefined);
    });

    $('#deletar-dados').click(function() {
        var nome = $('#nome').val();
        var tel = $('#tel').val();
        var email = $('#email').val();
        var senha = $('#senha').val();

        fazerRequisição(4, undefined, nome, tel, email, senha);
        fazerRequisição(2, undefined, undefined, undefined);
    });

    function fazerRequisição(tipo, id, nome, tel, email, senha) {
        var url = `http://localhost/ledidi/index.php?tipo=${tipo}&`;

        if (id != undefined) {
            url += `id=${id}&`;
        }
        if (nome != undefined) {
            url += `nome=${nome}&`;
        }
        if (tel != undefined) {
            url += `tel=${tel}&`;
        }
        if (email != undefined) {
            url += `email=${email}&`;
        }
        if (senha != undefined) {
            url += `senha=${senha}&`;
        }

        $.ajax({
            url: url,
            method: 'GET',
            dataType: 'json',
            success: function(response) {
                // Aqui você pode manipular a resposta, se necessário
                console.log(response);
            },
            error: function(xhr, status, error) {
                console.error('Erro na requisição:', xhr, status, error);
            }
        });
    }
});
