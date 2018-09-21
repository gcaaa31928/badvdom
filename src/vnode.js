const VNodeUUID = Symbol('VNodeUUID');
class VNode {
	constructor(tag, props, key, children) {
		this.$uuid = VNodeUUID;
		this._tag = tag;
		this._props = props;
		this._key = key;
		this._children = children || [];
	}
	render() {
		var element = document.createElement(this._tag);

		var props = this._props;
		for (var propKey in this._props) {
			prop = this._props[propKey];
			element.setAttribute(propKey, prop);
		}
		if (Array.isArray(children)) {
			children.forEach(function(child) {
				var childEl;
				if (child instanceof VNode) {
					childEl = child.render();
				} else {
					childEl = document.createTextNode(child);
				}
				element.appendChild(child);
			});
		}
		return element;
	}
	isSameNode(theNode) {
		return this._key === theNode._key && this._tag === theNode._tag;
	}
}

export default VNode;
