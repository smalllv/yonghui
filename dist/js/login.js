/*
* @Author: Marte
* @Date:   2018-02-01 18:14:22
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-06 15:10:24
*/

'use strict';
var json = {
        "infos": {"store" : "http://www.yonghui.com.cn/2008_store.asp",
                   "action" : "http://www.yonghui.com.cn/2010_investor.asp?menu_level_a=7&menu_level_b=1&menu_level_c=1&action=1",
                   "zbgg" : "http://www.yonghui.com.cn/2013_zbgg.asp",
                   'jr':"http://jr.yonghui.cn/"},
        "img": {"fir" : "http://glzx.yonghui.cn/newvssportal/pimages/home/banner_3.png",
                   "sec" : "http://glzx.yonghui.cn/newvssportal/pimages/home/banner_2.png",
                   "thir" : "http://glzx.yonghui.cn/newvssportal/pimages/home/banner_1.png"},
        "loginImg":{"first" : "http://glzx.yonghui.cn:8889/image/newvss/ad/20180111/20180111080441.png",
                   "second" : "http://glzx.yonghui.cn:8889/image/newvss/ad/20180111/20180111080312.jpg",
                   "thire" : "http://glzx.yonghui.cn:8889/image/newvss/ad/20180111/20180111080422.png"}

  }
  var banner3List=document.getElementById('banner3_ul');
console.log(banner3List);
  createFilm3(json.loginImg);

  function createFilm3(loginImg){
    banner3List.innerHTML = '<li style="background:url('+loginImg.first+') center;width:100%;height:100%"></li>\
    <li style="background:url('+loginImg.second+') center;width:100%;height:100%"></li>\
    <li style="background:url('+loginImg.thire+') center;width:100%;height:100%"></li>'

  }





loginBanner();
function loginBanner() {
var $olLi = $('#banner3').find('ol li');
  var $ulLi = $('#banner3').find('ul li');
  var iNow = 0;
  var timer;

  $olLi.on('mouseover',function(){
    $(this).attr('class','active').siblings().attr('class','');
    $ulLi.eq( $(this).index() ).animate({opacity:1},500).siblings().animate({opacity:0},500);
    iNow = $(this).index();
  });

  $('#banner3').on('mouseover',function(){
    clearInterval(timer);
  });
  $('#banner3').on('mouseout',function(){
    timer = setInterval(run,2000);
  });

  timer = setInterval(run,2000);

  function run(){
    if(iNow == $olLi.length-1){
      iNow = 0;
    }
    else{
      iNow++;
    }
    $olLi.eq(iNow).attr('class','active').siblings().attr('class','');
    $ulLi.eq( iNow ).animate({opacity:1},500).siblings().animate({opacity:0},500);
  }
}

var waring_one=document.getElementById('waring_one');
var waring_two=document.getElementById('waring_two');
var login_text=document.getElementById('login_text');
var login_pw=document.getElementById('login_pw');
var btn_login=document.getElementById('btn_login');

login_text.onblur = function(){
    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;

        if(this.value == ''||!myreg.test(this.value)){
            waring_one.style.display='inline-block'
        }else if(myreg.test(this.value)==true){
           waring_one.style.display='none'
        }
    };
    login_pw.onblur = function(){
        if(this.value == ''){
            waring_two.style.display='inline-block'
        }else{
           waring_two.style.display='none'
        }
    };
   btn_login.onclick=function(){
      if(login_text.value == ''||login_pw.value==''){
            waring_one.style.display='inline-block';
            waring_two.style.display='inline-block';


        }
        else{
            waring_one.style.display='none';
            waring_two.style.display='none';
        }
   }

   var login_text=document.getElementById('login_text')
var warn=document.getElementById('warn')
    login_text.onblur = function(){

        var val = this.value.trim();

        //1. 创建内置的xhr对象，所有的AJAX操作都是在xhr对象下完成的
        var xhr = new XMLHttpRequest();
        //2. 监听AJAX整个通信过程，最终接收到后台返回的结果response
        xhr.onreadystatechange = function(){
            if(xhr.readyState==4 && xhr.status==200){
                //xhr.responseText : 拿到后台response过来的结果数据
                //console.log( xhr.responseText );
                warn.innerHTML = xhr.responseText;
                console.log(xhr.responseText);
            }
        };
        //3. 请求AJAX通信，去链接后台的操作
        //三个参数：请求方式、请求地址、是否异步:异步true,同步false
        xhr.open('GET','http://localhost/yonghui/dist/html/login.php?username='+val,true);
        //针对POST提交的时候，指定提交的数据是字符串格式
        //xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        //4. 发送数据到后台，request操作
        //get请求的时候，数据在网址的问号后面，所以send方法不用去操作了
        xhr.send(null);
    };