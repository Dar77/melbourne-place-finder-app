// app.js single-page-application-project

// Model =============================================================================================
var modelData = {
	places: [ // array of places
		{
			placeName: 'Federation Square',
			location: {lat: -37.817997, lng: 144.968894},
			placeImage: '',
			type: 'Arts Complex'
		},
		{
			placeName: 'Eureka Skydeck',
			location: {lat: -37.821366, lng: 144.964696},
			placeImage: '',
			type: 'Observation Deck'
		},
		{
			placeName: 'Hosier Lane',
			location: {lat: -37.816645, lng: 144.969234},
			placeImage: '',
			type: 'Street Art Area'
		},
		{
			placeName: 'Royal Botanic Gardens Victoria',
			location: {lat: -37.829751, lng: 144.98138},
			placeImage: '',
			type: 'Gardens'
		},
		{
			placeName: 'Melbourne Cricket Ground, MCG',
			location: {lat: -37.81998, lng: 144.98345},
			placeImage: '',
			type: 'Sports Ground'
		},
		{
			placeName: 'Block Arcade',
			location: {lat: -37.815819, lng: 144.964689},
			placeImage: '',
			type: 'Historical'
		},
		{
			placeName: 'Queen Victoria Market',
			location: {lat: -37.806427, lng: 144.959342},
			placeImage: '',
			type: 'Market'
		},
		{
			placeName: 'Melbourne Museum',
			location: {lat: -37.803596, lng: 144.971686},
			placeImage: '',
			type: 'Museum'
		},
		{
			placeName: 'Melbourne Star Observation Wheel',
			location: {lat: -37.811882, lng: 144.937461},
			placeImage: '',
			type: 'Observation Wheel'
		},
		{
			placeName: 'Centre Place, Melbourne',
			location: {lat: -37.8164, lng: 144.965438},
			placeImage: '',
			type: 'Laneway'
		},
		{
			placeName: 'Royal Arcade, Melbourne',
			location: {lat: -37.814624, lng: 144.963843},
			placeImage: '',
			type: 'Historical'
		},
		{
			placeName: 'Melbourne Aquarium',
			location: {lat: -37.82102, lng: 144.958414},
			placeImage: '',
			type: 'Aquarium'
		},
		{
			placeName: 'Old Melbourne Gaol',
			location: {lat: -37.807966, lng: 144.965308},
			placeImage: '',
			type: 'Historical'
		},
		{
			placeName: 'Albert Park Lake',
			location: {lat: -37.846914, lng: 144.97137},
			placeImage: '',
			type: 'Grand Prix Location'
		}
	],
}; // end model data

// Initialize Google Map ========================================================================================
var map;
var markers = [];

