export default class LinkedListNode<T = {}> {
	constructor(public value: T, public next: LinkedListNode<T> = null) {}
}
