(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{189:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return o});var a=n(0),r=n.n(a),u=n(196),i=n(195),c=n(204),s=n(201);function o(){return Object(i.c)()?r.a.createElement(c.a,null,"Hello World"):(Object(a.useEffect)(function(){Object(u.navigate)("/login")}),r.a.createElement(s.a,null))}},192:function(e,t,n){"use strict";var a=n(10);t.__esModule=!0,t.withPrefix=d,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(198)),u=a(n(199)),i=a(n(5)),c=a(n(63)),s=a(n(64)),o=a(n(4)),L=a(n(0)),M=n(28),l=n(196);function d(e){return function(e){return e.replace(/\/+/g,"/")}("/river/"+e)}var j={activeClassName:o.default.string,activeStyle:o.default.object},w=function(e){function t(t){var n;n=e.call(this,t)||this,(0,s.default)((0,c.default)((0,c.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,u.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,c.default)((0,c.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,l.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,l.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,l.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,c=t.onClick,s=t.onMouseEnter,o=(t.activeClassName,t.activeStyle,t.innerRef,t.state),j=t.replace,w=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var f=d(n);return L.default.createElement(M.Link,(0,u.default)({to:f,state:o,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,l.parsePath)(n).pathname)},onClick:function(t){return c&&c(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),p(n,{state:o,replace:j})),!0}},w))},t}(L.default.Component);w.propTypes=(0,u.default)({},j,{innerRef:o.default.func,onClick:o.default.func,to:o.default.string.isRequired,replace:o.default.bool});var f=L.default.forwardRef(function(e,t){return L.default.createElement(w,(0,u.default)({innerRef:t},e))});t.default=f;var p=function(e,t){window.___navigate(d(e),t)};t.navigate=p;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(d(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(d(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},195:function(e,t,n){"use strict";var a=n(9),r=n.n(a),u=(n(37),n(16)),i=n.n(u),c=n(0),s=n(62),o=n(60),L=n(61);function M(){var e=Object(c.useCallback)(function(e){return e.auth.expiresAt>Date.now()},[]);return Object(s.c)(e)}function l(){var e=Object(c.useCallback)(function(e){return e.auth.message},[]);return Object(s.c)(e)}function d(){var e=Object(c.useCallback)(function(e){return e.user},[]);return Object(s.c)(e)}function j(){var e=Object(s.b)();return Object(c.useMemo)(i()(r.a.mark(function t(){var n,a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(Object(o.a)());case 2:return n=t.sent,e(Object(o.d)(n.accessToken)),t.next=6,e(Object(o.c)(n));case 6:return a=t.sent,e(Object(L.b)(a)),t.abrupt("return",n);case 9:case"end":return t.stop()}},t,this)})),[])}n.d(t,"c",function(){return M}),n.d(t,"a",function(){return l}),n.d(t,"d",function(){return d}),n.d(t,"b",function(){return j})},196:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return j}),n.d(t,"StaticQueryContext",function(){return l}),n.d(t,"StaticQuery",function(){return d});var a=n(0),r=n.n(a),u=n(4),i=n.n(u),c=n(192),s=n.n(c);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var o=n(197),L=n.n(o);n.d(t,"PageRenderer",function(){return L.a});var M=n(39);n.d(t,"parsePath",function(){return M.a});var l=r.a.createContext({}),d=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function j(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},197:function(e,t,n){var a;e.exports=(a=n(200))&&a.default||a},198:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},u=Object.keys(e);for(a=0;a<u.length;a++)n=u[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},199:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},200:function(e,t,n){"use strict";n.r(t);n(17);var a=n(0),r=n.n(a),u=n(4),i=n.n(u),c=n(67),s=n(2),o=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},201:function(e,t,n){"use strict";var a=n(193),r=n.n(a),u=n(0),i=n.n(u),c=n(194),s=n(202),o=n.n(s);function L(){var e=r()(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n"]);return L=function(){return e},e}var M=c.a.div(L());function l(e){var t=e.children;return i.a.createElement(M,null,i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement("img",{src:o.a,alt:"loadding..."}),t))}l.Error=function(e){var t=e.children;return i.a.createElement("pre",{style:{color:"var(--red)"}},t)},l.Info=function(e){var t=e.children;return i.a.createElement("pre",null,t)},t.a=l},202:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBDb3B5cGFzdGEgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYXV0aDAtc2FtcGxlcy9hdXRoMC1yZWFjdC1zYW1wbGVzL2Jsb2IvbWFzdGVyLzA0LUF1dGhvcml6YXRpb24vc3JjL0NhbGxiYWNrL2xvYWRpbmcuc3ZnIC0tPgo8c3ZnIHdpZHRoPScxMjBweCcgaGVpZ2h0PScxMjBweCcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGNsYXNzPSJ1aWwtcmluZyI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9Im5vbmUiIGNsYXNzPSJiayI+PC9yZWN0PjxkZWZzPjxmaWx0ZXIgaWQ9InVpbC1yaW5nLXNoYWRvdyIgeD0iLTEwMCUiIHk9Ii0xMDAlIiB3aWR0aD0iMzAwJSIgaGVpZ2h0PSIzMDAlIj48ZmVPZmZzZXQgcmVzdWx0PSJvZmZPdXQiIGluPSJTb3VyY2VHcmFwaGljIiBkeD0iMCIgZHk9IjAiPjwvZmVPZmZzZXQ+PGZlR2F1c3NpYW5CbHVyIHJlc3VsdD0iYmx1ck91dCIgaW49Im9mZk91dCIgc3RkRGV2aWF0aW9uPSIwIj48L2ZlR2F1c3NpYW5CbHVyPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImJsdXJPdXQiIG1vZGU9Im5vcm1hbCI+PC9mZUJsZW5kPjwvZmlsdGVyPjwvZGVmcz48cGF0aCBkPSJNMTAsNTBjMCwwLDAsMC41LDAuMSwxLjRjMCwwLjUsMC4xLDEsMC4yLDEuN2MwLDAuMywwLjEsMC43LDAuMSwxLjFjMC4xLDAuNCwwLjEsMC44LDAuMiwxLjJjMC4yLDAuOCwwLjMsMS44LDAuNSwyLjggYzAuMywxLDAuNiwyLjEsMC45LDMuMmMwLjMsMS4xLDAuOSwyLjMsMS40LDMuNWMwLjUsMS4yLDEuMiwyLjQsMS44LDMuN2MwLjMsMC42LDAuOCwxLjIsMS4yLDEuOWMwLjQsMC42LDAuOCwxLjMsMS4zLDEuOSBjMSwxLjIsMS45LDIuNiwzLjEsMy43YzIuMiwyLjUsNSw0LjcsNy45LDYuN2MzLDIsNi41LDMuNCwxMC4xLDQuNmMzLjYsMS4xLDcuNSwxLjUsMTEuMiwxLjZjNC0wLjEsNy43LTAuNiwxMS4zLTEuNiBjMy42LTEuMiw3LTIuNiwxMC00LjZjMy0yLDUuOC00LjIsNy45LTYuN2MxLjItMS4yLDIuMS0yLjUsMy4xLTMuN2MwLjUtMC42LDAuOS0xLjMsMS4zLTEuOWMwLjQtMC42LDAuOC0xLjMsMS4yLTEuOSBjMC42LTEuMywxLjMtMi41LDEuOC0zLjdjMC41LTEuMiwxLTIuNCwxLjQtMy41YzAuMy0xLjEsMC42LTIuMiwwLjktMy4yYzAuMi0xLDAuNC0xLjksMC41LTIuOGMwLjEtMC40LDAuMS0wLjgsMC4yLTEuMiBjMC0wLjQsMC4xLTAuNywwLjEtMS4xYzAuMS0wLjcsMC4xLTEuMiwwLjItMS43QzkwLDUwLjUsOTAsNTAsOTAsNTBzMCwwLjUsMCwxLjRjMCwwLjUsMCwxLDAsMS43YzAsMC4zLDAsMC43LDAsMS4xIGMwLDAuNC0wLjEsMC44LTAuMSwxLjJjLTAuMSwwLjktMC4yLDEuOC0wLjQsMi44Yy0wLjIsMS0wLjUsMi4xLTAuNywzLjNjLTAuMywxLjItMC44LDIuNC0xLjIsMy43Yy0wLjIsMC43LTAuNSwxLjMtMC44LDEuOSBjLTAuMywwLjctMC42LDEuMy0wLjksMmMtMC4zLDAuNy0wLjcsMS4zLTEuMSwyYy0wLjQsMC43LTAuNywxLjQtMS4yLDJjLTEsMS4zLTEuOSwyLjctMy4xLDRjLTIuMiwyLjctNSw1LTguMSw3LjEgYy0wLjgsMC41LTEuNiwxLTIuNCwxLjVjLTAuOCwwLjUtMS43LDAuOS0yLjYsMS4zTDY2LDg3LjdsLTEuNCwwLjVjLTAuOSwwLjMtMS44LDAuNy0yLjgsMWMtMy44LDEuMS03LjksMS43LTExLjgsMS44TDQ3LDkwLjggYy0xLDAtMi0wLjItMy0wLjNsLTEuNS0wLjJsLTAuNy0wLjFMNDEuMSw5MGMtMS0wLjMtMS45LTAuNS0yLjktMC43Yy0wLjktMC4zLTEuOS0wLjctMi44LTFMMzQsODcuN2wtMS4zLTAuNiBjLTAuOS0wLjQtMS44LTAuOC0yLjYtMS4zYy0wLjgtMC41LTEuNi0xLTIuNC0xLjVjLTMuMS0yLjEtNS45LTQuNS04LjEtNy4xYy0xLjItMS4yLTIuMS0yLjctMy4xLTRjLTAuNS0wLjYtMC44LTEuNC0xLjItMiBjLTAuNC0wLjctMC44LTEuMy0xLjEtMmMtMC4zLTAuNy0wLjYtMS4zLTAuOS0yYy0wLjMtMC43LTAuNi0xLjMtMC44LTEuOWMtMC40LTEuMy0wLjktMi41LTEuMi0zLjdjLTAuMy0xLjItMC41LTIuMy0wLjctMy4zIGMtMC4yLTEtMC4zLTItMC40LTIuOGMtMC4xLTAuNC0wLjEtMC44LTAuMS0xLjJjMC0wLjQsMC0wLjcsMC0xLjFjMC0wLjcsMC0xLjIsMC0xLjdDMTAsNTAuNSwxMCw1MCwxMCw1MHoiIGZpbGw9IiMzMzdhYjciIGZpbHRlcj0idXJsKCN1aWwtcmluZy1zaGFkb3cpIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZnJvbT0iMCA1MCA1MCIgdG89IjM2MCA1MCA1MCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMXMiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L3BhdGg+PC9zdmc+Cg=="},203:function(e,t,n){},204:function(e,t,n){"use strict";var a=n(193),r=n.n(a),u=n(0),i=n.n(u),c=n(194),s=(n(97),n(205)),o=n.n(s),L=n(206),M=n.n(L),l=n(207),d=n.n(l),j=new M.a(d.a),w=j.rhythm,f=(j.scale,n(195));function p(){var e=r()(["\n  display: flex;\n  align-items:center;\n\n  span {\n    padding-left: ",";\n  }\n"]);return p=function(){return e},e}function y(){var e=r()(["\n\n"]);return y=function(){return e},e}function C(){var e=r()(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1em 2em;\n\n  * {\n    margin: 0;\n  }\n\n  img {\n    margin: 0;\n    height: ",";\n    border-radius: 50%;\n\n  }\n"]);return C=function(){return e},e}var v=c.a.header(C(),w(1)),m=c.a.div(y()),S=c.a.div(p(),w(.5));function h(){var e=Object(f.c)(),t=Object(f.d)();return e&&t&&i.a.createElement(o.a,{style:{background:"white",boxShadow:"0 0 8px #888888"}},i.a.createElement(v,null,i.a.createElement(m,null,i.a.createElement("h2",null,"River")),i.a.createElement(S,null,i.a.createElement("img",{src:t.picture,alt:"O"}),i.a.createElement("span",null," Hi, ",t.name))))}n(203);function I(){var e=r()(["\n  margin: auto;\n  max-width: ",";\n"]);return I=function(){return e},e}n.d(t,"a",function(){return x});var g=c.a.div(I(),w(24));function x(e){var t=e.children;return i.a.createElement("div",null,i.a.createElement(h,null),i.a.createElement(g,null,t))}}}]);
//# sourceMappingURL=component---src-pages-index-js-15e50daedae541eaed8a.js.map