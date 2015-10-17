class Navigation {
  constructor() {
    
  }
}

// var Navigation = function(OPTIONS, cb) {

//   var DEFAULTS = {
//     navPanelClass: '.nav-panel',
//     buttonClass: '.nav-toggle'
//   };
//   var SETTINGS = $.extend(true, {}, DEFAULTS, OPTIONS);
//   var nav = {
//     classes: {
//       navPanel: SETTINGS.navPanelClass,
//       button: SETTINGS.buttonClass
//     }
//   };

//   this.init = function init() {
//     $(nav.classes.navPanel).addClass('nav-panel--hidden');

//     if (typeof cb === 'function') {
//       cb.apply(this, arguments);
//     }
//     return this;
//   };

//   return this.init();

// };

module.exports = Navigation;