<?php
	
	//Variaveis de POST, Alterar somente se necessário
	//====================================================
	$nome = $_POST['name'];
	$email = $_POST['email'];
	$mensagem = $_POST['message'] . $_POST['encontrou'];
	//====================================================
	//REMETENTE --> ESTE EMAIL TEM QUE SER VALIDO DO DOMINIO
	//====================================================
	$email_remetente = "hi@allangomes.com"; // deve ser uma conta de email do seu dominio
	//====================================================
	//Configurações do email, ajustar conforme necessidade
	//====================================================
	$email_destinatario = "allan.agomesp@gmail.com"; // pode ser qualquer email que receberá as mensagens
	$email_reply = "$email";
	$email_assunto = $_POST['subject']; // Este será o assunto da mensagem
	//====================================================
	//Monta o Corpo da Mensagem
	//====================================================
	$email_conteudo = "Nome = $nome \n";
	$email_conteudo .= "Email = $email \n";
	$email_conteudo .= "Mensagem = $mensagem \n";
	//====================================================
	//Seta os Headers (Alterar somente caso necessario)
	//====================================================
	$email_headers = implode ( "\n",array ( "From: $email_remetente", "Reply-To: $email_reply", "Return-Path: $email_remetente","MIME-Version: 1.0","X-Priority: 3","Content-Type: text/html; charset=UTF-8" ) );
	//====================================================
	//Enviando o email
	//====================================================
	if (mail ($email_destinatario, $email_assunto, nl2br($email_conteudo), $email_headers)){
		header("Location: http://allangomes.com/");
		exit();
	}else{
		header("Location: http://allangomes.com/");
		exit();
	}
	//====================================================