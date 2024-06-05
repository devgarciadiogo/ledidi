<?php
session_start();

header('Content-Type: application/json'); // Define o tipo de conteúdo como JSON

if (empty($_POST) || empty($_POST["email"]) || empty($_POST["senha"])) {
    // Retorna uma resposta JSON indicando erro
    echo json_encode(array('error' => 'Campos de e-mail e senha devem ser preenchidos'));
    exit; // Encerra o script
}

require_once('db_context.php');

$email = $_POST["email"];
$senha = $_POST["senha"];

$sql = "SELECT * FROM clientes WHERE email = '{$email}' AND senha = '{$senha}'";

$res = $conn->query($sql) or die($conn->error);

$row = $res->fetch_object();

$qtd = $res->num_rows;

if ($qtd > 0) {
    $_SESSION["email"] = $email;
    $_SESSION["nome"] = $row->nome;
    // Retorna uma resposta JSON indicando sucesso
    echo json_encode(array('success' => true, 'message' => 'Login bem-sucedido'));
} else {
    // Retorna uma resposta JSON indicando erro
    echo json_encode(array('error' => 'E-mail e/ou senha incorretos'));
}
?>
