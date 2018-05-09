define(["require","jquery"],function(t){function i(t,i,e){return[parseFloat(t[0])*(d.test(t[0])?i/100:1),parseFloat(t[1])*(d.test(t[1])?e/100:1)]}function e(t,i){return parseInt(n.css(t,i),10)||0}function o(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:n.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}var n=t("jquery");n.ui=n.ui||{};var l,s=Math.max,f=Math.abs,r=Math.round,h=/left|center|right/,p=/top|center|bottom/,c=/[\+\-]\d+(\.[\d]+)?%?/,a=/^\w+/,d=/%$/,g=n.fn.position;return n.position={scrollbarWidth:function(){if(void 0!==l)return l;var t,i,e=n("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=e.children()[0];return n("body").append(e),t=o.offsetWidth,e.css("overflow","scroll"),i=o.offsetWidth,t===i&&(i=e[0].clientWidth),e.remove(),l=t-i},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),e=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),o="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,l="scroll"===e||"auto"===e&&t.height<t.element[0].scrollHeight;return{width:l?n.position.scrollbarWidth():0,height:o?n.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=n(t||window),e=n.isWindow(i[0]),o=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:e,isDocument:o,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:e?i.width():i.outerWidth(),height:e?i.height():i.outerHeight()}}},n.fn.position=function(t){if(!t||!t.of)return g.apply(this,arguments);t=n.extend({},t);var l,d,u,m,w,W,v=n(t.of),y=n.position.getWithinInfo(t.within),b=n.position.getScrollInfo(y),H=(t.collision||"flip").split(" "),x={};return W=o(v),v[0].preventDefault&&(t.at="left top"),d=W.width,u=W.height,m=W.offset,w=n.extend({},m),n.each(["my","at"],function(){var i,e,o=(t[this]||"").split(" ");1===o.length&&(o=h.test(o[0])?o.concat(["center"]):p.test(o[0])?["center"].concat(o):["center","center"]),o[0]=h.test(o[0])?o[0]:"center",o[1]=p.test(o[1])?o[1]:"center",i=c.exec(o[0]),e=c.exec(o[1]),x[this]=[i?i[0]:0,e?e[0]:0],t[this]=[a.exec(o[0])[0],a.exec(o[1])[0]]}),1===H.length&&(H[1]=H[0]),"right"===t.at[0]?w.left+=d:"center"===t.at[0]&&(w.left+=d/2),"bottom"===t.at[1]?w.top+=u:"center"===t.at[1]&&(w.top+=u/2),l=i(x.at,d,u),w.left+=l[0],w.top+=l[1],this.each(function(){var o,h,p=n(this),c=p.outerWidth(),a=p.outerHeight(),g=e(this,"marginLeft"),W=e(this,"marginTop"),T=c+g+e(this,"marginRight")+b.width,L=a+W+e(this,"marginBottom")+b.height,P=n.extend({},w),D=i(x.my,p.outerWidth(),p.outerHeight());"right"===t.my[0]?P.left-=c:"center"===t.my[0]&&(P.left-=c/2),"bottom"===t.my[1]?P.top-=a:"center"===t.my[1]&&(P.top-=a/2),P.left+=D[0],P.top+=D[1],n.support.offsetFractions||(P.left=r(P.left),P.top=r(P.top)),o={marginLeft:g,marginTop:W},n.each(["left","top"],function(i,e){n.ui.position[H[i]]&&n.ui.position[H[i]][e](P,{targetWidth:d,targetHeight:u,elemWidth:c,elemHeight:a,collisionPosition:o,collisionWidth:T,collisionHeight:L,offset:[l[0]+D[0],l[1]+D[1]],my:t.my,at:t.at,within:y,elem:p})}),t.using&&(h=function(i){var e=m.left-P.left,o=e+d-c,n=m.top-P.top,l=n+u-a,r={target:{element:v,left:m.left,top:m.top,width:d,height:u},element:{element:p,left:P.left,top:P.top,width:c,height:a},horizontal:0>o?"left":e>0?"right":"center",vertical:0>l?"top":n>0?"bottom":"middle"};c>d&&f(e+o)<d&&(r.horizontal="center"),a>u&&f(n+l)<u&&(r.vertical="middle"),s(f(e),f(o))>s(f(n),f(l))?r.important="horizontal":r.important="vertical",t.using.call(this,i,r)}),p.offset(n.extend(P,{using:h}))})},n.ui.position={fit:{left:function(t,i){var e,o=i.within,n=o.isWindow?o.scrollLeft:o.offset.left,l=o.width,f=t.left-i.collisionPosition.marginLeft,r=n-f,h=f+i.collisionWidth-l-n;i.collisionWidth>l?r>0&&0>=h?(e=t.left+r+i.collisionWidth-l-n,t.left+=r-e):h>0&&0>=r?t.left=n:r>h?t.left=n+l-i.collisionWidth:t.left=n:r>0?t.left+=r:h>0?t.left-=h:t.left=s(t.left-f,t.left)},top:function(t,i){var e,o=i.within,n=o.isWindow?o.scrollTop:o.offset.top,l=i.within.height,f=t.top-i.collisionPosition.marginTop,r=n-f,h=f+i.collisionHeight-l-n;i.collisionHeight>l?r>0&&0>=h?(e=t.top+r+i.collisionHeight-l-n,t.top+=r-e):h>0&&0>=r?t.top=n:r>h?t.top=n+l-i.collisionHeight:t.top=n:r>0?t.top+=r:h>0?t.top-=h:t.top=s(t.top-f,t.top)}},flip:{left:function(t,i){var e,o,n=i.within,l=n.offset.left+n.scrollLeft,s=n.width,r=n.isWindow?n.scrollLeft:n.offset.left,h=t.left-i.collisionPosition.marginLeft,p=h-r,c=h+i.collisionWidth-s-r,a="left"===i.my[0]?-i.elemWidth:"right"===i.my[0]?i.elemWidth:0,d="left"===i.at[0]?i.targetWidth:"right"===i.at[0]?-i.targetWidth:0,g=-2*i.offset[0];0>p?(e=t.left+a+d+g+i.collisionWidth-s-l,(0>e||e<f(p))&&(t.left+=a+d+g)):c>0&&(o=t.left-i.collisionPosition.marginLeft+a+d+g-r,(o>0||f(o)<c)&&(t.left+=a+d+g))},top:function(t,i){var e,o,n=i.within,l=n.offset.top+n.scrollTop,s=n.height,r=n.isWindow?n.scrollTop:n.offset.top,h=t.top-i.collisionPosition.marginTop,p=h-r,c=h+i.collisionHeight-s-r,a="top"===i.my[1],d=a?-i.elemHeight:"bottom"===i.my[1]?i.elemHeight:0,g="top"===i.at[1]?i.targetHeight:"bottom"===i.at[1]?-i.targetHeight:0,u=-2*i.offset[1];0>p?(o=t.top+d+g+u+i.collisionHeight-s-l,t.top+d+g+u>p&&(0>o||o<f(p))&&(t.top+=d+g+u)):c>0&&(e=t.top-i.collisionPosition.marginTop+d+g+u-r,t.top+d+g+u>c&&(e>0||f(e)<c)&&(t.top+=d+g+u))}},flipfit:{left:function(){n.ui.position.flip.left.apply(this,arguments),n.ui.position.fit.left.apply(this,arguments)},top:function(){n.ui.position.flip.top.apply(this,arguments),n.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,e,o,l,s=document.getElementsByTagName("body")[0],f=document.createElement("div");t=document.createElement(s?"div":"body"),e={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},s&&n.extend(e,{position:"absolute",left:"-1000px",top:"-1000px"});for(l in e)t.style[l]=e[l];t.appendChild(f),i=s||document.documentElement,i.insertBefore(t,i.firstChild),f.style.cssText="position: absolute; left: 10.7432222px;",o=n(f).offset().left,n.support.offsetFractions=o>10&&11>o,t.innerHTML="",i.removeChild(t)}(),n});