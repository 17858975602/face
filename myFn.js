/**
 * Created by Administrator on 2016/9/14.
 */
//获取元素
function $(id){
    return document.getElementById(id)
}

//获取元素的CSS样式
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj)[attr]
    }
}

//获取数值最大值
function max(arr){
    var n=0;
    for(var i=0;i<arr.length;i++){
        if(n<arr[i]){
            n=arr[i]
        }
    }
    return n
}
