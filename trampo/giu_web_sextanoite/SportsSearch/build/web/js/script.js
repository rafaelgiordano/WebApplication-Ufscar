// script utilizando jQuery

$(document).ready(function(){

	$('#menu').fadeIn();
	$('#jogadorform').hide();
	$('#timeform').hide();
	$('#premioform').hide();
	$('#erronomejogador').hide();
	$('#errosobrenomejogador').hide();
	$('#erronometime').hide();
	$('#erronomepremio').hide();

	//
	// Links para as buscas
	//
	$('#buscajogador').click(function(){
		$('#jogadorform').fadeIn();
		$('#timeform').hide();
		$('#avancadaform').hide();
		$('#menu').hide();
		$('#premioform').hide();
		$('#fjogador')[0].reset();
		$('#formnomejogador').removeClass('has-error has-success');
		$('#formsobrenomejogador').removeClass('has-error has-success');
		$('#erronomejogador').hide();
		$('#errosobrenomejogador').hide();
	});

	$('#buscatime').click(function(){
		$('#timeform').fadeIn();
		$('#jogadorform').hide();
		$('#avancadaform').hide();
		$('#menu').hide();
		$('#premioform').hide();
		$('#ftime')[0].reset();
		$('#formnometime').removeClass('has-error has-success');
		$('#erronometime').hide();
	});

	$('#buscapremio').click(function(){
		$('#premioform').fadeIn();
		$('#timeform').hide();
		$('#jogadorform').hide();
		$('#avancadaform').hide();
		$('#menu').hide();
		$('#fpremio')[0].reset();
		$('#formnomepremio').removeClass('has-error has-success');
		$('#erronomepremio').hide();
	});
	// ------------------------------------------------

	// 
	// Tratando as entradas dos formulários
	// Formulário jogador
	$('#nomejogador').focusout(function() {
		var inputVal = $(this);
		// a expressão regular abaixo permite várias letras (maiúsculas ou minúsculas) 
		// e depois inúmeros espaços opcionais
		var regex = /^([a-zA-Z]*)(([\s]*)?)$/;

		if (!regex.test(inputVal.val())) {
			$('#formnomejogador').addClass('has-error').removeClass('has-success');
			$('#erronomejogador').fadeIn('slow');
		}
		else {
			$('#formnomejogador').addClass('has-success').removeClass('has-error');
			$('#erronomejogador').fadeOut('slow');
		}

		// campo do formulário em branco
		if (/^$/.test(inputVal.val())) {
			deleteClass($('#formnomejogador'));
		}
	});

	$('#sobrenomejogador').focusout(function() {
		var inputVal = $(this);
		// a expressão regular abaixo permite várias letras (maiúsculas ou minúsculas) 
		// e depois inúmeros espaços opcionais
		var regex = /^([a-zA-Z]*)(([\s]*)?)$/;

		if (!regex.test(inputVal.val())) {
			$('#formsobrenomejogador').addClass('has-error').removeClass('has-success');
			$('#errosobrenomejogador').fadeIn('slow');
		}
		else {
			$('#formsobrenomejogador').addClass('has-success').removeClass('has-error');
			$('#errosobrenomejogador').fadeOut('slow');
		}

		// campo do formulário em branco
		if (/^$/.test(inputVal.val())) {
			deleteClass($('#formsobrenomejogador'));
		}
	});

	// Formulário time
	$('#nometime').focusout(function() {
		var inputVal = $(this);
		// a expressão regular abaixo permite várias letras (maiúsculas ou minúsculas) 
		// depois inúmeros espaços opcionais
		// em seguida permite várias letras (maiúsculas ou minúsculas)
		// depois inúmeros espaços opcionais
		var regex = /^([a-zA-Z]*)(([\s]+)?)([a-zA-Z]*)(([\s]*)?)$/;

		if (!regex.test(inputVal.val())) {
			$('#formnometime').addClass('has-error').removeClass('has-success');
			$('#erronometime').fadeIn('slow');
		}
		else {
			$('#formnometime').addClass('has-success').removeClass('has-error');
			$('#erronometime').fadeOut('slow');
		}

		// campo do formulário em branco
		if (/^$/.test(inputVal.val())) {
			deleteClass($('#formnometime'));
		}
	});

	// Formulário prêmio
	$('#nomepremio').focusout(function() {
		var inputVal = $(this);
		// a expressão regular abaixo permite várias letras (maiúsculas ou minúsculas) 
		// depois inúmeros espaços opcionais
		// em seguida permite várias letras (maiúsculas ou minúsculas)
		// depois inúmeros espaços opcionais
		// em seguida permite várias letras (maiúsculas ou minúsculas)
		// o nome de um prêmio pode ser composto por três palavras no máximo
		var regex = /^([a-zA-Z]*)(([\s]+)?)([a-zA-Z]*)(([\s]*)?)([a-zA-Z]*)$/;

		if (!regex.test(inputVal.val())) {
			$('#formnomepremio').addClass('has-error').removeClass('has-success');
			$('#erronomepremio').fadeIn('slow');
		}
		else {
			$('#formnomepremio').addClass('has-success').removeClass('has-error');
			$('#erronomepremio').fadeOut('slow');
		}

		// campo do formulário em branco
		if (/^$/.test(inputVal.val())) {
			deleteClass($('#formnomepremio'));
		}
	});

	$('#jogadorclear').click(function() {
		deleteClass($('#formnomejogador'));
		deleteClass($('#formsobrenomejogador'));
	});

	$('#timeclear').click(function() {
		deleteClass($('#formnometime'));
	});	

	$('#premioclear').click(function() {
		deleteClass($('#formnomepremio'));
	});

	// ------------------------------------------------

	// Função que remove as classes 'has-error' e 'has-success'
	// de um formulário passado como parâmetro
	function deleteClass ($form) {
		$form.removeClass('has-success');
		$form.removeClass('has-error');
	}
});
