var mapApi = "AIzaSyCqipnIe_n5L6Dg_HHPzcApx21xerEuu9o"



	function initMap() {

	        var honolulu = {lat: 21.4389, lng: -158.0001};
	        var map = new google.maps.Map(document.getElementById('map'), {
	          zoom: 11,
	          center: honolulu
	        });

	        var infowindows = [];


	        $.ajax({
	        	url: '/locations.json',
	        	type: 'GET',
	        	data: 'JSON',
	        	success: function(result){
	        		for(i=0; i<result.length; i++)	{
	        			
	        			var content = '<div id="content" style="width:270px;height:100px">' +
                             '<h3 id="firstHeading" class="firstHeading">' + result[i].location_name + '</h3>'+
                         '</div>';

	        			 
	        			var infowindow = new google.maps.InfoWindow({
						  content: content
						});

	        			var mapMarker = '/assets/marker-6404ca3ffc3e8078a2f8050070496ea95eed2803b04b3b61a725c304d2f3583b.png';
	        			var markerPosition = {lat: result[i].lat, lng: result[i].lng}

	        			var marker = new google.maps.Marker({

				          position: markerPosition,
				          map: map,
				          icon: {
					          url: mapMarker,
					          scaledSize: new google.maps.Size(40, 40)
					          
					        },
				          //icon: mapMarker,
				          title: result[i].location_name
				        });


				        google.maps.event.addListener(marker, 'click', function() {
			    		   var title = this.title;
						   infowindow.setContent('<h2 class="iw-heading">' + title + '</h2></div>');
						   infowindow.open(map, this);
						   
						   
						});

	        		}
	        	}

	        })
	        
	      }	   
	    


$(document).ready(function() {
   
});





