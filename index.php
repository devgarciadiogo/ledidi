<?php

header("Access-Control-Allow-Origin: *");

require_once('db_context.php');

$tipo = 0;

if (isset($_GET['tipo'])) {
    $tipo = $_GET['tipo'];
} else {
    $error = array('error' => 'Parâmetro TIPO não indicado na requisição');
    echo json_encode($error);
}

$db_context = new DbContext();

$db_context->conectar();

// CONDIÇÃO PARA ADICIONAR UM NOVO CLIENTE
if ($tipo == 1) {
    if (isset($_GET['nome']) && isset($_GET['telefone']) && isset($_GET['email']) && isset($_GET['senha'])) {
        
        $nome = $_GET['nome'];
        $telefone = $_GET['telefone'];
        $email = $_GET['email'];
        $senha = $_GET['senha'];

        $resultado = $db_context->adicionar($nome, $telefone, $email, $senha);
        if ($resultado) {
            // Assuming $resultado returns the new customer ID
            echo json_encode(array('success' => true, 'id' => $resultado));
        } else {
            echo json_encode(array('success' => false, 'message' => 'Falha ao adicionar cliente'));
        }
    } else {
        $error = array('error' => 'Parâmetro NOME, TELEFONE, EMAIL ou SENHA não indicado na requisição');
        echo json_encode($error);
    }
}

// CONDIÇÃO PARA CONSULTAR A LISTA DE CLIENTES
else if ($tipo == 2) {
    $resultado = $db_context->consultar();
    echo $resultado;
} 
// CONDIÇÃO PARA EDITAR UM CLIENTE
else if ($tipo == 3) {
    if (isset($_GET['id']) && isset($_GET['nome']) && isset($_GET['telefone']) && isset($_GET['email']) && isset($_GET['senha'])) {
        
        $id = $_GET['id'];
        $nome = $_GET['nome'];
        $telefone = $_GET['telefone'];
        $email = $_GET['email'];
        $senha = $_GET['senha'];

        $resultado = $db_context->atualizar($id, $nome, $telefone, $email, $senha);
        echo $resultado;

    } else {
        $error = array('error' => 'Parâmetro ID, NOME, TELEFONE, EMAIL ou SENHA não indicado na requisição');
        echo json_encode($error);
    }
} 
// CONDIÇÃO PARA DELETAR UM CLIENTE
else if ($tipo == 4) {
    if (isset($_GET['id'])) {
        
        $id = $_GET['id'];

        $resultado = $db_context->deletar($id);
        echo $resultado;

    } else {
        $error = array('error' => 'Parâmetro ID não indicado na requisição');
        echo json_encode($error);
    }
}

$db_context->desconectar();

?>
