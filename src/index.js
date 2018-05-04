// require underscore and jquery
var _ = require('underscore');
var $ = require('jquery');

console.log('cao');
var test = 123;

if ( _.isObject( test ) ) {
  console.log( test.name );
} else {
  console.log('var test is not an object');
  var type = typeof test;
}
