<?php

$user = 'root@localhost';
$senha = '';
$database = 'login';
$host = 'localhost';

$conecta = mysqli_connect($host, $user, $senha, $database);

if($mysqli->error) {
    die("Falha ao conectar ao banco de dados: " . $mysqli->error);
}   