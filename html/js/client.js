(function($){
	var socket = io.connect('http://YOUR-SERVER.com:8080')
	var msg = $('#msgtpl').html()
	var join = $('#join').html()
	var leave = $('#dis').html()
	var state = $('#state').html()
	var ms
	var logged = false
	
	+ new Date()
	$('#msgtpl').remove()
	$('#loginform').submit(function(envent){
		event.preventDefault()
		socket.emit('login', {
			username : $('#username').val(),
			mail	 : $('#mail').val()
		})
	})


	$("#form").submit(function(event){
		if (logged === false) {
			alert('you can\'t do that')
		}else{
			event.preventDefault()
			socket.emit('newmsg', {message: $("#message").val()})
			$("#message").val('')
			$("#message").focus();
		}
	})
	

	socket.on('logged', function(messs){
		$('#login').fadeOut();
		document.getElementById('form').style.display = 'block';
		$("#message").focus();
		logged = true
		ms = messs
		console.log(ms)
		for (var i = 0; i <= ms.length; i++) {
			$('#messages').append(ms[i])
		}
		
	})
	
	socket.on('rs', function () {
		console.log("rs")
		while ($('#messages').firstChild) {
			$('#messages').removeChild($('#messages').lastChild);
		}
	})

	socket.on('newuser', function(usermy){
		if (logged == true) {
			$('#messages').append(Mustache.render(join, usermy))
			$('#messages').append(Mustache.render(state, usermy))
		}
	})
	socket.on('dissuser', function(usermy){
		if (logged == true) {
			console.log(usermy)
			$('#messages').append(Mustache.render(leave, usermy))
			$('#messages').append(Mustache.render(state, usermy))
		}
	})
	socket.on('newmsg', function(mess){
		if (logged == true) {
			$('#messages').append("<div class='message'>"+Mustache.render(msg, mess) + "</div>")
		}
	})

})(jQuery);