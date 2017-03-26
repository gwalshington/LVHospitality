var weatherApiKey = "1181bab21c49ceb7970b096c0cd74c56"
//var honoluluApiUrl = "http://api.openweathermap.org/data/2.5/weather?zip=96818&units=imperial&appid=1181bab21c49ceb7970b096c0cd74c56"
var newYorkApiUrl = "http://api.openweathermap.org/data/2.5/weather?q=NewYork&units=imperial&appid=1181bab21c49ceb7970b096c0cd74c56"

var honoluluApiUrl = "https://api.weatherbit.io/v1.0/current?lat=21.3069&lon=-157.8583&key=873efaa027c14804ad5bd284b8cf72c0"

$.ajax({
	url: honoluluApiUrl,
	type: 'GET',
	success: function(result)	{
		console.log(result)
		var conditionImage = result.data[0].weather.icon
		//var temperature = Math.round(result.main.temp)
		var temperature = result.data[0].rh
		console.log(temperature)
		//var conditionImage = result.data.weather.icon
		console.log(temperature)

		$('#js_conditionImage').attr("src","/assets/weather/" + conditionImage + ".svg")

		$('#js_temperature').append(temperature)


	},
	error: function(error)	{
		console.log(error)
	}
})