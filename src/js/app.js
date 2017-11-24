// app.js single-page-application-project

// Model =============================================================================================
var modelData = {
	places: [ // array of places
		{
			placeName: 'Federation Square',
			location: {lat: -37.817997, lng: 144.968894}
		},
		{
			placeName: 'Eureka Skydeck',
			location: {lat: -37.821366, lng: 144.964696}
		},
		{
			placeName: 'Hosier Lane',
			location: {lat: -37.816645, lng: 144.969234}
		},
		{
			placeName: 'Royal Botanic Gardens Victoria',
			location: {lat: -37.829751, lng: 144.98138}
		},
		{
			placeName: 'Melbourne Cricket Ground, MCG',
			location: {lat: -37.81998, lng: 144.98345}
		},
		{
			placeName: 'Block Arcade',
			location: {lat: -37.815819, lng: 144.964689}
		},
		{
			placeName: 'Queen Victoria Market',
			location: {lat: -37.806427, lng: 144.959342}
		},
		{
			placeName: 'Melbourne Museum',
			location: {lat: -37.803596, lng: 144.971686}
		},
		{
			placeName: 'Melbourne Star Observation Wheel',
			location: {lat: -37.811882, lng: 144.937461}
		},
		{
			placeName: 'Centre Place, Melbourne',
			location: {lat: -37.8164, lng: 144.965438}
		},
		{
			placeName: 'Royal Arcade, Melbourne',
			location: {lat: -37.814624, lng: 144.963843}
		},
		{
			placeName: 'Melbourne Aquarium',
			location: {lat: -37.82102, lng: 144.958414}
		},
		{
			placeName: 'Old Melbourne Gaol',
			location: {lat: -37.807966, lng: 144.965308}
		},
		{
			placeName: 'Albert Park Lake',
			location: {lat: -37.846914, lng: 144.97137}
		}
	],
	styles: [ // google map custom styles data
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
	]
}; // end model data


// Initialize Google Map ========================================================================================
var map;
var markers = []; // array for map markers
var placeMarkers = []; // array for google places markers

function initMap() {

	var styles = modelData.styles; // add the custom styles

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

    // google places search input
    var searchBox = new google.maps.places.SearchBox(
    document.getElementById('places-search'));
    searchBox.bindTo('bounds', map); // bias results to the bounds of the map

    // The following group uses the location array to create an array of markers on initialize.
    for (var i = 0; i < modelData.places.length; i++) {
		// Get the position from the model data.
		var position = modelData.places[i].location;
		var title = modelData.places[i].placeName;
		// Create a marker per location, and put into markers array.
		var marker = new google.maps.Marker({
	        map: map,
	        position: position,
	        title: title,
	        animation: false,
	        icon: defaultIcon,
	        id: i
		});
		// Push the marker to our array of markers.
		markers.push(marker);
		// Event listener for clicked marker
		marker.addListener('click', markerClick);
		// Event listeners - one for mouseover, one for mouseout
		marker.addListener('mouseover', markerHover);
		marker.addListener('mouseout', markerDefault);
    }

    ko.applyBindings(new viewModel(modelData)); // apply knockout js bindings

    // run this when marker is clicked
    function markerClick() {
		// ref - #0. listed at bottom of file
		populateInfoWindow(this, largeInfowindow);
		animateMarker(this, defaultIcon, highlightedIcon);
    }
    // run this on marker hover
    function markerHover() {

		this.setIcon(highlightedIcon);
    }
    //run this on marker mouse out
    function markerDefault() {

		this.setIcon(defaultIcon);
    }

	// Listen for the event fired when the user selects a prediction from the picklist
	searchBox.addListener('places_changed', function() {

		searchBoxPlaces(this);
	});

	// Listen for the event fired when the user selects a prediction and clicks the "go" button
	document.getElementById('go-places').addEventListener('click', textSearchPlaces);

	//Get current center
	var mapCenter = map.getCenter();

	// event listener for resize on window
	google.maps.event.addDomListener(window, 'resize', function() {

		map.setCenter(mapCenter); // set map to center if window is resized
	}); // ref - #1. listed at bottom of file

    showListings(); // Initial layout for map and markers

} // end initMap()


