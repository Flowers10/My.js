(function(window) {
  'use strict';
   function defineShadow() {
      Shadow.alert = function() {
        alert("this is a test, from the Shadow framework")
      };
      return Shadow;
   }
   if(typeof(Shadow) === 'undefined') {
    window.Shadow = defineShadow();
   }
}) (window);
