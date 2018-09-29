import VNode from '../src/vnode';

function bv(tag, props, children, key = null) {
	if (typeof children == 'string') {
		children = [children];
	}
	return new VNode(tag, props, key, children);
}

export default bv;
