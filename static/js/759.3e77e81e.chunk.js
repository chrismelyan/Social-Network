"use strict";(self.webpackChunktype_app=self.webpackChunktype_app||[]).push([[759],{8759:function(e,s,t){t.r(s),t.d(s,{default:function(){return ue}});var a=t(8683),o=t(5671),i=t(3144),n=t(136),l=t(3668),r=t(2791),c=t(885),u="ProfileInfo_container__oYTAE",d="ProfileInfo_backgroundPhoto__mqEe-",h="ProfileInfo_profilePhotoWrapper__tpbfP",m="ProfileInfo_profilePhoto__GTuwT",p="ProfileInfo_descriptionBlock__XBXuJ",f="ProfileInfo_name__nzLXx",x="ProfileInfo_status__YrBI5",b=t(184),j=function(e){var s=(0,r.useState)(!1),t=(0,c.Z)(s,2),a=t[0],o=t[1],i=(0,r.useState)(e.status),n=(0,c.Z)(i,2),l=n[0],u=n[1];(0,r.useEffect)((function(){u(e.status)}),[e.status]);return(0,b.jsxs)("div",{className:x,children:[(0,b.jsx)("div",{children:!a&&(0,b.jsx)("span",{onDoubleClick:function(){o(!0)},children:e.status||"----"})}),(0,b.jsx)("div",{children:a&&(0,b.jsx)("input",{autoFocus:!0,onChange:function(e){u(e.currentTarget.value)},value:l,onBlur:function(){o(!1),e.updateUserStatus(l)}})})]})},v=t(7809),g=t(4353),A=t(3107),k=function(e){var s,t=e.profile,a=e.photos,o=e.status,i=e.updateUserStatus,n=e.isOwner,l=e.savePhoto;if(!t)return(0,b.jsx)(v.Z,{});return(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{className:u,children:[(0,b.jsx)("img",{className:d,src:A,alt:"background"}),(0,b.jsxs)("div",{className:h,children:[(0,b.jsx)("img",{className:m,src:null!==(s=a.large)&&void 0!==s?s:g,alt:"profile"}),n&&(0,b.jsx)("input",{type:"file",onChange:function(e){e.currentTarget.files&&e.currentTarget.files.length&&l(e.currentTarget.files[0])}})]})]}),(0,b.jsxs)("div",{className:p,children:[(0,b.jsx)("h1",{className:f,children:t.fullName}),(0,b.jsx)(j,{status:o,updateUserStatus:i})]})]})},N=t(81),_="MyPosts_postsBlock__lB-pf",P="MyPosts_posts__GSiZ2",y="MyPosts_textareaWrapper__K01lU",C="Post_item__Yu4oG",w="Post_postBlock__IXjAX",M="Post_text__Js3ZD",F="Post_likes__K9KVP",S=t(1684),J=function(e){return(0,b.jsxs)("div",{className:C,children:[(0,b.jsxs)("div",{className:w,children:[(0,b.jsx)("img",{src:g,alt:"user"}),(0,b.jsx)("div",{className:M,children:e.message})]}),(0,b.jsxs)("div",{className:F,children:[(0,b.jsx)("img",{src:S,alt:"like",style:{width:"15px"}}),e.likesCount]})]})},I=t(5705),D=t(2303),L=t(4554),T=t(132),B=function(e){var s=T.Ry({newPost:T.Z_().required("Required").max(200,"Maximum 200 symbols")});return(0,b.jsx)(I.J9,{initialValues:{newPost:""},validationSchema:s,onSubmit:function(s,t){var a=t.resetForm;!function(s){e.addPost(s.newPost)}(s),a({values:{newPost:""}})},children:(0,b.jsxs)(I.l0,{children:[(0,b.jsx)(L.Z,{control:"textarea",name:"newPost",placeholder:"add a post here"}),(0,b.jsx)("div",{children:(0,b.jsx)("button",{className:D.Z.button,type:"submit",children:"Post"})})]})})},U=function(e){var s=e.posts.map((function(e){return(0,b.jsx)(J,{message:e.message,likesCount:e.likesCount},e.id)}));return(0,b.jsxs)("div",{className:_,children:[(0,b.jsx)("h3",{style:{color:"#8c91b6"},children:"My posts"}),(0,b.jsx)("div",{className:y,children:(0,b.jsx)(B,{addPost:function(s){e.onAddPost(s)}})}),(0,b.jsx)("div",{className:P,children:s})]})},V=t(364),Y=(0,V.$j)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{onAddPost:function(s){e((0,N.Pi)(s))}}}))(U),E="Profile_aboutMeBlock__95aPQ",O="Profile_contactsBlock__eTT90",Z=function(e){var s=e.contactTitle,t=e.contactValue;return(0,b.jsxs)("div",{className:O,children:[(0,b.jsxs)("b",{children:[s,":"]})," ",t]})},R=function(e){var s=e.profile;return s?(0,b.jsxs)("div",{className:E,children:[(0,b.jsx)("h1",{children:"About me"}),(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("b",{children:"Looking for a job:"})," ",s.lookingForAJob?"yes":"no"]}),s.lookingForAJob&&(0,b.jsxs)("div",{children:[(0,b.jsx)("b",{children:"My professional skills:"})," ",s.lookingForAJobDescription]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("b",{children:"About me:"})," ",s.aboutMe]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("b",{children:"Contacts:"})," ",Object.keys(s.contacts).map((function(e){return(0,b.jsx)(Z,{contactTitle:e,contactValue:s.contacts[e]},e)}))]})]})]}):(0,b.jsx)(v.Z,{})},K="ProfileModal_darkBG__qg3xm",Q="ProfileModal_centered__bZlpS",G="ProfileModal_modal__azCBS",H="ProfileModal_modalHeader__8yM9Y",q="ProfileModal_heading__rfyjh",X="ProfileModal_modalContent__0kQLF",W="ProfileModal_inputBlock__ozJ0C",z="ProfileModal_input__ixLVx",$="ProfileModal_label__ffqGX",ee="ProfileModal_buttons__-GbJC",se="ProfileModal_backBtn__F0JsE",te="ProfileModal_submitBtn__vjG+e",ae=function(e){var s=e.profile,t=e.setEditMode,a=(0,V.I0)(),o=(0,I.TA)({initialValues:{fullName:s.fullName,aboutMe:s.aboutMe,lookingForAJob:s.lookingForAJob,lookingForAJobDescription:s.lookingForAJobDescription,github:s.contacts.github,vk:s.contacts.vk,facebook:s.contacts.facebook,instagram:s.contacts.instagram,twitter:s.contacts.twitter,website:s.contacts.website,youtube:s.contacts.youtube,mainLink:s.contacts.mainLink},onSubmit:function(e){console.log(e.lookingForAJob);var s={fullName:e.fullName,aboutMe:e.aboutMe,lookingForAJob:e.lookingForAJob,lookingForAJobDescription:e.lookingForAJobDescription,contacts:{github:e.github,vk:e.vk,facebook:e.facebook,instagram:e.instagram,twitter:e.twitter,website:e.website,youtube:e.youtube,mainLink:e.mainLink}};a((0,N.Ii)(s)),t(!1)}});return(0,b.jsx)("div",{className:K,children:(0,b.jsx)("div",{className:Q,children:(0,b.jsxs)("div",{className:G,children:[(0,b.jsx)("div",{className:H,children:(0,b.jsx)("h1",{className:q,children:"Edit profile"})}),(0,b.jsx)("div",{className:X,children:(0,b.jsxs)("form",{onSubmit:o.handleSubmit,children:[(0,b.jsxs)("div",{className:W,children:[(0,b.jsx)("label",{className:$,htmlFor:"fullName",children:"Name"}),(0,b.jsx)("input",{id:"fullName",name:"fullName",type:"text",className:z,onChange:o.handleChange,value:o.values.fullName})]}),(0,b.jsxs)("div",{className:W,children:[(0,b.jsx)("label",{className:$,htmlFor:"aboutMe",children:"About me"}),(0,b.jsx)("input",{id:"aboutMe",name:"aboutMe",type:"text",className:z,onChange:o.handleChange,value:o.values.aboutMe})]}),(0,b.jsxs)("div",{className:W,style:{marginTop:"5px",marginBottom:"5px"},children:[(0,b.jsx)("label",{className:$,htmlFor:"lookingForAJob",children:"Looking for a job?"}),(0,b.jsx)("input",{id:"lookingForAJob",name:"lookingForAJob",type:"checkbox",onChange:o.handleChange,value:"lookingForAJob"})]}),(0,b.jsxs)("div",{className:W,children:[(0,b.jsx)("label",{className:$,htmlFor:"lookingForAJobDescription",children:"Your skills"}),(0,b.jsx)("input",{id:"lookingForAJobDescription",name:"lookingForAJobDescription",type:"text",className:z,onChange:o.handleChange,value:o.values.lookingForAJobDescription})]}),(0,b.jsxs)("div",{className:W,children:[(0,b.jsx)("label",{className:$,htmlFor:"github",children:"GitHub"}),(0,b.jsx)("input",{id:"github",name:"github",type:"text",className:z,onChange:o.handleChange,value:o.values.github})]}),(0,b.jsxs)("div",{className:W,children:[(0,b.jsx)("label",{className:$,htmlFor:"vk",children:"VK"}),(0,b.jsx)("input",{id:"vk",name:"vk",type:"text",className:z,onChange:o.handleChange,value:o.values.vk})]}),(0,b.jsxs)("div",{className:W,children:[(0,b.jsx)("label",{className:$,htmlFor:"facebook",children:"Facebook"}),(0,b.jsx)("input",{id:"facebook",name:"facebook",type:"text",className:z,onChange:o.handleChange,value:o.values.facebook})]}),(0,b.jsxs)("div",{className:W,children:[(0,b.jsx)("label",{className:$,htmlFor:"instagram",children:"Instagram"}),(0,b.jsx)("input",{id:"instagram",name:"instagram",type:"text",className:z,onChange:o.handleChange,value:o.values.instagram})]}),(0,b.jsxs)("div",{className:W,children:[(0,b.jsx)("label",{className:$,htmlFor:"twitter",children:"Twitter"}),(0,b.jsx)("input",{id:"twitter",name:"twitter",type:"text",className:z,onChange:o.handleChange,value:o.values.twitter})]}),(0,b.jsxs)("div",{className:W,children:[(0,b.jsx)("label",{className:$,htmlFor:"website",children:"Website"}),(0,b.jsx)("input",{id:"website",name:"website",type:"text",className:z,onChange:o.handleChange,value:o.values.website})]}),(0,b.jsxs)("div",{className:W,children:[(0,b.jsx)("label",{className:$,htmlFor:"youtube",children:"YouTube"}),(0,b.jsx)("input",{id:"youtube",name:"youtube",type:"text",className:z,onChange:o.handleChange,value:o.values.youtube})]}),(0,b.jsxs)("div",{className:W,children:[(0,b.jsx)("label",{className:$,htmlFor:"mainLink",children:"Main Link"}),(0,b.jsx)("input",{id:"mainLink",name:"mainLink",type:"text",className:z,onChange:o.handleChange,value:o.values.mainLink})]}),(0,b.jsxs)("div",{className:ee,children:[(0,b.jsx)("button",{className:te,type:"submit",children:"Submit"}),(0,b.jsx)("button",{className:se,onClick:function(){t(!1)},children:"Back"})]})]})})]})})})},oe=function(e){var s=e.title,t=e.callback;return(0,b.jsx)("div",{children:(0,b.jsx)("button",{onClick:t,className:D.Z.button,children:s})})},ie=function(e){var s=(0,r.useState)(!1),t=(0,c.Z)(s,2),a=t[0],o=t[1];return e.profile?(0,b.jsxs)("div",{children:[(0,b.jsx)(k,{isOwner:e.isOwner,savePhoto:e.savePhoto,profile:e.profile,photos:e.photos,status:e.status,updateUserStatus:e.updateUserStatus}),(0,b.jsx)(R,{profile:e.profile}),e.isOwner&&(0,b.jsx)(oe,{title:"edit",callback:function(){o(!0)}}),a&&(0,b.jsx)(ae,{profile:e.profile,setEditMode:o}),(0,b.jsx)("hr",{}),(0,b.jsx)(Y,{})]}):(0,b.jsx)(v.Z,{})},ne=t(7465),le=t(2932),re=t(7781),ce=function(e){(0,n.Z)(t,e);var s=(0,l.Z)(t);function t(){return(0,o.Z)(this,t),s.apply(this,arguments)}return(0,i.Z)(t,[{key:"refreshProfile",value:function(){var e=this.props,s=e.authorizedUserId,t=e.router,a=e.getUserProfile,o=e.getUserStatus,i=t.params.userId;i||(i=s)||t.history.push("login"),i&&(a(i),o(i))}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e){this.props.router.params.userId!=e.router.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,b.jsx)(ie,(0,a.Z)((0,a.Z)({},this.props),{},{savePhoto:this.props.savePhoto,photos:this.props.photos,isOwner:!this.props.router.params.userId,profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus}))}}]),t}(r.Component),ue=(0,re.qC)(le.D,ne.E,(0,V.$j)((function(e){return{profile:e.profilePage.profile,isAuth:e.auth.isAuth,status:e.profilePage.status,authorizedUserId:e.auth.id,photos:e.profilePage.photos}}),{getUserProfile:N.et,getUserStatus:N.Tq,updateUserStatus:N.OL,savePhoto:N.Ju}))(ce)},3107:function(e,s,t){e.exports=t.p+"static/media/background.f8ddf87e598a6f9af4a8.jpg"},1684:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFS0lEQVRoge1YXW9URRh+ZncbIbFYSpvWtlET5EITm9QqoRpb+ahE1LISTEUS+QHEa678SDQhTbgyXnipkcRgQQQjEoTIRwhQSrd+JA0gUD8bbaV89ALs7jxenLPnzMyZ2T1nt8abfZNmd6Yz8z7P877vnHcPULOa1axmNavCRJxFcwNbOgmxGQL9gnwAQBPJGRCTEPKYKPDzew8NjydxPLtuoAsytQngmhT4kCSaIDkjBH8heYTk3saTh36oisCN7ODyOqaHCGwCIECCBAACwac/Rx4XwDv1Xw+fKAl87cBqQbwNiD7AOM8bgP6kAPcK5Hc0nDxyLTGBuezW50DuAdBgHOw58h1Tcewt4O58PvVG49HhmxrwZ7MNSPMDAWwN96pCGOf7nyRnATm47PSRb2IT8MF/BSBTUnU4AICXUgVm64/unwCA22s3PlqA+ALkitKqh3NUfIHMQ2LDsnNREhECN7KDyzNMj4JsCEXVwRqq2+eI2xTcLEhBYhhEvQaytOpGlAkQ19Mi3b307OFJFW/GJFDH9BDJBk2B4GCXcog6BOohecDfsyie6upZKkECRGNe/jMEYNAZgbmBLZ0AxkkKt+ruSCROtSLQIpmo6sEaenuZhuxsHD3+YxFzSiVAiFc88Aw3aiENAVA5PFSPxpyheuQs/3zpHgd7vDlRkNisYtYICMp+6w0TKGUDoNSJk3RxzkK6+CdtY6nN0VuzXsWs1QAlHwyAl8nXcK4Iyp5W9lSzpJkmkp5e2h7vQWonALAx3t0cOo/OOfbacj3IbWVs7NF8eeMmdwTIWRAtZVU3wMYrcFN19dyo6mbdhemLv90RIK6BbKlIdWta+ZEwVU6uuiKQ0NoKrYhBedwsvkixBU6hr7MWuHaDhEUpjf8rReyNpbbGKOxvnQQoeMAMuxOUqrBJSLtRpLfPvBojV2UIOvBjjr3oHVQxR1qJm/0vjwLotud6iSJVSFvy1p7rpL9MF0NLyyDlAEGOtUyc7XanEABI7HKrDoujUNHIvrKqM6I6gjkZSUEpudOEG4kAAXFz7cbTIHrKNl+ayg7VIyqXVz04T1lHYqT14rlVwvfijIAASMHtJOf1UMJSDzJmGyATqW6Jfp7gdhO8PYUALD16MCcgd7kLt8zY3QZYxtJNXgbn7Wy7ODJqw2olAAD3ce4tkKeSNV8hGLfK/o2jjU3y2nV6pnWJfNeFs+Rv4pk1L7an5uUoyFZATSFot0OY28Y4qB0jBWGOYRAJ9v2RyfCJ5okLUxURAIDrvRseY0GeALG0CIYKSJRvvhAp7Mh1CuXpHJC7JYXo67h8vuTbjlivVWZ7nu+TkIdBLqquDSivuk/0DkRhfdvl3Mly2GIRAIDpVf0DgtgHMhNHwYjqjH2dFiDFYNvV0X1xcMUmAADTK9e9JsiPSNZBce7s703VfeVLPDfmSbmt/Wru07iYEhEAgOnu1S8AGAaxuCLVbYXtfbkLYEvblbH9SfAkJgAAf3Wt6QUKX4JYUpHq0RtrToLZjqu5Y0mxVEQAAKY7n3mcQhwk2Q6Yqie5TsVvUhZe6pgcT/RutWjOB1k5a/7+1JjI8ElIjriaL3u/r7QVEjmK1FOVgq+KAAA0Xzg1detOfa8kPyndeeo/ZDxy8jM5f8/T7VfO/1oNhopTyLQ/H+l5neSHBBdHc117btwV5I77J8fftzVnSW3BCADA7w/3dIl0YY8gVzgK+xKkfLX95+9yC+WzqhQyrf2nM7k61HUT3G12niD33hGplQsJHljgCKg2tbx7G4n3SEmSb3ZMjn/8X/mqWc1qVrP/z/4Fac8rGSf151AAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=759.3e77e81e.chunk.js.map