function initMap() {

	var styles = [ // custom map styles
		{
		'elementType': 'geometry',
		'stylers': [
		  {
		    'color': '#f5f5f5'
		  }
		]
		},
		{
		'elementType': 'labels.icon',
		'stylers': [
		  {
		    'visibility': 'off'
		  }
		]
		},
		{
		'elementType': 'labels.text.fill',
		'stylers': [
		  {
		    'color': '#616161'
		  }
		]
		},
		{
		'elementType': 'labels.text.stroke',
		'stylers': [
		  {
		    'color': '#f5f5f5'
		  }
		]
		},
		{
		'featureType': 'administrative.land_parcel',
		'elementType': 'labels.text.fill',
		'stylers': [
		  {
		    'color': '#bdbdbd'
		  }
		]
		},
		{
		'featureType': 'landscape.man_made',
		'elementType': 'geometry.fill',
		'stylers': [
		  {
		    'color': '#d2d3e3'
		  }
		]
		},
		{
		'featureType': 'poi',
		'elementType': 'geometry',
		'stylers': [
		  {
		    'color': '#eeeeee'
		  }
		]
		},
		{
		'featureType': 'poi',
		'elementType': 'labels.text.fill',
		'stylers': [
		  {
		    'color': '#757575'
		  }
		]
		},
		{
		'featureType': 'poi.park',
		'elementType': 'geometry',
		'stylers': [
		  {
		    'color': '#e5e5e5'
		  }
		]
		},
		{
		'featureType': 'poi.park',
		'elementType': 'geometry.fill',
		'stylers': [
		  {
		    'color': '#deebe3'
		  }
		]
		},
		{
		'featureType': 'poi.park',
		'elementType': 'labels.text.fill',
		'stylers': [
		  {
		    'color': '#9e9e9e'
		  }
		]
		},
		{
		'featureType': 'road',
		'elementType': 'geometry',
		'stylers': [
		  {
		    'color': '#ffffff'
		  }
		]
		},
		{
		'featureType': 'road.arterial',
		'elementType': 'geometry.fill',
		'stylers': [
		  {
		    'color': '#c9dcde'
		  }
		]
		},
		{
		'featureType': 'road.arterial',
		'elementType': 'labels.text.fill',
		'stylers': [
		  {
		    'color': '#757575'
		  }
		]
		},
		{
		'featureType': 'road.highway',
		'elementType': 'geometry',
		'stylers': [
		  {
		    'color': '#dadada'
		  }
		]
		},
		{
		'featureType': 'road.highway',
		'elementType': 'labels.text.fill',
		'stylers': [
		  {
		    'color': '#616161'
		  }
		]
		},
		{
		'featureType': 'road.local',
		'elementType': 'labels.text.fill',
		'stylers': [
		  {
		    'color': '#9e9e9e'
		  }
		]
		},
		{
		'featureType': 'transit.line',
		'elementType': 'geometry',
		'stylers': [
		  {
		    'color': '#e5e5e5'
		  }
		]
		},
		{
		'featureType': 'transit.station',
		'elementType': 'geometry',
		'stylers': [
		  {
		    'color': '#eeeeee'
		  }
		]
		},
		{
		'featureType': 'water',
		'elementType': 'geometry',
		'stylers': [
		  {
		    'color': '#c9c9c9'
		  }
		]
		},
		{
		'featureType': 'water',
		'elementType': 'geometry.fill',
		'stylers': [
		  {
		    'color': '#d3e4e7'
		  }
		]
		},
		{
		'featureType': 'water',
		'elementType': 'labels.text.fill',
		'stylers': [
		  {
		    'color': '#9e9e9e'
		  }
		]
		}
	];

	map = new google.maps.Map(document.getElementById('map'), { // add the main location for map
		center: {lat:  -37.813611, lng: 144.963056},
		zoom: 14,
		styles: styles, // add the custom map styles
		mapTypeControl: false,
		fullscreenControl: false
	});

    var largeInfowindow = new google.maps.InfoWindow();

    // default marker icon color
    var defaultIcon = createIcon('3fedb1');

    // "highlighted location" marker icon color
    var highlightedIcon = createIcon('be23e4');


    // The following group uses the location array to create an array of markers on initialize.
    for (var i = 0; i < modelData.places.length; i++) {
		// Get the position from the location array.
		var position = modelData.places[i].location;
		var title = modelData.places[i].placeName;
		// Create a marker per location, and put into markers array.
		var marker = new google.maps.Marker({
	        //map: map,
	        position: position,
	        title: title,
	        animation: false,
	        icon: defaultIcon,
	        id: i
		});
		// Push the marker to our array of markers.
		markers.push(marker);

		console.log(marker, 'this is the marker created in maps function'); //REMOVE +++++++++++++++++++++++++++

		// Create an onclick event to open an infowindow at each marker.
		marker.addListener('click', function() {
			populateInfoWindow(this, largeInfowindow);
			animateMarker(this, defaultIcon, highlightedIcon);
		});
		// Two event listeners - one for mouseover, one for mouseout,
		// to change the colors back and forth.
		marker.addListener('mouseover', function() {
			this.setIcon(highlightedIcon);
		});
		marker.addListener('mouseout', function() {
			this.setIcon(defaultIcon);
		});

    }
	//Get current center
	var mapCenter = map.getCenter();

	// event listener for resize on window
	google.maps.event.addDomListener(window, 'resize', function() {
	   map.setCenter(mapCenter); // set map to center if window is resized
	}); // ref - https://stackoverflow.com/questions/8558226/recenter-a-google-map-after-container-changed-width

	ko.applyBindings(new viewModel(modelData));

    showListings();

} // end initMap()

// google map functions =============================================================================================
function animateMarker(marker, defaultIcon, highlightedIcon) {
	for (var i = 0; i < markers.length; i++) {
		markers[i].setAnimation(null); // switch off animation for all markers
		markers[i].setIcon(defaultIcon);
	}
	marker.animation = google.maps.Animation.BOUNCE; // animate selected marker
	marker.setIcon(highlightedIcon);
}

