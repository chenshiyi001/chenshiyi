webpackJsonp([13],{"8hpY":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={data:function(){return{avatar:"",avatarType:""}},methods:{fileSelect:function(){var t=this,a=this.$refs.file.files[0],e=new FileReader;e.onload=function(a){t.avatar=a.target.result},a.type.indexOf("image")>-1?(this.avatarType=a.type,e.readAsDataURL(a)):this.$Toast("请选择正确的图片格式")},crop:function(){var t=this;this.$refs.cropper.getCroppedCanvas().toBlob(function(a){var e=new FormData;e.append("avatar",a),t.$axios.post("/user/avatar",e).then(function(a){0==a.errcode&&(t.$Toast("上传头像成功"),t.$store.user.avatar=a.data.avatar,t.$router.back())})})}}},n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"avatar-setting"},[e("van-nav-bar",{attrs:{fixed:"",title:"用户设置","left-arrow":"","left-text":"返回"},on:{"click-left":function(a){return t.$router.back()}}}),t._v(" "),t.avatar?e("vue-cropper",{ref:"cropper",staticClass:"avatar",attrs:{src:t.avatar}}):e("van-image",{staticClass:"avatar",attrs:{fit:"contain",src:t.$store.user.avatar}}),t._v(" "),e("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"file",attrs:{type:"file"},on:{change:t.fileSelect}}),t._v(" "),e("van-button",{attrs:{size:"large",type:"info"},on:{click:function(a){return t.$refs.file.click()}}},[t._v("选择图片")]),t._v(" "),e("van-button",{attrs:{size:"large",type:"primary"},on:{click:t.crop}},[t._v("裁剪上传")])],1)},staticRenderFns:[]};var s=e("VU/8")(r,n,!1,function(t){e("Sjvq")},"data-v-4f629ed8",null);a.default=s.exports},Sjvq:function(t,a){}});
//# sourceMappingURL=13.c9a1a9e98cfb5f109e63.js.map