"use strict";

(function ($) {
  var defaultOptions = {};
  var slideSwitch = {
    init: function init(option) {}
  };
  $.fn.slideSwitch = function (options) {
    var slideSwitchOption = $.extend(defaultOptions, options);
    slideSwitch.init(slideSwitchOption);
  };
})(jquery);
//# sourceMappingURL=jquery.slideSwitch.js.map