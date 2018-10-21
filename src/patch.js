class Patch {
	static TEXT = Symobol('text');
	static PROP = Symobol('prop');
	static REPLACE = Symobol('replace');
	static INSERT = Symobol('insert');
	static DELETE = Symobol('delete');
	static genInst(type, content) {
		return Patch(type, content);
	}
	constructor(type, content) {
		this._type = type;
		this._content = content;
	}
}
