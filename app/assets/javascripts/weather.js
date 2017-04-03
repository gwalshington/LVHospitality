
var honoluluApiUrl = "https://api.weatherbit.io/v1.0/current?lat=21.3069&lon=-157.8583&key=873efaa027c14804ad5bd284b8cf72c0"

$.ajax({
    url: honoluluApiUrl,
    type: 'GET',
    success: function(result)   {
        var conditionImage = "#" + result.data[0].weather.icon + ""
        var temperature = result.data[0].rh

        $(conditionImage).css({"display":"inline"})
        $('#js_temperature').append(temperature)


    },
    error: function(error)  {
        console.log(error)
    }
})