// This function populates the infowindow when the marker is clicked. We'll only allow
// one infowindow which will open at the marker that is clicked, and populate based
// on that markers position.
function populateInfoWindow(marker, infowindow) {
	// Check to make sure the infowindow is not already opened on this marker.
	if (infowindow.marker != marker) {
		infowindow.marker = marker;
		infowindow.setContent('');
		infowindow.open(map, marker);
		// Make sure the marker property is cleared if the infowindow is closed.
		infowindow.addListener('closeclick',function(){
			infowindow.setMarker = null;
		});
		var streetViewService = new google.maps.StreetViewService();
		var radius = 50;
		// In case the status is OK, which means the pano was found, compute the
		// position of the streetview image, then calculate the heading, then get a
		// panorama from that and set the options
		function getStreetView(data, status) {
			if (status == google.maps.StreetViewStatus.OK) {
				var nearStreetViewLocation = data.location.latLng;
				var heading = google.maps.geometry.spherical.computeHeading(
				nearStreetViewLocation, marker.position);
				infowindow.setContent('<div class="map-info-box"><h3>' + marker.title + '</h3><p class="box-text"></p><div class="street-view" id="street-view"></div>');
				var panoramaOptions = {
					position: nearStreetViewLocation,
					pov: {
						heading: heading,
						pitch: 30
					}
				};
				var panorama = new google.maps.StreetViewPanorama(
				document.getElementById('street-view'), panoramaOptions);
			} else {
				infowindow.setContent('<div class="map-info-box"><h3>' + marker.title + '</h3><p class="box-text">Sorry! No Street View Found</p></div>');
			}
		}
		// Use streetview service to get the closest streetview image within
		// 50 meters of the markers position
		streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
		// Open the infowindow on the correct marker.
		infowindow.open(map, marker);
	}
}

// This function will loop through the markers array and display them all.
function showListings() {
	var bounds = new google.maps.LatLngBounds();
	// Extend the boundaries of the map for each marker and display the marker
	for (var i = 0; i < markers.length; i++) {
		markers[i].setMap(map);
		bounds.extend(markers[i].position);
	}
	map.fitBounds(bounds);
}

// create the marker icons, size color etc.
function createIcon(markerColor) {

	var markerImage = new google.maps.MarkerImage(
	'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
	'|40|_|%E2%80%A2',
	new google.maps.Size(24, 34),
	new google.maps.Point(0, 0),
	new google.maps.Point(10, 34),
	new google.maps.Size(24, 34));
	return markerImage;
}
// Google map error handling
function mapError() {
	var mapError = document.getElementById('map-error');
	mapError.innerHTML = '<h2>Sorry! Map Error</h2><p>There seems to be a problem loading the map, please try reloading the page</p>';
}

