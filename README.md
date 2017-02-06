# Gladys weather

Gladys hooks to get weather from a city and degree.

Need Gladys version >= 3.0.0.

## Documentation

To install this module, you need to clone the repository in gladys/api/hooks/

## Example :
```javascript
gladys.modules['gladys-weather'].weather('Paris', 'c')
.then(function(result) {
	console.log(result);
});
```
