(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d338e"],{"5c9c":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container py-5"},[t("form",{staticClass:"w-100",on:{submit:function(a){return a.stopPropagation(),a.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[e._m(0),t("div",{staticClass:"form-label-group mb-2"},[t("label",{attrs:{for:"name"}},[e._v("Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{id:"name",name:"name",type:"text",placeholder:"name",autocomplete:"username",required:"",autofocus:""},domProps:{value:e.name},on:{input:function(a){a.target.composing||(e.name=a.target.value)}}})]),t("div",{staticClass:"form-label-group mb-2"},[t("label",{attrs:{for:"email"}},[e._v("Email")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"email",autocomplete:"email",required:""},domProps:{value:e.email},on:{input:function(a){a.target.composing||(e.email=a.target.value)}}})]),t("div",{staticClass:"form-label-group mb-3"},[t("label",{attrs:{for:"password"}},[e._v("Password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",autocomplete:"new-password",required:""},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value)}}})]),t("div",{staticClass:"form-label-group mb-3"},[t("label",{attrs:{for:"password-check"}},[e._v("Password Check")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordCheck,expression:"passwordCheck"}],staticClass:"form-control",attrs:{id:"password-check",name:"passwordCheck",type:"password",placeholder:"Password",autocomplete:"new-password",required:""},domProps:{value:e.passwordCheck},on:{input:function(a){a.target.composing||(e.passwordCheck=a.target.value)}}})]),t("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{type:"submit"}},[e._v(" Submit ")]),t("div",{staticClass:"text-center mb-3"},[t("p",[t("router-link",{attrs:{to:"/signin"}},[e._v(" Sign In ")])],1)]),t("p",{staticClass:"mt-5 mb-3 text-muted text-center"},[e._v(" © 2017-2018 ")])])])},r=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"text-center mb-4"},[t("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e._v(" Sign Up ")])])}],n=t("1da1"),o=(t("96cf"),t("b0c0"),t("d9e2"),t("7696")),i=t("2fa3"),l={data:function(){return{name:"",email:"",password:"",passwordCheck:""}},methods:{handleSubmit:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var t,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,e.name&&e.email&&e.password&&e.passwordCheck){a.next=4;break}return i["a"].fire({icon:"warning",title:"請確認已填寫所有欄位"}),a.abrupt("return");case 4:if(e.password===e.passwordCheck){a.next=8;break}return i["a"].fire({icon:"warning",title:"兩次輸入的密碼不同"}),e.passwordCheck="",a.abrupt("return");case 8:return a.next=10,o["a"].signUp({name:e.name,email:e.email,password:e.password,passwordCheck:e.passwordCheck});case 10:if(t=a.sent,s=t.data,"error"!==s.status){a.next=14;break}throw new Error(s.message);case 14:i["a"].fire({icon:"success",title:s.message}),e.$router.push("/signin"),a.next=21;break;case 18:a.prev=18,a.t0=a["catch"](0),i["a"].fire({icon:"warning",title:"無法註冊 - ".concat(a.t0.message)});case 21:case"end":return a.stop()}}),a,null,[[0,18]])})))()}}},c=l,m=t("2877"),p=Object(m["a"])(c,s,r,!1,null,null,null);a["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0d338e.dbd68fd4.js.map