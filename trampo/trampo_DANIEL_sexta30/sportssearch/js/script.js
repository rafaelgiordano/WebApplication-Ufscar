// script utilizando jQuery

$(document).ready(function(){

	$('#menu').fadeIn();
	$('#jogadorform').hide();
	$('#timeform').hide();
	$('#premioform').hide();
	

	//$("#jogadorform")[0].reset();
	//Ou...
	//$("#jogadorform").get(0).reset();

	//
	// Links para as buscas
	//


	$('#buscajogador').click(function(){

		$('#jogadorform').fadeIn();
		$('#timeform').hide();
		$('#avancadaform').hide();
		$('#menu').hide();
		$('#premioform').hide();
		$('#formdojogador')[0].reset();
		
		deleteClass($('#formnomejogador'));
		//$("#buscajogador").trigger('reset');
		// Código abaixo não funciona: primeira função é chamada, mas as seguintes não.
		// resetando os formulários
		// resetForm($('#timeform'));
		// deleteClass($('#formnometime'));
		// $('#formnometime').removeClass('has-error has-success');

		// resetForm($('#premioform'));
		// deleteClass($('formnomepremio'));
		// $('#formnomepremio').removeClass('has-error has-success');
	});

	$('#buscatime').click(function(){
		
		$('#timeform').fadeIn();
		$('#jogadorform').hide();
		$('#avancadaform').hide();
		$('#menu').hide();
		$('#premioform').hide();
		$('#formdotime')[0].reset();

		// resetando os formulários
		// resetForm($('#jogadorform'));
		// deleteClass($('formnomejogador'));
		// $('#formnomejogador').removeClass('has-error has-success');
		// deleteClass($('formsobrenomejogador'));
		// $('#formsobrenome').removeClass('has-error has-success');

		// resetForm($('#premioform'));
		// deleteClass($('formnomepremio'));
	});

	$('#buscapremio').click(function(){
		$('#premioform').fadeIn();
		$('#timeform').hide();
		$('#jogadorform').hide();
		$('#avancadaform').hide();
		$('#menu').hide();
		$('#formdopremio')[0].reset();


		// $('#formnomejogador').removeClass('has-error has-success');
		// $('#formsobrenome').removeClass('has-error has-success');
		// $('#formnometime').removeClass('has-error has-success');
		// resetForm($('#jogadorform'));
		// resetForm($('#timeform'));
		// deleteClass($('formnomejogador'));
		// deleteClass($('formsobrenomejogador'));
		// deleteClass($('#formnometime'));
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
		}
		else {
			$('#formnomejogador').addClass('has-success').removeClass('has-error');
		}

		// campo do formulário em branco
		if (/^$/.test(inputVal.val())) {
			deleteClass($('#formnomejogador'));
			// $('#formnomejogador').removeClass('has-error has-success');
		}
	});

	$('#sobrenomejogador').focusout(function() {
		var inputVal = $(this);
		// a expressão regular abaixo permite várias letras (maiúsculas ou minúsculas) 
		// e depois inúmeros espaços opcionais
		var regex = /^([a-zA-Z]*)(([\s]*)?)$/;

		if (!regex.test(inputVal.val())) {
			$('#formsobrenomejogador').addClass('has-error').removeClass('has-success');
		}
		else {
			$('#formsobrenomejogador').addClass('has-success').removeClass('has-error');
		}

		// campo do formulário em branco
		if (/^$/.test(inputVal.val())) {
			deleteClass($('#formsobrenomejogador'));
			// $('#formsobrenomejogador').removeClass('has-error has-success');
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
		}
		else {
			$('#formnometime').addClass('has-success').removeClass('has-error');
		}

		// campo do formulário em branco
		if (/^$/.test(inputVal.val())) {
			deleteClass($('#formnometime'));
			// $('#formnometime').removeClass('has-error has-success');	
		}
	});

	// ------------------------------------------------
	
	// Função que reseta os campos dos formulários
	function resetForm ($form) {
	    $form.find('input:text, input:password, input:file, select, textarea').val('');
	    $form.find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected');
	}

	// Função que remove as classes 'has-error' e 'has-success'
	// de um formulário passado como parâmetro
	function deleteClass ($form) {
		$form.removeClass('has-success');
		$form.removeClass('has-error');
	}
});
