(function(){$(function(){var t,e,n,i,r,a,o;if($("body.frontend_homepage_show").length>0&&(i=document.referrer,n=/http:\/\/tech.mit.edu\/V(\d+)\/N(\d+)\/(.*)/,r=n.exec(i),r&&(o=parseInt(r[1]),t=parseInt(r[2]),e=r[3],o>=127&&(135!==o||t<=8))))return a="/V"+o+"/N"+t+"/"+e,document.location=a})}).call(this);