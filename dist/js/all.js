/*
* @Author: Marte
* @Date:   2018-02-01 18:14:11
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-06 09:41:42
*/

'use strict';
/*轮播图*/
var $olLi = $('#banner').find('ol li');
  var $ulLi = $('#banner').find('ul li');
  var iNow = 0;
  var timer;

  $olLi.on('mouseover',function(){
    $(this).attr('class','active').siblings().attr('class','');
    $ulLi.eq( $(this).index() ).animate({opacity:1},500).siblings().animate({opacity:0},500);
    iNow = $(this).index();
  });

  $('#banner').on('mouseover',function(){
    clearInterval(timer);
  });
  $('#banner').on('mouseout',function(){
    timer = setInterval(run,5000);
  });

  timer = setInterval(run,5000);

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

var $letter = $('.letter')
var $letterA = $('.letter').find('a');
var letter_iNow = 0;
var letter_timer;

function letterRun(){
    if(letter_iNow == $olLi.length-1){
      letter_iNow = 0;
    }
    else{
      letter_iNow++;
    }
    $letterA.eq(letter_iNow).attr('class','letter_show').siblings().attr('class','');

  }
  letter_timer = setInterval(letterRun,5000);


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

  var news_ul=document.getElementById('news_ul');
  createFilm(json.infos);
  console.log(news_ul);
  function createFilm(infos){
    news_ul.innerHTML = '<li><a  href="'+infos.store+'"></a></li>\
    <li><a href="'+infos.action+'"></a></li>\
    <li><a href="'+infos.zbgg+'"></a></li>\
    <li><a href="'+infos.jr+'"></a></li>'

  }







/*
* @Author: Marte
* @Date:   2018-02-01 18:14:21
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-06 09:22:16
*/

'use strict';


  var banner2List=document.getElementById('banner2_ul');
console.log(json.img);
  createFilm2(json.img);

  function createFilm2(img){
    banner2List.innerHTML = '<li style="background:url('+img.fir+') center;width:100%;height:100%"></li>\
    <li style="background:url('+img.sec+') center;width:100%;height:100%"></li>\
    <li style="background:url('+img.thir+') center;width:100%;height:100%"></li>'

  }



listBanner();
function listBanner() {
var $olLi = $('#banner2').find('ol li');
  var $ulLi = $('#banner2').find('ul li');
  var iNow = 0;
  var timer;

  $olLi.on('mouseover',function(){
    $(this).attr('class','active').siblings().attr('class','');
    $ulLi.eq( $(this).index() ).animate({opacity:1},500).siblings().animate({opacity:0},500);
    iNow = $(this).index();
  });

  $('#banner2').on('mouseover',function(){
    clearInterval(timer);
  });
  $('#banner2').on('mouseout',function(){
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







/*
* @Author: Marte
* @Date:   2018-02-01 18:14:22
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-06 09:39:49
*/

'use strict';

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
/*
* @Author: Marte
* @Date:   2018-02-01 18:14:21
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-05 14:06:03
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
    register_change1.style.borderBottom='';
    register_change1.style.color='#000';
    businessman.style.display='block';

}

input[0].onblur = function(){
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


     register_btn_sub.onclick = function(){
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
    };


