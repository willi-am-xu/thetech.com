(function(){$(function(){var e,t,n,i,o,r,a;if($("body.frontend_homepage_show").length>0&&(i=document.referrer,n=/http:\/\/tech.mit.edu\/V(\d+)\/N(\d+)\/(.*)/,o=n.exec(i),o&&(a=parseInt(o[1]),e=parseInt(o[2]),t=o[3],a>=127&&(135!==a||e<=8))))return r="/V"+a+"/N"+e+"/"+t,document.location=r})}).call(this);