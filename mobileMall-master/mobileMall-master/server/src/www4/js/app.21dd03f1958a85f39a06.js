webpackJsonp([22],{"4ml/":function(t,e){},"5Qkr":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),o=n("mvHQ"),r=n.n(o),i={data:function(){return{name:"",password:"",errmsg:{name:"",password:""}}},methods:{pay:function(){},signin:function(){var t=this;""!==this.name?(this.errmsg.name="",""!==this.password?(this.errmsg.password="",this.$axios.post("/user/signin",{name:this.name,password:this.password}).then(function(e){0==e.errcode?(t.$Toast("登录成功"),t.$store.user=e.data,t.$util.transformAddressData(),localStorage.token=e.data.token,t.$store.cart.forEach(function(t){t.checked=t.checked?1:0}),t.$axios.post("/cart/cacheUpdate",{cart:t.$store.cart}).then(function(e){0===e.errcode&&(t.$store.cart=e.data)}),localStorage.cart=r()([]),t.$store.showSignin=!1):t.errmsg.password=e.errmsg})):this.errmsg.password="密码不能为空"):this.errmsg.name="账号不能为空"}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"},on:{click:t.pay}},[n("transition",{attrs:{name:"van-fade"}},[n("router-view")],1),t._v(" "),t.$route.meta.noTabBar?t._e():n("van-tabbar",{attrs:{route:""}},[n("van-tabbar-item",{attrs:{icon:"star-o",to:"/"}},[t._v("精选")]),t._v(" "),n("van-tabbar-item",{attrs:{icon:"cart-o",to:"/cart",info:t.$store.cartProductCount?t.$store.cartProductCount:""}},[t._v("购物车\n    ")]),t._v(" "),n("van-tabbar-item",{attrs:{icon:"contact",to:"/me"}},[t._v("我的")])],1),t._v(" "),n("van-popup",{staticClass:"van-popup-signin",attrs:{position:"bottom","close-on-click-overlay":!1},model:{value:t.$store.showSignin,callback:function(e){t.$set(t.$store,"showSignin",e)},expression:"$store.showSignin"}},[n("van-nav-bar",{attrs:{title:"登录/注册"},on:{"click-left":function(e){t.$store.showSignin=!1}}},[n("van-icon",{attrs:{slot:"left",name:"cross"},slot:"left"})],1),t._v(" "),n("van-cell-group",[n("van-field",{attrs:{clearable:"",label:"用户名",placeholder:"请输入用户名","error-message":t.errmsg.name},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("van-field",{attrs:{type:"password",label:"密码",placeholder:"请输入密码","error-message":t.errmsg.password,clearable:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("van-button",{attrs:{type:"primary",size:"large"},on:{click:t.signin}},[t._v("登录/注册")])],1)],1)],1)},staticRenderFns:[]};var s=n("VU/8")(i,c,!1,function(t){n("eI4N")},null,null).exports,u=n("/ocq"),l=new a.default({data:{showSignin:!1,cityData:{},areaData:{},geoLocationCity:"",user:{},cart:[],productData:{page:1,total:1,list:[],scrollTop:0},chosenAddress:{}},methods:{},computed:{addressList:function(){return Array.isArray(this.user.addressList)?this.user.addressList:[]},cartProductCount:function(){return this.cart.reduce(function(t,e,n){return e.checked?t+e.count:t},0)}}});a.default.use(u.a);var p=new u.a({routes:[{path:"/user/setting",name:"userSetting",component:function(t){return n.e(18).then(function(){var e=[n("LxOe")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{noTabBar:!0}},{path:"/user/nickname",name:"nicknameSetting",component:function(t){return n.e(17).then(function(){var e=[n("Wg3w")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{noTabBar:!0}},{path:"/user/avatar",name:"avatarSetting",component:function(t){return n.e(14).then(function(){var e=[n("8hpY")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{noTabBar:!0}},{path:"/user/passwordSetting",name:"passwordSetting",component:function(t){return n.e(5).then(function(){var e=[n("siyu")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{noTabBar:!0}},{path:"/user/payPasswordSetting",name:"payPasswordSetting",component:function(t){return n.e(13).then(function(){var e=[n("YLq+")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{noTabBar:!0}},{path:"/",name:"index",component:function(t){return n.e(7).then(function(){var e=[n("2NXm")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/cart",name:"cart",component:function(t){return n.e(2).then(function(){var e=[n("ltQH")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{noTabBar:!0}},{path:"/me",name:"me",component:function(t){return n.e(15).then(function(){var e=[n("d3gx")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{needAuth:!0}},{path:"/orderList",name:"orderList",component:function(t){return n.e(10).then(function(){var e=[n("tTXb")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{needAuth:!0,noTabBar:!0}},{path:"/product/:id",name:"product",component:function(t){return n.e(6).then(function(){var e=[n("BEuR")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{noTabBar:!0}},{path:"/order/:id",name:"order",component:function(t){return n.e(12).then(function(){var e=[n("SC19")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{noTabBar:!0,needAuth:!0}},{path:"/search",name:"search",component:function(t){return n.e(4).then(function(){var e=[n("dwST")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{noTabBar:!0}},{path:"/likeList",name:"likeList",component:function(t){return n.e(3).then(function(){var e=[n("3rT8")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{noTabBar:!0}},{path:"/orderConfirm",name:"orderConfirm",component:function(t){return n.e(9).then(function(){var e=[n("79fi")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{noTabBar:!0,needAuth:!0}},{path:"/addressList",name:"addressList",component:function(t){return n.e(8).then(function(){var e=[n("5Y5y")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{noTabBar:!0,needAuth:!0}},{path:"/addressEdit/:id",name:"addressEdit",component:function(t){return n.e(16).then(function(){var e=[n("9uRZ")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{noTabBar:!0,needAuth:!0}},{path:"/paySuccess",name:"paySuccess",component:function(t){return n.e(19).then(function(){var e=[n("rPWX")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{noTabBar:!0,needAuth:!0}},{path:"/payFail",name:"payFail",component:function(t){return n.e(20).then(function(){var e=[n("7Kur")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{noTabBar:!0,needAuth:!0}},{path:"/citySelect",name:"citySelect",component:function(t){return n.e(11).then(function(){var e=[n("8din")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{noTabBar:!0}},{path:"/virtualList",name:"virtualList",component:function(t){return n.e(0).then(function(){var e=[n("3EYP")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"*",name:"404",component:function(t){return n.e(1).then(function(){var e=[n("c5Mg")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{noTabBar:!0}}]});p.beforeEach(function(t,e,n){t.meta.needAuth?localStorage.token?(l.showSignin=!1,n()):l.showSignin=!0:(l.showSignin=!1,n())});var d=p,h={storageJSONToStore:function(t,e){if(localStorage[t])try{l[t]=JSON.parse(localStorage[t])}catch(n){l[t]=e}},transformAddressData:function(){var t=l.user.addressList;if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];n.tel=n.mobile,n.county=n.country,n.addressDetail=n.detail,n.isDefault=!!n.default,n.areaCode=n.code,n.address=n.province+n.city+n.country+n.detail}}},m=n("//Fk"),f=n.n(m),b=n("mtWM"),v=n.n(b),y=n("PKY1"),g=n.n(y);v.a.defaults.baseURL="/api/v4",v.a.jsonp=g.a,v.a.interceptors.request.use(function(t){return t.headers.Authorization=localStorage.token,t}),v.a.interceptors.response.use(function(t){return 90101===(t=t.data).errcode&&(l.user={},localStorage.token=""),t},function(t){if(t.request){if(t.message.indexOf("timeout")>-1){var e=t.config;return e.headers._retryCount=e.headers._retryCount?e.headers._retryCount:1,e.headers._retryCount>=5?(alert("网络错误"),f.a.reject(t)):(e.headers._retryCount+=1,e.url=e.url.split(e.baseURL)[1],v()(e))}}else t.response;return f.a.reject(t)});var S=v.a,w={initStore:function(){h.storageJSONToStore("cart",[])},initHttpData:function(){S.get("/user/info").then(function(t){0===t.errcode&&(l.user=t.data,h.transformAddressData())}),S.get("/data/city").then(function(t){0===t.errcode&&(l.cityData=t.data,localStorage.cityData=r()(t.data))}),S.get("/data/area").then(function(t){0===t.errcode&&(l.areaData=t.data,localStorage.areaData=r()(t.data))}),localStorage.geoLocationCity?l.geoLocationCity=localStorage.geoLocationCity:S.jsonp("http://api.map.baidu.com/geocoder/v2/?ak=C93b5178d7a8ebdb830b9b557abce78b&callback=renderReverse&location=22.62,114.07&output=json&pois=0").then(function(t){t.json().then(function(t){0===t.status&&(l.geoLocationCity=t.result.addressComponent.city,localStorage.geoLocationCity=l.geoLocationCity)})})},start:function(){this.initStore(),this.initHttpData()}},T=n("Fd2+"),k=n("sRoY"),L=n.n(k);n("5Qkr"),n("4ml/");a.default.use(T.c),a.default.use(T.a,{}),a.default.component("vue-cropper",L.a),a.default.prototype.$store=l,a.default.prototype.$axios=S,a.default.prototype.$Toast=T.b,a.default.prototype.$util=h,w.start(),a.default.config.productionTip=!1,new a.default({el:"#app",router:d,components:{App:s},template:"<App/>"})},eI4N:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.21dd03f1958a85f39a06.js.map