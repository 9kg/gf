function addfavor(url, title) {
	if (confirm("网站名称：" + title + "\n网址：" + url + "\n确定添加收藏?")) {
		var ua = navigator.userAgent.toLowerCase();
		if (ua.indexOf("msie 8") > -1) {
			external.AddToFavoritesBar(url, title, '上海发路'); //IE8
		} else {
			try {
				window.external.addFavorite(url, title);
			} catch (e) {
				try {
					window.sidebar.addPanel(title, url, ""); //firefox
				} catch (e) {
					alert("加入收藏失败，请使用Ctrl+D进行添加");
				}
			}
		}
	}
	return false;
}
$.prototype.curtain = function(bgColor,imgLogo) {
	var thisH = $(this).innerHeight();
	var thisW = $(this).innerWidth();
	var wrapDiv = $("<div class=\"hahaha\"></div>").css({
		"position": "absolute",
		"margin": "0px"
	});
	$(this).wrapInner(wrapDiv).css({
		"position": "relative",
		"overflow": "hidden"
	});
	var appendDiv = $("<div class=\"dododo\"></div>").css({
		"position": "absolute",
		"z-index": "3",
		"height": thisH,
		"width": thisW,
		"top":0,
		"left":0,
		"background-color": bgColor
	});
	appendDiv.append($("<img src="+imgLogo+">").css({"width":"100%","height":"100%"}));
	$(this).append(appendDiv);
	var dir;
	$(this).mouseenter(function(e){
		var offset = $(this).offset();
		var left = Math.floor(e.pageX - offset.left);
		var right = $(this).width()-left;
		var top = Math.floor(e.pageY - offset.top);
		var bottom = $(this).height()-top;
		$(this).find(".dododo").stop(true,true);
		switch (Math.min(top,bottom,left,right)){
			case top:$(this).find(".dododo").animate({"top": thisH});dir="shuzhe";
				break;
			case bottom:$(this).find(".dododo").animate({"top": -thisH});dir="shuzhe";
				break;
			case left:$(this).find(".dododo").animate({"left": thisW});dir="hengzhe";
				break;
			case right:$(this).find(".dododo").animate({"left": -thisW});dir="hengzhe";
				break;
			default:
				break;
		}
	});
	$(this).mouseleave(function(){
		$(this).find(".dododo").stop(true,true);
		switch (dir){
			case "shuzhe":$(this).find(".dododo").animate({"top": 0});
				break;
			case "hengzhe":$(this).find(".dododo").animate({"left": 0});
				break;
			default:
				break;
		}
	});
}
$(document).delegate("#hp-flag","click",function(){
	window.location.href="index.html";
})
