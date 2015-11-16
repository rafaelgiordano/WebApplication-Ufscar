// script utilizando jQuery

$(document).ready(function(){

	$('#menu').fadeIn();
	$('#jogadorform').hide();
	$('#timeform').hide();
	$('#avancadaform').hide();
	$('#premioform').hide();

	//
	// Action buttons
	//
	$('#buscajogador').click(function(){
		$('#jogadorform').fadeIn();
		$('#timeform').hide();
		$('#avancadaform').hide();
		$('#menu').hide();
		$('#premioform').hide();
	});

	$('#buscatime').click(function(){
		$('#timeform').fadeIn();
		$('#jogadorform').hide();
		$('#avancadaform').hide();
		$('#menu').hide();
		$('#premioform').hide();
	});

	$('#buscapremio').click(function(){
		$('#premioform').fadeIn();
		$('#timeform').hide();
		$('#jogadorform').hide();
		$('#avancadaform').hide();
		$('#menu').hide();
	});

	$('#buscaavancada').click(function(){
		$('#avancadaform').fadeIn()
		$('#jogadorform').hide();
		$('#timeform').hide();
		$('#menu').hide();
		$('#premioform').hide();
	});
	// ------------------------------------------------

	// 
	// Tratando as entradas dos formulários
	// Formulário jogador
	$('#nomejogador').keyup(function() {
		var inputVal = $(this);
		var onlyLetters = /^[a-zA-Z]*$/;
		if (!onlyLetters.test(inputVal.val())) {
			$('#formnomejogador').addClass('has-error has-feedback').removeClass('has-success');
		}
		else {
			$('#formnomejogador').addClass('has-success has-feedback');
		}

		if (/^$/.test(inputVal.val())) {
			$('#formnomejogador').removeClass('has-error has-success');	
		}
	});

	$('#sobrenomejogador').keyup(function() {
		var inputVal = $(this);
		var onlyLetters = /^[a-zA-Z]*$/;
		if (!onlyLetters.test(inputVal.val())) {
			$('#formsobrenomejogador').addClass('has-error has-feedback').removeClass('has-success');
		}
		else {
			$('#formsobrenomejogador').addClass('has-success has-feedback');
		}

		if (/^$/.test(inputVal.val())) {
			$('#formsobrenomejogador').removeClass('has-error has-success');	
		}
	});

	// Formulário time
	// $('#nometime').keyup(function() {
	// 	var inputVal = $(this);
	// 	var onlyLetters = /^[a-zA-Z]*$/;
	// 	if (!onlyLetters.test(inputVal.val())) {
	// 		$('#formnometime').addClass('has-error has-feedback').removeClass('has-success');
	// 	}
	// 	else {
	// 		$('#formnometime').addClass('has-success has-feedback');
	// 	}

	// 	if (/^$/.test(inputVal.val())) {
	// 		$('#formnometime').removeClass('has-error has-success');	
	// 	}
	// });
	// ------------------------------------------------
});
