define(["require","prototype","utils.common"],function(t){"use strict";t("prototype"),t("utils.common");var o=function(t){this._id=t.id,this._contentId=t.contentId?t.contentId:void 0,this._scroll=t.scroll,this._loadFactor=t.loadFactor?t.loadFactor:.95,this._lastContentHeight=0,this._loading=!1,t.control?void 0!==t.control.length&&t.control.length>1?this._control=$(t.control[0]):this._control=$(t.control):this._control=this._scroll?this._scroll.parent:$(this._id),this._scroll?this._content=this._scroll.element:t.content?void 0!==t.content.length&&t.content.length>1?this._content=$(t.content[0]):this._content=$(t.content):this._content=this._contentId?$(this._contentId):this._control.childElements()[0],this._eventType=isSupportsTouch()?"touchmove":"scroll",this._control.observe(this._eventType,this._onScrollHandler.bind(this))};return o.addMethod("destroy",function(){this._control&&this._control.stopObserving(this._eventType,this._handler)}),o.addMethod("_onScrollHandler",function(t){var o=this._scroll?-1*this._scroll.y:this._control.scrollTop,i=this._content.getHeight(),n=this._control.getHeight();i!=this._lastContentHeight&&(this._loading=!1);var s=!this._loading&&0!=i;s=this._scroll?s&&this._scroll.isBottom():s&&(n+o)/i>this._loadFactor,s&&(this._loading=!0,this._lastContentHeight=i,isIPad()&&this.wait(),this.onLoad())}),o.addMethod("onLoad",doNothing),o.addMethod("reset",function(){isIPad()?this._scroll.reset():this._control.scrollTop=0,this._loading=!1}),o.addMethod("wait",function(){if(!this._waitIndicator){this._waitIndicator=new Element("div",{"class":"dimmer resultsOverlay"});var t=this._control.getDimensions(),o=this._control.positionedOffset();this._waitIndicator.setStyle({zIndex:"4000",top:o.top+"px",left:o.left+"px",height:t.height+"px",width:t.width+"px"}),this._control.insert({after:this._waitIndicator})}this._waitIndicator.show()}),o.addMethod("stopWaiting",function(){this._waitIndicator&&this._waitIndicator.hide()}),window.InfiniteScroll=o,o});