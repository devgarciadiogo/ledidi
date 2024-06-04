<?php
session_start();

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json'); 

require_once('db_context.php');

$response = array();

if (isset($_GET['tipo'])) {
    $tipo = $_GET['tipo'];
    $db_context = new DbContext();
    $db_context->conectar();

    if ($tipo == 1) {
        if (isset($_GET['telefone']) && isset($_GET['dataHora']) && isset($_GET['servicos']) && isset($_GET['funcionarios'])) {
            $telefone = $_GET['telefone'];
            $dataHora = $_GET['dataHora'];
            $servicos = $_GET['servicos'];
            $funcionarios = $_GET['funcionarios'];

            $resultado = $db_context->adicionar_agendamento($telefone, $dataHora, $servicos, $funcionarios);
            if ($resultado) {
                $response = array('success' => true, 'message' => 'Agendamento realizado com sucesso!');
            } else {
                $response = array('success' => false, 'message' => 'Falha ao adicionar agendamento');
            }
        } else {
            $response = array('error' => 'Parâmetros obrigatórios não informados');
        }
    }
    $db_context->desconectar();
} else {
    $response = array('error' => 'Parâmetro TIPO não indicado na requisição');
}

echo json_encode($response);
exit; 
?>
