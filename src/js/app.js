// app.js single-page-application-project

// Model =============================================================================================
var places = [ // array of places
	{
		placeName: 'Fedaration Square',
		location: {lat: -37.817997, lng: 144.968894},
		placeImage: ''
	},
	{
		placeName: 'Eureka Skydeck',
		location: {lat: -37.821366, lng: 144.964696},
		placeImage: ''
	},
	{
		placeName: 'Hosier Lane',
		location: {lat: -37.816645, lng: 144.969234},
		placeImage: ''
	},
	{
		placeName: 'Royal Botanic Gardens',
		location: {lat: -37.82979, lng: 144.981594},
		placeImage: ''
	},
	{
		placeName: 'Melbourne Cricket Ground, MCG',
		location: {lat: -37.81998, lng: 144.98345},
		placeImage: ''
	},
	{
		placeName: 'Block Arcade',
		location: {lat: -37.815819, lng: 144.964689},
		placeImage: ''
	},
	{
		placeName: 'Queen Victoria Market',
		location: {lat: -37.806637, lng: 144.959483},
		placeImage: ''
	},
	{
		placeName: 'Melbourne Museum',
		location: {lat: -37.803596, lng: 144.971686},
		placeImage: ''
	},
	{
		placeName: 'Old Melbourne Gaol',
		location: {lat: -37.807851, lng: 144.965147},
		placeImage: ''
	},
	{
		placeName: 'Albert Park Lake',
		location: {lat: -37.846914, lng: 144.97137},
		placeImage: ''
	}
];

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
    var bounds = new google.maps.LatLngBounds();

    // default marker icon color
    var defaultIcon = createIcon('3fedb1');

    // "highlighted location" marker icon color
    var highlightedIcon = createIcon('be23e4');

    // The following group uses the location array to create an array of markers on initialize.
    for (var i = 0; i < places.length; i++) {
		// Get the position from the location array.
		var position = places[i].location;
		var title = places[i].placeName;
		// Create a marker per location, and put into markers array.
		var marker = new google.maps.Marker({
        map: map,
        position: position,
        title: title,
        animation: google.maps.Animation.DROP,
        icon: defaultIcon,
        id: i
		});
		// Push the marker to our array of markers.
		markers.push(marker);
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
		bounds.extend(markers[i].position);
    }
    // Extend the boundaries of the map for each marker
    map.fitBounds(bounds);
} // end initMap()

// This function populates the infowindow when the marker is clicked. We'll only allow
// one infowindow which will open at the marker that is clicked, and populate based
// on that markers position.
function populateInfoWindow(marker, infowindow) {
	// Check to make sure the infowindow is not already opened on this marker.
	if (infowindow.marker != marker) {
		infowindow.marker = marker;
		infowindow.setContent('<div class="map-info-box"><h3>' + marker.title + '</h3><p>' + marker.position + '</p></div>');
		infowindow.open(map, marker);
		// Make sure the marker property is cleared if the infowindow is closed.
		infowindow.addListener('closeclick',function(){
			infowindow.setMarker = null;
		});
	}
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
function mapError(e) {
	alert('There seems to be a problem loading the map, please try reloading the page');
	console.log(e);
}

var Location = function(data) {

	this.placeName = ko.observable(data.placeName);
	this.location = ko.observable(data.location);
	this.placeImage = ko.observable(data.placeImage);
}

// View Model
var ViewModel = function() {

	var self = this; //self refers to the viewmodel

	this.placeList = ko.observableArray([]);

	places.forEach(function(location) {  // load the places data
		self.placeList.push(new Location(location));
	});

	this.toggleSlideMenu = function() {
		$( '#slide-menu' ).toggleClass( 'slide-in');
	};

	this.createMapMarkers = function() {
		//TODO send markers info to google map
		//will be useful for when the number of places changes
		 return showListings();
	}
}

// tell knockout to apply our bindings to this viewmodel
ko.applyBindings(new ViewModel())
