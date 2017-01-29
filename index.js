module.exports = function(sails) {

  var weather = require('./lib/weather.js');

  return  {
    'weather': weather
  };
};
