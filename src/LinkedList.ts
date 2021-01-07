import LinkedListNode from "./LinkedListNode";

export default class LinkedList<D = {}> {
	// 存放数据的变量
	data: LinkedListNode<D>[];
	// 头部
	head: LinkedListNode<D>;
	// 尾部
	tail: LinkedListNode<D>;
	// 长度
	length: number;
	// 构造函数
	constructor(...values: D[]) {
		this.data = [];
		// 初始化数据
		for (let v of values) {
			this.append(v);
		}
		// 调用格式化方法
		this.format();
	}
	append(element: D) {
		// 如果没有元素
		if (this.data.length == 0) {
			// 那么添加一个元素
			this.data.push(new LinkedListNode(element));
			// 并设置为头部
			this.head = this.data[0];
			this.format();
			return this.data;
		} else {
			this.data.push(new LinkedListNode(element));
			this.format();
			return this.data;
		}
	}
	remove(element: D) {
		for (let i in this.data) {
			if (this.data[i].value == element) {
				this.data.splice(Number(i), 1);
				this.format();
				return this.data;
			}
		}
		return false;
	}
	removeAt(index: number) {
		this.data.splice(index - 1, 1);
		this.format();
		return this.data;
	}
	insertAt(index: number, element: any) {
		if (index == 1) {
			this.data.unshift(new LinkedListNode(element));
			this.format();
			return this.data;
		}
		this.data.splice(index - 1, 0, new LinkedListNode(element));
		// 格式化数据
		this.format();
		// 返回添加后的数据
		return this.data;
	}
	// 格式化数组的函数
	private format() {
		if (this.data.length != 0) {
			this.head = this.data[0];
			this.length = this.data.length;
			// 循环遍历数组
			for (let i in this.data) {
				// 如果是最后一个
				if (Number(i) == this.data.length - 1) {
					// 将其赋值给尾部变量
					this.tail = this.data[i];
					// 返回
					return;
				}
				// 否则设置其next值
				this.data[i].next = this.data[Number(i) + 1];
			}
		}
	}
	// 输出信息的函数
	log() {
		console.log("----------log----------");
		console.log("data:", this.data);
		console.log("length:", this.length);
		console.log("head:", this.head);
		console.log("tail:", this.tail);
		console.log("----------end----------");
	}
	// 遍历数据函数
	forEach(func: (v?: LinkedListNode) => void) {
		this.data.forEach(func);
	}
	// 根据值查找元素函数
	find(val) {
		// 遍历数据
		for (let i in this.data) {
			// 如果找到相应的值
			if (val == this.data[Number(i)]) {
				// 返回之
				return this.data[i];
			}
		}
		return false;
	}
	// 根据元素索引查找元素
	findAt(index: number) {
		// 先判断是否存在该索引
		if (!(index > this.length || index < 0)) {
			// 返回数据
			return this.data[index];
		} else {
			// 否则返回假值
			return false;
		}
	}
}

let test = new LinkedList(
	"第一个元素",
	"第二个元素",
	"第三个元素",
	"第四个元素",
	"第五个元素"
);

// // 删除
// test.remove("第五个元素");
// test.log();
// // 在指定位置删除
// test.removeAt(3);
// test.log();
// // 添加
// test.append("删除后又添加回来的第五个元素");
// test.log();
// // 在指定位置添加的函数
// test.insertAt(3, "删除后又添加回来的第三个元素");
// test.log();
