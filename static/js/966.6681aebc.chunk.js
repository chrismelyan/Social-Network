"use strict";(self.webpackChunktype_app=self.webpackChunktype_app||[]).push([[966],{966:function(e,s,a){a.r(s),a.d(s,{default:function(){return T}});var i=a(1716),n=(a(2791),"Dialogues_dialogues__3AfSk"),t="Dialogues_dialoguesItems__H5tz6",u="Dialogues_item__-Riak",l="Dialogues_messageBlock__A5ieY",c="Dialogues_messages__JfqxH",r="DialogueItem_item__7e4Au",d="DialogueItem_block__J5Vmt",g="DialogueItem_avatar__e2f3v",o="DialogueItem_active__IBmaT",_="DialogueItem_inactive__4jKJW",m=a(3504),v=a(4353),x=a(184),h=function(e){return(0,x.jsx)("div",{className:r,children:(0,x.jsx)(m.OL,{to:"/dialogues/".concat(e.id),className:function(e){return e.isActive?o:_},children:(0,x.jsxs)("div",{className:d,children:[(0,x.jsx)("img",{src:v,className:g,alt:"avatar"}),e.name]})})})},j="Message_message__0SEI0",f="Message_avatar__HoJ1U",M="Message_bubble__wVYr+",N="Message_angle__rTvNJ",p="Message_text__9-kTd",D="Message_time__26ikw",w=function(e){var s=(new Date).getHours(),a=function(){var e=(new Date).getMinutes();return e<10?"0"+e:e}();return(0,x.jsxs)("div",{className:j,children:[(0,x.jsx)("img",{src:v,alt:"avatar",className:f}),(0,x.jsx)("div",{className:N}),(0,x.jsx)("div",{className:M,children:(0,x.jsx)("div",{className:p,children:e.message})}),(0,x.jsx)("div",{className:D,children:"".concat(s,":").concat(a)})]})},b=a(6871),k=a(5705),A=a(2303),I=a(4554),J=a(132),P=function(e){var s=J.Ry({newMessage:J.Z_().max(3e3,"The message is too long").required("required")});return(0,x.jsx)("div",{children:(0,x.jsx)(k.J9,{initialValues:{newMessage:""},validationSchema:s,onSubmit:function(s,a){var i=a.resetForm;!function(s){e.sendMessage(s.newMessage)}(s),i({values:{newMessage:""}})},children:(0,x.jsxs)(k.l0,{children:[(0,x.jsx)(I.Z,{control:"textarea",name:"newMessage",placeholder:"add a message ..."}),(0,x.jsx)("button",{className:A.Z.button,type:"submit",children:"Send"})]})})})},S=function(e){var s=e.dialoguesPage.dialogues.map((function(e){return(0,x.jsx)(h,{name:e.name,id:e.id},e.id)})),a=e.dialoguesPage.messages.map((function(e){return(0,x.jsx)(w,{message:e.message},e.id)}));return e.isAuth?(0,x.jsxs)("div",{className:n,children:[(0,x.jsx)("div",{className:t,children:s}),(0,x.jsxs)("div",{className:l,children:[(0,x.jsx)("div",{className:c,children:(0,x.jsx)("div",{className:u,children:a})}),(0,x.jsx)(P,{sendMessage:function(s){e.sendMessage(s)}})]})]}):(0,x.jsx)(b.Fg,{to:"/login"})},q=a(364),y=a(7781),H=a(2932),T=(0,y.qC)(H.D,(0,q.$j)((function(e){return{dialoguesPage:e.dialoguesPage,isAuth:e.auth.isAuth}}),(function(e){return{sendMessage:function(s){e((0,i.d)(s))}}})))((function(e){return(0,x.jsx)(S,{dialoguesPage:e.dialoguesPage,sendMessage:e.sendMessage,isAuth:e.isAuth})}))}}]);
//# sourceMappingURL=966.6681aebc.chunk.js.map