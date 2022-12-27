"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[566],{5566:function(n,e,t){t.r(e),t.d(e,{default:function(){return Y}});var r=t(2791),a=t(9434),i=t(3634),o="NOT_FOUND";var u=function(n,e){return n===e};function c(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,a=void 0===r?u:r,i=t.maxSize,c=void 0===i?1:i,l=t.resultEqualityCheck,s=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,a=0;a<r;a++)if(!n(e[a],t[a]))return!1;return!0}}(a),f=1===c?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:o},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(s):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return o}return{get:r,put:function(e,a){r(e)===o&&(t.unshift({key:e,value:a}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(c,s);function p(){var e=f.get(arguments);if(e===o){if(e=n.apply(null,arguments),l){var t=f.getEntries(),r=t.find((function(n){return l(n.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return p.clearCache=function(){return f.clear()},p}function l(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function s(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var a=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var i,o=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=u,f=s.memoizeOptions,p=void 0===f?t:f,d=Array.isArray(p)?p:[p],m=l(r),h=n.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(d)),v=n((function(){for(var n=[],e=m.length,t=0;t<e;t++)n.push(m[t].apply(null,arguments));return i=h.apply(null,n)}));return Object.assign(v,{resultFunc:c,memoizedResultFunc:h,dependencies:m,lastResult:function(){return i},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),v};return a}var f,p,d,m,h,v,g,x,y,b,j,Z=s(c),k=function(n){return n.contacts.items},w=function(n){return n.contacts.isLoading},C=function(n){return n.filter},A=Z([k,C],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),P=t(168),z=t(6444),E=z.ZP.ul(f||(f=(0,P.Z)(["\n  list-style: none;\n"]))),F=z.ZP.li(p||(p=(0,P.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n  display: flex;\n"]))),O=z.ZP.button(d||(d=(0,P.Z)(["\n  margin-left: 50px;\n  :hover {\n    background-color: gray;\n  }\n"]))),S=t(184),q=function(){var n=(0,a.I0)(),e=(0,a.v9)(A);return(0,S.jsx)(E,{children:e.map((function(e){var t=e.name,r=e.number,a=e.id;return(0,S.jsxs)(F,{children:[(0,S.jsxs)("span",{children:[t,": ",r]}),(0,S.jsx)(O,{type:"button",onClick:function(){return n((0,i.GK)(a))},children:"Delete"})]},a)}))})},I=t(9439),N=z.ZP.label(m||(m=(0,P.Z)(["\n  margin-top: 10px;\n  margin-left: 30px;\n  font-weight: 500;\n"]))),_=z.ZP.input(h||(h=(0,P.Z)(["\n  margin-top: 10px;\n  margin-bottom: 10px;\n  display: flex;\n  margin-left: 30px;\n"]))),L=z.ZP.button(v||(v=(0,P.Z)(["\n  margin-top: 10px;\n  margin-left: 30px;\n  width: 100px;\n  padding: 5px 10px;\n  :hover {\n    background-color: grey;\n   \n  }\n"]))),D=t(5218),R=function(){var n=(0,r.useState)(""),e=(0,I.Z)(n,2),t=e[0],o=e[1],u=(0,r.useState)(""),c=(0,I.Z)(u,2),l=c[0],s=c[1],f=(0,a.v9)(k),p=(0,a.I0)(),d=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"name":o(r);break;case"number":s(r);break;default:return}},m=function(){o(""),s("")};return(0,S.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e={name:t,number:l},r=f.find((function(n){return n.name===t}));r?(0,D.Am)("".concat(t," is  already in contacts.")):p((0,i.uK)(e)),m()},children:[(0,S.jsxs)(N,{children:["Name",(0,S.jsx)(_,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:d})]}),(0,S.jsxs)(N,{children:["Number",(0,S.jsx)(_,{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:l,onChange:d})]}),(0,S.jsx)(D.x7,{position:"top-center",reverseOrder:!1}),(0,S.jsx)(L,{type:"submit",children:"Add contact"})]})},T=z.ZP.label(g||(g=(0,P.Z)(["\n  margin-left: 30px;\n  font-weight: 500;\n"]))),K=z.ZP.input(x||(x=(0,P.Z)(["\n  display: flex;\n  margin-left: 30px;\n  margin-top: 10px;\n"]))),B=t(4808),G=function(){var n=(0,a.I0)(),e=(0,a.v9)(C);return(0,S.jsxs)(T,{children:["Find contact by name",(0,S.jsx)(K,{type:"text",value:e,onChange:function(e){n((0,B.Tv)(e.target.value))}})]})},J=z.ZP.section(y||(y=(0,P.Z)(["\n   padding: 20px;\n"]))),M=z.ZP.section(b||(b=(0,P.Z)(["\n   margin: 0;\n  font-weight: 500;\n  margin-left: 30px;\n  margin-bottom: 20px;\n"]))),U=z.ZP.section(j||(j=(0,P.Z)(["\n   display: flex;\n   justify-content: center;\n   align-items: center;\n"])));function Y(){var n=(0,a.I0)(),e=(0,a.v9)(w),t=(0,a.v9)(k);return(0,r.useEffect)((function(){n((0,i.yF)())}),[n]),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(J,{children:(0,S.jsxs)(M,{children:["Phonebook",(0,S.jsx)(R,{})]})}),(0,S.jsx)(J,{children:(0,S.jsxs)(M,{children:["Contacts",t.length>1&&(0,S.jsx)(G,{}),0===t.length&&(0,S.jsx)(U,{children:"You don't have any contacts yet."}),e&&"Loading...",(0,S.jsx)(q,{})]})})]})}}}]);
//# sourceMappingURL=566.e4d663f8.chunk.js.map