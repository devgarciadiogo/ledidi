<?php
// Conexão com o banco de dados
$conn = pg_connect("host=localhost dbname=seu_banco_de_dados user=seu_usuario password=sua_senha");

// Verifica se a conexão foi estabelecida com sucesso
if (!$conn) {
  echo "Erro de conexão.";
  exit;
}

// Recebe os dados do formulário
$nome = $_POST['nome'];
$telefone = $_POST['telefone'];
$email = $_POST['email'];
$senha = $_POST['senha'];

// Query para inserir os dados na tabela de usuários
$query = "INSERT INTO usuarios (nome, telefone, email, senha) VALUES ('$nome', '$telefone', '$email', '$senha')";

// Executa a query
$result = pg_query($conn, $query);

// Verifica se a query foi executada com sucesso
if ($result) {
  // Retorna uma resposta em JSON indicando sucesso
  echo json_encode(array("mensagem" => "Cadastro realizado com sucesso!"));
} else {
  // Retorna uma resposta em JSON indicando erro
  echo json_encode(array("mensagem" => "Erro ao cadastrar usuário."));
}

// Fecha a conexão com o banco de dados
pg_close($conn);
?>
