
//最后一个是回调函数，传递过来的也可以是函数，可以在任意时间调用，只不过名字叫做回调函数
function animate(obj, target, callback) {
    //一运行就清除之前的定时器，避免连续触发事件导致多个定时器同时运行出现问题 
    clearInterval(obj.sildleft);
    obj.sildleft = setInterval(function () {

        //加一个终止条件
        //要写在定时器里
        let step = Math.ceil((target - obj.offsetLeft) / 10)
        //判断是否是负值，如果是赋值就向大的区整，这样从 某个位置返回某个位置时的数值就是正确的了
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.sildleft);
            //意思是程序执行完之后在调用这个函数
            if (callback) {
                callback();
            }
        } else {
            //缓动动画修改的是这个每次添加的距离step 步长 公式：（目标值-现在的位置）/10
            obj.style.left = obj.offsetLeft + step + 'px'
        }
        //一般写15
    }, 15)

}

