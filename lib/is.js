/* Generic Node.js Database Library */
(function(is) {
"use strict";

/* Returns false if x is undefined, otherwise true. */
is.def = function(x) {
	return (x === undefined) ? false : true;
};

is['defined'] = is.def;

/* Returns true if x is undefined, otherwise false. */
is.undef = function(x) {
	return (x === undefined) ? true : false;
};

is['undefined'] = is.undef;

/* Returns true if x is trueish */
is.true = function(x) {
	return x ? true : false;
};

/* Returns true if of specified type */
is.type = function(obj, type) {
	return is.true( typeof obj === type );
};

/* Returns true if obj */
is.obj = function(obj) {
	return is.true( (obj && is.type(obj, 'object')) );
};

is['object'] = is.obj;

/* Returns true if f is a function */
is.func = function(f) {
	return is.true( (f && is.type(f, 'function')) );
};

is['function'] = is.func;

/* Returns true if f is callable */
is.callable = function(f) {
	return is.func(f);
};

/* Returns true if `obj` instance of `what` */
is.objOf = function(obj, what) {
	return is.true( is.obj(obj) && (obj instanceof what) );
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
is.uuid = function(obj) {
	return ( is.string(obj) && /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/.test(obj) ) ? true : false;
};

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

}( (typeof module === 'undefined') ? (this.nor_is = {}) : (module.exports={}) ));
/* EOF */
