define(["require","./BiComponentError","./enum/biComponentErrorCodes","./enum/biComponentErrorMessages"],function(r){"use strict";var o=r("./BiComponentError"),e=r("./enum/biComponentErrorCodes"),n=r("./enum/biComponentErrorMessages");return o.extend({constructor:function(r){o.prototype.constructor.call(this,e.ALREADY_DESTROYED_ERROR,n[e.ALREADY_DESTROYED_ERROR])}})});