(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{185:function(t,e,s){},284:function(t,e,s){"use strict";var a=s(185);s.n(a).a},290:function(t,e,s){"use strict";s.r(e);var a=s(193),n=s.n(a),r=s(199),i=s.n(r),_={data:function(){return{topic:""}},props:["src"],mounted:function(){var t=this;n.a.get(this.src).then(function(e){return t.topic=i.a.safeLoad(e.data)})}},c=(s(284),s(2)),v=Object(c.a)(_,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[t._m(0),t._v(" "),s("tbody",t._l(t.topic.sessions,function(e){return s("tr",[s("td",[t._v(t._s(e.event))]),t._v(" "),s("td",[t._v(t._s(e.date))]),t._v(" "),s("td",[t._v("\n                "+t._s(e.title)+"\n            ")]),t._v(" "),s("td",[s("ul",{staticStyle:{"margin-block-start":"0"}},t._l(e.papers,function(e){return s("li",{class:{stress:e.stress}},[e.year||e.remark?s("span",[t._v("[")]):t._e(),e.year?s("span",[t._v(t._s(e.year))]):t._e(),e.year&&e.remark?s("span",[t._v(", ")]):t._e(),e.remark?s("span",[t._v(t._s(e.remark))]):t._e(),e.year||e.remark?s("span",[t._v("]")]):t._e(),t._v(" "),e.link?s("a",{attrs:{href:e.link}},[t._v(t._s(e.title))]):s("span",[t._v(t._s(e.title))]),t._v(" "),e.pdf?s("a",{attrs:{href:e.pdf,target:"_blank"}},[s("i",{staticClass:"far fa-file-pdf is-size-7 has-text-black"})]):t._e()])}),0)])])}),0)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Event")]),this._v(" "),e("th",[this._v("Date")]),this._v(" "),e("th",[this._v("Description")]),this._v(" "),e("th",[this._v("Session Materials")])])])}],!1,null,"1003fdae",null);e.default=v.exports}}]);