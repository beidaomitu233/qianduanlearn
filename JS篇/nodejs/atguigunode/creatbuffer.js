//alloc

let buf1=Buffer.alloc(10)
console.log('-----alloc-----');
console.log(buf1);

//allocUnsafe

let buf2=Buffer.allocUnsafe(10000)
console.log('-----allocUnsafe-----');
console.log(buf2);

//from

let buf3=Buffer.from('hello')
console.log('-----from-----');
console.log(buf3);


//

let buf4=Buffer.from('hello')
console.log(buf4);
//因为是数组所以可以输出单个元素，0就是h的ascii码
console.log(buf4[0]);
//可以进行修改变成其他的字母或者符号。
buf4[0]=99;
//将ascii码转换成字母
console.log(buf4.toString());


