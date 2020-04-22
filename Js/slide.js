let addListener=document.getElementById("slide_photo");
var  slide_div=document.getElementById("slide_photo");
var  slide_img=slide_div.getElementsByTagName("div");
var div=document.getElementById("slide_content");
window.onload=function begining() {
    slide_div.style.webkitTransform='perspective(5000px) rotateX(-10deg) rotateY(0deg)';
for (let index = 0; index < 4; index++) {
    slide_img[index].style.webkitTransform='perspective(5000px) rotateY('+(-10)+'deg) translateZ(400px)';
    slide_img[index].style.webkitTransition='5s';        
}
startMove();
}

function startMove(event){
    for (let index = 0; index < 4; index++) {
        setTimeout(function(){
        slide_img[index].style.webkitTransform='perspective(5000px) rotateY('+index/4*360+'deg) translateZ(400px)'
        slide_img[index].style.opacity=0.5123;
    },5000);
}   
} 



    var l=document.getElementById("slide_left");

    l.onclick=function slide_left() {//左右两个监听可以考虑用一个=>函数复用得有
  
    var arr=[];
    let patter=/-*[0-9]+(?=deg)/;
    for (let index = 0; index < 4; index++) {
        arr[index]=parseInt(slide_img[index].style.webkitTransform.valueOf().match(patter)[0]); 
        slide_img[index].style.webkitTransform='rotateY('+(arr[index]-90)+'deg) translateZ(400px)';
    
        } 
    }


var r=document.getElementById("slide_right");

    r.onclick=function slide_right() {

    var arr=[];

    let patter=/-*[0-9]+(?=deg)/;

    for (let index = 0; index < 4; index++) {

        arr[index]=parseInt(slide_img[index].style.webkitTransform.valueOf().match(patter)[0]); 
        slide_img[index].style.webkitTransform='rotateY('+(arr[index]+90)+'deg) translateZ(400px)';
    } 
}
div.onmousedown=function slide(event) {
    let startX=event.clientX;
    let startY=event.clientY;
    var x;
    var y;
    div.onmouseup=function(event){
    let leaveX=event.clientX;
    let leaveY=event.clientY;
    x=leaveX-startX;
    y=leaveY-startY;
    let patter=/-*[0-9]+(?=deg)/;
        for (let index = 0; index < 4; index++) {
            let arr=[];
        arr[index]=parseInt(slide_img[index].style.webkitTransform.valueOf().match(patter)[0]); 
        slide_img[index].style.webkitTransform='rotateY('+(arr[index]+x)+'deg) translateZ(400px)';
        slide_div.style.webkitTransform='perspective(5000px) rotateX('+(-10+y/10)+'deg) rotateY(0deg)';
        } 
    }
} 