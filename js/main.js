Handlebars.registerHelper("formatName", function(property1, property2) {
	return new Handlebars.SafeString(
		"Hello my name is <strong>" + property1 + "</strong>, and I live at " + property2
		);
});
Handlebars.registerHelper("formatPhoneNumber", function(property) {
	var phone = property.toString();
	return "(" + phone.substr(0,3) + ")" + phone.substr(3,3) + "-" + phone.substr(6,4);
});

Handlebars.registerHelper("makeBold", function(options) {
	return new Handlebars.SafeString("<strong>" + options.fn(this) + "</strong>");
});

Handlebars.registerHelper("upperCase", function(options) {
	if(options) {
		return options.fn(this).toUpperCase();
	}
});

$(document).ready(function() {
	var charactorTemplate = $("#characterTemplate").html();
var compiledCharactor = Handlebars.compile(charactorTemplate);

	$.ajax("./data/cast.json").done(function(cast) {
		$('.characters-container').html(compiledCharactor(cast))

	})
})
