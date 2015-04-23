/* Generic Node.js Database Library */
(function(is) {
"use strict";

/* Returns false if x is undefined, otherwise true. */
is.def = function(x) {
	return (x === undefined) ? false : true;
};

is.defined = is.def;

/* Returns true if x is null, otherwise false. */
is.nul = function(x) {
	return (x === null) ? true : false;
};

is['null'] = is.nul;

/* Returns true if x is undefined, otherwise false. */
is.undef = function(x) {
	return (x === undefined) ? true : false;
};

is['undefined'] = is.undef;

/* Returns true if x is trueish */
is.t = function(x) {
	return x ? true : false;
};

/* Returns true if x is trueish */
is['true'] = is.t;
is.trueish = is.t;

/* Returns true if boolean */
is.boolean = function(obj) {
	return is.type(obj, 'boolean') || is.objOf(obj, Boolean);
};

is.bool = is.boolean;

/* Returns true if x is falsish */
is.f = function(x) {
	return x ? false : true;
};

is['false'] = is.f;
is.falseish = is.f;

/* Returns true if of specified type */
is.type = function(obj, type) {
	return is.trueish( typeof obj === type );
};

/* Returns true if obj */
is.obj = function(obj) {
	return is.trueish( (obj && is.type(obj, 'object')) );
};

is.object = is.obj;

/* Returns true if f is a function */
is.func = function(f) {
	return is.trueish( (f && is.type(f, 'function')) );
};

is['function'] = is.func;

/* Returns true if f is callable */
is.callable = function(f) {
	return is.func(f);
};

/* Returns true if `obj` instance of `what` */
is.objOf = function(obj, what) {
	return is.trueish( is.obj(obj) && (obj instanceof what) );
};

/* Returns true if array */
is.array = function(obj) {
	return is.objOf(obj, Array);
};

/* Returns true if string */
is.string = function(obj) {
	return is.type(obj, 'string') || is.objOf(obj, String);
};

/* Returns true if instance of `RegExp` */
is.regexp = function(obj) {
	return is.objOf(obj, RegExp);
};

/* Returns true if instance of `Date` */
is.date = function(obj) {
	return is.objOf(obj, Date);
};

/* Returns true if number */
is.number = function(obj) {
	return is.type(obj, 'number') || is.objOf(obj, Number);
};

/* Returns true if value is a string in UUID format */
is.uuid = require('./check-uuid-regexp.js');
//is.uuid = require('./check-uuid.js');
//is.uuid = require('./check-uuid-reverse.js');

/* Returns true if value is a string and looks like a URL (ftp://, http:// or https://) */
is.url = function(obj) {
	return ( is.string(obj) && /^(ftp|https?):\/\//.test(obj) ) ? true : false;
};

/* Returns true if value looks like an email address. This is very simple test and should not be trusted alone. */
is.email = function(obj) {
	return ( is.string(obj) && /^[^@]+@[^@]+/.test(obj) ) ? true : false;
};

/* Returns true if value is a string in format like `2014-04-06T12:43:50.292Z` */
is.date_string = function(obj) {
	return ( is.string(obj) && /^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\.[0-9]+)?Z$/.test(obj) ) ? true : false;
};

is.dateString = is.date_string;
is['date string'] = is.date_string;

/* Returns `true` if the value of `obj` as a string matches pattern `pattern` */
is.pattern = function(obj, pattern) {
	if(!is.regexp(pattern)) { throw new TypeError("pattern not regexp"); }
	obj = ''+obj;
	return pattern.test(obj);
};

/* Returns `true` if the value of `obj` as a string matches pattern `^[0-9]+$` */
is.integer = function(obj) {
	return is.pattern(obj, /^[0-9]+$/);
};

/** Returns true if the value is NaN (Not a Number) */
is.nan = function(obj) {
	return isNaN(obj);
};

/** Returns true if the value is NaN (Not a Number) */
is.NaN = is.nan;

/** Returns true if the argument is positive, including strings like "on", "true", "1", etc. */
is.enabled = function(v) {
	if(is.string(v)) {
		v = v.toLowerCase();
		if( (v === "on") || (v === "enabled") || (v === "true") || (v === "t") || (v === "1") ) {
			return true;
		}
		if( (v === "off") || (v === "disabled") || (v === "false") || (v === "f") || (v === "0") ) {
			return false;
		}
	}
	return v ? true : false;
};

/** Returns true if the argument is negative, including strings like "0", "off", "false", etc. */
is.disabled = function(v) {
	return !is.enabled(v);
};

}( (typeof module === 'undefined') ? (this.nor_is = {}) : (module.exports={}) ));
/* EOF */
