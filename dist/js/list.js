/*
* @Author: Marte
* @Date:   2018-02-01 18:14:21
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-06 09:47:20
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






