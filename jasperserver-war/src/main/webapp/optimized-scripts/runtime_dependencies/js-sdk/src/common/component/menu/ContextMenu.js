define(["require","./Menu","jquery","underscore"],function(t){"use strict";var e=t("./Menu"),i=t("jquery"),s=t("underscore");return e.extend({constructor:function(t,i){e.call(this,t,i),s.bindAll(this,"_tryHide"),this.topPadding=i&&i.topPadding||5,this.leftPadding=i&&i.leftPadding||5,this.extraOffset=t.extraOffset||10,this.hideOnMouseLeave=i&&i.hideOnMouseLeave||!1,s.bindAll(this,"_tryHide","_checkBounds"),this.hideOnMouseLeave&&this.$el.on("mouseleave",this._tryHide)},_tryHide:function(){this.hide(),this._signOffTryHide()},_signOffTryHide:function(){i(document.body).off("click.contextMenu",this._tryHide),i(document.body).off("mousemove",this._checkBounds)},show:function(t,o){if(!t||!s.isNumber(t.top)||!s.isNumber(t.left))throw new Error("Required params (top, left) missing: "+JSON.stringify(t));i(document.body).on("click.contextMenu",this._tryHide),this.hideOnMouseLeave&&i(document.body).on("mousemove",this._checkBounds);var h=t.top,n=t.left,f=this.topPadding,r=this.leftPadding,d=i("body"),u=this._calculateMenuHeightOnShow(),l=this.$el.width(),c=o?o.height():d.height(),a=o?o.width():d.width(),p=o?o.offset():d.offset(),y=c-t.top,O=a-t.left;return y<u&&(h=t.top-u-f,h<p.top&&(h+=p.top-h+f),h=h<0?c/2-u/2:h),O<l&&(n=t.left-l-r,n<p.left&&(n+=p.left-n+r),n=n<0?a/2-l/2:n),s.extend(this,{top:h,left:n}),this.$el.css({top:this.top,left:this.left}),e.prototype.show.apply(this,arguments)},_checkBounds:function(t){var e={top:this.$el[0].offsetTop-this.extraOffset,bottom:this.$el[0].offsetTop+this.$el[0].offsetHeight+this.extraOffset,left:this.$el[0].offsetLeft-this.extraOffset,right:this.$el[0].offsetLeft+this.$el[0].offsetWidth+this.extraOffset};this._isPointerOutOfBounds(e,t)&&this._tryHide()},_isPointerOutOfBounds:function(t,e){return e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom},_calculateMenuHeightOnShow:function(){this.$el.css({opacity:0}),e.prototype.show.apply(this,arguments);var t=this.$el.height();return this.hide(),this.$el.css({opacity:""}),t},remove:function(){this._signOffTryHide(),this.hideOnMouseLeave&&this.$el.off("mouseleave",this._tryHide),e.prototype.remove.apply(this,arguments)}})});