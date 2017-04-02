var mapApi = "AIzaSyCqipnIe_n5L6Dg_HHPzcApx21xerEuu9o"

	function initMap() {

	        var honolulu = {lat: 21.4389, lng: -158.0001};
	        var map = new google.maps.Map(document.getElementById('map'), {
	          zoom: 11,
	          center: honolulu,
              
              styles: [
                    {
                        "featureType": "all",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            },
                            {
                                "color": "#f49f53"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#cdb6b6"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            },
                            {
                                "color": "#a37474"
                            },
                            {
                                "saturation": "4"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#f9ddc5"
                            },
                            {
                                "lightness": -7
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.business",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#645c20"
                            },
                            {
                                "lightness": 38
                            }
                        ]
                    },
                    {
                        "featureType": "poi.government",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#9e5916"
                            },
                            {
                                "lightness": 46
                            }
                        ]
                    },
                    {
                        "featureType": "poi.medical",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#813033"
                            },
                            {
                                "lightness": 38
                            },
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#645c20"
                            },
                            {
                                "lightness": 39
                            }
                        ]
                    },
                    {
                        "featureType": "poi.school",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#a95521"
                            },
                            {
                                "lightness": 35
                            }
                        ]
                    },
                    {
                        "featureType": "poi.sports_complex",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#9e5916"
                            },
                            {
                                "lightness": 32
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#813033"
                            },
                            {
                                "lightness": 43
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#f19f53"
                            },
                            {
                                "weight": 1.3
                            },
                            {
                                "visibility": "on"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#f19f53"
                            },
                            {
                                "lightness": -10
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [
                            {
                                "lightness": 38
                            },
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#813033"
                            },
                            {
                                "lightness": 22
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#1994bf"
                            },
                            {
                                "saturation": -69
                            },
                            {
                                "gamma": 0.99
                            },
                            {
                                "lightness": 43
                            },
                            {
                                "visibility": "simplified"
                            }
                        ]
                    }
                ]
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





