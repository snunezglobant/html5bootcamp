/* jQuery Tiny Pub/Sub implementation */

(function($) {
 
  var o = $({});
 
  $.subscribe = function() {
    o.on.apply(o, arguments);
  };
 
  $.unsubscribe = function() {
    o.off.apply(o, arguments);
  };
 
  $.publish = function() {
    o.trigger.apply(o, arguments);
  };
 
}(jQuery));



/* Inheritance through parasitic combination */

if (typeof Object.create !== 'function') {
  Object.create = function (o) {
      function F() {}
      F.prototype = o;

      return new F();
  };
}

function inheritPrototype(childObject, parentObject) {
  var copyOfParent = Object.create(parentObject.prototype);
  
  copyOfParent.constructor = childObject;
  childObject.prototype = copyOfParent;
}



/* Mixin extend function */

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }

  return destination; 
}