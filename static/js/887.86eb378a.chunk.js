"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[887],{25:function(t,e,n){n.d(e,{$z:function(){return f},Yi:function(){return c},mp:function(){return l},vw:function(){return s},wr:function(){return u}});var r=n(861),o=n(757),a=n.n(o),i=n(294);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.params={api_key:"14faff239da21831d7eeebedab4fa89d"};var s=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/search/movie?query=".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/movie/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=(0,r.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/trending/all/day?language=en-US");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/movie/".concat(e,"/credits?language=en-US "));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/movie/".concat(e,"/reviews?language=en-US "));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},887:function(t,e,n){n.r(e),n.d(e,{default:function(){return K}});var r=n(861),o=n(439),a=n(757),i=n.n(a),s=n(791),c=n(942),u=n(413);function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var f=n(433);function d(t){var e,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=d(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}var p=function(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=d(t))&&(r&&(r+=" "),r+=e);return r},m=["theme","type"],v=["delay","staleId"],h=function(t){return"number"==typeof t&&!isNaN(t)},g=function(t){return"string"==typeof t},y=function(t){return"function"==typeof t},E=function(t){return g(t)||y(t)?t:null},T=function(t){return(0,s.isValidElement)(t)||g(t)||y(t)||h(t)};function b(t){var e=t.enter,n=t.exit,r=t.appendPosition,o=void 0!==r&&r,a=t.collapse,i=void 0===a||a,c=t.collapseDuration,u=void 0===c?300:c;return function(t){var r=t.children,a=t.position,c=t.preventExitTransition,l=t.done,d=t.nodeRef,p=t.isIn,m=o?"".concat(e,"--").concat(a):e,v=o?"".concat(n,"--").concat(a):n,h=(0,s.useRef)(0);return(0,s.useLayoutEffect)((function(){var t,e=d.current,n=m.split(" "),r=function t(r){var o;r.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",t),e.removeEventListener("animationcancel",t),0===h.current&&"animationcancel"!==r.type&&(o=e.classList).remove.apply(o,(0,f.Z)(n)))};(t=e.classList).add.apply(t,(0,f.Z)(n)),e.addEventListener("animationend",r),e.addEventListener("animationcancel",r)}),[]),(0,s.useEffect)((function(){var t=d.current,e=function e(){t.removeEventListener("animationend",e),i?function(t,e,n){void 0===n&&(n=300);var r=t.scrollHeight,o=t.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(e,n)}))}))}(t,l,u):l()};p||(c?e():(h.current=1,t.className+=" ".concat(v),t.addEventListener("animationend",e)))}),[p]),s.createElement(s.Fragment,null,r)}}function Z(t,e){return null!=t?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}var C={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t,e){if(e){var n=this.list.get(t).filter((function(t){return t!==e}));return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit:function(t){var e=arguments,n=this;this.list.has(t)&&this.list.get(t).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,f.Z)([].slice.call(e,1)))}),0);n.emitQueue.has(t)||n.emitQueue.set(t,[]),n.emitQueue.get(t).push(o)}))}},_=function(t){var e=t.theme,n=t.type,r=l(t,m);return s.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===e?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},I={info:function(t){return s.createElement(_,(0,u.Z)({},t),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return s.createElement(_,(0,u.Z)({},t),s.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return s.createElement(_,(0,u.Z)({},t),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return s.createElement(_,(0,u.Z)({},t),s.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return s.createElement("div",{className:"Toastify__spinner"})}};function w(t){var e=(0,s.useReducer)((function(t){return t+1}),0),n=(0,o.Z)(e,2)[1],r=(0,s.useState)([]),a=(0,o.Z)(r,2),i=a[0],c=a[1],d=(0,s.useRef)(null),p=(0,s.useRef)(new Map).current,m=function(t){return-1!==i.indexOf(t)},b=(0,s.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:m,getToast:function(t){return p.get(t)}}).current;function _(t){var e=t.containerId;!b.props.limit||e&&b.containerId!==e||(b.count-=b.queue.length,b.queue=[])}function w(t){c((function(e){return null==t?[]:e.filter((function(e){return e!==t}))}))}function x(){var t=b.queue.shift();L(t.toastContent,t.toastProps,t.staleId)}function O(t,e){var r=e.delay,a=e.staleId,i=l(e,v);if(T(t)&&!function(t){return!d.current||b.props.enableMultiContainer&&t.containerId!==b.props.containerId||p.has(t.toastId)&&null==t.updateId}(i)){var c=i.toastId,f=i.updateId,m=i.data,_=b.props,O=function(){return w(c)},k=null==f;k&&b.count++;var N,R,M=(0,u.Z)((0,u.Z)((0,u.Z)({},_),{},{style:_.toastStyle,key:b.toastKey++},Object.fromEntries(Object.entries(i).filter((function(t){var e=(0,o.Z)(t,2);e[0];return null!=e[1]})))),{},{toastId:c,updateId:f,data:m,closeToast:O,isIn:!1,className:E(i.className||_.toastClassName),bodyClassName:E(i.bodyClassName||_.bodyClassName),progressClassName:E(i.progressClassName||_.progressClassName),autoClose:!i.isLoading&&(N=i.autoClose,R=_.autoClose,!1===N||h(N)&&N>0?N:R),deleteToast:function(){var t=Z(p.get(c),"removed");p.delete(c),C.emit(4,t);var e=b.queue.length;if(b.count=null==c?b.count-b.displayedToast:b.count-1,b.count<0&&(b.count=0),e>0){var r=null==c?b.props.limit:1;if(1===e||1===r)b.displayedToast++,x();else{var o=r>e?e:r;b.displayedToast=o;for(var a=0;a<o;a++)x()}}else n()}});M.iconOut=function(t){var e=t.theme,n=t.type,r=t.isLoading,o=t.icon,a=null,i={theme:e,type:n};return!1===o||(y(o)?a=o(i):(0,s.isValidElement)(o)?a=(0,s.cloneElement)(o,i):g(o)||h(o)?a=o:r?a=I.spinner():function(t){return t in I}(n)&&(a=I[n](i))),a}(M),y(i.onOpen)&&(M.onOpen=i.onOpen),y(i.onClose)&&(M.onClose=i.onClose),M.closeButton=_.closeButton,!1===i.closeButton||T(i.closeButton)?M.closeButton=i.closeButton:!0===i.closeButton&&(M.closeButton=!T(_.closeButton)||_.closeButton);var P=t;(0,s.isValidElement)(t)&&!g(t.type)?P=(0,s.cloneElement)(t,{closeToast:O,toastProps:M,data:m}):y(t)&&(P=t({closeToast:O,toastProps:M,data:m})),_.limit&&_.limit>0&&b.count>_.limit&&k?b.queue.push({toastContent:P,toastProps:M,staleId:a}):h(r)?setTimeout((function(){L(P,M,a)}),r):L(P,M,a)}}function L(t,e,n){var r=e.toastId;n&&p.delete(n);var o={content:t,props:e};p.set(r,o),c((function(t){return[].concat((0,f.Z)(t),[r]).filter((function(t){return t!==n}))})),C.emit(4,Z(o,null==o.props.updateId?"added":"updated"))}return(0,s.useEffect)((function(){return b.containerId=t.containerId,C.cancelEmit(3).on(0,O).on(1,(function(t){return d.current&&w(t)})).on(5,_).emit(2,b),function(){p.clear(),C.emit(3,b)}}),[]),(0,s.useEffect)((function(){b.props=t,b.isToastActive=m,b.displayedToast=i.length})),{getToastToRender:function(e){var n=new Map,r=Array.from(p.values());return t.newestOnTop&&r.reverse(),r.forEach((function(t){var e=t.props.position;n.has(e)||n.set(e,[]),n.get(e).push(t)})),Array.from(n,(function(t){return e(t[0],t[1])}))},containerRef:d,isToastActive:m}}function x(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function O(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function L(t){var e=(0,s.useState)(!1),n=(0,o.Z)(e,2),r=n[0],a=n[1],i=(0,s.useState)(!1),c=(0,o.Z)(i,2),u=c[0],l=c[1],f=(0,s.useRef)(null),d=(0,s.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,s.useRef)(t),m=t.autoClose,v=t.pauseOnHover,h=t.closeToast,g=t.onClick,E=t.closeOnClick;function T(e){if(t.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",I),document.addEventListener("touchmove",_),document.addEventListener("touchend",I);var n=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=x(e.nativeEvent),d.y=O(e.nativeEvent),"x"===t.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(t.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function b(e){if(d.boundingRect){var n=d.boundingRect,r=n.top,o=n.bottom,a=n.left,i=n.right;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&d.x>=a&&d.x<=i&&d.y>=r&&d.y<=o?C():Z()}}function Z(){a(!0)}function C(){a(!1)}function _(e){var n=f.current;d.canDrag&&n&&(d.didMove=!0,r&&C(),d.x=x(e),d.y=O(e),d.delta="x"===t.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate".concat(t.draggableDirection,"(").concat(d.delta,"px)"),n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function I(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",I);var e=f.current;if(d.canDrag&&d.didMove&&e){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform="translate".concat(t.draggableDirection,"(0)"),e.style.opacity="1"}}(0,s.useEffect)((function(){p.current=t})),(0,s.useEffect)((function(){return f.current&&f.current.addEventListener("d",Z,{once:!0}),y(t.onOpen)&&t.onOpen((0,s.isValidElement)(t.children)&&t.children.props),function(){var t=p.current;y(t.onClose)&&t.onClose((0,s.isValidElement)(t.children)&&t.children.props)}}),[]),(0,s.useEffect)((function(){return t.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",Z),window.addEventListener("blur",C)),function(){t.pauseOnFocusLoss&&(window.removeEventListener("focus",Z),window.removeEventListener("blur",C))}}),[t.pauseOnFocusLoss]);var w={onMouseDown:T,onTouchStart:T,onMouseUp:b,onTouchEnd:b};return m&&v&&(w.onMouseEnter=C,w.onMouseLeave=Z),E&&(w.onClick=function(t){g&&g(t),d.canCloseOnClick&&h()}),{playToast:Z,pauseToast:C,isRunning:r,preventExitTransition:u,toastRef:f,eventHandlers:w}}function k(t){var e=t.closeToast,n=t.theme,r=t.ariaLabel,o=void 0===r?"close":r;return s.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":o},s.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},s.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function N(t){var e=t.delay,n=t.isRunning,r=t.closeToast,o=t.type,a=void 0===o?"default":o,i=t.hide,l=t.className,f=t.style,d=t.controlledProgress,m=t.progress,v=t.rtl,h=t.isIn,g=t.theme,E=i||d&&0===m,T=(0,u.Z)((0,u.Z)({},f),{},{animationDuration:"".concat(e,"ms"),animationPlayState:n?"running":"paused",opacity:E?0:1});d&&(T.transform="scaleX(".concat(m,")"));var b=p("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(g),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":v}),Z=y(l)?l({rtl:v,type:a,defaultClassName:b}):p(b,l);return s.createElement("div",(0,c.Z)({role:"progressbar","aria-hidden":E?"true":"false","aria-label":"notification timer",className:Z,style:T},d&&m>=1?"onTransitionEnd":"onAnimationEnd",d&&m<1?null:function(){h&&r()}))}var R=function(t){var e=L(t),n=e.isRunning,r=e.preventExitTransition,o=e.toastRef,a=e.eventHandlers,i=t.closeButton,c=t.children,l=t.autoClose,f=t.onClick,d=t.type,m=t.hideProgressBar,v=t.closeToast,h=t.transition,g=t.position,E=t.className,T=t.style,b=t.bodyClassName,Z=t.bodyStyle,C=t.progressClassName,_=t.progressStyle,I=t.updateId,w=t.role,x=t.progress,O=t.rtl,R=t.toastId,M=t.deleteToast,P=t.isIn,S=t.isLoading,B=t.iconOut,D=t.closeOnClick,A=t.theme,z=p("Toastify__toast","Toastify__toast-theme--".concat(A),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":O},{"Toastify__toast--close-on-click":D}),j=y(E)?E({rtl:O,position:g,type:d,defaultClassName:z}):p(z,E),F=!!x||!l,H={closeToast:v,type:d,theme:A},q=null;return!1===i||(q=y(i)?i(H):(0,s.isValidElement)(i)?(0,s.cloneElement)(i,H):k(H)),s.createElement(h,{isIn:P,done:M,position:g,preventExitTransition:r,nodeRef:o},s.createElement("div",(0,u.Z)((0,u.Z)({id:R,onClick:f,className:j},a),{},{style:T,ref:o}),s.createElement("div",(0,u.Z)((0,u.Z)({},P&&{role:w}),{},{className:y(b)?b({type:d}):p("Toastify__toast-body",b),style:Z}),null!=B&&s.createElement("div",{className:p("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!S})},B),s.createElement("div",null,c)),q,s.createElement(N,(0,u.Z)((0,u.Z)({},I&&!F?{key:"pb-".concat(I)}:{}),{},{rtl:O,theme:A,delay:l,isRunning:n,isIn:P,closeToast:v,hide:m,type:d,style:_,className:C,controlledProgress:F,progress:x||0}))))},M=function(t,e){return void 0===e&&(e=!1),{enter:"Toastify--animate Toastify__".concat(t,"-enter"),exit:"Toastify--animate Toastify__".concat(t,"-exit"),appendPosition:e}},P=b(M("bounce",!0)),S=(b(M("slide",!0)),b(M("zoom")),b(M("flip")),(0,s.forwardRef)((function(t,e){var n=w(t),r=n.getToastToRender,o=n.containerRef,a=n.isToastActive,i=t.className,c=t.style,l=t.rtl,f=t.containerId;function d(t){var e=p("Toastify__toast-container","Toastify__toast-container--".concat(t),{"Toastify__toast-container--rtl":l});return y(i)?i({position:t,rtl:l,defaultClassName:e}):p(e,E(i))}return(0,s.useEffect)((function(){e&&(e.current=o.current)}),[]),s.createElement("div",{ref:o,className:"Toastify",id:f},r((function(t,e){var n=e.length?(0,u.Z)({},c):(0,u.Z)((0,u.Z)({},c),{},{pointerEvents:"none"});return s.createElement("div",{className:d(t),style:n,key:"container-".concat(t)},e.map((function(t,n){var r=t.content,o=t.props;return s.createElement(R,(0,u.Z)((0,u.Z)({},o),{},{isIn:a(o.toastId),style:(0,u.Z)((0,u.Z)({},o.style),{},{"--nth":n+1,"--len":e.length}),key:"toast-".concat(o.key)}),r)})))})))})));S.displayName="ToastContainer",S.defaultProps={position:"top-right",transition:P,autoClose:5e3,closeButton:k,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var B,D=new Map,A=[],z=1;function j(){return""+z++}function F(t){return t&&(g(t.toastId)||h(t.toastId))?t.toastId:j()}function H(t,e){return D.size>0?C.emit(0,t,e):A.push({content:t,options:e}),e.toastId}function q(t,e){return(0,u.Z)((0,u.Z)({},e),{},{type:e&&e.type||t,toastId:F(e)})}function U(t){return function(e,n){return H(e,q(t,n))}}function Q(t,e){return H(t,q("default",e))}Q.loading=function(t,e){return H(t,q("default",(0,u.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},e)))},Q.promise=function(t,e,n){var r,o=e.pending,a=e.error,i=e.success;o&&(r=g(o)?Q.loading(o,n):Q.loading(o.render,(0,u.Z)((0,u.Z)({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(t,e,o){if(null!=e){var a=(0,u.Z)((0,u.Z)((0,u.Z)({type:t},s),n),{},{data:o}),i=g(e)?{render:e}:e;return r?Q.update(r,(0,u.Z)((0,u.Z)({},a),i)):Q(i.render,(0,u.Z)((0,u.Z)({},a),i)),o}Q.dismiss(r)},l=y(t)?t():t;return l.then((function(t){return c("success",i,t)})).catch((function(t){return c("error",a,t)})),l},Q.success=U("success"),Q.info=U("info"),Q.error=U("error"),Q.warning=U("warning"),Q.warn=Q.warning,Q.dark=function(t,e){return H(t,q("default",(0,u.Z)({theme:"dark"},e)))},Q.dismiss=function(t){D.size>0?C.emit(1,t):A=A.filter((function(e){return null!=t&&e.options.toastId!==t}))},Q.clearWaitingQueue=function(t){return void 0===t&&(t={}),C.emit(5,t)},Q.isActive=function(t){var e=!1;return D.forEach((function(n){n.isToastActive&&n.isToastActive(t)&&(e=!0)})),e},Q.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=function(t,e){var n=e.containerId,r=D.get(n||B);return r&&r.getToast(t)}(t,e);if(n){var r=n.props,o=n.content,a=(0,u.Z)((0,u.Z)((0,u.Z)({delay:100},r),e),{},{toastId:e.toastId||t,updateId:j()});a.toastId!==t&&(a.staleId=t);var i=a.render||o;delete a.render,H(i,a)}}),0)},Q.done=function(t){Q.update(t,{progress:1})},Q.onChange=function(t){return C.on(4,t),function(){C.off(4,t)}},Q.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Q.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},C.on(2,(function(t){B=t.containerId||t,D.set(B,t),A.forEach((function(t){C.emit(0,t.content,t.options)})),A=[]})).on(3,(function(t){D.delete(t.containerId||t),0===D.size&&C.off(0).off(1).off(5)}));var V=n(184),Y=function(t){var e=t.onSubmit,n=(0,s.useState)(""),r=(0,o.Z)(n,2),a=r[0],i=r[1];return(0,V.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==a.trim()?e(a):Q("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0437\u0430\u043f\u0440\u043e\u0441!")},children:[(0,V.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(t){var e=t.target;i(e.value.toLowerCase())},value:a}),(0,V.jsx)("button",{type:"submit",children:(0,V.jsx)("span",{children:"\u041f\u043e\u0448\u0443\u043a"})})]})},G=n(25),W=n(487),X=n(87);function K(){var t=(0,X.lr)(),e=(0,o.Z)(t,2),n=e[0],a=e[1],c=(0,s.useState)([]),u=(0,o.Z)(c,2),l=u[0],f=u[1];(0,s.useEffect)((function(){var t=n.get("value");if(t){var e=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,G.vw)(t);case 3:n=e.sent,f(n.results),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[n]);return(0,V.jsxs)("div",{children:[(0,V.jsx)(Y,{onSubmit:function(t){a({value:t})}}),(0,V.jsx)(W.e,{movies:l})]})}},487:function(t,e,n){n.d(e,{e:function(){return i}});var r=n(689),o=n(87),a=n(184),i=function(t){var e=t.movies,n=(0,r.TH)();return(0,a.jsx)("ul",{children:e.map((function(t){return(0,a.jsx)("li",{children:(0,a.jsx)(o.rU,{to:"/movies/".concat(t.id),state:{from:n},children:t.title||t.name})},t.id)}))})}}}]);
//# sourceMappingURL=887.86eb378a.chunk.js.map