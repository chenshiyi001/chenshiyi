webpackJsonp([0],{d3gx:function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={components:{tabbar:r("lVqA").a},data:function(){return{}},computed:{user:function(){return this.$store.user}},methods:{}},a={render:function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"me"},[r("div",{staticClass:"user-poster"},[r("van-image",{staticClass:"avatar",attrs:{src:t.user.avatar,fit:"cover",round:""}}),t._v(" "),t.$store.user.nickname?r("div",{staticClass:"text"},[t._v(t._s(t.$store.user.nickname))]):r("a",{attrs:{href:"javascript:;"},on:{click:function(n){return t.$store.openSignin(!0)}}},[t._v("登录")])],1),t._v(" "),r("van-grid",{attrs:{border:!1}},[r("van-grid-item",{attrs:{icon:"pending-payment",text:"待付款"},on:{click:function(n){return t.$Toast("有待开发")}}}),t._v(" "),r("van-grid-item",{attrs:{icon:"records",text:"待发货"},on:{click:function(n){return t.$Toast("有待开发")}}}),t._v(" "),r("van-grid-item",{attrs:{icon:"tosend",text:"已发货"},on:{click:function(n){return t.$Toast("有待开发")}}}),t._v(" "),r("van-grid-item",{attrs:{icon:"logistics",text:"已完成"},on:{click:function(n){return t.$Toast("有待开发")}}})],1),t._v(" "),r("van-cell-group",{staticClass:"user-group"},[r("van-cell",{attrs:{icon:"records",title:"全部订单","is-link":"",to:{name:"orderList"}}})],1),t._v(" "),r("van-cell-group",[r("van-cell",{attrs:{icon:"like-o",title:"我的收藏","is-link":"",to:{name:"likeList"}}}),t._v(" "),r("van-cell",{attrs:{icon:"description",title:"我的收货地址","is-link":"",to:{name:"addressList",query:{from:"me"}}}}),t._v(" "),r("van-cell",{attrs:{icon:"setting-o",title:"用户设置","is-link":"",to:{name:"userSetting"}}})],1),t._v(" "),r("tabbar")],1)},staticRenderFns:[]};var i=r("VU/8")(e,a,!1,function(t){r("yxWv")},"data-v-d400d976",null);n.default=i.exports},lVqA:function(t,n,r){"use strict";var e={render:function(){var t=this.$createElement,n=this._self._c||t;return n("van-tabbar",{attrs:{route:""}},[n("van-tabbar-item",{attrs:{icon:"star-o",to:"/"}},[this._v("精选")]),this._v(" "),n("van-tabbar-item",{attrs:{icon:"cart-o",to:"/cart",info:this.$store.cartProductCount?this.$store.cartProductCount:""}},[this._v("购物车\n  ")]),this._v(" "),n("van-tabbar-item",{attrs:{icon:"contact",to:"/me"}},[this._v("我的")])],1)},staticRenderFns:[]};var a=r("VU/8")({},e,!1,function(t){r("ySzn")},null,null);n.a=a.exports},ySzn:function(t,n){},yxWv:function(t,n){}});
//# sourceMappingURL=0.8d418a9a05b70469c569.js.map