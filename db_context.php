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

        if($resultado->num_rows > 0){
            $linhas = array();
            while ($linha = $resultado->fetch_assoc()){
                $linhas[] = $linha;
            }

            return json_encode($linhas);
        }
        
        return json_encode($resultado);
    }

    public function adicionar($nome, $matricula) {
        $query = "INSERT INTO alunos(nome, matricula) VALUES ('"
        . $this->conexao->real_escape_string($nome) . "','"
        . $this->conexao->real_escape_string($matricula) . "')";

        return $this->executar_query_sql($query);
    }

    public function consultar(){
        $query = "SELECT * FROM alunos ORDER BY id";
        return $this->executar_query_sql($query);
    }

    public function atualizar($id, $nome, $matricula) {
        $query = "UPDATE alunos SET nome = '"
        . $this->conexao->real_escape_string($nome) . "', matricula = '"
        . $this->conexao->real_escape_string($matricula) . "'" . " WHERE id = " . $id;

        return $this->executar_query_sql($query);
    }

    public function deletar($id){
        $query = "DELETE FROM alunos WHERE id = " . $id;
        return $this->executar_query_sql($query);
    }
}
