<?php
require_once("conecta.php");
session_start();

function getPosts($conexao){
	$query = "select * from posts";
	return mysqli_query($conexao, $query);
}

function getPostSelecionado($conexao, $id){
	$query = "select * from posts where id = {$id}";
	$resultado = mysqli_query($conexao, $query);
	return mysqli_fetch_assoc($resultado);
}