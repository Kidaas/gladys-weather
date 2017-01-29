var Promise = require('bluebird');
var weather = require('weather-js');

module.exports = function getWeather(city, degree){

	return new Promise(function(resolve, reject){
		return weather.find({search: city, degreeType: degree}, function(err, result) {
			if(err) console.log(err);

			// Warning : can return more than one result
			return resolve(result);
		});
  });
};
