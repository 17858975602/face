/**
 * Created by Administrator on 2016/9/14.
 */
//��ȡԪ��
function $(id){
    return document.getElementById(id)
}

//��ȡԪ�ص�CSS��ʽ
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj)[attr]
    }
}

//��ȡ��ֵ���ֵ
function max(arr){
    var n=0;
    for(var i=0;i<arr.length;i++){
        if(n<arr[i]){
            n=arr[i]
        }
    }
    return n
}
