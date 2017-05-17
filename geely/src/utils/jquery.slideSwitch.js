/*
 * 滑动插件
 *
 */
(function ($) {
  var defaultOptions = {
    className:'slide-switch',  //类名
    width:0,  //模块宽度
    height:0,  //模块高度
    margin:0,
    aheaditem:'0',  //当前显示模块下标
    aheaditemheight:0,  //当前显示模块的高度
    aheaditemwidth:0,  //当前显示模块的宽度
    isfirst:true,  //是否是第一个模块
    islast:false  //是否是最后一个模块
  };
  var slideSwitch = {
    init:function (option) {
      this._start = [];
      this._startX = 0;
      this._startY = 0;
      this._endX = 0;
      this._endY = 0;
      this._left = 0;
      this._top = 0;
      this._drag = false;
      this._scroll = false;
      $('.'+option.className).each(function (i) {
        $(this).css({"left":i*option.width +(i+1)*option.margin +'px',"width":option.width , "height":option.height });
        $(this).data("isaheaditem",false);
        if(option.aheaditem == i){
          $(this).css({"left":i*option.width +(i+1)*option.margin +'px',"width":option.aheaditemwidth , "height":option.aheaditemheight });
          $(this).data("isaheaditem",true)
        }
        $(this).unbind("touchstart").bind("touchstart", slideSwitch.touchstart)
        .unbind("touchmove").bind("touchmove", slideSwitch.touchmove)
        .unbind("touchend").bind("touchend", slideSwitch.touchend)
        .unbind("dragstart").bind("dragstart", slideSwitch.touchstart)
        .unbind("drag").bind("drag", slideSwitch.touchmove)
        .unbind("dragend").bind("dragend", slideSwitch.touchend)
      })
    },
    touchstart:function (e) {
      if((e.type == "touchstart" && e.originalEvent.touches.length <= 1) || e.type == "dragstart") {
        this._startX = e.pageX || e.originalEvent.touches[0].pageX;
        this._startY = e.pageY || e.originalEvent.touches[0].pageY;
      }
    },
    touchmove:function (e) {
      if((e.type == "touchmove" && e.originalEvent.touches.length <= 1) || e.type == "drag") {
        console.log(e);
        this._left = (e.pageX || e.originalEvent.touches[0].pageX) - this._startX;
        this._top = (e.pageY || e.originalEvent.touches[0].pageY) - this._startY;
      }
    },
    touchend:function (e) {
      if ((e.type == "touchend" && e.originalEvent.touches.length <= 1) || e.type == "dragend") {
        this._endX = e.pageX || e.originalEvent.changedTouches[0].pageX;
        this._endY = e.pageY || e.originalEvent.changedTouches[0].pageY;
      }
    },
    direction : function () {

    },
  };
  $.fn.slideSwitch = function (options) {
    $.extend(this,slideSwitch);
    var slideSwitchOption = $.extend({},defaultOptions , options);
    this.init(slideSwitchOption);
  }
})(jQuery);
