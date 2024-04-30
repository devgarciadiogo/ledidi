// Função para validar o formulário de agendamento
function validarFormulario() {
    // Obtém os valores dos campos do formulário
    var nome = document.getElementById('nome-cadastro').value;
    var email = document.getElementById('email-cadastro').value;
    var senha = document.getElementById('senha-cadastro').value;
    var telefone = document.getElementById('tel-cadastro').value;
    var dataHora = document.getElementById('date-cadastro').value;

    // Verifica se os campos obrigatórios estão vazios
    if (nome === '' || email === '' || senha === '' || telefone === '' || dataHora === '') {
        // Exibe uma mensagem de erro para o usuário
        alert('Por favor, preencha todos os campos obrigatórios.');
        // Impede o envio do formulário
        return false;
    }
    // Se todos os campos obrigatórios foram preenchidos, permite o envio do formulário
    return true;
}

// Adiciona um event listener para o evento de envio do formulário
document.getElementById('form-agendamento').addEventListener('submit', function(event) {
    // Chama a função de validação do formulário
    if (!validarFormulario()) {
        // Se a validação falhar, impede o envio do formulário
        event.preventDefault();
    }
});
