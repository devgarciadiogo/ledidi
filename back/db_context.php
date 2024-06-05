<?php

require_once("config.php");

class DbContext {
    private $host;
    private $porta;
    private $dbname;
    private $usuario;
    private $senha;
    private $conexao;

    public function __construct(){
        $this->host     = MYSQL_DB_HOST;
        $this->porta    = MYSQL_DB_PORT;
        $this->dbname   = MYSQL_DB_DATABASE;
        $this->usuario  = MYSQL_DB_USERNAME;
        $this->senha    = MYSQL_DB_PASSWORD;
    }

    public function conectar(){
        $this->conexao = new mysqli($this->host, $this->usuario, $this->senha, $this->dbname, $this->porta);

        if($this->conexao->connect_error){
            die("Conexao falhou: " . $this->conexao->connect_error);
        }
    }

    public function desconectar(){
        $this->conexao->close();
    }

    private function executar_query_sql($query){
        $resultado = $this->conexao->query($query);

        if(!$resultado){
            $error = array('error' => $this->conexao->error);
            return json_encode($error);
        }

        if ($resultado instanceof mysqli_result) {
            $linhas = array();
            while ($linha = $resultado->fetch_assoc()) {
                $linhas[] = $linha;
            }
            return json_encode($linhas);
        } else {
            return json_encode(array('success' => true));
        }
    }

    public function adicionar($nome, $email, $senha) {
        $query = "INSERT INTO clientes(nome, email, senha) VALUES ('"
            . $this->conexao->real_escape_string($nome) . "','"
            . $this->conexao->real_escape_string($email) . "','"
            . $this->conexao->real_escape_string($senha) . "')";
        
        if ($this->conexao->query($query) === TRUE) {
            return $this->conexao->insert_id; 
        } else {
            $error = array('error' => $this->conexao->error);
            return json_encode($error);
        }
    }
    
    public function adicionar_agendamento($telefone, $email, $dataHora, $serviços, $funcionarios) {
        $query = "INSERT INTO agendamentos(telefone, email, data_hora, serviço, profissional) VALUES ('"
            . $this->conexao->real_escape_string($telefone) . "','"
            . $this->conexao->real_escape_string($email) . "','"
            . $this->conexao->real_escape_string($dataHora) . "','"
            . $this->conexao->real_escape_string($serviços) . "','"
            . $this->conexao->real_escape_string($funcionarios) . "')";
        
        if ($this->conexao->query($query) === TRUE) {
            return $this->conexao->insert_id; 
        } else {
            $error = array('error' => $this->conexao->error);
            return json_encode($error);
        }
    }

    public function consultar($email) {
        $email = $this->conexao->real_escape_string($email);
        $query = "SELECT * FROM clientes WHERE email = '" . $email . "'";
        return $this->executar_query_sql($query);
    }
    public function atualizar($id, $nome, $email, $senha) {
        $query = "UPDATE clientes SET nome = '"
            . $this->conexao->real_escape_string($nome) . "', email = '"
            . $this->conexao->real_escape_string($email) . "', senha = '"
            . $this->conexao->real_escape_string($senha) . "' WHERE id = "
            . $id;
    
        return $this->executar_query_sql($query);
    }

    public function deletar($id){
        $query = "DELETE FROM clientes WHERE id = " . $id;
        return $this->executar_query_sql($query);
    }
}