// google map api functions =============================================================================================

// animate the selected marker
function animateMarker(marker, defaultIcon, highlightedIcon) {

	for (var i = 0; i < markers.length; i++) {
		markers[i].setAnimation(null); // switch off animation for all markers
		markers[i].setIcon(defaultIcon);
	}
	marker.animation = google.maps.Animation.BOUNCE; // animate selected marker
	marker.setIcon(highlightedIcon);
}

// populate the infowindow when the marker is clicked
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
		var getStreetView = function(data, status) {

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
		};
		// Use streetview service to get the closest streetview image within 50 meters of the markers position
		streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
		// Open the infowindow on the correct marker.
		infowindow.open(map, marker);
	}
}

// create the marker icons
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

// display all the markers
function showListings() {

	var bounds = new google.maps.LatLngBounds();
	// Extend the boundaries of the map for each marker and display the marker
	for (var i = 0; i < markers.length; i++) {
		markers[i].setMap(map);
		bounds.extend(markers[i].position);
	}
	map.fitBounds(bounds);
}

// hide all the markers
function hideMarkers(markers) {

	for (var i = 0; i < markers.length; i++) {
		markers[i].setMap(null);
	}
}

// This function fires when the user selects a searchbox picklist item.
function searchBoxPlaces(searchBox) {

	hideMarkers(placeMarkers);
	var places = searchBox.getPlaces();
	// For each place, get the icon, name and location.
	if (places.length === 0) {
		window.alert('We did not find any places matching that search!');
	} else {
	// For each place, get the icon, name and location.
	createMarkersForPlaces(places);
	}
}

// This function fires when the user select "go" on the places search.
function textSearchPlaces() {

	var bounds = map.getBounds();
	hideMarkers(placeMarkers);
	var placesService = new google.maps.places.PlacesService(map);
		placesService.textSearch({
		query: document.getElementById('places-search').value,
		bounds: bounds
	}, function(results, status) {
		if (status === google.maps.places.PlacesServiceStatus.OK) {
		createMarkersForPlaces(results);
		}
	});
}

// This function creates markers for each place found in either places search.
function createMarkersForPlaces(places) {

	var bounds = new google.maps.LatLngBounds();
	for (var i = 0; i < places.length; i++) {
		var place = places[i];
		var icon = {
		url: place.icon,
		size: new google.maps.Size(35, 35),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(15, 34),
		scaledSize: new google.maps.Size(25, 25)
		};
		// Create a marker for each place.
		var marker = new google.maps.Marker({
			map: map,
			icon: icon,
			title: place.name,
			position: place.geometry.location,
			id: place.place_id
		});
		// Create a single infowindow to be used with the place details information
		var placeInfoWindow = new google.maps.InfoWindow();
		marker.addListener('click', clickedPlaceMarker);
		placeMarkers.push(marker);
		if (place.geometry.viewport) {
			// Only geocodes have viewport.
			bounds.union(place.geometry.viewport);
		} else {
			bounds.extend(place.geometry.location);
		}
	}
	// If a marker is clicked, do a place details search on it in the next function.
	function clickedPlaceMarker() {

		if (placeInfoWindow.marker == this) {
			console.log("This infowindow already is on this marker!");
		} else {
			getPlacesDetails(this, placeInfoWindow);
		}
	}
	map.fitBounds(bounds);
}

