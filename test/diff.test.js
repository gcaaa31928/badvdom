import { expect } from 'chai';
import bv from '../src/utils';
import VNode from '../src/vnode';
import { JSDOM } from 'jsdom'

describe('create VNode test by class', function() {
	it ('is vnode instance', function() {
		var vnode = new VNode();
		expect(vnode).to.be.instanceof(VNode);
	})

	it ('are vnode uuid all the same', function() {
		var a = new VNode();
		var b = new VNode();
		expect(a.uuid).to.equal(b.uuid);
	});
});

