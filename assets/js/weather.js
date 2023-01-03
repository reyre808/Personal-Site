const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://us-weather-by-zip-code.p.rapidapi.com/getweatherzipcode?zip=63019",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "40079ce794msh2d7f9020c512065p1a550ejsn63e4611d1c4b",
		"X-RapidAPI-Host": "us-weather-by-zip-code.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
