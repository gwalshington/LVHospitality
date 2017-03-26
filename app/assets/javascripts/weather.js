var weatherApiKey = "1181bab21c49ceb7970b096c0cd74c56"
var honoluluApiUrl = "http://api.openweathermap.org/data/2.5/weather?zip=96818&units=imperial&appid=1181bab21c49ceb7970b096c0cd74c56"
var newYorkApiUrl = "http://api.openweathermap.org/data/2.5/weather?q=NewYork&units=imperial&appid=1181bab21c49ceb7970b096c0cd74c56"


$.ajax({
	url: honoluluApiUrl,
	type: 'GET',
	success: function(result)	{
		var conditionImage = result.weather[0].icon
		var temperature = Math.round(result.main.temp)
		console.log(temperature)

		$('#js_conditionImage').attr("src","/assets/weather/" + conditionImage + ".svg")

		$('#js_temperature').append(temperature)

		console.log(result);
		console.log(condition);
	},
	error: function(error)	{
		console.log(error)
	}
})