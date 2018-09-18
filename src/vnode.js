const VNodeUUID = Symbol('VNodeUUID');
class VNode {
	constructor(tag, props, children) {
		this.$uuid = VNodeUUID;
		this._tag = tag;
		this._props = props;
		this._childrent = children;
	}
	static isSameNode(VNode leftNode, VNode rightNode) {
	}
}

export VNode;
