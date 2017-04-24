(function($){
	/*Back To Top*/
	var $backToTop = $("#rightBar-backToTop"),
		$leftBarToggle = $("#leftBar-toggle"),
		$leftBar = $(".leftBar-body"),
		$rightBarToggle = $("#rightBar-toggle"),
		$rightBar = $(".rightBar-body"),
		$headerNav = $(".headerNav-toggle"),
		$article = $(".article");

	/*SideBar*/
	$leftBarToggle.click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$leftBar.removeClass("active");
		}else{
			$(this).addClass("active");
			$leftBar.addClass("active")
		}
	});
	
	$rightBarToggle.click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$rightBar.removeClass("active");
		}else{
			$(this).addClass("active");
			$rightBar.addClass("active")
		}
	});

	/*lazyLoad*/
	function isShow(article){

		if ( article.offset().top < $(window).scrollTop() + $(window).height() ) {
			//console.log("可视");
			return true;
		}else{
			//console.log("不可视");
			return false;
		}
	}
	function checkShow(){
		$article.each(function(){
			var $current = $(this);
			if (isShow($current)) {
				//setTimeout(function(){
					$current.find(".article-fadeIn").fadeIn(1500);
               		//$current.find(".article-fadeIn").css("display","block");
               		/*$current.find(".article-fadeIn").animate({
               			opacity:1
               		},1000);*/
                //},2000);
            }
		})
	}
	checkShow();

	$(window).on("scroll",function(){

		if ( $(window).scrollTop()>100) {
			$backToTop.css("display","block");
			//backToTop.fadeIn();
		}else{
			$backToTop.css("display","none");
			//backToTop.fadeOut();
		}

/*		if ($(window).scrollTop()>176) {

			$headerNav.fadeIn();
		}else{
			$headerNav.fadeOut();
		}*/

		checkShow();
	});

	$backToTop.click(function(){
		$('body,html').animate({scrollTop:0},300);
	});

})(jQuery);