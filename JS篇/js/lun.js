window.addEventListener('load',function(){

  
  
    let arrow_l = document.querySelector('.arrow-l');
    let arrow_r = document.querySelector('.arrow-r');
    let focus = document.querySelector('.focus');

  focus.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
    });


    focus.addEventListener('mouseleave', function() {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
     
    });




let ul=focus.querySelector('ul')
let ol=focus.querySelector('.circle')

//第一部分  小圆圈制作部分 添加个数就是图片个数
//显示切换圈的个数，是根据图片的数量来修改,动态生成，检测图片个数进append
for(let i=0;i<ul.children.length;i++){

    //被添加元素得用一次创建一次 
    let li =document.createElement('li')
    //给每个圈圈添加索引号，在第二部分用
li.setAttribute('data-index',i)

   //在ol小圆点盒子里添加小圆点
    ol.appendChild(li)
    
//插入元素的同时绑定元素，
li.addEventListener('click',function(){
    //排他思想实现效果 
for(let z=0;z<ol.children.length;z++){
    ol.children[z].className=' '
}
this.className='current'


//第二部分图片跟着小点滑动， 用animate动画，得先有定位，
//这里移动的是ul 而不是li 直接把ul整体拉过去，改变position
//直接用animate来移动,算法就是圈圈的索引号乘上图片宽度（给负值，因为往左移

//绑定两个元素，就是给一个元素加上自定义属性，然后再添加点击事件，然后再获取这个this自定义属性值
let focusWidth=focus.offsetWidth;
let index=this.getAttribute('data-index')

animate(ul,-index*focusWidth);

})
    
}

//添加背景样式
ol.children[0].className='current'


//利用点击按钮切换轮播图时 ，添加点击事件，添加缓动动画事件（缓动距离是后面的变量乘上图片宽度，添加变量点击一次就++ 
// 在轮播图的后面再加上第一张图，（在制作点之后在用深克隆，复制在append进到后面
//加判断条件 当到最后一张时（图片的张数），就把left改成0，实现无缝切换的效果

//再点击事件里让小圆圈跟随按钮滚动，声明一个变量 并++ 然后清除其他圈圈的样式，留下当前[变量]变量做索引号 圆圈样式，加上判断如果等于图片的数量就让变量等于0
//这里有个小bug如果点击圈圈去到其他页再点按钮，就会挑错，应该是把点击圈圈之后 就把那个图片的索引号给刚才的变量，再给圈圈播放的变量
})