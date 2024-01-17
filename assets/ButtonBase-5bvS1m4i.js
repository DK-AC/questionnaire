import{r as i,S as A,_ as X,k as oe,l as x,j as N,f as Ee,Z as ie,s as se,i as Te,e as ze,m as Ae}from"./index-8jWsmFLq.js";function Xe(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const We=typeof window<"u"?i.useLayoutEffect:i.useEffect;function H(e){const t=i.useRef(e);return We(()=>{t.current=e}),i.useRef((...r)=>(0,t.current)(...r)).current}function de(...e){return i.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(r=>{Xe(r,t)})},e)}let G=!0,te=!1,he;const Ye={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function He(e){const{type:t,tagName:r}=e;return!!(r==="INPUT"&&Ye[t]&&!e.readOnly||r==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function Ge(e){e.metaKey||e.altKey||e.ctrlKey||(G=!0)}function ee(){G=!1}function qe(){this.visibilityState==="hidden"&&te&&(G=!0)}function Ze(e){e.addEventListener("keydown",Ge,!0),e.addEventListener("mousedown",ee,!0),e.addEventListener("pointerdown",ee,!0),e.addEventListener("touchstart",ee,!0),e.addEventListener("visibilitychange",qe,!0)}function Je(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return G||He(t)}function Qe(){const e=i.useCallback(n=>{n!=null&&Ze(n.ownerDocument)},[]),t=i.useRef(!1);function r(){return t.current?(te=!0,window.clearTimeout(he),he=window.setTimeout(()=>{te=!1},100),t.current=!1,!0):!1}function u(n){return Je(n)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:u,onBlur:r,ref:e}}function ne(e,t){return ne=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,n){return u.__proto__=n,u},ne(e,t)}function et(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ne(e,t)}const me=A.createContext(null);function tt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ae(e,t){var r=function(o){return t&&i.isValidElement(o)?t(o):o},u=Object.create(null);return e&&i.Children.map(e,function(n){return n}).forEach(function(n){u[n.key]=r(n)}),u}function nt(e,t){e=e||{},t=t||{};function r(d){return d in t?t[d]:e[d]}var u=Object.create(null),n=[];for(var o in e)o in t?n.length&&(u[o]=n,n=[]):n.push(o);var s,c={};for(var l in t){if(u[l])for(s=0;s<u[l].length;s++){var p=u[l][s];c[u[l][s]]=r(p)}c[l]=r(l)}for(s=0;s<n.length;s++)c[n[s]]=r(n[s]);return c}function S(e,t,r){return r[t]!=null?r[t]:e.props[t]}function rt(e,t){return ae(e.children,function(r){return i.cloneElement(r,{onExited:t.bind(null,r),in:!0,appear:S(r,"appear",e),enter:S(r,"enter",e),exit:S(r,"exit",e)})})}function ot(e,t,r){var u=ae(e.children),n=nt(t,u);return Object.keys(n).forEach(function(o){var s=n[o];if(i.isValidElement(s)){var c=o in t,l=o in u,p=t[o],d=i.isValidElement(p)&&!p.props.in;l&&(!c||d)?n[o]=i.cloneElement(s,{onExited:r.bind(null,s),in:!0,exit:S(s,"exit",e),enter:S(s,"enter",e)}):!l&&c&&!d?n[o]=i.cloneElement(s,{in:!1}):l&&c&&i.isValidElement(p)&&(n[o]=i.cloneElement(s,{onExited:r.bind(null,s),in:p.props.in,exit:S(s,"exit",e),enter:S(s,"enter",e)}))}}),n}var it=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},st={component:"div",childFactory:function(t){return t}},ue=function(e){et(t,e);function t(u,n){var o;o=e.call(this,u,n)||this;var s=o.handleExited.bind(tt(o));return o.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},o}var r=t.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(n,o){var s=o.children,c=o.handleExited,l=o.firstRender;return{children:l?rt(n,c):ot(n,s,c),firstRender:!1}},r.handleExited=function(n,o){var s=ae(this.props.children);n.key in s||(n.props.onExited&&n.props.onExited(o),this.mounted&&this.setState(function(c){var l=X({},c.children);return delete l[n.key],{children:l}}))},r.render=function(){var n=this.props,o=n.component,s=n.childFactory,c=oe(n,["component","childFactory"]),l=this.state.contextValue,p=it(this.state.children).map(s);return delete c.appear,delete c.enter,delete c.exit,o===null?A.createElement(me.Provider,{value:l},p):A.createElement(me.Provider,{value:l},A.createElement(o,c,p))},t}(A.Component);ue.propTypes={};ue.defaultProps=st;const at=ue;function ut(e){const{className:t,classes:r,pulsate:u=!1,rippleX:n,rippleY:o,rippleSize:s,in:c,onExited:l,timeout:p}=e,[d,g]=i.useState(!1),b=x(t,r.ripple,r.rippleVisible,u&&r.ripplePulsate),C={width:s,height:s,top:-(s/2)+o,left:-(s/2)+n},h=x(r.child,d&&r.childLeaving,u&&r.childPulsate);return!c&&!d&&g(!0),i.useEffect(()=>{if(!c&&l!=null){const y=setTimeout(l,p);return()=>{clearTimeout(y)}}},[l,c,p]),N.jsx("span",{className:b,style:C,children:N.jsx("span",{className:h})})}const m=Ee("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),lt=["center","classes","className"];let q=e=>e,be,ge,ye,Re;const re=550,ct=80,pt=ie(be||(be=q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),ft=ie(ge||(ge=q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),dt=ie(ye||(ye=q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),ht=se("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),mt=se(ut,{name:"MuiTouchRipple",slot:"Ripple"})(Re||(Re=q`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,pt,re,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,ft,re,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,dt,({theme:e})=>e.transitions.easing.easeInOut),bt=i.forwardRef(function(t,r){const u=Te({props:t,name:"MuiTouchRipple"}),{center:n=!1,classes:o={},className:s}=u,c=oe(u,lt),[l,p]=i.useState([]),d=i.useRef(0),g=i.useRef(null);i.useEffect(()=>{g.current&&(g.current(),g.current=null)},[l]);const b=i.useRef(!1),C=i.useRef(0),h=i.useRef(null),y=i.useRef(null);i.useEffect(()=>()=>{C.current&&clearTimeout(C.current)},[]);const O=i.useCallback(f=>{const{pulsate:R,rippleX:E,rippleY:D,rippleSize:j,cb:U}=f;p(T=>[...T,N.jsx(mt,{classes:{ripple:x(o.ripple,m.ripple),rippleVisible:x(o.rippleVisible,m.rippleVisible),ripplePulsate:x(o.ripplePulsate,m.ripplePulsate),child:x(o.child,m.child),childLeaving:x(o.childLeaving,m.childLeaving),childPulsate:x(o.childPulsate,m.childPulsate)},timeout:re,pulsate:R,rippleX:E,rippleY:D,rippleSize:j},d.current)]),d.current+=1,g.current=U},[o]),_=i.useCallback((f={},R={},E=()=>{})=>{const{pulsate:D=!1,center:j=n||R.pulsate,fakeElement:U=!1}=R;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const T=U?null:y.current,P=T?T.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,B,L;if(j||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)v=Math.round(P.width/2),B=Math.round(P.height/2);else{const{clientX:F,clientY:V}=f.touches&&f.touches.length>0?f.touches[0]:f;v=Math.round(F-P.left),B=Math.round(V-P.top)}if(j)L=Math.sqrt((2*P.width**2+P.height**2)/3),L%2===0&&(L+=1);else{const F=Math.max(Math.abs((T?T.clientWidth:0)-v),v)*2+2,V=Math.max(Math.abs((T?T.clientHeight:0)-B),B)*2+2;L=Math.sqrt(F**2+V**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{O({pulsate:D,rippleX:v,rippleY:B,rippleSize:L,cb:E})},C.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},ct)):O({pulsate:D,rippleX:v,rippleY:B,rippleSize:L,cb:E})},[n,O]),I=i.useCallback(()=>{_({},{pulsate:!0})},[_]),$=i.useCallback((f,R)=>{if(clearTimeout(C.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,C.current=setTimeout(()=>{$(f,R)});return}h.current=null,p(E=>E.length>0?E.slice(1):E),g.current=R},[]);return i.useImperativeHandle(r,()=>({pulsate:I,start:_,stop:$}),[I,_,$]),N.jsx(ht,X({className:x(m.root,o.root,s),ref:y},c,{children:N.jsx(at,{component:null,exit:!0,children:l})}))}),gt=bt;function yt(e){return ze("MuiButtonBase",e)}const Rt=Ee("MuiButtonBase",["root","disabled","focusVisible"]),Et=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Tt=e=>{const{disabled:t,focusVisible:r,focusVisibleClassName:u,classes:n}=e,s=Ae({root:["root",t&&"disabled",r&&"focusVisible"]},yt,n);return r&&u&&(s.root+=` ${u}`),s},Mt=se("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Rt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),xt=i.forwardRef(function(t,r){const u=Te({props:t,name:"MuiButtonBase"}),{action:n,centerRipple:o=!1,children:s,className:c,component:l="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:C="a",onBlur:h,onClick:y,onContextMenu:O,onDragLeave:_,onFocus:I,onFocusVisible:$,onKeyDown:f,onKeyUp:R,onMouseDown:E,onMouseLeave:D,onMouseUp:j,onTouchEnd:U,onTouchMove:T,onTouchStart:P,tabIndex:v=0,TouchRippleProps:B,touchRippleRef:L,type:F}=u,V=oe(u,Et),K=i.useRef(null),M=i.useRef(null),Me=de(M,L),{isFocusVisibleRef:le,onFocus:xe,onBlur:Ce,ref:ve}=Qe(),[k,W]=i.useState(!1);p&&k&&W(!1),i.useImperativeHandle(n,()=>({focusVisible:()=>{W(!0),K.current.focus()}}),[]);const[Z,Ve]=i.useState(!1);i.useEffect(()=>{Ve(!0)},[]);const we=Z&&!d&&!p;i.useEffect(()=>{k&&b&&!d&&Z&&M.current.pulsate()},[d,b,k,Z]);function w(a,pe,Ke=g){return H(fe=>(pe&&pe(fe),!Ke&&M.current&&M.current[a](fe),!0))}const Pe=w("start",E),Be=w("stop",O),Le=w("stop",_),De=w("stop",j),Fe=w("stop",a=>{k&&a.preventDefault(),D&&D(a)}),ke=w("start",P),Se=w("stop",U),Ne=w("stop",T),_e=w("stop",a=>{Ce(a),le.current===!1&&W(!1),h&&h(a)},!1),$e=H(a=>{K.current||(K.current=a.currentTarget),xe(a),le.current===!0&&(W(!0),$&&$(a)),I&&I(a)}),J=()=>{const a=K.current;return l&&l!=="button"&&!(a.tagName==="A"&&a.href)},Q=i.useRef(!1),je=H(a=>{b&&!Q.current&&k&&M.current&&a.key===" "&&(Q.current=!0,M.current.stop(a,()=>{M.current.start(a)})),a.target===a.currentTarget&&J()&&a.key===" "&&a.preventDefault(),f&&f(a),a.target===a.currentTarget&&J()&&a.key==="Enter"&&!p&&(a.preventDefault(),y&&y(a))}),Oe=H(a=>{b&&a.key===" "&&M.current&&k&&!a.defaultPrevented&&(Q.current=!1,M.current.stop(a,()=>{M.current.pulsate(a)})),R&&R(a),y&&a.target===a.currentTarget&&J()&&a.key===" "&&!a.defaultPrevented&&y(a)});let Y=l;Y==="button"&&(V.href||V.to)&&(Y=C);const z={};Y==="button"?(z.type=F===void 0?"button":F,z.disabled=p):(!V.href&&!V.to&&(z.role="button"),p&&(z["aria-disabled"]=p));const Ie=de(r,ve,K),ce=X({},u,{centerRipple:o,component:l,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:v,focusVisible:k}),Ue=Tt(ce);return N.jsxs(Mt,X({as:Y,className:x(Ue.root,c),ownerState:ce,onBlur:_e,onClick:y,onContextMenu:Be,onFocus:$e,onKeyDown:je,onKeyUp:Oe,onMouseDown:Pe,onMouseLeave:Fe,onMouseUp:De,onDragLeave:Le,onTouchEnd:Se,onTouchMove:Ne,onTouchStart:ke,ref:Ie,tabIndex:p?-1:v,type:F},z,V,{children:[s,we?N.jsx(gt,X({ref:Me,center:o},B)):null]}))}),Vt=xt;export{Vt as B,me as T,et as _,H as a,de as u};
