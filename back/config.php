<?php

/*
  DEFINE AS CONSTANTES DE CONEXAO COM O BANCO DE DADOS MYSQL


const MYSQL_DB_HOST     = "localhost";
const MYSQL_DB_PORT    ="3306"; //Porta padrão do MySQL
const MYSQL_DB_DATABASE    = "ledidi_db";
const MYSQL_DB_USERNAME     ="root";
const MYSQL_DB_PASSWORD    ="";
*/

    define('MYSQL_DB_HOST', 'localhost');
    define('MYSQL_DB_PORT', '3306');
    define('MYSQL_DB_USERNAME', 'root');
    define('MYSQL_DB_PASSWORD', '');
    define('MYSQL_DB_DATABASE', 'ledidi_db');

    $conn = new mysqli(MYSQL_DB_HOST, MYSQL_DB_USERNAME, MYSQL_DB_PASSWORD, MYSQL_DB_DATABASE);