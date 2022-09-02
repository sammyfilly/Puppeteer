"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57800],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),o=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=o(a),d=r,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return a?n.createElement(g,p(p({ref:t},s),{},{components:a})):n.createElement(g,p({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var o=2;o<l;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},68539:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_label:"Page.evaluate"},p="Page.evaluate() method",i={unversionedId:"api/puppeteer.page.evaluate",id:"version-17.1.0/api/puppeteer.page.evaluate",title:"Page.evaluate() method",description:"Evaluates a function in the page's context and returns the result.",source:"@site/versioned_docs/version-17.1.0/api/puppeteer.page.evaluate.md",sourceDirName:"api",slug:"/api/puppeteer.page.evaluate",permalink:"/api/puppeteer.page.evaluate",draft:!1,tags:[],version:"17.1.0",frontMatter:{sidebar_label:"Page.evaluate"},sidebar:"sidebar",previous:{title:"Page.emulateVisionDeficiency",permalink:"/api/puppeteer.page.emulatevisiondeficiency"},next:{title:"Page.evaluateHandle",permalink:"/api/puppeteer.page.evaluatehandle"}},u={},o=[{value:"Parameters",id:"parameters",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2}],s={toc:o};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pageevaluate-method"},"Page.evaluate() method"),(0,r.kt)("p",null,"Evaluates a function in the page's context and returns the result."),(0,r.kt)("p",null,"If the function passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"page.evaluteHandle")," returns a Promise, the function will wait for the promise to resolve and return its value."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  evaluate<\n    Params extends unknown[],\n    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>\n  >(\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<Awaited<ReturnType<Func>>>;\n}\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pageFunction"),(0,r.kt)("td",{parentName:"tr",align:null},"Func ","|"," string"),(0,r.kt)("td",{parentName:"tr",align:null},"a function that is run within the page")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"args"),(0,r.kt)("td",{parentName:"tr",align:null},"Params"),(0,r.kt)("td",{parentName:"tr",align:null},"arguments to be passed to the pageFunction")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<","Awaited","<","ReturnType","<","Func",">",">",">"),(0,r.kt)("p",null,"the return value of ",(0,r.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."),(0,r.kt)("h2",{id:"example-1"},"Example 1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const result = await frame.evaluate(() => {\n  return Promise.resolve(8 * 7);\n});\nconsole.log(result); // prints "56"\n')),(0,r.kt)("p",null,"You can pass a string instead of a function (although functions are recommended as they are easier to debug and use with TypeScript):"),(0,r.kt)("h2",{id:"example-2"},"Example 2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const aHandle = await page.evaluate('1 + 2');\n")),(0,r.kt)("p",null,"To get the best TypeScript experience, you should pass in as the generic the type of ",(0,r.kt)("inlineCode",{parentName:"p"},"pageFunction"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const aHandle = await page.evaluate(() => 2);\n")),(0,r.kt)("h2",{id:"example-3"},"Example 3"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/puppeteer.elementhandle"},"ElementHandle")," instances (including ",(0,r.kt)("a",{parentName:"p",href:"/api/puppeteer.jshandle"},"JSHandle"),"s) can be passed as arguments to the ",(0,r.kt)("inlineCode",{parentName:"p"},"pageFunction"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const bodyHandle = await page.$('body');\nconst html = await page.evaluate(body => body.innerHTML, bodyHandle);\nawait bodyHandle.dispose();\n")))}c.isMDXComponent=!0}}]);