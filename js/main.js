$(document).ready(function() {
	$.ajax({
		type:'GET',
		dataType: 'json',
		async: false,
		url: '../data/cast.json',
		success: function(data) {
			console.log(data);
		}
	})
})


var charactorTemplate = $("#characterTemplate").html();
var compiledCharactor = Handlebars.compile(charactorTemplate);



//$('.characters-container').html(compiledCharactor(cast))