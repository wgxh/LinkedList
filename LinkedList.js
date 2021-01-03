class LinkedListNode {
	// 写入构造函数
	/**
	 *
	 * @param {*} value
	 * @param {LinkedListNode} next
	 */
	constructor(value = "", next = null) {
		this.value = value;
		this.next = next;
	}
}

class LinkedList {
	/**
	 * @template T
	 * @param {T[]} value
	 */
	constructor(...value) {
		// 初始化链表数据
		/**
		 * @param {LinkedListNode[]}
		 */
		this.data = [];
		this.head = 0;
		this.length = 0;
		this.teil = null;
		for (let v of value) {
			this.push(v);
		}
	}
	push(element) {
		if (this.data.length == 0) {
			this.data.push(new LinkedListNode(element));
			this.head = this.data[0];
		} else {
			this.data.push(new LinkedListNode(element, null));
			this.teil = this.data[this.data.length - 1];
			this.data[this.data.length - 2].next = this.data[this.data.length - 1];
			this.length = this.data.length;
		}
	}
	remove(element) {
		for (let i in this.data) {
			if (element == this.data[i].value) {
				this.data.splice(i, 1);
				this.length--;
				return;
			} else {
				continue;
			}
		}
	}
	removeAt(index) {
		this.data.splice(index - 1, 1);
		this.length--;
	}
}

// 导出链表
export default LinkedList;
