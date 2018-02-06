/*
* @Author: Marte
* @Date:   2018-02-01 18:14:21
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-06 15:28:21
*/

var register_change1=document.getElementById('register_change1');
var register_change2=document.getElementById('register_change2');
var businessman=document.getElementById('businessman');
var input=document.getElementsByTagName('input');
var spanWarn1=document.getElementById('regiater_warn1');
var spanWarn2=document.getElementById('regiater_warn2');
var spanWarn3=document.getElementById('regiater_warn3');
var spanWarn4=document.getElementById('regiater_warn4');
var spanWarn5=document.getElementById('regiater_warn5');
var spanWarn6=document.getElementById('regiater_warn6');
var spanWarn7=document.getElementById('regiater_warn7');
var spanWarn8=document.getElementById('regiater_warn8');
var spanWarn9=document.getElementById('regiater_warn9');
var register_btn_sub=document.getElementById('register_btn_sub');
var text1 = document.getElementById('text1');







register_change1.onclick=function(){
    register_change1.style.borderBottom='3px solid #29b1f8';
    register_change1.style.color='#29b1f8';
    register_change2.style.borderBottom='';
    register_change2.style.color='#000';
    businessman.style.display='none';


}
register_change2.onclick=function(){
    register_change2.style.borderBottom='3px solid #29b1f8';
    register_change2.style.color='#29b1f8';
    register_change1.style.borderBottom='0';
    register_change1.style.color='#000';
    businessman.style.display='block';

}

text1.onblur = function(){
    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;

        if(this.value == ''||!myreg.test(this.value)){
            spanWarn1.style.display='inline-block'
        }else if(myreg.test(this.value)==true){
           spanWarn1.style.display='none'
        }
    };
    input[1].onblur = function(){
        if(this.value == ''){
            spanWarn2.style.display='inline-block'
        }else{
           spanWarn2.style.display='none'
        }
    };
    input[2].onblur = function(){
        if(this.value == ''){
            spanWarn3.style.display='inline-block'
        }else{
           spanWarn3.style.display='none'
        }
    };
    input[4].onblur = function(){
        if(this.value == ''){
            spanWarn4.style.display='inline-block'
        }else{
           spanWarn4.style.display='none'
        }
    };
    input[5].onblur = function(){
        if(this.value == ''){
            spanWarn5.style.display='inline-block'
        }else{
           spanWarn5.style.display='none'
        }
    };
    input[6].onblur = function(){
        if(this.value == ''){
            spanWarn6.style.display='inline-block'
        }else{
           spanWarn6.style.display='none'
        }
    };
     input[7].onblur = function(){
        if(this.value == ''){
            spanWarn7.style.display='inline-block'
        }else{
           spanWarn7.style.display='none'
        }
    };
     input[8].onblur = function(){
        if(this.value == ''){
            spanWarn8.style.display='inline-block'
        }else{
           spanWarn8.style.display='none'
        }
    };
    for(var i=0;i<input.length-3;i++){
        var inputval=input[i].value;
        console.log(inputval);
    }


    /* register_btn_sub.onclick = function(){
        if(input[9].checked == false||inputval==''){
            spanWarn9.style.display='inline-block';
            spanWarn8.style.display='inline-block';
            spanWarn7.style.display='inline-block';
            spanWarn6.style.display='inline-block';
            spanWarn5.style.display='inline-block';
            spanWarn4.style.display='inline-block';
            spanWarn3.style.display='inline-block';
            spanWarn2.style.display='inline-block';
            spanWarn1.style.display='inline-block';

        }
        else{
            spanWarn9.style.display='none';
        }
    };*/







    var text_warn=document.getElementById('text_warn')

    text1.onblur = function(){

        var val = this.value.trim();

        //1. 创建内置的xhr对象，所有的AJAX操作都是在xhr对象下完成的
        var xhr = new XMLHttpRequest();
        //2. 监听AJAX整个通信过程，最终接收到后台返回的结果response
        xhr.onreadystatechange = function(){
            if(xhr.readyState==4 && xhr.status==200){
                //xhr.responseText : 拿到后台response过来的结果数据
                //console.log( xhr.responseText );
                text_warn.innerHTML = '<sapn>!</sapn>'+xhr.responseText;

                console.log(xhr.responseText);
            }
        };
        //3. 请求AJAX通信，去链接后台的操作
        //三个参数：请求方式、请求地址、是否异步:异步true,同步false
        xhr.open('GET','http://localhost/yonghui/dist/html/index.php?username='+val,true);
        //针对POST提交的时候，指定提交的数据是字符串格式
        //xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        //4. 发送数据到后台，request操作
        //get请求的时候，数据在网址的问号后面，所以send方法不用去操作了
        xhr.send(null);
    };


