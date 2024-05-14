<?php
// Conexão com o banco de dados
$conn = pg_connect("host=localhost dbname=seu_banco_de_dados user=seu_usuario password=sua_senha");

// Verifica se a conexão foi estabelecida com sucesso
if (!$conn) {
  echo "Erro de conexão.";
  exit;
}

// Recebe o ID do usuário (supondo que esteja disponível na variável $id_do_usuario)
$id_do_usuario = $_SESSION['id_do_usuario'];

// Consulta SQL para selecionar os dados do usuário com base no ID
$query_usuario = "SELECT * FROM usuarios WHERE id = $id_do_usuario";

// Executa a consulta
$result_usuario = pg_query($conn, $query_usuario);

// Verifica se a consulta foi executada com sucesso
if ($result_usuario) {
  // Obtém os dados do usuário como um array associativo
  $dados_usuario = pg_fetch_assoc($result_usuario);
} else {
  // Se houver um erro na consulta, exibe uma mensagem de erro
  echo "Erro ao recuperar dados do usuário.";
}

// Fecha a conexão com o banco de dados
pg_close($conn);
?>
