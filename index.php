<?php

header("Acess-Control-Allow-Origin: *")

require('data/db_context.php')

$tipo = 0;

if (isset($_GET['tipo'])) {
    $tipo = $_GET['tipo'];
}

else {
    $error = array('error' => 'Parametro TIPO nao indicado na requisição');
    echo json_encode($error);
}

$db_context = new DbContext();

$db_context->conectar();

//CONDIÇÃO PARA ADICIONAR UM NOVO ALUNO

if ($tipo == 1) {
    if(isset($_GET['nome'] && isset($_GET['matricula'])) {
        
        $nome = $_GET['nome'];
        $matricula = $_GET['matricula'];

        $resultado = $db_context->adicionar($nome, $matricula);
        echo $resultado;
    }
    else{
        $error = array('error' => `Parametro NOME nao indicado na requisicao`)
        echo json_encode($error);
    }
//CONDIÇÃO PARA CONSULTAR A LISTA DE ALUNOS
    
    else if ($tipo == 2) {
        $resultado = $db_context->consultar();
        echo $resultado;
    }
//CONDIÇÃO PARA EDITAR UM ALUNO
    else if ($tipo == 3) {
        if(isset($_GET['id']) && isset($_GET['nome']) && isset($_GET['matricula'])) {
            
            $id = $_GET['id']
            $nome = $_GET['nome'];
            $matricula = $_GET['matricula'];

            $resultado = $db_context->atualizar($id, $nome, $matricula)
            echo $resultado;

        }
        else{
            $error = array('error' => 'Parametro ID, NOME ou MATRICULA nao indicado ou requisicao');
            echo json_encode($error);
        }
        else if ($tipo == 4){
            
            if (isset($_GET['id'])) {
                
                $id = $_GET['id'];

                $resultado = $db_context->deletar($id);
                echo $resultado;
            }
            else {
                $error = array('error' => 'parametro ID nao indicado na requisicao');
                echo json_encode($error);
            }
        }

        $db_context-> desconectar();
    }
}

?>