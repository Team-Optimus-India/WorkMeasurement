(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e4e00"],{"91a3":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("h5",[t._v("Top Browser Domains")]),t.browserBuckets?a("div",[a("aw-summary",{attrs:{fields:t.$store.state.activity_daily.top_domains,namefunc:function(t){return t.data.$domain},colorfunc:function(t){return t.data.$domain},with_limit:""}})],1):t._e()]),a("div",{staticClass:"col-md-6"},[a("h5",[t._v("Top Browser URLs")]),t.browserBuckets?a("div",[a("aw-summary",{attrs:{fields:t.$store.state.activity_daily.top_urls,namefunc:function(t){return t.data.url},colorfunc:function(t){return t.data.$domain},with_limit:""}})],1):t._e()])])])},r=[],n={name:"Activity",props:{periodLength:{type:String,default:"day"}},data:()=>{return{filterAFK:!0,timelineShowAFK:!0,top_web_count:5}},computed:{browserBuckets:function(){return this.$store.state.activity_daily.browser_buckets_available}}},s=n,o=a("2877"),u=Object(o["a"])(s,i,r,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0e4e00.8c85b787.js.map