define(["require","./jquery.ui.core","./jquery.ui.mouse","./jquery.ui.widget"],function(t){function e(t){return parseInt(t,10)||0}function i(t){return!isNaN(parseInt(t,10))}t("./jquery.ui.core"),t("./jquery.ui.mouse");var s=t("./jquery.ui.widget");return s.widget("ui.resizable",s.ui.mouse,{version:"@VERSION",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){function t(t){return a._mouseDown(t)}var e,i,h,n,o,a=this,l=this.options;if(this.element.addClass("ui-resizable"),s.extend(this,{_aspectRatio:!!l.aspectRatio,aspectRatio:l.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:l.helper||l.ghost||l.animate?l.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(s("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=l.handles||(s(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),e=this.handles.split(","),this.handles={},i=0;i<e.length;i++)h=s.trim(e[i]),o="ui-resizable-"+h,n=s("<div class='ui-resizable-handle "+o+"'></div>"),n.css({zIndex:l.zIndex}),"se"===h&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[h]=".ui-resizable-"+h,this.element.append(n);this._renderAxis=function(t){var e,i,h,n;t=t||this.element;for(e in this.handles)this.handles[e].constructor===String&&(this.handles[e]=s(this.handles[e],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(i=s(this.handles[e],this.element),n=/sw|ne|nw|se|n|s/.test(e)?i.outerHeight():i.outerWidth(),h=["padding",/ne|nw|n/.test(e)?"Top":/se|sw|s/.test(e)?"Bottom":/^e$/.test(e)?"Right":"Left"].join(""),t.css(h,n),this._proportionallyResize()),s(this.handles[e]).length},this._renderAxis(this.element),this._handles=s(".ui-resizable-handle",this.element);for(i in this.handles)this._handles=this._handles.add(this.handles[i]);if(this._handles.disableSelection(),this._handles.mouseover(function(){a.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),a.axis=n&&n[1]?n[1]:"se")}),l.autoHide&&(this._handles.hide(),s(this.element).addClass("ui-resizable-autohide").mouseenter(function(){l.disabled||(s(this).removeClass("ui-resizable-autohide"),a._handles.show())}).mouseleave(function(){l.disabled||a.resizing||(s(this).addClass("ui-resizable-autohide"),a._handles.hide())})),this._mouseInit(),l.handles.constructor!==String)for(i in l.handles)h=l.handles[i],h instanceof s&&h.bind("mousedown."+this.widgetName,t)},_destroy:function(){this._mouseDestroy();var t,e=function(t){s(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(e(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),e(this.originalElement),this},_mouseCapture:function(t){var e,i,h=!1;for(e in this.handles)i=s(this.handles[e])[0],(i===t.target||s.contains(i,t.target))&&(h=!0);return!this.options.disabled&&h},_mouseStart:function(t){var i,h,n,o=this.options,a=this.element.position(),l=this.element;return this.resizing=!0,/absolute/.test(l.css("position"))?l.css({position:"absolute",top:l.css("top"),left:l.css("left")}):l.is(".ui-draggable")&&l.css({position:"absolute",top:a.top,left:a.left}),this._renderProxy(),i=e(this.helper.css("left")),h=e(this.helper.css("top")),o.containment&&(i+=s(o.containment).scrollLeft()||0,h+=s(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:h},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:l.width(),height:l.height()},this.originalSize=this._helper?{width:l.outerWidth(),height:l.outerHeight()}:{width:l.width(),height:l.height()},this.originalPosition={left:i,top:h},this.sizeDiff={width:l.outerWidth()-l.width(),height:l.outerHeight()-l.height()},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=s(".ui-resizable-"+this.axis).css("cursor"),s("body").css("cursor","auto"===n?this.axis+"-resize":n),l.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var e,i=this.helper,h={},n=this.originalMousePosition,o=this.axis,a=this.position.top,l=this.position.left,r=this.size.width,p=this.size.height,d=t.pageX-n.left||0,g=t.pageY-n.top||0,u=this._change[o];return u?(e=u.apply(this,[t,d,g]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(e=this._updateRatio(e,t)),e=this._respectSize(e,t),this._updateCache(e),this._propagate("resize",t),this.position.top!==a&&(h.top=this.position.top+"px"),this.position.left!==l&&(h.left=this.position.left+"px"),this.size.width!==r&&(h.width=this.size.width+"px"),this.size.height!==p&&(h.height=this.size.height+"px"),i.css(h),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),s.isEmptyObject(h)||this._trigger("resize",t,this.ui()),!1):!1},_mouseStop:function(t){this.resizing=!1;var e,i,h,n,o,a,l,r=this.options,p=this;return this._helper&&(e=this._proportionallyResizeElements,i=e.length&&/textarea/i.test(e[0].nodeName),h=i&&s.ui.hasScroll(e[0],"left")?0:p.sizeDiff.height,n=i?0:p.sizeDiff.width,o={width:p.helper.width()-n,height:p.helper.height()-h},a=parseInt(p.element.css("left"),10)+(p.position.left-p.originalPosition.left)||null,l=parseInt(p.element.css("top"),10)+(p.position.top-p.originalPosition.top)||null,r.animate||this.element.css(s.extend(o,{top:l,left:a})),p.helper.height(p.size.height),p.helper.width(p.size.width),this._helper&&!r.animate&&this._proportionallyResize()),s("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(t){var e,s,h,n,o,a=this.options;o={minWidth:i(a.minWidth)?a.minWidth:0,maxWidth:i(a.maxWidth)?a.maxWidth:1/0,minHeight:i(a.minHeight)?a.minHeight:0,maxHeight:i(a.maxHeight)?a.maxHeight:1/0},(this._aspectRatio||t)&&(e=o.minHeight*this.aspectRatio,h=o.minWidth/this.aspectRatio,s=o.maxHeight*this.aspectRatio,n=o.maxWidth/this.aspectRatio,e>o.minWidth&&(o.minWidth=e),h>o.minHeight&&(o.minHeight=h),s<o.maxWidth&&(o.maxWidth=s),n<o.maxHeight&&(o.maxHeight=n)),this._vBoundaries=o},_updateCache:function(t){this.offset=this.helper.offset(),i(t.left)&&(this.position.left=t.left),i(t.top)&&(this.position.top=t.top),i(t.height)&&(this.size.height=t.height),i(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,s=this.size,h=this.axis;return i(t.height)?t.width=t.height*this.aspectRatio:i(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===h&&(t.left=e.left+(s.width-t.width),t.top=null),"nw"===h&&(t.top=e.top+(s.height-t.height),t.left=e.left+(s.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,s=this.axis,h=i(t.width)&&e.maxWidth&&e.maxWidth<t.width,n=i(t.height)&&e.maxHeight&&e.maxHeight<t.height,o=i(t.width)&&e.minWidth&&e.minWidth>t.width,a=i(t.height)&&e.minHeight&&e.minHeight>t.height,l=this.originalPosition.left+this.originalSize.width,r=this.position.top+this.size.height,p=/sw|nw|w/.test(s),d=/nw|ne|n/.test(s);return o&&(t.width=e.minWidth),a&&(t.height=e.minHeight),h&&(t.width=e.maxWidth),n&&(t.height=e.maxHeight),o&&p&&(t.left=l-e.minWidth),h&&p&&(t.left=l-e.maxWidth),a&&d&&(t.top=r-e.minHeight),n&&d&&(t.top=r-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var t,e,i,s,h,n=this.helper||this.element;for(t=0;t<this._proportionallyResizeElements.length;t++){if(h=this._proportionallyResizeElements[t],!this.borderDif)for(this.borderDif=[],i=[h.css("borderTopWidth"),h.css("borderRightWidth"),h.css("borderBottomWidth"),h.css("borderLeftWidth")],s=[h.css("paddingTop"),h.css("paddingRight"),h.css("paddingBottom"),h.css("paddingLeft")],e=0;e<i.length;e++)this.borderDif[e]=(parseInt(i[e],10)||0)+(parseInt(s[e],10)||0);h.css({height:n.height()-this.borderDif[0]-this.borderDif[2]||0,width:n.width()-this.borderDif[1]-this.borderDif[3]||0})}}},_renderProxy:function(){var t=this.element,e=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||s("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++e.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize,s=this.originalPosition;return{left:s.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize,h=this.originalPosition;return{top:h.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(t,e,i){return s.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,e,i]))},sw:function(t,e,i){return s.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,e,i]))},ne:function(t,e,i){return s.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,e,i]))},nw:function(t,e,i){return s.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,e,i]))}},_propagate:function(t,e){s.ui.plugin.call(this,t,[e,this.ui()]),"resize"!==t&&this._trigger(t,e,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),s.ui.plugin.add("resizable","animate",{stop:function(t){var e=s(this).data("ui-resizable"),i=e.options,h=e._proportionallyResizeElements,n=h.length&&/textarea/i.test(h[0].nodeName),o=n&&s.ui.hasScroll(h[0],"left")?0:e.sizeDiff.height,a=n?0:e.sizeDiff.width,l={width:e.size.width-a,height:e.size.height-o},r=parseInt(e.element.css("left"),10)+(e.position.left-e.originalPosition.left)||null,p=parseInt(e.element.css("top"),10)+(e.position.top-e.originalPosition.top)||null;e.element.animate(s.extend(l,p&&r?{top:p,left:r}:{}),{duration:i.animateDuration,easing:i.animateEasing,step:function(){var i={width:parseInt(e.element.css("width"),10),height:parseInt(e.element.css("height"),10),top:parseInt(e.element.css("top"),10),left:parseInt(e.element.css("left"),10)};h&&h.length&&s(h[0]).css({width:i.width,height:i.height}),e._updateCache(i),e._propagate("resize",t)}})}}),s.ui.plugin.add("resizable","containment",{start:function(){var t,i,h,n,o,a,l,r=s(this).data("ui-resizable"),p=r.options,d=r.element,g=p.containment,u=g instanceof s?g.get(0):/parent/.test(g)?d.parent().get(0):g;u&&(r.containerElement=s(u),/document/.test(g)||g===document?(r.containerOffset={left:0,top:0},r.containerPosition={left:0,top:0},r.parentData={element:s(document),left:0,top:0,width:s(document).width(),height:s(document).height()||document.body.parentNode.scrollHeight}):(t=s(u),i=[],s(["Top","Right","Left","Bottom"]).each(function(s,h){i[s]=e(t.css("padding"+h))}),r.containerOffset=t.offset(),r.containerPosition=t.position(),r.containerSize={height:t.innerHeight()-i[3],width:t.innerWidth()-i[1]},h=r.containerOffset,n=r.containerSize.height,o=r.containerSize.width,a=s.ui.hasScroll(u,"left")?u.scrollWidth:o,l=s.ui.hasScroll(u)?u.scrollHeight:n,r.parentData={element:u,left:h.left,top:h.top,width:a,height:l}))},resize:function(t){var e,i,h,n,o=s(this).data("ui-resizable"),a=o.options,l=o.containerOffset,r=o.position,p=o._aspectRatio||t.shiftKey,d={top:0,left:0},g=o.containerElement;g[0]!==document&&/static/.test(g.css("position"))&&(d=l),r.left<(o._helper?l.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-l.left:o.position.left-d.left),p&&(o.size.height=o.size.width/o.aspectRatio),o.position.left=a.helper?l.left:0),r.top<(o._helper?l.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-l.top:o.position.top),p&&(o.size.width=o.size.height*o.aspectRatio),o.position.top=o._helper?l.top:0),o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top,e=Math.abs((o._helper?o.offset.left-d.left:o.offset.left-d.left)+o.sizeDiff.width),i=Math.abs((o._helper?o.offset.top-d.top:o.offset.top-l.top)+o.sizeDiff.height),h=o.containerElement.get(0)===o.element.parent().get(0),n=/relative|absolute/.test(o.containerElement.css("position")),h&&n&&(e-=Math.abs(o.parentData.left)),e+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-e,p&&(o.size.height=o.size.width/o.aspectRatio)),i+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-i,p&&(o.size.width=o.size.height*o.aspectRatio))},stop:function(){var t=s(this).data("ui-resizable"),e=t.options,i=t.containerOffset,h=t.containerPosition,n=t.containerElement,o=s(t.helper),a=o.offset(),l=o.outerWidth()-t.sizeDiff.width,r=o.outerHeight()-t.sizeDiff.height;t._helper&&!e.animate&&/relative/.test(n.css("position"))&&s(this).css({left:a.left-h.left-i.left,width:l,height:r}),t._helper&&!e.animate&&/static/.test(n.css("position"))&&s(this).css({left:a.left-h.left-i.left,width:l,height:r})}}),s.ui.plugin.add("resizable","alsoResize",{start:function(){var t=s(this).data("ui-resizable"),e=t.options,i=function(t){s(t).each(function(){var t=s(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};"object"!=typeof e.alsoResize||e.alsoResize.parentNode?i(e.alsoResize):e.alsoResize.length?(e.alsoResize=e.alsoResize[0],i(e.alsoResize)):s.each(e.alsoResize,function(t){i(t)})},resize:function(t,e){var i=s(this).data("ui-resizable"),h=i.options,n=i.originalSize,o=i.originalPosition,a={height:i.size.height-n.height||0,width:i.size.width-n.width||0,top:i.position.top-o.top||0,left:i.position.left-o.left||0},l=function(t,i){s(t).each(function(){var t=s(this),h=s(this).data("ui-resizable-alsoresize"),n={},o=i&&i.length?i:t.parents(e.originalElement[0]).length?["width","height"]:["width","height","top","left"];s.each(o,function(t,e){var i=(h[e]||0)+(a[e]||0);i&&i>=0&&(n[e]=i||null)}),t.css(n)})};"object"!=typeof h.alsoResize||h.alsoResize.nodeType?l(h.alsoResize):s.each(h.alsoResize,function(t,e){l(t,e)})},stop:function(){s(this).removeData("resizable-alsoresize")}}),s.ui.plugin.add("resizable","ghost",{start:function(){var t=s(this).data("ui-resizable"),e=t.options,i=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof e.ghost?e.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=s(this).data("ui-resizable");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=s(this).data("ui-resizable");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),s.ui.plugin.add("resizable","grid",{resize:function(){var t=s(this).data("ui-resizable"),e=t.options,i=t.size,h=t.originalSize,n=t.originalPosition,o=t.axis,a="number"==typeof e.grid?[e.grid,e.grid]:e.grid,l=a[0]||1,r=a[1]||1,p=Math.round((i.width-h.width)/l)*l,d=Math.round((i.height-h.height)/r)*r,g=h.width+p,u=h.height+d,f=e.maxWidth&&e.maxWidth<g,c=e.maxHeight&&e.maxHeight<u,m=e.minWidth&&e.minWidth>g,z=e.minHeight&&e.minHeight>u;e.grid=a,m&&(g+=l),z&&(u+=r),f&&(g-=l),c&&(u-=r),/^(se|s|e)$/.test(o)?(t.size.width=g,t.size.height=u):/^(ne)$/.test(o)?(t.size.width=g,t.size.height=u,t.position.top=n.top-d):/^(sw)$/.test(o)?(t.size.width=g,t.size.height=u,t.position.left=n.left-p):(u-r>0?(t.size.height=u,t.position.top=n.top-d):(t.size.height=r,t.position.top=n.top+h.height-r),g-l>0?(t.size.width=g,t.position.left=n.left-p):(t.size.width=l,t.position.left=n.left+h.width-l))}}),s});