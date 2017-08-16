$(document).ready(function() {
	var charactorTemplate = $("#characterTemplate").html();
var compiledCharactor = Handlebars.compile(charactorTemplate);

	$.ajax("./data/cast.json").done(function(cast) {
		$('.characters-container').html(compiledCharactor(cast))

	})
})
