"use strict";

var is = require('../../dist/is.js');
var assert = require('assert');

/* */
describe('is', function(){

  describe('.undef()', function(){
    it('should return true when the value is undefined', function(){
      assert.strictEqual(true, is.undef(undefined));
      assert.strictEqual(true, is.undef());
    });
    it('should return false when the value is not undefined', function(){
      assert.strictEqual(false, is.undef(true));
      assert.strictEqual(false, is.undef(false));
      assert.strictEqual(false, is.undef(0));
      assert.strictEqual(false, is.undef(-100));
      assert.strictEqual(false, is.undef(200));
      assert.strictEqual(false, is.undef('Hello World'));
      assert.strictEqual(false, is.undef(''));
      assert.strictEqual(false, is.undef({}));
      assert.strictEqual(false, is.undef({'foo':'bar'}));
      assert.strictEqual(false, is.undef([]));
      assert.strictEqual(false, is.undef([1, 2, 3]));
      assert.strictEqual(false, is.undef(null));
    });
  });

  describe('.def()', function(){
    it('should return true when the value is defined', function(){
      assert.strictEqual(true, is.def(true));
      assert.strictEqual(true, is.def(false));
      assert.strictEqual(true, is.def(0));
      assert.strictEqual(true, is.def(-100));
      assert.strictEqual(true, is.def(200));
      assert.strictEqual(true, is.def('Hello World'));
      assert.strictEqual(true, is.def(''));
      assert.strictEqual(true, is.def({}));
      assert.strictEqual(true, is.def({'foo':'bar'}));
      assert.strictEqual(true, is.def([]));
      assert.strictEqual(true, is.def([1, 2, 3]));
      assert.strictEqual(true, is.def(null));
    });
    it('should return false when the value is not defined', function(){
      assert.strictEqual(false, is.def(undefined));
      assert.strictEqual(false, is.def());
    });
  });


  describe('.true()', function(){
    it('should return true when the value is trueish', function(){
      assert.strictEqual(true, is.true(true));
      assert.strictEqual(true, is.true(1));
      assert.strictEqual(true, is.true(2));
      assert.strictEqual(true, is.true('foobar'));
      assert.strictEqual(true, is.true({'foo':'bar'}));
    });
    it('should return false when the value is not trueish', function(){
      assert.strictEqual(false, is.true(false));
      assert.strictEqual(false, is.true(0));
      assert.strictEqual(false, is.true(''));
      assert.strictEqual(false, is.true(null));
      assert.strictEqual(false, is.true(undefined));
    });
  });

  describe('.type()', function(){

    it('should return true when the value is of specified type', function(){
      assert.strictEqual(true, is.type(false, 'boolean'));
      assert.strictEqual(true, is.type(undefined, 'undefined'));
      assert.strictEqual(true, is.type(null, 'object'));
      assert.strictEqual(true, is.type(1, 'number'));
      assert.strictEqual(true, is.type('foo', 'string'));
      assert.strictEqual(true, is.type({'foo':'bar'}, 'object'));
      assert.strictEqual(true, is.type([1,2,3,4], 'object'));
      assert.strictEqual(true, is.type(function() { return 'foobar'; }, 'function'));
    });

	it('should return false when the value is not of specified type', function(){
		// FIXME: Add missing compinations
		assert.strictEqual(false, is.type(undefined, 'boolean'));
		assert.strictEqual(false, is.type(true, 'undefined'));
		assert.strictEqual(false, is.type(1, 'object'));
		assert.strictEqual(false, is.type({foo:'bar'}, 'number'));
		assert.strictEqual(false, is.type(123, 'string'));
		assert.strictEqual(false, is.type(678, 'object'));
		assert.strictEqual(false, is.type("hello", 'object'));
		assert.strictEqual(false, is.type(null, 'function'));
	});

  });

  describe('.obj()', function(){

    it('should return true when the value is an object', function(){
      assert.strictEqual(true, is.obj({'foo':'bar'}));
      assert.strictEqual(true, is.obj([1,2,3,4]));
    });

	it('should return false when the value is not an object', function(){
		// FIXME: Add missing compinations
		assert.strictEqual(false, is.obj(null));
		assert.strictEqual(false, is.obj(undefined));
		assert.strictEqual(false, is.obj(true));
		assert.strictEqual(false, is.obj(false));
		assert.strictEqual(false, is.obj(1));
		assert.strictEqual(false, is.obj(123));
		assert.strictEqual(false, is.obj("hello"));
	});

  });

  describe('.array()', function(){

	it('should return true when the value is an array', function(){
		assert.strictEqual(true, is.array([1,2,3,4]));
	});

	it('should return false when the value is not an array', function(){
		// FIXME: Add missing compinations
		assert.strictEqual(false, is.array({'foo':'bar'}));
		assert.strictEqual(false, is.array(null));
		assert.strictEqual(false, is.array(undefined));
		assert.strictEqual(false, is.array(true));
		assert.strictEqual(false, is.array(false));
		assert.strictEqual(false, is.array(1));
		assert.strictEqual(false, is.array(123));
		assert.strictEqual(false, is.array("hello"));
	});

  });

  describe('.string()', function(){

	it('should return true when the value is an string', function(){
		assert.strictEqual(true, is.string("hello"));
	});

	it('should return false when the value is not an string', function(){
		// FIXME: Add missing compinations
		assert.strictEqual(false, is.string({'foo':'bar'}));
		assert.strictEqual(false, is.string(null));
		assert.strictEqual(false, is.string(undefined));
		assert.strictEqual(false, is.string(true));
		assert.strictEqual(false, is.string(false));
		assert.strictEqual(false, is.string(1));
		assert.strictEqual(false, is.string(123));
		assert.strictEqual(false, is.string([1,2,3,4]));
	});

  });

  describe('.objOf()', function(){

    it('should return true when the value is of specified type', function(){
      assert.strictEqual(true, is.objOf(new Date(), Date));
      assert.strictEqual(true, is.objOf({'foo':'bar'}, Object));
      assert.strictEqual(true, is.objOf([1,2,3,4], Array));
    });

	it('should return false when the value is not of specified type', function(){
		// FIXME: Add missing compinations
		assert.strictEqual(false, is.objOf(undefined, Date));
		assert.strictEqual(false, is.objOf(true, Date));
		assert.strictEqual(false, is.objOf(1, Date));
		assert.strictEqual(false, is.objOf({foo:'bar'}, Date));
		assert.strictEqual(false, is.objOf(123, Date));
		assert.strictEqual(false, is.objOf(678, Date));
		assert.strictEqual(false, is.objOf("hello", Date));
		assert.strictEqual(false, is.objOf(null, Date));
	});

  });

  describe('.number()', function(){

	it('should return true when the value is a number', function(){
		assert.strictEqual(true, is.number(1));
		assert.strictEqual(true, is.number(123));
	});

	it('should return false when the value is not a number', function(){
		// FIXME: Add missing compinations
		assert.strictEqual(false, is.number("hello"));
		assert.strictEqual(false, is.number({'foo':'bar'}));
		assert.strictEqual(false, is.number(null));
		assert.strictEqual(false, is.number(undefined));
		assert.strictEqual(false, is.number(true));
		assert.strictEqual(false, is.number(false));
		assert.strictEqual(false, is.number([1,2,3,4]));
	});

  });

  describe('.uuid()', function(){

	it('should return true when the value is a uuid', function(){
		assert.strictEqual(true, is.uuid('511BCCC0-2E79-11E4-9403-0800279CA880'));
		assert.strictEqual(true, is.uuid('511bccc0-2e79-11e4-9403-0800279ca880'));
		assert.strictEqual(true, is.uuid('56171144-2e79-11e4-b7c9-0800279ca880'));
		assert.strictEqual(true, is.uuid('df2801ef-5c00-4139-8d90-cd2538a3a714'));
		assert.strictEqual(true, is.uuid('d5137ad5-832d-4907-ac54-8a1971dd8e69'));
	});

	it('should return false when the value is not a uuid', function(){
		// FIXME: Add missing compinations
		assert.strictEqual(false, is.uuid(""));
		assert.strictEqual(false, is.uuid("d5137ad5"));
		assert.strictEqual(false, is.uuid("d5137ad5-832d-4907-ac54-8a197xdd8e69"));
		assert.strictEqual(false, is.uuid("d5137ad5-832d-4907-ac54-xxxxxxxxxxx9"));
		assert.strictEqual(false, is.uuid("56171144-2e79-11e4-b7c9x0800279ca880"));
		assert.strictEqual(false, is.uuid("56171144-2e79-11e4xb7c9-0800279ca880"));
		assert.strictEqual(false, is.uuid("56171144-2e79x11e4-b7c9-0800279ca880"));
		assert.strictEqual(false, is.uuid("56171144x2e79-11e4-b7c9-0800279ca880"));
		assert.strictEqual(false, is.uuid("511BCCC0-2E79-11E4-9403-0800279XA880"));
		assert.strictEqual(false, is.uuid("511BCCC0-2E79-11X4-94A3-0800279cA880"));
		assert.strictEqual(false, is.uuid("511BCCC0-2EX9-11A4-94A3-0800279cA880"));
		assert.strictEqual(false, is.uuid("511BCCX0-2EA9-11A4-94A3-0800279cA880"));
		assert.strictEqual(false, is.uuid("hello"));
		assert.strictEqual(false, is.uuid({'foo':'bar'}));
		assert.strictEqual(false, is.uuid(null));
		assert.strictEqual(false, is.uuid(undefined));
		assert.strictEqual(false, is.uuid(true));
		assert.strictEqual(false, is.uuid(false));
		assert.strictEqual(false, is.uuid([1,2,3,4]));
	});

  });

});

/* EOF */
