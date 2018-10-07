import VNode from './vnode';
class Patch {
	static textNode (textNode, oldTextNode) {
		if (textNode === oldTextNode) {
			return true;
		}
		return false;
	}
	static VNode (vnode, oldVnode) {
		if (vnode == oldVnode) {
			return;
		}
		var children = vnode.children,
			oldChildren = oldVnode.children;
		if (children && oldChildren) {
			Patch.patchChildren(children, oldChildren);
		} else if (children) {
			Patch.replaceChildren(children);
		}
	}
}
