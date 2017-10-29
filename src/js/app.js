// app.js single-page-application-project

// Model
var places = [ // array of places
	{
		placeName: 'Fedaration Square',
		lat: -37.817997,
		lng: 144.968894,
		placeImage: ''
	},
	{
		placeName: 'Eureka Skydeck',
		lat: -37.821366,
		lng: 144.964696,
		placeImage: ''
	},
	{
		placeName: 'Hosier Lane',
		lat: -37.816645,
		lng: 144.969234,
		placeImage: ''
	},
	{
		placeName: 'Royal Botanic Gardens',
		lat: -37.82979,
		lng: 144.981594,
		placeImage: ''
	},
	{
		placeName: 'Melbourne Cricket Ground, MCG',
		lat: -37.81998,
		lng: 144.98345,
		placeImage: ''
	},
	{
		placeName: 'Block Arcade',
		lat: -37.815819,
		lng: 144.964689,
		placeImage: ''
	},
	{
		placeName: 'Queen Victoria Market',
		lat: -37.806637,
		lng: 144.959483,
		placeImage: ''
	},
	{
		placeName: 'Melbourne Museum',
		lat: -37.803596,
		lng: 144.971686,
		placeImage: ''
	},
	{
		placeName: 'Old Melbourne Gaol',
		lat: -37.807851,
		lng: 144.965147,
		placeImage: ''
	},
	{
		placeName: 'Albert Park Lake',
		lat: -37.846914,
		lng: 144.97137,
		placeImage: ''
	}
];

// View Model
var ViewModel = function() {

}

// tell knockout to apply our bindings to this viewmodel
ko.applyBindings(new ViewModel())

// Initialize Google Map
function initMap() {

	var styles = [ // custom map styles
		{
		"elementType": "geometry",
		"stylers": [
		  {
		    "color": "#f5f5f5"
		  }
		]
		},
		{
		"elementType": "labels.icon",
		"stylers": [
		  {
		    "visibility": "off"
		  }
		]
		},
		{
		"elementType": "labels.text.fill",
		"stylers": [
		  {
		    "color": "#616161"
		  }
		]
		},
		{
		"elementType": "labels.text.stroke",
		"stylers": [
		  {
		    "color": "#f5f5f5"
		  }
		]
		},
		{
		"featureType": "administrative.land_parcel",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
		    "color": "#bdbdbd"
		  }
		]
		},
		{
		"featureType": "landscape.man_made",
		"elementType": "geometry.fill",
		"stylers": [
		  {
		    "color": "#d2d3e3"
		  }
		]
		},
		{
		"featureType": "poi",
		"elementType": "geometry",
		"stylers": [
		  {
		    "color": "#eeeeee"
		  }
		]
		},
		{
		"featureType": "poi",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
		    "color": "#757575"
		  }
		]
		},
		{
		"featureType": "poi.park",
		"elementType": "geometry",
		"stylers": [
		  {
		    "color": "#e5e5e5"
		  }
		]
		},
		{
		"featureType": "poi.park",
		"elementType": "geometry.fill",
		"stylers": [
		  {
		    "color": "#deebe3"
		  }
		]
		},
		{
		"featureType": "poi.park",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
		    "color": "#9e9e9e"
		  }
		]
		},
		{
		"featureType": "road",
		"elementType": "geometry",
		"stylers": [
		  {
		    "color": "#ffffff"
		  }
		]
		},
		{
		"featureType": "road.arterial",
		"elementType": "geometry.fill",
		"stylers": [
		  {
		    "color": "#c9dcde"
		  }
		]
		},
		{
		"featureType": "road.arterial",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
		    "color": "#757575"
		  }
		]
		},
		{
		"featureType": "road.highway",
		"elementType": "geometry",
		"stylers": [
		  {
		    "color": "#dadada"
		  }
		]
		},
		{
		"featureType": "road.highway",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
		    "color": "#616161"
		  }
		]
		},
		{
		"featureType": "road.local",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
		    "color": "#9e9e9e"
		  }
		]
		},
		{
		"featureType": "transit.line",
		"elementType": "geometry",
		"stylers": [
		  {
		    "color": "#e5e5e5"
		  }
		]
		},
		{
		"featureType": "transit.station",
		"elementType": "geometry",
		"stylers": [
		  {
		    "color": "#eeeeee"
		  }
		]
		},
		{
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [
		  {
		    "color": "#c9c9c9"
		  }
		]
		},
		{
		"featureType": "water",
		"elementType": "geometry.fill",
		"stylers": [
		  {
		    "color": "#d3e4e7"
		  }
		]
		},
		{
		"featureType": "water",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
		    "color": "#9e9e9e"
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
}

// Map error handling
function mapError(e) {
	alert('There seems to be a problem loading the map, please try reloading the page');
	console.log(e);
}