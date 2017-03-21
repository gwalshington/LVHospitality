var mapApi = "AIzaSyCqipnIe_n5L6Dg_HHPzcApx21xerEuu9o"

	function initMap() {
	        var honolulu = {lat: 21.4389, lng: -158.0001};
	        var map = new google.maps.Map(document.getElementById('map'), {
	          zoom: 11,
	          center: honolulu
	        });

	        $.ajax({
	        	url: '/locations.json',
	        	type: 'GET',
	        	data: 'JSON',
	        	success: function(result){
	        		console.log(result)
	        		for(i=0; i<result.length; i++)	{
	        			var markerPosition = {lat: result[i].lat, lng: result[i].lng}
	        			var marker = new google.maps.Marker({

				          position: markerPosition,
				          map: map
				        });
	        		}
	        	}

	        })
	        
	      }

$(document).ready(function() {



        
});