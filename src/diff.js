import VNode from './vnode';
class Diff {
	patches: [],
	compare(leftVNode, rightVNode) {
		dfs(leftVNode, rightVNode);
	}

	compareTextNode(leftTextNode, rightTextNode) {
		if (leftTextNode === rightTextNode) {
			return;
		}
		let patch = Patch.genInst(Patch.TEXT, rightTextNode);
		patches.push(patch);
	}

	compareProps(leftVNode, rightVNode) {
		let leftProps = leftVNode.props;
		let rightProps = rightVNode.props;
		let patchObj = {};

		for (let key in leftProps) {
			if (rightProps[key] && rightProps[key] !== leftProps[key]) {
				patchObj[key] = rightProps[key];
			} else if (!rightProps[key]){
				patchObj[key] = rightProps[key];
			}
		}

		for (let key in rightPops) {
			if (!leftProps[key]) {
				patchObj[key] = rightProps[key];
			}
		}
		if (Object.is(patchObj, {})) {
			patches.push(Patch.getInst(Patch.ATTR, patchObj));
		}
	}

	getKeyMapFromChildren(children) {
		let keyMap = {}, noKeyMap = [];
		children.forEach((child) => {
			if (child.key) {
				keyMap[child.key] = child;
			} else {
				noKeyMap.push(child);
			}
		});
		return {
			keyMap: keyMap,
			noKeyMap: noKeyMap
		};
	}

	compareChildren(leftChildren, rightChilden) {
		let rightChildrenMap = this.getKeyMapFromChildren(rightChilden);
		let rightChildrenKeyMap = rightChildrenMap.keyMap;
		let rightChildrenNoKeyMap = rightChildrenMap.noKeyMap;
		let patches = [];

		let tmpChildren = [];
		leftChildren.forEach((child) => {
			if (child.key) {
				if (rightChildrenKeyMap[child.key]) {
					delete rightChildrenNoKeyMap[child.key];
					tmpChildren.push(child);
				} else {
					patches.push(Patch.getInst(Patch.DELETE, child));
				}
			} else {
				if (rightChildrenNoKeyMap.length > 0)  {
					tmpChildren.push(rightChildrenNoKeyMap[0]);
					rightChildrenNoKeyMap.shift();
				} else {
					patches.push(Patch.getInst(Patch.DELETE, child));
				}
			}
		});
		for (let key in rightChildrenKeyMap) {
			let child = rightChildrenKeyMap[key];
			tmpChildren.push(child)
			patches.push(Patch.getInst(Patch.INSERT, child));
		}
		rightChildrenNoKeyMap.forEach((child) => {
			tmpChildren.push(child);
			patches.push(Patch.getInst(Patch.INSERT, child));
		});
	}

	dfs(leftVNode, rightVNode) {
		if (typeof leftVNode === 'string' && typeof rightVNode) {
			compareTextNode(leftVNode, rightVNode);
		} else if (leftVNode.key === rightVNode.key && leftVNode.tagName === rightVNode.tagName) {
			compareProps(leftVNode, rightVNode);
		}
	}
}
