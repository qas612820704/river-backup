(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{189:function(n,t,e){"use strict";e.r(t),e.d(t,"default",function(){return d});e(98);var u=e(196),a=e.n(u),r=e(0),c=e.n(r),i=e(63),L=e(197),M=e(209),j=e(60),s=e(202),w=e(205),l=e(199);function o(){var n=a()(["\n  display: flex;\n  align-items: center;\n\n  margin: "," 0;\n\n  aside {\n    flex: 1;\n  }\n  section {\n    flex: 3;\n\n    h1 {\n      margin-top: 0;\n    }\n  }\n"]);return o=function(){return n},n}function d(){var n=Object(i.c)(Object(r.useCallback)(function(n){return n.books.length},[])),t=Object(i.b)();return 0===n?(t(Object(j.b)()),c.a.createElement(s.a,null)):c.a.createElement(w.a,null,Object(M.range)(n).map(function(n){return c.a.createElement(C,{key:n,index:n})}))}var y=L.a.div(o(),Object(l.a)(1));function C(n){var t=n.index,e=Object(i.c)(Object(r.useCallback)(function(n){return n.books[t]},[t]));return c.a.createElement(y,null,c.a.createElement("aside",null,c.a.createElement("img",{src:e.picture,alt:"book-img"})),c.a.createElement("section",null,c.a.createElement("h1",null,e.name),c.a.createElement("p",null,e.description)))}},195:function(n,t,e){var u;n.exports=(u=e(201))&&u.default||u},198:function(n,t,e){"use strict";e.r(t),e.d(t,"graphql",function(){return o}),e.d(t,"StaticQueryContext",function(){return w}),e.d(t,"StaticQuery",function(){return l});var u=e(0),a=e.n(u),r=e(5),c=e.n(r),i=e(194),L=e.n(i);e.d(t,"Link",function(){return L.a}),e.d(t,"withPrefix",function(){return i.withPrefix}),e.d(t,"navigate",function(){return i.navigate}),e.d(t,"push",function(){return i.push}),e.d(t,"replace",function(){return i.replace}),e.d(t,"navigateTo",function(){return i.navigateTo});var M=e(195),j=e.n(M);e.d(t,"PageRenderer",function(){return j.a});var s=e(38);e.d(t,"parsePath",function(){return s.a});var w=a.a.createContext({}),l=function(n){return a.a.createElement(w.Consumer,null,function(t){return n.data||t[n.query]&&t[n.query].data?(n.render||n.children)(n.data?n.data.data:t[n.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function o(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}l.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},199:function(n,t,e){"use strict";e.d(t,"a",function(){return L});var u=e(207),a=e.n(u),r=e(208),c=e.n(r),i=new a.a(c.a),L=i.rhythm;i.scale},200:function(n,t,e){"use strict";var u=e(3),a=e.n(u),r=(e(21),e(10)),c=e.n(r),i=e(0),L=e(63),M=e(61),j=e(62);e(60);function s(){var n=Object(i.useCallback)(function(n){return n.auth.expiresAt>Date.now()},[]);return Object(L.c)(n)}function w(){var n=Object(i.useCallback)(function(n){return n.auth.message},[]);return Object(L.c)(n)}function l(){var n=Object(i.useCallback)(function(n){return n.user},[]);return Object(L.c)(n)}function o(){var n=Object(L.b)();return Object(i.useMemo)(c()(a.a.mark(function t(){var e,u;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(Object(M.a)());case 2:return e=t.sent,n(Object(M.d)(e.accessToken)),t.next=6,n(Object(M.c)(e));case 6:return u=t.sent,n(Object(j.b)(u)),t.abrupt("return",e);case 9:case"end":return t.stop()}},t,this)})),[])}e.d(t,"c",function(){return s}),e.d(t,"a",function(){return w}),e.d(t,"d",function(){return l}),e.d(t,"b",function(){return o})},201:function(n,t,e){"use strict";e.r(t);e(17);var u=e(0),a=e.n(u),r=e(5),c=e.n(r),i=e(64),L=e(2),M=function(n){var t=n.location,e=L.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(i.a,Object.assign({location:t,pageResources:e},e.json))};M.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=M},202:function(n,t,e){"use strict";var u=e(196),a=e.n(u),r=e(0),c=e.n(r),i=e(197),L=e(203),M=e.n(L);function j(){var n=a()(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n"]);return j=function(){return n},n}var s=i.a.div(j());function w(n){var t=n.children;return c.a.createElement(s,null,c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("img",{src:M.a,alt:"loadding..."}),t))}w.Error=function(n){var t=n.children;return c.a.createElement("pre",{style:{color:"var(--red)"}},t)},w.Info=function(n){var t=n.children;return c.a.createElement("pre",null,t)},t.a=w},203:function(n,t){n.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBDb3B5cGFzdGEgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYXV0aDAtc2FtcGxlcy9hdXRoMC1yZWFjdC1zYW1wbGVzL2Jsb2IvbWFzdGVyLzA0LUF1dGhvcml6YXRpb24vc3JjL0NhbGxiYWNrL2xvYWRpbmcuc3ZnIC0tPgo8c3ZnIHdpZHRoPScxMjBweCcgaGVpZ2h0PScxMjBweCcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGNsYXNzPSJ1aWwtcmluZyI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9Im5vbmUiIGNsYXNzPSJiayI+PC9yZWN0PjxkZWZzPjxmaWx0ZXIgaWQ9InVpbC1yaW5nLXNoYWRvdyIgeD0iLTEwMCUiIHk9Ii0xMDAlIiB3aWR0aD0iMzAwJSIgaGVpZ2h0PSIzMDAlIj48ZmVPZmZzZXQgcmVzdWx0PSJvZmZPdXQiIGluPSJTb3VyY2VHcmFwaGljIiBkeD0iMCIgZHk9IjAiPjwvZmVPZmZzZXQ+PGZlR2F1c3NpYW5CbHVyIHJlc3VsdD0iYmx1ck91dCIgaW49Im9mZk91dCIgc3RkRGV2aWF0aW9uPSIwIj48L2ZlR2F1c3NpYW5CbHVyPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImJsdXJPdXQiIG1vZGU9Im5vcm1hbCI+PC9mZUJsZW5kPjwvZmlsdGVyPjwvZGVmcz48cGF0aCBkPSJNMTAsNTBjMCwwLDAsMC41LDAuMSwxLjRjMCwwLjUsMC4xLDEsMC4yLDEuN2MwLDAuMywwLjEsMC43LDAuMSwxLjFjMC4xLDAuNCwwLjEsMC44LDAuMiwxLjJjMC4yLDAuOCwwLjMsMS44LDAuNSwyLjggYzAuMywxLDAuNiwyLjEsMC45LDMuMmMwLjMsMS4xLDAuOSwyLjMsMS40LDMuNWMwLjUsMS4yLDEuMiwyLjQsMS44LDMuN2MwLjMsMC42LDAuOCwxLjIsMS4yLDEuOWMwLjQsMC42LDAuOCwxLjMsMS4zLDEuOSBjMSwxLjIsMS45LDIuNiwzLjEsMy43YzIuMiwyLjUsNSw0LjcsNy45LDYuN2MzLDIsNi41LDMuNCwxMC4xLDQuNmMzLjYsMS4xLDcuNSwxLjUsMTEuMiwxLjZjNC0wLjEsNy43LTAuNiwxMS4zLTEuNiBjMy42LTEuMiw3LTIuNiwxMC00LjZjMy0yLDUuOC00LjIsNy45LTYuN2MxLjItMS4yLDIuMS0yLjUsMy4xLTMuN2MwLjUtMC42LDAuOS0xLjMsMS4zLTEuOWMwLjQtMC42LDAuOC0xLjMsMS4yLTEuOSBjMC42LTEuMywxLjMtMi41LDEuOC0zLjdjMC41LTEuMiwxLTIuNCwxLjQtMy41YzAuMy0xLjEsMC42LTIuMiwwLjktMy4yYzAuMi0xLDAuNC0xLjksMC41LTIuOGMwLjEtMC40LDAuMS0wLjgsMC4yLTEuMiBjMC0wLjQsMC4xLTAuNywwLjEtMS4xYzAuMS0wLjcsMC4xLTEuMiwwLjItMS43QzkwLDUwLjUsOTAsNTAsOTAsNTBzMCwwLjUsMCwxLjRjMCwwLjUsMCwxLDAsMS43YzAsMC4zLDAsMC43LDAsMS4xIGMwLDAuNC0wLjEsMC44LTAuMSwxLjJjLTAuMSwwLjktMC4yLDEuOC0wLjQsMi44Yy0wLjIsMS0wLjUsMi4xLTAuNywzLjNjLTAuMywxLjItMC44LDIuNC0xLjIsMy43Yy0wLjIsMC43LTAuNSwxLjMtMC44LDEuOSBjLTAuMywwLjctMC42LDEuMy0wLjksMmMtMC4zLDAuNy0wLjcsMS4zLTEuMSwyYy0wLjQsMC43LTAuNywxLjQtMS4yLDJjLTEsMS4zLTEuOSwyLjctMy4xLDRjLTIuMiwyLjctNSw1LTguMSw3LjEgYy0wLjgsMC41LTEuNiwxLTIuNCwxLjVjLTAuOCwwLjUtMS43LDAuOS0yLjYsMS4zTDY2LDg3LjdsLTEuNCwwLjVjLTAuOSwwLjMtMS44LDAuNy0yLjgsMWMtMy44LDEuMS03LjksMS43LTExLjgsMS44TDQ3LDkwLjggYy0xLDAtMi0wLjItMy0wLjNsLTEuNS0wLjJsLTAuNy0wLjFMNDEuMSw5MGMtMS0wLjMtMS45LTAuNS0yLjktMC43Yy0wLjktMC4zLTEuOS0wLjctMi44LTFMMzQsODcuN2wtMS4zLTAuNiBjLTAuOS0wLjQtMS44LTAuOC0yLjYtMS4zYy0wLjgtMC41LTEuNi0xLTIuNC0xLjVjLTMuMS0yLjEtNS45LTQuNS04LjEtNy4xYy0xLjItMS4yLTIuMS0yLjctMy4xLTRjLTAuNS0wLjYtMC44LTEuNC0xLjItMiBjLTAuNC0wLjctMC44LTEuMy0xLjEtMmMtMC4zLTAuNy0wLjYtMS4zLTAuOS0yYy0wLjMtMC43LTAuNi0xLjMtMC44LTEuOWMtMC40LTEuMy0wLjktMi41LTEuMi0zLjdjLTAuMy0xLjItMC41LTIuMy0wLjctMy4zIGMtMC4yLTEtMC4zLTItMC40LTIuOGMtMC4xLTAuNC0wLjEtMC44LTAuMS0xLjJjMC0wLjQsMC0wLjcsMC0xLjFjMC0wLjcsMC0xLjIsMC0xLjdDMTAsNTAuNSwxMCw1MCwxMCw1MHoiIGZpbGw9IiMzMzdhYjciIGZpbHRlcj0idXJsKCN1aWwtcmluZy1zaGFkb3cpIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZnJvbT0iMCA1MCA1MCIgdG89IjM2MCA1MCA1MCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMXMiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L3BhdGg+PC9zdmc+Cg=="},204:function(n,t,e){},205:function(n,t,e){"use strict";var u=e(196),a=e.n(u),r=e(0),c=e.n(r),i=e(197),L=(e(98),e(206)),M=e.n(L),j=e(198),s=e(199),w=e(200);function l(){var n=a()(["\n  display: flex;\n\n  a, span {\n    padding-left: ",";\n  }\n\n  span {\n    display: flex;\n    align-items:center;\n\n    img {\n      margin-right: ",";\n    }\n  }\n"]);return l=function(){return n},n}function o(){var n=a()(["\n\n"]);return o=function(){return n},n}function d(){var n=a()(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1em 2em;\n\n  * {\n    margin: 0;\n  }\n\n  img {\n    margin: 0;\n    height: ",";\n    border-radius: 50%;\n\n  }\n"]);return d=function(){return n},n}var y=i.a.header(d(),Object(s.a)(1)),C=i.a.div(o()),m=i.a.div(l(),Object(s.a)(.5),Object(s.a)(.25));function x(){var n=Object(w.c)(),t=Object(w.d)();return n&&t&&c.a.createElement(M.a,{style:{background:"white",boxShadow:"0 0 8px #888888"}},c.a.createElement(y,null,c.a.createElement(C,null,c.a.createElement("h2",null,"River")),c.a.createElement(m,null,c.a.createElement(j.Link,{to:"/books"},"Books"),c.a.createElement("span",null,c.a.createElement("img",{src:t.picture,alt:"O"}),"Hi, ",t.name))))}e(204);function S(){var n=a()(["\n  margin: auto;\n  max-width: ",";\n"]);return S=function(){return n},n}e.d(t,"a",function(){return I});var b=i.a.div(S(),Object(s.a)(24));function I(n){var t=n.children;return c.a.createElement("div",null,c.a.createElement(x,null),c.a.createElement(b,null,t))}}}]);
//# sourceMappingURL=component---src-pages-books-js-0f6486dfa13a6eba1583.js.map