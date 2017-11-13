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
			placeName: 'Royal Botanic Gardens',
			location: {lat: -37.82979, lng: 144.981594},
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
			location: {lat: -37.806637, lng: 144.959483},
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
			placeName: 'Albert Park Lake',
			location: {lat: -37.846914, lng: 144.97137},
			placeImage: '',
			type: 'Grand Prix Location'
		}
	],

	filters: [ // select categories
		'Show All',
		'Arts Complex',
		'Observation Deck',
		'Street Art Area',
		'Gardens',
		'Sports Ground',
		'Historical',
		'Market',
		'Museum',
		'Historical',
		'Grand Prix Location'
	]
};

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
		mapTypeControl: false
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
	        animation: google.maps.Animation.DROP,
	        icon: defaultIcon,
	        id: i
		});
		// Push the marker to our array of markers.
		markers.push(marker);

		console.log(marker, 'this is the marker created in maps function'); //REMOVE +++++++++++++++++++++++++++

		// Create an onclick event to open an infowindow at each marker.
		marker.addListener('click', function() {
			populateInfoWindow(this, largeInfowindow);
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
	ko.applyBindings(new viewModel(modelData));

    showListings();

} // end initMap()

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
				infowindow.setContent('<div class="map-info-box"><h3>' + marker.title + '</h3><p class="box-text">No Street View Found</p></div>');
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
	new google.maps.Size(23, 34),
	new google.maps.Point(0, 0),
	new google.maps.Point(10, 34),
	new google.maps.Size(23,34));
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


	// filter input function
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
		//var bounds = new google.maps.LatLngBounds();
		// Extend the boundaries of the map for each marker and display the marker
		/*
		for (var i = 0; i < markers.length; i++) {
			markers[i].setVisible(false); // hide all the markers
		}
		*/
		var s = self.selectedLocations().length
		for (var i = 0; i < s; i++) {
			self.selectedLocations()[i].setVisible(true); // show the selected markers
			self.selectedLocations()[i].setMap(map);
			//bounds.extend(self.selectedLocations()[i].position);
		}
		//map.fitBounds(bounds);
	};

	// map info screen state
	self.infoScreenVisible = ko.observable(false); // initial value

	self.openInfoScreen = function() { // open map info screen
		return self.infoScreenVisible(true);
	};

	self.closeInfoScreen = function() { // close map info screen
		return self.infoScreenVisible(false);
	};

	/* toggle for css - didn't use
	self.transition = ko.pureComputed(function() { // map info screen transition
        return self.infoScreenVisible() === true ? "mapinfo" : "hideinfo";
    });
	*/

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

	// selected list item - on click
	self.selectedListItem = function(marker) {
		/* this code hides all of the markers apart from the selected list item
		hideMarkers();
		self.selectedLocations.removeAll();
		for (var i = 0; i < self.selectedLocations().length; i++) {
			self.selectedLocations()[i].setVisible(false); // hide all the markers
		}

		marker.setVisible(true);
		*/

		self.currentPlace = ko.observable(marker);
		// this code changes the icon for the selected list item
		var s = self.selectedLocations().length;
		for (var i = 0; i < s; i++) {
			self.selectedLocations()[i].icon = self.currentIcon('3fedb1'); // set default icon color
			self.selectedLocations()[i].setVisible(false); // hide all the markers
		}
		showSelectedMarkers();
		self.currentPlace().setVisible(true);
		self.currentPlace().animation = google.maps.Animation.BOUNCE;
		self.currentPlace().icon = self.currentIcon('be23e4');

		self.openInfoScreen(); //open the map info screen
	/*  AJAX
	    var wikiData =  function() {
	    	var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + self.currentPlace().title + '&format=json&callback=wikiCallback';
	    	$ajax({
        		dataType: 'jsonp',
        		jsonp: 'callback',
	    		url: url,
	    		timeout: 2000,
	    		beforeSend: function() {
	    			// TODO add a loading message
	    		},
	    		complete: function() {
	    			// TODO remove loading message
	    		},
	    		success: function(data) {
	    			// load wikipedia data
	    		},
	    		fail: function() {
	    			// TODO  show error message
	    		}
	    	});
	    };
	*/
	};


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
	// toggle slide menu
    self.toggleSlideMenu = function() {
		$( '#slide-menu' ).toggleClass( 'slide-close');
    };
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
