(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{307:function(t,e,n){},308:function(t,e,n){},341:function(t,e,n){"use strict";var s=n(307);n.n(s).a},342:function(t,e,n){"use strict";var s=n(308);n.n(s).a},354:function(t,e,n){"use strict";n.r(e);n(320);var s={name:"Disqus",mounted:function(){var t,e;t=document,(e=t.createElement("script")).src="https://vuepress-blog.disqus.com/embed.js",e.setAttribute("data-timestamp",String(new Date)),(t.head||t.body).appendChild(e)}},i=(n(341),n(35)),a=Object(i.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"disqus_thread"}})}),[],!1,null,"d55ebfc6",null);e.default=a.exports},355:function(t,e,n){"use strict";n.r(e);var s={name:"PostTitle",components:{Tag:n(282).default},data:function(){return{tags:[],mobile:!1}},computed:{post:function(){return Object.assign({post:""},this.$page.frontmatter)}},beforeMount:function(){this.changePageViewer(),window.addEventListener("resize",this.changePageViewer)},methods:{changePageViewer:function(){this.mobile=window.innerWidth<1200}}},i=(n(342),n(35)),a=Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-block content-title"},[n("div",{staticStyle:{width:"100%"}},[n("div",{staticClass:"w-90 mx-auto"},[n("h1",{class:t.mobile?"mobile-post-title":""},[t._v(t._s(t.post.title))])]),t._v(" "),n("div",{staticClass:"text--primary text-right w-95 mr-5 my-2"},[t._v("\n      작성일: "+t._s(t.post.date)+"\n    ")]),t._v(" "),n("div",{staticClass:"w-100 text-center"},t._l(t.post.tags,(function(t,e){return n("Tag",{key:e,attrs:{tagName:t,routing:"",small:""}})})),1),t._v(" "),n("hr",{staticClass:"content-divider"})])])}),[],!1,null,"4549ad82",null);e.default=a.exports},384:function(t,e,n){"use strict";n.r(e);n(21);var s=n(381),i=n(354),a={name:"Layout",data:function(){return{loading:!0}},components:{PostTitle:n(355).default,ParentLayout:s.default,Disqus:i.default},beforeMount:function(){var t=this;Promise.resolve().then(n.t.bind(null,267,7)).then((function(){return t.loading=!1}))}},o=n(35),r=Object(o.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return this.loading?this._e():e("ParentLayout",[this.$frontmatter.title?e("PostTitle",{staticClass:"v-application",attrs:{slot:"page-top"},slot:"page-top"}):this._e(),this._v(" "),this.$frontmatter.title?e("Disqus",{attrs:{slot:"page-bottom"},slot:"page-bottom"}):this._e()],1)}),[],!1,null,"2ec1ce9d",null);e.default=r.exports}}]);