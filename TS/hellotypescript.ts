

let num:number
let str:string
let bool:boolean
let arr:number[]
let arr2:string[]
//字面量，为常量值。
let a=10
let anytype:any
//void表示没有返回值
let voidtype:void
//never没有值，不能是任何类型
let nevertype:never
//object任意的js对象
let obj:object
//当不确定具体类型时可用unknown
let anysatetype:unknown
//类型断言,告诉编译器具体是什么类型
anysatetype as string

//tuple元组，表示一个已知元素数量和类型的数组，各元素的类型不必相同.
//第一个参数表示，第一个元素的类型。第二个参数表示，第二个元素的类型。
let tuple:[string,number]

//enum枚举。账号状态 0表示正常，1表示异常，2表示审核中。
enum Zhanghaostatus {normal, unnormal, auditing}
let enumType:Zhanghaostatus;


function getsum():void {
    
}

let gender :'male'|'female'
gender = 'male'; // 正确



let student:{
    name:string,
    age:number
    honor:string[]
    //？表示可选属性,后续可以不实现这个属性。
    studentclass?:string
    //还是key:value的形式，表示名字是字符串，值是任意类型。
    [propName:string]:any
}

student={
    name:'zhangsan',
    age:18,
    honor:['a','b']

}

//定义a是函数且两个参数是数字类型，返回值是数字类型。
let sum:(a:number,b:number)=>number;
