//分页插件
(function($){
	var ms = {
		init:function(obj,args){
			return (function(){
				ms.fillHtml(obj,args);
				ms.bindEvent(obj,args);
			})();
		},
		//填充html
		fillHtml:function(obj,args){
			return (function(){
				obj.empty();
				//上一页
				if(args.current > 1){
					obj.append('<a href="javascript:;" class="prev-page prevPage"><</a>');
				}else{
					obj.remove('.prevPage');
					obj.append('<span class="prev-page disabled"><</span>');
				}
				//中间页码
				if(args.current != 1 && args.current >= 4 && args.pageCount != 4){
					obj.append('<a href="javascript:;" class="tcdNumber">'+1+'</a>');
				}
				if(args.current-2 > 2 && args.current <= args.pageCount && args.pageCount > 5){
					obj.append('<span class="abbreviation">...</span>');
				}
				var start = args.current -2,end = args.current+2;
				if((start > 1 && args.current < 4)||args.current == 1){
					end++;
				}
				if(args.current > args.pageCount-4 && args.current >= args.pageCount){
					start--;
				}
				for (;start <= end; start++) {
					if(start <= args.pageCount && start >= 1){
						if(start != args.current){
							obj.append('<a href="javascript:;" class="tcdNumber">'+ start +'</a>');
						}else{
							obj.append('<span class="current">'+ start +'</span>');
						}
					}
				}
				if(args.current + 2 < args.pageCount - 1 && args.current >= 1 && args.pageCount > 5){
					obj.append('<span class="abbreviation">...</span>');
				}
				if(args.current != args.pageCount && args.current < args.pageCount -2  && args.pageCount != 4){
					obj.append('<a href="javascript:;" class="tcdNumber">'+args.pageCount+'</a>');
				}
				//下一页
				if(args.current < args.pageCount){
					obj.append('<a href="javascript:;" class="next-page nextPage">></a>');
				}else{
					obj.remove('.nextPage');
					obj.append('<span class="next-page disabled">></span>');
				}
				obj.append('<span class="pagecount">共'+args.pageCount+'页</span>');
				//跳转页码
				if(args.turndown == 'true'){
					obj.append('<span class="countYe"><input type="text" class="inputGo" maxlength='+args.pageCount.toString().length+'><a href="javascript:;" class="turndown">GO</a><span>');
				}
			})();
		},
		//绑定事件
		bindEvent:function(obj,args){
			return (function(){
				obj.on("click","a.tcdNumber",function(){
					var current = parseInt($(this).text());
					ms.fillHtml(obj,{"current":current,"pageCount":args.pageCount,"turndown":args.turndown});
					if(typeof(args.backFn)=="function"){
						args.backFn(current);
					}
				});
				//上一页
				obj.on("click","a.prevPage",function(){
					var current = parseInt(obj.children("span.current").text());
					ms.fillHtml(obj,{"current":current-1,"pageCount":args.pageCount,"turndown":args.turndown});
					if(typeof(args.backFn)=="function"){
						args.backFn(current-1);
					}
				});
				//下一页
				obj.on("click","a.nextPage",function(){
					var current = parseInt(obj.children("span.current").text());
					ms.fillHtml(obj,{"current":current+1,"pageCount":args.pageCount,"turndown":args.turndown});
					if(typeof(args.backFn)=="function"){
						args.backFn(current+1);
					}
				});
				//跳转
				obj.on("click","a.turndown",function(){
					var page = $("span.countYe input").val();
					var reg = new RegExp("^[0-9]*$");
					$(".pagination-err-box").remove();
					if(parseInt(page)>args.pageCount || parseInt(page) < 1 || page == "" || !reg.test(page)){
						$(".pagination").append('<div class="pagination-err-box">您输入的页码有误</div>');
					} else {
						ms.fillHtml(obj,{"current":parseInt(page),"pageCount":args.pageCount,"turndown":args.turndown});
						if(typeof(args.backFn)=="function"){
							args.backFn(parseInt(page));
						}
					}
				});
				//回车跳转
				obj.on("keydown",".inputGo",function(e){
					var ev = document.all ? window.event : e;
					var page = $("span.countYe input").val();
					var reg = new RegExp("^[0-9]*$");
					if(ev.keyCode == 13) {
						$(".pagination-err-box").remove();
						if(parseInt(page)>args.pageCount || parseInt(page) < 1 || page == "" || !reg.test(page)){
							$(".pagination").append('<div class="pagination-err-box">您输入的页码有误</div>');
						} else {
							ms.fillHtml(obj,{"current":parseInt(page),"pageCount":args.pageCount,"turndown":args.turndown});
							if(typeof(args.backFn)=="function"){
								args.backFn(parseInt(page));
							}
						}
					}	
				});
			})();
		}
	}
	$.fn.createPage = function(options){
		var args = $.extend({
			pageCount : 18,
			current : 1,
			turndown:true,
			backFn : function(){}
		},options);
		ms.init(this,args);
	}
})(jQuery);