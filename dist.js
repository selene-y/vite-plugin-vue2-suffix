"use strict";var e=require("fs"),t=require("path");function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=c(e),r=c(t);const s=(e,t)=>e.includes("@")?process.cwd()+"/src":r.default.parse(t).dir;function u(e,t){return e&&e.map((e=>{if(e.includes("@")){let c=e.replace("@/","");return r.default.join(s(e,t),c)}return r.default.resolve(s(e,t),e)}))}module.exports=function(){return{name:"vite-plugin-vue2-suffix",apply:"serve",transform(e,t){const c=(t,c)=>{if(!t.includes(".svg")&&!t.includes(".vue")&&c.includes("/"))try{n.default.accessSync(`${t}.vue`,n.default.constants.R_OK),e=e.replace(`'${c}'`,`'${c}.vue'`)}catch(t){e=e.replace(`'${c}'`,`'${c}/index.vue'`)}};return(()=>{if(t.includes(".vue")&&!t.includes("?")){const n=function(e){let t=e.match(/(?<=components:(\s)*)({(?:[^}]+)})/g);return t=t&&t[0].replace(/\/\/(.*)/g,""),t=t&&t.split(","),t&&t.map((e=>e.replace(/\n*/g,"").replace(/\s*/g,"").replace(/{/,"").replace(/}/,"")))}(e),{pathList:r,componentShortPath:s}=n&&function(e,t,c){if(!e)return;const n=e.join("|"),r=new RegExp(`(?<=(import\\s(${n})\\sfrom\\s))(\\'(.*)\\')`,"g");let s=t.match(r)&&t.match(r).map((e=>e.replace(/\'/g,"")));return{pathList:u(s,c),componentShortPath:s}}(n,e,t)||"";n&&n.length&&r&&r.forEach(((e,t)=>{c(e,s[t])}))}})(),t.includes("/router")&&((()=>{const c=e.match(/(?<=(component: \(\)\s\=\>\simport\(\')).*(?=(\'\)))/g),r=u(c,t);r&&r.forEach(((t,r)=>{const s=c[r];if(!s.includes(".vue"))try{n.default.accessSync(`${t}.vue`,n.default.constants.R_OK),e=e.replace(`'${s}'`,`'${s}.vue'`)}catch(t){e=e.replace(`'${s}'`,`'${s}/index.vue'`)}}))})(),(()=>{const n=e.match(/(?<=(import\s\w*\sfrom\s\'))(.*)(?=(\'))/g);let r=[];n&&n.forEach((e=>{e.includes(".vue")||(e.includes("/views")||e.includes("/components"))&&r.push(`${e}`)}));const s=r&&u(r,t);r&&r.length&&s&&s.forEach(((e,t)=>{c(e,r[t])}))})()),e}}};
