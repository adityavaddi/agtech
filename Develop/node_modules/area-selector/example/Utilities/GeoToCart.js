/*
  Utility to help convert

  geo coordinates [{latitude:0,longitude:0}]
  to
  cartesian coordinates [(0,0)] which is a input to turf library

  turf libray takes in the cartesian coordinates and return a turf object which can be used to
  utilize turf library

  Example:
  To find if a point is within the polygon.
  turf.inside(point,polygon) //returns boolean
  point and polygon are suppose to be a turf object.
  this utility helps to convert a normal geoLatLng Object to turf Object.
*/

import turf from '@turf/turf'
var GeoToCart = function(geoLatLng){

    var cartLatLng = []

    if ( Array.isArray(geoLatLng) ){

        for( var key in geoLatLng ){
            cartLatLng.push( [geoLatLng[key].latitude, geoLatLng[key].longitude] )
        }

        cartLatLng.push( [geoLatLng[0].latitude, geoLatLng[0].longitude] )
        return turf.polygon( [cartLatLng] )

    } else {
        return turf.point( [geoLatLng.latitude,geoLatLng.longitude] )
    }
}

module.exports = GeoToCart
