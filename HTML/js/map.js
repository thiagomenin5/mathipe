function initMap() {
    
    var map = new google.maps.Map(document.getElementById('ieatmaps'), {
      center: {lat: -34.47296152913344, lng: -58.55157674647959},
      zoom: 12,
      styles: [
    {
        "featureType": "all",
        "stylers": [
            {
                "saturation": 0
            },
            {
                "hue": "#e7ecf0"
            }
        ]
    },
    {
        "featureType": "road",
        "stylers": [
            {
                "saturation": -70
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": -60
            }
        ]
    }
]
    });

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-34.47296152913344, -58.55157674647959)
        , title: 'ASL'
        , map : map

    });
  }
