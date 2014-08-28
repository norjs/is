/** Benchmarks for different Array join implementations */

var is = require('nor-is');

/** */

/* Returns true if value is a string in UUID format */
function test_using_nor_is(uuid) {
	return is.uuid(uuid);
}

var test_using_regexp = require('nor-is/check-uuid-regexp.js');
var test_using_string = require('nor-is/check-uuid.js');

/** */
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var input;

// add tests
suite.add('Regexp based test', function() {
	test_using_regexp(input);
})
.add('String based test', function() {
	test_using_string(input);
})

.add('nor-is test', function() {
	test_using_nor_is(input);
})

.on('start', function() {
	input = 'fdef19c6-2e6e-11e4-b6e3-0800279ca880';
})

// add listeners
.on('error', function(event) {
	console.error('ERROR: ' + event.target + ': ' + event.target.error);
})

.on('cycle', function(event) {
	console.log(String(event.target));
})

.on('complete', function() {
	console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})

.run();

/* EOF */
