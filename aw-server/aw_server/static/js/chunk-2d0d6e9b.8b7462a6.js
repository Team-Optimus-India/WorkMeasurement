(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6e9b"],{7529:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["day"==t.periodLength?n("div",[n("aw-sunburst-clock",{attrs:{date:t.date,afkBucketId:t.bucket_id_afk,windowBucketId:t.bucket_id_window}})],1):n("div",[t._v("Nothing to show here for the current period length: "+t._s(t.periodLength))])])},a=[],d=n("5acd"),r={name:"Activity",props:{date:{type:String,default:Object(d["get_today"])()},periodLength:{type:String,default:"day"},host:String},data:()=>{return{timelineShowAFK:!0}},computed:{app_chunks:function(){return this.$store.state.activity_daily.app_chunks},bucket_id_window:function(){return"aw-watcher-window_"+this.host},bucket_id_afk:function(){return"aw-watcher-afk_"+this.host}}},o=r,u=n("2877"),c=Object(u["a"])(o,i,a,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0d6e9b.8b7462a6.js.map