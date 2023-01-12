"use strict";

window.initMap = function() {
  var customMapType = new google.maps.StyledMapType([
    {
      stylers: [
        {'saturation': -2600},
        {'lightness': 5},
        {'visibility': 'simplified'}
      ]
    },
    {
      elementType: 'labels',
      stylers: [{visibility: 'on'}]
    },
    {
      featureType: 'road',
      stylers: [{color: 'black'}]
    }
  ], {
    name: 'Dublin'
  });

  var image = new google.maps.MarkerImage(
  	'img/widgets/gmap-pin.png',
  	new google.maps.Size(48,54),
  	new google.maps.Point(0,0),
  	new google.maps.Point(24,54)
	);

  var customMapTypeId = 'custom_style';

  var brooklyn = {lat: 55.9741573, lng: -3.1660406};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    scrollwheel: false,
    streetViewControl: false,
    mapTypeControl: false,
    center: brooklyn, // Brooklyn.
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
  });

  var marker = new google.maps.Marker({
    map: map,
    icon: image,
    title: 'MARBLE ENTERPRISES L.P.',
    position: brooklyn
  });

  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);
}