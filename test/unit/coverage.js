/* Smart Coverage Support */
var cov = module.exports = {};

cov.enabled = function() {
	try {
		return ( _$jscoverage !== undefined ) ? true : false;
	} catch(e) {
		return false;
	}
};

/* */
cov['require'] = function(file) {
	try {
		return require('../../dist-inst/' + file);
	} catch(e) {
		return require('../../dist/' + file);
	}
};

/* EOF */
