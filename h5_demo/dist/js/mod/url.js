define("mod/url",[],function(){var n=function(){var n=window.location.href,o=n.substring(n.lastIndexOf("?")+1),t={},r=/([^?&=]+)=([^?&=]*)/g;return o.replace(r,function(n,o,r){var e=decodeURIComponent(o),i=decodeURIComponent(r);return i=String(i),t[e]=i,n}),t}(),o=location.protocol+"//"+location.hostname+(""==location.port?"":":"+location.port)+"/dist/",t=function(n){return o+(n||"")};return{getBaseUrl:function(){return o},getUrl:t,getParam:function(o){return n[o]},go:function(n){location.href=t(n)}}});