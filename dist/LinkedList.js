import LinkedListNode from "./LinkedListNode";
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        this.data = [];
        // 初始化数据
        for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
            var v = values_1[_a];
            this.append(v);
        }
        this.format();
    }
    LinkedList.prototype.append = function (element) {
        if (this.data.length == 0) {
            this.data.push(new LinkedListNode(element));
            this.head = this.data[0];
            this.format();
            return this.data;
        }
        else {
            this.data.push(new LinkedListNode(element));
            this.format();
            return this.data;
        }
    };
    LinkedList.prototype.remove = function (element) {
        for (var i in this.data) {
            if (this.data[i].value == element) {
                this.data.splice(Number(i), 1);
                this.format();
                return this.data;
            }
        }
        return false;
    };
    LinkedList.prototype.removeAt = function (index) {
        this.data.splice(index - 1, 1);
        this.format();
        return this.data;
    };
    LinkedList.prototype.insertAt = function (index, element) {
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
    };
    // 格式化数组的函数
    LinkedList.prototype.format = function () {
        if (this.data.length != 0) {
            this.head = this.data[0];
            this.length = this.data.length;
            // 循环遍历数组
            for (var i in this.data) {
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
        console.log(this.head);
    };
    // 输出信息的函数
    LinkedList.prototype.log = function () {
        console.log("----------log----------");
        console.log("data:", this.data);
        console.log("length:", this.length);
        console.log("head:", this.head);
        console.log("tail:", this.tail);
        console.log("----------end----------");
    };
    return LinkedList;
}());
export default LinkedList;
var test = new LinkedList("第一个元素", "第二个元素", "第三个元素", "第四个元素", "第五个元素");
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
//# sourceMappingURL=LinkedList.js.map