// place details search
function getPlacesDetails(marker, infowindow) {

	var service = new google.maps.places.PlacesService(map);
	service.getDetails({ placeId: marker.id }, function(place, status) {
		if (status === google.maps.places.PlacesServiceStatus.OK) {
			// Set the marker property on this infowindow so it isn't created again.
			infowindow.marker = marker;
			var innerHTML = '<div class="places-info-box">';
			if (place.name) {
				innerHTML += '<h3>' + place.name + '</h3>';
			}
			if (place.formatted_address) {
				innerHTML += '<br>' + place.formatted_address;
			}
			if (place.formatted_phone_number) {
				innerHTML += '<br>' + place.formatted_phone_number;
			}
			if (place.opening_hours) {
				innerHTML += '<br><br><strong>Hours:</strong><br>' +
				place.opening_hours.weekday_text[0] + '<br>' +
				place.opening_hours.weekday_text[1] + '<br>' +
				place.opening_hours.weekday_text[2] + '<br>' +
				place.opening_hours.weekday_text[3] + '<br>' +
				place.opening_hours.weekday_text[4] + '<br>' +
				place.opening_hours.weekday_text[5] + '<br>' +
				place.opening_hours.weekday_text[6];
			}
			if (place.photos) {
				innerHTML += '<br><br><img src="' + place.photos[0].getUrl(
				{maxHeight: 100, maxWidth: 200}) + '">';
			}
			innerHTML += '</div>';
			infowindow.setContent(innerHTML);
			infowindow.open(map, marker);
			// Make sure the marker property is cleared if the infowindow is closed.
			infowindow.addListener('closeclick', function() {
			infowindow.marker = null;
			});
		}
	});
}

// Google map error handling
function mapError() {

	var mapError = document.getElementById('google-map-error');
	mapError.innerHTML = '<div class="map-error"><h2>Sorry! Map Error</h2><p>There seems to be a problem loading the map, please try reloading the page</p></div>';
}