// View Model ==================================================================================================
var viewModel = function(data) {

    var self = this;

    self.viewMarkers = ko.observableArray(markers); // array containing markers as created by Google initMap()

    self.selected = ko.observable(''); // the users search selection

    self.selectedLocations = ko.observableArray(); // markers contained in search results


	// filter the text input
    self.setLocations = ko.computed(function() {
    	// ref - https://opensoul.org/2011/06/23/live-search-with-knockoutjs/
	    self.selectedLocations.removeAll();
	    // use self.viewMarkers(), to read value
	    self.viewMarkers().forEach(function(value) {
			if(value.title.toLowerCase().indexOf(self.selected().toLowerCase()) >= 0) {
				console.log(value, 'this is the marker created in viewModel');
	        	self.selectedLocations.push(value);
	    	}
		});
    	hideMarkers(); // hide all of the original markers
    	showSelectedMarkers(); // show the results of the search
	});

	// hide markers
	function hideMarkers() {
		var m = markers.length
		for (var i = 0; i < m; i++) {
			markers[i].setVisible(false); // hide all the markers
		}
	};

	// show the search result markers
	function showSelectedMarkers() {
		var s = self.selectedLocations().length
		for (var i = 0; i < s; i++) {
			self.selectedLocations()[i].setVisible(true); // show the selected markers
			self.selectedLocations()[i].setMap(map);
		}
	};

	// center map on the markers
	self.centerMarker = function() {
		var bounds = new google.maps.LatLngBounds(); // define the boundary of the markers
		var s = self.selectedLocations().length
		for (var i = 0; i < s; i++) {
			self.selectedLocations()[i].setVisible(true); // show the selected markers
			self.selectedLocations()[i].setMap(map);
			bounds.extend(self.selectedLocations()[i].position);
		}
		map.fitBounds(bounds); // fit map to the defined bounds
	};

	// icon generator
	self.currentIcon = function(color) {
		var iconType = new google.maps.MarkerImage(
			'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + color + '|40|_|%E2%80%A2',
			new google.maps.Size(23, 34),
			new google.maps.Point(0, 0),
			new google.maps.Point(10, 34),
			new google.maps.Size(23,34));
		return iconType;
	};

	// toggle slide menu
	self.menuClose = ko.observable(false); // starting menu state (open)

    self.toggleSlideMenu = function() {
		self.menuClose(!self.menuClose());
    }; //ref - https://stackoverflow.com/questions/39799600/how-to-use-knockoutjs-click-binding-to-create-a-hamburger-menu

    // close slide menu
    self.closeSlideMenu = function() {
		self.menuClose(!self.menuClose());
    }

    // show all button - slide menu show all places
    self.showAll = function() {
    	self.selected(''); // removes any current search term from input
    };

	// map info screen state
	self.infoScreenVisible = ko.observable(false); // initial value
	// open map info screen
	self.openInfoScreen = function() {
		return self.infoScreenVisible(true);
	};
	// close map info screen
	self.closeInfoScreen = function() {
		return self.infoScreenVisible(false);
	};

    // close map info screen and slide menu
    self.closeAll = function() {
    	self.closeInfoScreen();
    	self.closeSlideMenu();
    }

	self.currentPlace = ko.observable()
	// selected list item - onclick function
	self.selectedListItem = function(marker) {

		self.currentPlace(marker); // the selected list item
		// this code changes the icon for the selected list item
		var s = self.selectedLocations().length;
		for (var i = 0; i < s; i++) {
			self.selectedLocations()[i].icon = self.currentIcon('3fedb1'); // set default icon color
			self.selectedLocations()[i].setVisible(false); // hide all the markers
		}
		showSelectedMarkers();
		self.currentPlace().setVisible(true); // show the selected list item marker
		self.currentPlace().animation = google.maps.Animation.BOUNCE; // animate its marker
		self.currentPlace().icon = self.currentIcon('be23e4'); // change the icons color to highlight color

		self.openInfoScreen(); // open the map info screen

		// request the wikipedia data
		self.wikiData(self.currentPlace());

		// request the flickr data
		self.flickrData(self.currentPlace().title.toLowerCase());

		var lat = self.currentPlace().position.lat();
		var lng = self.currentPlace().position.lng();
		// request the foursquare data
		self.fourSquareData(lat, lng);
	};

	// wikipedia request observables
	self.wikiArray = ko.observableArray(); // array to store wikipedia results
	self.wikiError = ko.observable(false); // wikipedia user error message

	// wikipedia AJAX request
	self.wikiData =  function(request) {
		var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + request.title + '&format=json&callback=wikiCallback';
		$.ajax({
			url: url,
			dataType: 'jsonp',
			jsonp: 'callback',
			timeout: 2000,
			success: function(response) {
				self.wikiArray.removeAll(); // clear the array
				self.wikiError(false); // remove any error message

				// load wikipedia data
	            var wikiName = response[1];
	            var wikiDescription = response[2];
	            var wikiUrl = response[3];
	            var p = wikiName.length;
	            // run a loop to populate an array with objects containing a name, description and url
	            for (var i = 0; i < p; i++) {

	                if (wikiDescription !== '') {
	                	var descriptionStr =  wikiDescription[i];
	                }
	                self.wikiArray.push({name: wikiName[i], description: descriptionStr, url: wikiUrl[i]});
	            }
			},
			error: function(response) {
				console.log('wikipedia api request error');
				self.wikiError(true); // display error message to user
			}
		});
	};

	// flickr request observables
	self.flickrError = ko.observable(false); // flickr user error message

	// AJAX - flickr request TODO - try the api key version
	self.flickrData = function(request) {

		$.ajax({
		    url: 'https://api.flickr.com/services/feeds/photos_public.gne',
		    dataType: 'jsonp',
		    data: { 'tags': request, 'format': 'json', 'safe_search': 1, 'content_type': 1, 'per_page': 5},
			success: function(json) {

				self.flickrError(false);
	  			jsonFlickrFeed(json);
			},
			error: function(e) {
		      	var error = e.error;
		        if (error) {
			        console.log(error, 'Sorry! There was an error loading Flickr images, try closing tab and reopening.');
			        self.flickrError(true);
		        }
			}
	  	});
	};

	// foursquare request observables
	self.fourSqArray = ko.observableArray(); // array to store foursquare results
	self.fourSqError = ko.observable(false); // foursquare user error message
	// AJAX - four square request
	self.fourSquareData =  function(lat, lng) {
		var clientId = 'LT32IBE4RVQNKHSRD1MQ3FP2QOQ4D5ZZEBOKRB5LSKAK1QWH';
		var code = 'VEO2CSXAPNACQNG0JSY30CZO1BF2RFDMOTCAX3EMRG0GTIYA';
		var version = '20170801';
		var url = 'https://api.foursquare.com/v2/venues/search';
		$.ajax({
			type: 'GET',
			url: url,
			dataType: 'json',
			data: 'limit=6' +
				'&ll=' + lat + ',' + lng  +
				'&client_id='+ clientId +
				'&client_secret='+ code +
				'&v=' + version +
				'&m=foursquare',
			timeout: 2000,
			success: function(data) {
				self.fourSqArray.removeAll(); // clear the array
				self.fourSqError(false); // remove any error message

				//load foursquare data
				var fourSqData = data.response.venues;
				var v = fourSqData.length;
	            for (var i = 0; i < v; i++) { // fill the foursquare array with data from the response

					var fourSqName = fourSqData[i].name;
					var fourSqAddress = fourSqData[i].location.address;
					if (fourSqData[i].location.city !== '') {
						var fourSqCity = fourSqData[i].location.city;
					}
					if (fourSqData[i].location.state !== '') {
						var fourSqState = fourSqData[i].location.state;
					}
					for (var c = 0; c < fourSqData[i].categories.length; c++) {
						if (fourSqData[i].categories.length > 0) {
							var fourSqCategories = fourSqData[i].categories[c].name;
						}
					}
	                self.fourSqArray.push({name: fourSqName, category: fourSqCategories, address: fourSqAddress, city: fourSqCity, state: fourSqState});
	            }
	           	console.log(self.fourSqArray(), 'four square loop generated array');
				console.log(data, 'success data');
			},
			error: function(response) {
				console.log('foursquare api request error');
				self.fourSqError(true); // display error message to user
			}
		});
	};
};

