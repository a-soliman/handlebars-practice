const cast = {
	"characters": [
		{
			"name": "John Snow",
			"shortCode": "jon-snow",
			"actor": "Kit Harrington",
			"house": "Stark",
			"location": "The Wall"
		},
		{
			"name": "Tyrion Lannister",
			"shortCode": "tyrion",
			"actor": "Peter Dinklarge",
			"house": "Lannister"
		},
		{
			"name": "Brienne Of Tarth",
			"shortCode": "brienne",
			"actor": "Gwendoline Christie",
			"house": "Clegane",
			"location": undefined
		},
		{
			"name": "Eddard Stark",
			"shortCode": "ned-stark",
			"actor": "Sean Bean",
			"house": "Stark",
			"location": "winterfell"
		},
		{
			"name": "Sandor Clegane",
			"shortCode": "the-hound",
			"actor": "Rory McCann",
			"house": "Clegane",
			"location": "unknown"
		}
	]
}


var charactorTemplate = $("#characterTemplate").html();
var compiledCharactor = Handlebars.compile(charactorTemplate);
$('.characters-container').html(compiledCharactor(cast))