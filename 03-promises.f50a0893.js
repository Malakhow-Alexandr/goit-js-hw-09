function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var u=r("eWCmQ");r("iQIUW");function l(e,n){return new Promise(((o,t)=>{const i=Math.random()>.3;setTimeout((()=>{i&&o({position:e,delay:n}),t({position:e,delay:n})}),n)}))}function s({position:n,delay:o}){e(u).Notify.success(`✅ Fulfilled promise ${n} in ${o}ms`)}function f({position:n,delay:o}){e(u).Notify.failure(`❌Rejected promise ${n} in ${o}ms`)}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(e){e.preventDefault();const{delay:n,step:o,amount:t}=e.currentTarget,r=n.valueAsNumber,u=o.valueAsNumber,a=t.valueAsNumber;!function(e,n,o){for(i=0;i<o;i+=1){const o=e+n*i;l(i+1,o).then(s).catch(f)}}(r,u,a)}));
//# sourceMappingURL=03-promises.f50a0893.js.map
