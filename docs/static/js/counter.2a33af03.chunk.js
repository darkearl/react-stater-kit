webpackJsonp([1],{75:function(e,n){"use strict";function t(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{type:c,payload:e}}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments[1],t=a[n.type];return t?t(e,n):e}Object.defineProperty(n,"__esModule",{value:!0});var o;n.increment=u,n.default=r;var c=n.COUNTER_INCREMENT="COUNTER_INCREMENT",i=n.COUNTER_DOUBLE_ASYNC="COUNTER_DOUBLE_ASYNC",l=n.doubleAsync=function(){return function(e,n){return new Promise(function(t){setTimeout(function(){e({type:i,payload:n().counter}),t()},200)})}},a=(n.actions={increment:u,doubleAsync:l},o={},t(o,c,function(e,n){return e+n.payload}),t(o,i,function(e,n){return 2*e}),o),d=0},139:function(e,n,t){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),n.Counter=void 0;var r=t(5),o=u(r),c=t(19),i=u(c),l=n.Counter=function(e){var n=e.counter,t=e.increment,u=e.doubleAsync;return o.default.createElement("div",{style:{margin:"0 auto"}},o.default.createElement("h2",null,"Counter: ",n),o.default.createElement("button",{className:"btn btn-primary",onClick:t},"Increment")," ",o.default.createElement("button",{className:"btn btn-secondary",onClick:u},"Double (Async)"))};l.propTypes={counter:i.default.number.isRequired,increment:i.default.func.isRequired,doubleAsync:i.default.func.isRequired},n.default=l},140:function(e,n,t){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var r=t(66),o=t(75),c=t(139),i=u(c),l={increment:function(){return(0,o.increment)(1)},doubleAsync:o.doubleAsync},a=function(e){return{counter:e.counter}};n.default=(0,r.connect)(a,l)(i.default)}});
//# sourceMappingURL=counter.2a33af03.chunk.js.map