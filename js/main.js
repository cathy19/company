/*
* @Author: cathy.chen
* @Date:   2017-07-06 14:00:10
* @Last Modified by:   cathy.chen
* @Last Modified time: 2017-07-06 14:04:36
*/

'use strict';
$(function(){
		//輪播
	$('#myCarousel').carousel({
		//自動4秒播放
		interval : 3000,
	});

	new WOW().init();
})