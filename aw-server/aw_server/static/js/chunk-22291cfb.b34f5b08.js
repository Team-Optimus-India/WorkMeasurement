(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22291cfb"],{"1cba":function(t,a,e){var i=e("4796"),n=e("9aff"),r=e("6428");function o(t){return function(a,e,o){return o&&"number"!=typeof o&&n(a,e,o)&&(e=o=void 0),a=r(a),void 0===e?(e=a,a=0):e=r(e),o=void 0===o?a<e?1:-1:r(o),i(a,e,o,t)}}t.exports=o},4796:function(t,a){var e=Math.ceil,i=Math.max;function n(t,a,n,r){var o=-1,s=i(e((a-t)/(n||1)),0),c=Array(s);while(s--)c[r?s:++o]=t,t+=n;return c}t.exports=n},"5a3a":function(t,a,e){var i=e("1cba"),n=i();t.exports=n},add8:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"row mb-4"},[e("div",{staticClass:"col-md-4"},[e("h5",[t._v("Top Applications")]),e("aw-summary",{attrs:{fields:t.top_apps,namefunc:function(t){return t.data.app},colorfunc:function(t){return t.data.app},with_limit:""}})],1),e("div",{staticClass:"col-md-4"},[e("h5",[t._v("Top Window Titles")]),e("aw-summary",{attrs:{fields:t.top_titles,namefunc:function(t){return t.data.title},colorfunc:function(t){return t.data.app},with_limit:""}})],1),e("div",{staticClass:"col-md-4"},[e("h5",[t._v("Top Browser Domains")]),e("aw-summary",{attrs:{fields:t.top_domains,namefunc:function(t){return t.data.$domain},colorfunc:function(t){return t.data.$domain},with_limit:""}})],1)]),e("div",{staticClass:"row mb-4"},[e("div",{staticClass:"col-md-4"},[e("h5",[t._v("Top categories")]),e("aw-summary",{attrs:{fields:t.top_categories,namefunc:function(t){return t.data["$category"].join(" > ")},colorfunc:function(t){return t.data["$category"].join(" > ")},with_limit:""}})],1),e("div",{staticClass:"col-md-4"},[e("h5",[t._v("Category Tree")]),t.top_categories?e("div",[e("aw-categorytree",{attrs:{events:t.top_categories}})],1):t._e()]),e("div",{staticClass:"col-md-4"},[e("h5",[t._v("Category Sunburst")]),t.top_categories?e("div",[e("aw-sunburst-categories",{staticStyle:{height:"20em"},attrs:{data:t.top_categories_hierarchy}})],1):t._e()])]),"day"===t.periodLength?e("aw-devonly",{attrs:{reason:"Not ready for production, still experimenting"}},[e("div",{staticClass:"row mb-4"},[e("div",{staticClass:"col-md-12"},[e("aw-timeline-barchart",{attrs:{height:100,datasets:t.datasets}})],1)])]):t._e()],1)},n=[],r=e("5a3a"),o=e.n(r),s=e("c1df"),c=e.n(s),u=e("0a4f");function d(t){return t.name=t.subname,t.children=t.children.map(d),t}function l(t){if(void 0===t||null===t||0==t.length)return[];const a=c()(t[0].timestamp).startOf("day");return o()(0,24).map(e=>{let i=0;const n=a.clone().hour(e),r=a.clone().hour(e+1);return t.map(t=>{const a=c()(t.timestamp),e=a.clone().add(t.duration,"seconds");(a.isBetween(n,r)||e.isBetween(n,r)||n.isBetween(a,e))&&(i+=n<a&&e<r?t.duration:n<a?(r-a)/1e3:e<r?(e-n)/1e3:3600)}),i/60/60})}var p={name:"Activity",props:{periodLength:{type:String,default:"day"}},computed:{top_apps:function(){return this.$store.state.activity_daily.top_apps},top_titles:function(){return this.$store.state.activity_daily.top_titles},top_categories:function(){return this.$store.state.activity_daily.top_categories},top_domains:function(){return this.$store.state.activity_daily.top_domains},browser_buckets:function(){return this.$store.state.activity_daily.browser_buckets},top_categories_hierarchy:function(){if(this.top_categories){const t=this.top_categories.map(t=>{return{name:t.data.$category,size:t.duration}});return{name:"All",children:Object(u["build_category_hierarchy"])(t).map(t=>d(t))}}return null},datasets:function(){const t=l(this.$store.state.activity_daily.active_events);return[{label:"Total time",backgroundColor:"#6699ff",data:t}]}}},m=p,f=e("2877"),_=Object(f["a"])(m,i,n,!1,null,null,null);a["default"]=_.exports}}]);
//# sourceMappingURL=chunk-22291cfb.b34f5b08.js.map