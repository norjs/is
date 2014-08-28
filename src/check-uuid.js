/** UUID test function
 * Copyright (c) 2014 Sendanor <info@sendanor.com>
 * Copyright (c) 2014 Jaakko-Heikki Heusala <jheusala@iki.fi>
 */

var cbuffer = '09AFaf-';
var c0 = cbuffer.charCodeAt(0);
var c9 = cbuffer.charCodeAt(1);
var cA = cbuffer.charCodeAt(2);
var cF = cbuffer.charCodeAt(3);
var ca = cbuffer.charCodeAt(4);
var cf = cbuffer.charCodeAt(5);
var cdash = cbuffer.charCodeAt(6);

/** Optimized UUID test function */
module.exports = function test_uuid(s) {
	if( (!s) || (s.length !== 36) ) return false;
	var i = 0, l = 36, n = 0;
	while(i < l) {
		n = s.charCodeAt(i++);
		if(! ( ( ((i === 9)||(i === 14)||(i === 19)||(i === 24)) && (n === cdash) ) ||
		    ( ((n >= c0) && (n <= c9)) || ((n >= ca) && (n <= cf)) || ((n >= cA) && (n <= cF)) ) )) return false;
	}
	return true;
};

/* EOF */
