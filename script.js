document.getElementById('listar').addEventListener('click', function() {
    var email = document.getElementById('email').value;
    fazerRequisicao(2, undefined, undefined, email, undefined);
});

document.getElementById('atualizar').addEventListener('click', function() {
    var id = document.getElementById('atualizar-id').value;
    var nome = document.getElementById('atualizar-nome').value;
    var email = document.getElementById('atualizar-email').value;
    var senha = document.getElementById('atualizar-senha').value;
    fazerRequisicao(3, id, nome, email, senha);
});

document.getElementById('deletar').addEventListener('click', function() {
    var id = document.getElementById('deletar-id').value;
    fazerRequisicao(4, id, undefined, undefined, undefined);
});

function fazerRequisicao(tipo, id, nome, email, senha) {
    var url = `http://localhost/ledidi/index.php?tipo=${tipo}`;

    if (id !== null && id !== undefined && id !== '') {
        url += `&id=${id}`;
    }

    if (nome !== undefined) {
        url += `&nome=${nome}`;
    }

    if (email !== undefined && email !== '') {
        url += `&email=${email}`;
    }

    if (senha !== undefined) {
        url += `&senha=${senha}`;
    }

    console.log(`URL da requisição: ${url}`);

    fetch(url, { method: 'GET' })
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.statusText);
        }
        return response.json();
    })
    .then(function(data) {

        if (!data) {
            throw new Error('Dados recebidos estão vazios ou indefinidos.');
        }

        if (tipo == 3) {
            alert("Dados atualizados com sucesso!");
        } else if (tipo == 4) {
            alert("Conta deletada com sucesso!");
        } else {
            // Operação de listar
            let tableBody = document.querySelector("table tbody");
            let linhas = "";

            if (Array.isArray(data)) {
                for (var i = 0; i < data.length; i++) {
                    linhas += "<tr>"
                        + `<td>${data[i].id}</td>`
                        + `<td>${data[i].nome}</td>`
                        + `<td>${data[i].email}</td>`
                        + `<td>${data[i].senha}</td>`
                        + "</tr>";
                }
            } else {
                linhas += "<tr>"
                    + `<td>${data.id}</td>`
                    + `<td>${data.nome}</td>`
                    + `<td>${data.email}</td>`
                    + `<td>${data.senha}</td>`
                    + "</tr>";
            }

            tableBody.innerHTML = linhas;
        }
    })
    .catch(function(error) {
        console.error(error);
        alert("Erro na requisição: " + error.message);
    });

    // Limpa o campo de e-mail após a requisição ser feita
    document.getElementById('email').value = "";
}