// View Model ==================================================================================================
var viewModel = function(data) {

    var self = this;

    self.viewMarkers = ko.observableArray(markers); // array containing markers as created by Google initMap()
    self.selected = ko.observable(''); // the users text input search selection
    self.selectedLocations = ko.observableArray(); // markers contained in search results

	// filter the text input
    self.setLocations = ko.computed(function() { // ref - #2. listed at bottom of file
    	// first clear the selected marker array
	    self.selectedLocations.removeAll();
	    // use self.viewMarkers(), to read value
	    self.viewMarkers().forEach(function(value) {

			if(value.title.toLowerCase().indexOf(self.selected().toLowerCase()) >= 0) {
	        	self.selectedLocations.push(value);
	    	}
		});
    	clearMarkers(); // clear all of the original markers
    	showSelectedMarkers(); // show the results of the search
	});

	// clear the markers
	function clearMarkers() {

		var m = markers.length;
		for (var i = 0; i < m; i++) {
			markers[i].setVisible(false); // hide all the markers
		}
	}

	// show the search result markers
	function showSelectedMarkers() {

		var s = self.selectedLocations().length;
		for (var i = 0; i < s; i++) {
			self.selectedLocations()[i].setVisible(true); // show the selected markers
			self.selectedLocations()[i].setMap(map);
		}
	}

	// center map on the visible markers
	self.centerMarker = function() {

		var bounds = new google.maps.LatLngBounds(); // define the boundary of the markers
		var s = self.selectedLocations().length;
		for (var i = 0; i < s; i++) {
			self.selectedLocations()[i].setVisible(true); // show the selected location markers
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

	// UI controls ======================================================
	// toggle slide menu
	self.menuClose = ko.observable(false); // starting menu state (open)

    self.toggleSlideMenu = function() {

		self.menuClose(!self.menuClose());
    }; // ref - #3. listed at bottom of file

    // close slide menu
    self.closeSlideMenu = function() {

		self.menuClose(!self.menuClose());
    };

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
    };
    // end UI controls

	self.currentPlace = ko.observable();
	// selected list item - when the user selects a place from the list
	self.selectedListItem = function(marker) {

		self.currentPlace(marker); // the selected list item
		var s = self.selectedLocations().length;
		for (var i = 0; i < s; i++) {
			self.selectedLocations()[i].icon = self.currentIcon('3fedb1'); // set default icon color
			self.selectedLocations()[i].setVisible(false); // hide all the markers
		}
		// show the selected markers
		showSelectedMarkers();
		// this code changes the icon for the selected list item
		self.currentPlace().setVisible(true); // show the selected list item marker
		self.currentPlace().animation = google.maps.Animation.BOUNCE; // animate its marker
		self.currentPlace().icon = self.currentIcon('be23e4'); // change the icons color to highlight color
		self.openInfoScreen(); // open the map info screen

		// request the wikipedia data
		self.wikiData(self.currentPlace());

		// request the flickr data
		self.flickrData(self.currentPlace().title);
		var lat = self.currentPlace().position.lat();
		var lng = self.currentPlace().position.lng();

		// request the foursquare data
		self.fourSquareData(lat, lng); // use the currentPlace() lat,lng values as the argument
	};

	// AJAX requests =========================================================
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
			timeout: 3000,
			success: function(response) {

				self.wikiArray.removeAll(); // clear the array
				self.wikiError(false); // remove any error message
				// load wikipedia data
	            var wikiName = response[1];
	            var wikiDescription = response[2];
	            var wikiUrl = response[3];
	            var p = wikiName.length;
	            var descriptionStr;
	            // run a loop to populate an array with objects containing a name, description and url
	            for (var i = 0; i < p; i++) {
	                if (wikiDescription !== '') {
	                	descriptionStr =  wikiDescription[i];
	                }
	                self.wikiArray.push({name: wikiName[i], description: descriptionStr, url: wikiUrl[i]});
	            }
			},
			error: function(e) {

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

		    url: 'https://api.flickr.com/services/feeds/photos_public.gne?callback=jsonFlickrFeed',
		    dataType: 'jsonp',
			jsonp: 'callback',
		    data: { 'tags': request, 'format': 'json'},
		    timeout: 5000,
		    // response handled by jsonFlickrFeed(json) callback function
			error: function(e, t, m) { // use timeout to trigger error

		        if( t === "timeout" ) {
			        console.log('flickr api error');
			        self.flickrError(true); // display error message to user
		        } // ref - #4. listed at bottom of file
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
			timeout: 3000,
			success: function(data) {

				self.fourSqArray.removeAll(); // clear the array
				self.fourSqError(false); // remove any error message
				//load foursquare data
				var fourSqCity, fourSqState, fourSqCategories;
				var fourSqData = data.response.venues;
				var v = fourSqData.length;
	            for (var i = 0; i < v; i++) { // fill the foursquare array with data from the response

					var fourSqName = fourSqData[i].name;
					var fourSqAddress = fourSqData[i].location.address;
					if (fourSqData[i].location.city !== '') {
						fourSqCity = fourSqData[i].location.city;
					}
					if (fourSqData[i].location.state !== '') {
						fourSqState = fourSqData[i].location.state;
					}
					for (var c = 0; c < fourSqData[i].categories.length; c++) {
						if (fourSqData[i].categories.length > 0) {
							fourSqCategories = fourSqData[i].categories[c].name;
						}
					}
	                self.fourSqArray.push({name: fourSqName, category: fourSqCategories, address: fourSqAddress, city: fourSqCity, state: fourSqState});
	            }
			},
			error: function(e) {

				console.log('foursquare api request error');
				self.fourSqError(true); // display error message to user
			}
		});
	};
}; // end viewModel

// process flickr api response - couldn't get this to work inside viewModel?
function jsonFlickrFeed(json) { // ref - #5.

	$('#images').empty(); // empty previously loaded images
    if (json.items) {
		$.each(json.items, function(i, item) {
			$('<img />').attr('src', item.media.m).appendTo('#images');
		});
    }
}

// reference material
// #0. removing function from eventlistener and loop (eg  marker.addListener('click', toggleBounce);) - https://developers.google.com/maps/documentation/javascript/markers
// #1. recenter google map on resize - https://stackoverflow.com/questions/8558226/recenter-a-google-map-after-container-changed-width
// #2. search function - https://opensoul.org/2011/06/23/live-search-with-knockoutjs/
// #3. jsonp-request-error-handling - https://stackoverflow.com/questions/19035557/jsonp-request-error-handling
// #4. how to toggle a menu with knockout - https://stackoverflow.com/questions/39799600/how-to-use-knockoutjs-click-binding-to-create-a-hamburger-menu
// #5. flickr api request - https://www.sitepoint.com/load-flickr-photos-using-jsonapi/
// also made use of udacity google map api class code / adapted from