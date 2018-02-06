/*
* @Author: Marte
* @Date:   2018-02-01 18:14:11
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-06 09:46:44
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






