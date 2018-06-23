		$('#app-sidebar .fileName h3').removeAttr('title');
	$('#app-content').on('appresized', function () {
		window.setTimeout(function () {
		$('#app-sidebar .fileName h3').removeAttr('title');
		console.log($('#app-sidebar .fileName h3'));
		}, 100);
	});
