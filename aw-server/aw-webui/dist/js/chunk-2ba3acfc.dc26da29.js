(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ba3acfc"],{"4cc9":function(e,n,t){"use strict";var o=t("6410"),a=t.n(o);a.a},6410:function(e,n,t){},f836:function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("Server Log")]),t("hr"),t("accordion",{attrs:{"one-at-atime":!1}},e._l(e.logs,(function(n,o){return t("panel",{key:o,attrs:{header:n.levelname+":"+n.message,"is-open":!1}},[e._v("Name: "+e._s(e.logm.name)),t("br"),e._v("Time: "+e._s(n.asctime)),t("br"),e._v("Origin: "+e._s(n.funcName)+":"+e._s(n.lineno))])})),1)],1)},a=[],s={name:"Log",data:()=>{return{logs:[]}},mounted:function(){this.getLog()},methods:{getLog:function(){$Log.get().then(e=>{this.logs=e.json()})}}},c=s,r=(t("4cc9"),t("2877")),i=Object(r["a"])(c,o,a,!1,null,null,null);n["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2ba3acfc.dc26da29.js.map