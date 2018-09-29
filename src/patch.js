import VNode from './vnode';
class Patch {
	static textNode (textNode, oldTextNode) {
		if (textNode === oldTextNode) {
		}
	}
	static VNodes (vnode, oldVnode) {
		let children = vnode.children,
			oldChildren = oldVnode.children;

		if (vnode == oldVnode) {
			return;
		}
		if (vnode instanceof VNode) {
		}

	}
}
