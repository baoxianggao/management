'use strict';

(function ($) {
  var defaultOptions = {
    className: 'slide-switch',
    width: 0,
    height: 0,
    margin: 0,
    aheaditem: '0',
    aheaditemheight: 0,
    aheaditemwidth: 0,
    isfirst: true,
    islast: false };
  var slideSwitch = {
    init: function init(option) {
      this._start = [];
      this._startX = 0;
      this._startY = 0;
      this._endX = 0;
      this._endY = 0;
      this._left = 0;
      this._top = 0;
      this._drag = false;
      this._scroll = false;
      $('.' + option.className).each(function (i) {
        $(this).css({ "left": i * option.width + (i + 1) * option.margin + 'px', "width": option.width, "height": option.height });
        $(this).data("isaheaditem", false);
        if (option.aheaditem == i) {
          $(this).css({ "left": i * option.width + (i + 1) * option.margin + 'px', "width": option.aheaditemwidth, "height": option.aheaditemheight });
          $(this).data("isaheaditem", true);
        }
        $(this).unbind("touchstart").bind("touchstart", slideSwitch.touchstart).unbind("touchmove").bind("touchmove", slideSwitch.touchmove).unbind("touchend").bind("touchend", slideSwitch.touchend).unbind("dragstart").bind("dragstart", slideSwitch.touchstart).unbind("drag").bind("drag", slideSwitch.touchmove).unbind("dragend").bind("dragend", slideSwitch.touchend);
      });
    },
    touchstart: function touchstart(e) {
      if (e.type == "touchstart" && e.originalEvent.touches.length <= 1 || e.type == "dragstart") {
        this._startX = e.pageX || e.originalEvent.touches[0].pageX;
        this._startY = e.pageY || e.originalEvent.touches[0].pageY;
      }
    },
    touchmove: function touchmove(e) {
      if (e.type == "touchmove" && e.originalEvent.touches.length <= 1 || e.type == "drag") {
        console.log(e);
        this._left = (e.pageX || e.originalEvent.touches[0].pageX) - this._startX;
        this._top = (e.pageY || e.originalEvent.touches[0].pageY) - this._startY;
      }
    },
    touchend: function touchend(e) {
      if (e.type == "touchend" && e.originalEvent.touches.length <= 1 || e.type == "dragend") {
        this._endX = e.pageX || e.originalEvent.changedTouches[0].pageX;
        this._endY = e.pageY || e.originalEvent.changedTouches[0].pageY;
      }
    },
    direction: function direction() {}
  };
  $.fn.slideSwitch = function (options) {
    $.extend(this, slideSwitch);
    var slideSwitchOption = $.extend({}, defaultOptions, options);
    this.init(slideSwitchOption);
  };
})(jQuery);
//# sourceMappingURL=jquery.slideSwitch.js.map