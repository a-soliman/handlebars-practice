// Initialize Firebase
var config = {
	apiKey: "AIzaSyCbDxFf0uDpsMYKnUidCeXGHGXOdvWBgvg",
	authDomain: "handlebars-course-f0b69.firebaseapp.com",
	databaseURL: "https://handlebars-course-f0b69.firebaseio.com",
	projectId: "handlebars-course-f0b69",
	storageBucket: "",
	messagingSenderId: "316628830728"
};
firebase.initializeApp(config);
// get query string parameter
function getParameterByName(name, url) {
	if(!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);

	if(!results) return null;
	if(!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

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
	var characterTemplate = $("#characterTemplate").html();
	var compiledCharacterTemplate = Handlebars.compile(characterTemplate);
	var $characterList = $(".character-list-container");
	
	var characterId = getParameterByName("id");
	console.log("characterId: " + characterId)

	$.ajax("character-details-parcial.html").done(function(charactersDetailsPartial) {
		$("body").append(charactersDetailsPartial);
		Handlebars.registerPartial("charactersDetailsPartial", $("#chatacter-details-partial").html());

	})

	// $.ajax("./data/cast.json").done(function(cast) {
	// 	if($("body").hasClass("page-cast-details")) {
	// 		$characterList.html(compiledCharacterTemplate(cast.characters[characterId]))
	// 		$('.characters-container').html(compiledCharacterTemplate(cast.characters[characterId]));
	// 	}
	// 	else {
	// 		$characterList.html(compiledCharacterTemplate(cast))
	// 		$('.characters-container').html(compiledCharacterTemplate(cast));
	// 	}
	// });
	
	var dbRef = firebase.database().ref();
	dbRef.on('value', function(snap) {
	
		var cast = snap.val();

		if($("body").hasClass("page-cast-details")) {
			$characterList.html(compiledCharacterTemplate(cast.characters[characterId]))
			$('.characters-container').html(compiledCharacterTemplate(cast.characters[characterId]));
		}
		else {
			$('.characters-container').html(compiledCharacterTemplate(cast));
			
		}

	})

	



	$(".characters-container").on('click', ".view-details", function(e) {
		//e.preventDefault();
		console.log("has been clicked")
	})
})