// process flickr api response - couldn't get this to work inside viewModel?
function jsonFlickrFeed(json) {
	console.log(json, 'jsonFlickrFeed');
	$('#images').empty(); // empty previously loaded images
	$.each(json.items, function(i, item) {
		$('<img />').attr('src', item.media.m).appendTo('#images');
	});
};

//ko.applyBindings(new ViewModel(modelData));
/*
In case you’re wondering what the parameters to ko.applyBindings do,

The first parameter says what view model object you want to use with the declarative bindings it activates

Optionally, you can pass a second parameter to define which part of the document you want to search for
data-bind attributes. For example, ko.applyBindings(myViewModel, document.getElementById('someElementId')).
This restricts the activation to the element with ID someElementId and its descendants, which is useful
if you want to have multiple view models and associate each with a different region of the page.

ref - https://stackoverflow.com/questions/18990244/whats-the-applybindings-second-parameter-used-for
*/



// ========================================================================================================

		/* this code hides all of the markers apart from the selected list item -- was in self.selectedListItem
		hideMarkers();
		self.selectedLocations.removeAll();
		for (var i = 0; i < self.selectedLocations().length; i++) {
			self.selectedLocations()[i].setVisible(false); // hide all the markers
		}

		marker.setVisible(true);
		*/
// ============================================================================================================

    /* code below for filter function
	self.filters = ko.observableArray(modelData.filters);

    self.filter = ko.observable('');

    self.placesFilter = ko.computed(function() { // reference and notes in NOTUSED/drop-down-ref

        var filter = self.filter();
        if (!filter || filter == "Show All") {
            return self.placeList();
        } else {
            return ko.utils.arrayFilter(self.placeList(), function(marker) { // 1. see notes on arrayFilter
            	console.log(filter, 'this is filter value')
                return marker.type == filter;
            });
        }
	});
	*/
//==================================================================================================================

/* alternate AJAX request code syntax
	$.ajax({
	    url: 'https://api.flickr.com/services/feeds/photos_public.gne',
	    dataType: 'jsonp',
	    data: { 'tags': request, 'format': 'json', 'safe_search': 1, 'content_type': 1, 'per_page': 5},
  	}).done(function(json) {
  		console.log('loaded');
  		jsonFlickrFeed(json);
    }).fail(function(response) { // error handling

        var error = response.error;
        if (error) {
        console.log(error, 'Sorry! There was an error loading Flickr images, try closing tab and reopening.');
        }

    })

    return false;
};
*/

