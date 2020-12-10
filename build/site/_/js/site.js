!function(){"use strict";var s=/^sect(\d)$/,n=document.querySelector(".nav-container"),i=document.querySelector(".nav-toggle");i.addEventListener("click",function(e){if(i.classList.contains("is-active"))return u(e);var t=document.documentElement;t.classList.add("is-clipped--nav"),i.classList.add("is-active"),n.classList.add("is-active"),t.addEventListener("click",u),v(e)}),n.addEventListener("click",v);var c,r,o,l=n.querySelector("[data-panel=menu]");function e(){var e,t,n=window.location.hash;if(n&&(n.indexOf("%")&&(n=decodeURIComponent(n)),!(e=l.querySelector('.nav-link[href="'+n+'"]')))){n=document.getElementById(n.slice(1));if(n)for(var i=n,a=document.querySelector("article.doc");(i=i.parentNode)&&i!==a;){var c=i.id;if(!c&&(c=i.className.match(s))&&(c=(i.firstElementChild||{}).id),c&&(e=l.querySelector('.nav-link[href="#'+c+'"]')))break}}if(e)t=e.parentNode;else{if(!o)return;e=(t=o).querySelector(".nav-link")}t!==r&&(f(l,".nav-item.is-active").forEach(function(e){e.classList.remove("is-active","is-current-path","is-current-page")}),t.classList.add("is-current-page"),d(r=t),m(l,e))}function d(e){for(var t,n=e.parentNode;!(t=n.classList).contains("nav-menu");)"LI"===n.tagName&&t.contains("nav-item")&&t.add("is-active","is-current-path"),n=n.parentNode;e.classList.add("is-active")}function a(){this.classList.toggle("is-active")}function u(e){var t=document.documentElement;t.classList.remove("is-clipped--nav"),i.classList.remove("is-active"),n.classList.remove("is-active"),t.removeEventListener("click",u),v(e)}function v(e){e.stopPropagation()}function m(e,t){var n=e.getBoundingClientRect(),i=n.height,a=window.getComputedStyle(c);"sticky"===a.position&&(i-=n.top-parseFloat(a.top)),e.scrollTop=Math.max(0,.5*(t.getBoundingClientRect().height-i)+t.offsetTop)}function f(e,t){return[].slice.call(e.querySelectorAll(t))}l&&(c=n.querySelector(".nav"),r=l.querySelector(".is-current-page"),(o=r)?(d(r),m(l,r.querySelector(".nav-link"))):l.scrollTop=0,f(l,".nav-item-toggle").forEach(function(e){var t=e.parentElement;e.addEventListener("click",a.bind(t));e=function(e,t){e=e.nextElementSibling;return e?(!t||e[e.matches?"matches":"msMatchesSelector"](t))&&e:void 0}(e,".nav-text");e&&(e.style.cursor="pointer",e.addEventListener("click",a.bind(t)))}),c.querySelector(".context").addEventListener("click",function(){var e=c.querySelector(".is-active[data-panel]"),t="menu"===e.dataset.panel?"explore":"menu";e.classList.toggle("is-active"),c.querySelector("[data-panel="+t+"]").classList.toggle("is-active")}),l.addEventListener("mousedown",function(e){1<e.detail&&e.preventDefault()}),l.querySelector('.nav-link[href^="#"]')&&(window.location.hash&&e(),window.addEventListener("hashchange",e)))}();
!function(){"use strict";var e=document.querySelector("aside.toc.sidebar");if(e){if(document.querySelector("body.-toc"))return e.parentNode.removeChild(e);var t=parseInt(e.dataset.levels||2);if(!(t<0)){for(var o="article.doc",d=document.querySelector(o),n=[],i=0;i<=t;i++){var r=[o];if(i){for(var a=1;a<=i;a++)r.push((2===a?".sectionbody>":"")+".sect"+a);r.push("h"+(i+1)+"[id]")}else r.push("h1[id].sect0");n.push(r.join(">"))}var c,s,l,u=(c=n.join(","),s=d.parentNode,[].slice.call((s||document).querySelectorAll(c)));if(!u.length)return e.parentNode.removeChild(e);var f={},m=u.reduce(function(e,t){var o=document.createElement("a");o.textContent=t.textContent,f[o.href="#"+t.id]=o;var n=document.createElement("li");return n.dataset.level=parseInt(t.nodeName.slice(1))-1,n.appendChild(o),e.appendChild(n),e},document.createElement("ul")),p=e.querySelector(".toc-menu");p||((p=document.createElement("div")).className="toc-menu");var v=document.createElement("h3");v.textContent=e.dataset.title||"Contents",p.appendChild(v),p.appendChild(m);e=!document.getElementById("toc")&&d.querySelector("h1.page ~ :not(.is-before-toc)");e&&((v=document.createElement("aside")).className="toc embedded",v.appendChild(p.cloneNode(!0)),e.parentNode.insertBefore(v,e)),window.addEventListener("load",function(){h(),window.addEventListener("scroll",h)})}}function h(){var t,e=window.pageYOffset,o=1.15*g(document.documentElement,"fontSize"),n=d.offsetTop;if(e&&window.innerHeight+e+2>=document.documentElement.scrollHeight){l=Array.isArray(l)?l:Array(l||0);var i=[],r=u.length-1;return u.forEach(function(e,t){var o="#"+e.id;t===r||e.getBoundingClientRect().top+g(e,"paddingTop")>n?(i.push(o),l.indexOf(o)<0&&f[o].classList.add("is-active")):~l.indexOf(o)&&f[l.shift()].classList.remove("is-active")}),m.scrollTop=m.scrollHeight-m.offsetHeight,void(l=1<i.length?i:i[0])}Array.isArray(l)&&(l.forEach(function(e){f[e].classList.remove("is-active")}),l=void 0),u.some(function(e){return e.getBoundingClientRect().top+g(e,"paddingTop")-o>n||void(t="#"+e.id)}),t?t!==l&&(l&&f[l].classList.remove("is-active"),(e=f[t]).classList.add("is-active"),m.scrollHeight>m.offsetHeight&&(m.scrollTop=Math.max(0,e.offsetTop+e.offsetHeight-m.offsetHeight)),l=t):l&&(f[l].classList.remove("is-active"),l=void 0)}function g(e,t){return parseFloat(window.getComputedStyle(e)[t])}}();
!function(){"use strict";var o=document.querySelector("article.doc"),t=document.querySelector(".toolbar");function i(e){return e&&(~e.indexOf("%")?decodeURIComponent(e):e).slice(1)}function c(e){e&&(window.location.hash="#"+this.id,e.preventDefault()),window.scrollTo(0,function e(t,n){return o.contains(t)?e(t.offsetParent,t.offsetTop+n):n}(this,0)-t.getBoundingClientRect().bottom)}window.addEventListener("load",function e(t){var n,o;(n=i(window.location.hash))&&(o=document.getElementById(n))&&(c.bind(o)(),setTimeout(c.bind(o),0)),window.removeEventListener("load",e)}),Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]')).forEach(function(e){var t,n;(t=i(e.hash))&&(n=document.getElementById(t))&&e.addEventListener("click",c.bind(n))})}();
!function(){"use strict";var t,e=document.querySelector(".page-versions .version-menu-toggle");e&&(t=document.querySelector(".page-versions"),e.addEventListener("click",function(e){t.classList.toggle("is-active"),e.stopPropagation()}),document.documentElement.addEventListener("click",function(){t.classList.remove("is-active")}))}();
document.addEventListener("DOMContentLoaded",function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);0!==t.length&&t.forEach(function(e){e.addEventListener("click",function(t){t.stopPropagation(),e.classList.toggle("is-active"),document.getElementById(e.dataset.target).classList.toggle("is-active"),document.documentElement.classList.toggle("is-clipped--navbar")})})});