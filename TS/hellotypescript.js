"use strict";
let num;
let str;
let bool;
let arr;
let arr2;
//字面量，为常量值。
let a = 10;
let anytype;
//void表示没有返回值
let voidtype;
//never没有值，不能是任何类型
let nevertype;
//object任意的js对象
let obj;
//当不确定具体类型时可用unknown
let anysatetype;
//类型断言,告诉编译器具体是什么类型
anysatetype;
//tuple元组，表示一个已知元素数量和类型的数组，各元素的类型不必相同.
//第一个参数表示，第一个元素的类型。第二个参数表示，第二个元素的类型。
let tuple;
//enum枚举。账号状态 0表示正常，1表示异常，2表示审核中。
var Zhanghaostatus;
(function (Zhanghaostatus) {
    Zhanghaostatus[Zhanghaostatus["normal"] = 0] = "normal";
    Zhanghaostatus[Zhanghaostatus["unnormal"] = 1] = "unnormal";
    Zhanghaostatus[Zhanghaostatus["auditing"] = 2] = "auditing";
})(Zhanghaostatus || (Zhanghaostatus = {}));
let enumType;
function getsum() {
}
let gender;
gender = 'male'; // 正确
let student;
student = {
    name: 'zhangsan',
    age: 18,
    honor: ['a', 'b']
};
//定义a是函数且两个参数是数字类型，返回值是数字类型。
let sum;
