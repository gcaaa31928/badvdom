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

describe('create VNode test by bv function', function() {

	it ('is vnode instance', function() {
		var vnode = bv('div', [], [
			bv('div', [], 'abcd'),
			bv('span', [], '123')
		]);
		expect(vnode).to.be.instanceof(VNode);
	});
	it ('is vnode has correct text node', function() {
		var vnode = bv('div', [], 'test');
		var element = vnode.render();
		document.body.appendChild(element);
		expect(dom.serialize()).to.equal('<html><head></head><body><div>test</div></body></html>');
	});
	it ('is vnode tree same as dom tree', function() {
		// should be like this
		// <div>
		// 	<div>abcd</div>
		// 	<span>123</span>
		// </div>
		var vnode = bv('div', [], [
			bv('div', [], 'abcd'),
			bv('span', [], '123')
		]);
		document.body.appendChild(vnode.render());
		expect(dom.serialize()).to.equal('<html><head></head><body><div><div>abcd</div><span>123</span></div></body></html>');
	});
});
