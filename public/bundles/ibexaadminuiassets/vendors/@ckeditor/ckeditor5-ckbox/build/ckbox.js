!function(e){const t=e.en=e.en||{};t.dictionary=Object.assign(t.dictionary||{},{"Cannot access default workspace.":"Cannot access default workspace.","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Open file manager":"Open file manager"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={704:(e,t,i)=>{e.exports=i(79)("./src/core.js")},492:(e,t,i)=>{e.exports=i(79)("./src/engine.js")},273:(e,t,i)=>{e.exports=i(79)("./src/ui.js")},448:(e,t,i)=>{e.exports=i(79)("./src/upload.js")},209:(e,t,i)=>{e.exports=i(79)("./src/utils.js")},79:e=>{"use strict";e.exports=CKEditor5.dll}},t={};function i(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,i),n.exports}i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{"use strict";i.r(o),i.d(o,{CKBox:()=>P,CKBoxEditing:()=>E,CKBoxUI:()=>r});var e=i(704),t=i(273);class r extends e.Plugin{static get pluginName(){return"CKBoxUI"}afterInit(){const e=this.editor,i=e.commands.get("ckbox");if(!i)return;const o=e.t;e.ui.componentFactory.add("ckbox",(r=>{const n=new t.ButtonView(r);return n.set({label:o("Open file manager"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.627 16.5zm5.873-.196zm0-7.001V8h-13v8.5h4.341c.191.54.457 1.044.785 1.5H2a1.5 1.5 0 0 1-1.5-1.5v-13A1.5 1.5 0 0 1 2 2h4.5a1.5 1.5 0 0 1 1.06.44L9.122 4H16a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 19 8v2.531a6.027 6.027 0 0 0-1.5-1.228zM16 6.5v-1H8.5l-2-2H2v13h1V8a1.5 1.5 0 0 1 1.5-1.5H16z"/><path d="M14.5 19.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM15 14v-2h-1v2h-2v1h2v2h1v-2h2v-1h-2z"/></svg>',tooltip:!0}),n.bind("isOn","isEnabled").to(i,"value","isEnabled"),n.on("execute",(()=>{e.execute("ckbox")})),n}))}}var n=i(492),s=i(209),a=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","#","$","%","*","+",",","-",".",":",";","=","?","@","[","]","^","_","{","|","}","~"],c=e=>{let t=0;for(let i=0;i<e.length;i++){let o=e[i];t=83*t+a.indexOf(o)}return t},l=e=>{let t=e/255;return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)},d=e=>{let t=Math.max(0,Math.min(1,e));return t<=.0031308?Math.trunc(12.92*t*255+.5):Math.trunc(255*(1.055*Math.pow(t,.4166666666666667)-.055)+.5)},u=(e,t)=>(e=>e<0?-1:1)(e)*Math.pow(Math.abs(e),t),g=class extends Error{constructor(e){super(e),this.name="ValidationError",this.message=e}},h=e=>{if(!e||e.length<6)throw new g("The blurhash string must be at least 6 characters");let t=c(e[0]),i=Math.floor(t/9)+1,o=t%9+1;if(e.length!==4+2*o*i)throw new g(`blurhash length mismatch: length is ${e.length} but it should be ${4+2*o*i}`)},m=e=>{let t=e>>8&255,i=255&e;return[l(e>>16),l(t),l(i)]},b=(e,t)=>{let i=Math.floor(e/361),o=Math.floor(e/19)%19,r=e%19;return[u((i-9)/9,2)*t,u((o-9)/9,2)*t,u((r-9)/9,2)*t]},p=(e,t,i,o)=>{h(e),o|=1;let r=c(e[0]),n=Math.floor(r/9)+1,s=r%9+1,a=(c(e[1])+1)/166,l=new Array(s*n);for(let t=0;t<l.length;t++)if(0===t){let i=c(e.substring(2,6));l[t]=m(i)}else{let i=c(e.substring(4+2*t,6+2*t));l[t]=b(i,a*o)}let u=4*t,g=new Uint8ClampedArray(u*i);for(let e=0;e<i;e++)for(let o=0;o<t;o++){let r=0,a=0,c=0;for(let d=0;d<n;d++)for(let n=0;n<s;n++){let u=Math.cos(Math.PI*o*n/t)*Math.cos(Math.PI*e*d/i),g=l[n+d*s];r+=g[0]*u,a+=g[1]*u,c+=g[2]*u}let h=d(r),m=d(a),b=d(c);g[4*o+0+e*u]=h,g[4*o+1+e*u]=m,g[4*o+2+e*u]=b,g[4*o+3+e*u]=255}return g};function f(e){const t=[];let i=0;for(const o in e){const r=parseInt(o,10);isNaN(r)||(r>i&&(i=r),t.push(`${e[o]} ${o}w`))}const o=[{srcset:t.join(","),sizes:`(max-width: ${i}px) 100vw, ${i}px`,type:"image/webp"}];return{imageFallbackUrl:e.default,imageSources:o}}const k=32;class x extends e.Command{constructor(e){super(e),this._chosenAssets=new Set,this._wrapper=null,this._initListeners()}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(){this.fire("ckbox:open")}_getValue(){return null!==this._wrapper}_checkEnabled(){const e=this.editor.commands.get("insertImage"),t=this.editor.commands.get("link");return!(!e.isEnabled&&!t.isEnabled)}_prepareOptions(){const e=this.editor.config.get("ckbox");return{theme:e.theme,language:e.language,tokenUrl:e.tokenUrl,serviceOrigin:e.serviceOrigin,dialog:{onClose:()=>this.fire("ckbox:close")},assets:{onChoose:e=>this.fire("ckbox:choose",e)}}}_initListeners(){const e=this.editor,t=e.model,i=!e.config.get("ckbox.ignoreDataId");this.on("ckbox",(()=>{this.refresh()}),{priority:"low"}),this.on("ckbox:open",(()=>{this.isEnabled&&!this.value&&(this._wrapper=(0,s.createElement)(document,"div",{class:"ck ckbox-wrapper"}),document.body.appendChild(this._wrapper),window.CKBox.mount(this._wrapper,this._prepareOptions()))})),this.on("ckbox:close",(()=>{this.value&&(this._wrapper.remove(),this._wrapper=null,e.editing.view.focus())})),this.on("ckbox:choose",((o,r)=>{if(!this.isEnabled)return;const n=e.commands.get("insertImage"),s=e.commands.get("link"),a=function({assets:e,isImageAllowed:t,isLinkAllowed:i}){return e.map((e=>function(e){const t=e.data.metadata;if(!t)return!1;return t.width&&t.height}(e)?{id:e.data.id,type:"image",attributes:w(e)}:{id:e.data.id,type:"link",attributes:v(e)})).filter((e=>"image"===e.type?t:i))}({assets:r,isImageAllowed:n.isEnabled,isLinkAllowed:s.isEnabled}),c=a.length;0!==c&&(t.change((e=>{for(const t of a){const o=t===a[c-1],r=1===c;this._insertAsset(t,o,e,r),i&&(setTimeout((()=>this._chosenAssets.delete(t)),1e3),this._chosenAssets.add(t))}})),e.editing.view.focus())})),this.listenTo(e,"destroy",(()=>{this.fire("ckbox:close"),this._chosenAssets.clear()}))}_insertAsset(e,t,i,o){const r=this.editor.model.document.selection;i.removeSelectionAttribute("linkHref"),"image"===e.type?this._insertImage(e):this._insertLink(e,i,o),t||i.setSelection(r.getLastPosition())}_insertImage(e){const t=this.editor,{imageFallbackUrl:i,imageSources:o,imageTextAlternative:r,imageWidth:n,imageHeight:s,imagePlaceholder:a}=e.attributes;t.execute("insertImage",{source:{src:i,sources:o,alt:r,width:n,height:s,...a?{placeholder:a}:null}})}_insertLink(e,t,i){const o=this.editor,r=o.model,n=r.document.selection,{linkName:a,linkHref:c}=e.attributes;if(n.isCollapsed){const e=(0,s.toMap)(n.getAttributes()),l=t.createText(a,e);if(!i){const e=n.getLastPosition(),i=e.parent;"paragraph"===i.name&&i.isEmpty||o.execute("insertParagraph",{position:e});const s=r.insertContent(l);return t.setSelection(s),void o.execute("link",c)}const d=r.insertContent(l);t.setSelection(d)}o.execute("link",c)}}function w(e){const{imageFallbackUrl:t,imageSources:i}=f(e.data.imageUrls),{description:o,width:r,height:n,blurHash:s}=e.data.metadata,a=function(e){if(e)try{const t=`${k}px`,i=document.createElement("canvas");i.setAttribute("width",t),i.setAttribute("height",t);const o=i.getContext("2d");if(!o)return;const r=o.createImageData(k,k),n=p(e,k,k);return r.data.set(n),o.putImageData(r,0,0),i.toDataURL()}catch(e){return}}(s);return{imageFallbackUrl:t,imageSources:i,imageTextAlternative:o||"",imageWidth:r,imageHeight:n,...a?{imagePlaceholder:a}:null}}function v(e){return{linkName:e.data.name,linkHref:I(e)}}function I(e){const t=new URL(e.data.url);return t.searchParams.set("download","true"),t.toString()}var C=i(448);class A extends e.Plugin{static get requires(){return["ImageUploadEditing","ImageUploadProgress",C.FileRepository,E]}static get pluginName(){return"CKBoxUploadAdapter"}async afterInit(){const e=this.editor,t=!!e.config.get("ckbox"),i=!!window.CKBox;if(!t&&!i)return;const o=e.plugins.get(C.FileRepository),r=e.plugins.get(E);o.createUploadAdapter=t=>new y(t,r.getToken(),e);const n=!e.config.get("ckbox.ignoreDataId"),s=e.plugins.get("ImageUploadEditing");n&&s.on("uploadComplete",((t,{imageElement:i,data:o})=>{e.model.change((e=>{e.setAttribute("ckboxImageId",o.ckboxImageId,i)}))}))}}class y{constructor(e,t,i){this.loader=e,this.token=t,this.editor=i,this.controller=new AbortController,this.serviceOrigin=i.config.get("ckbox.serviceOrigin")}getWorkspaceId(){const e=(0,this.editor.t)("Cannot access default workspace."),t=this.editor.config.get("ckbox.defaultUploadWorkspaceId"),i=function(e,t){const[,i]=e.value.split("."),o=JSON.parse(atob(i)),r=o.auth&&o.auth.ckbox&&o.auth.ckbox.workspaces||[o.aud];return t?"superadmin"==(o.auth&&o.auth.ckbox&&o.auth.ckbox.role)||r.includes(t)?t:null:r[0]}(this.token,t);if(null==i)throw(0,s.logError)("ckbox-access-default-workspace-error"),e;return i}async getAvailableCategories(e=0){const t=new URL("categories",this.serviceOrigin);return t.searchParams.set("limit",50..toString()),t.searchParams.set("offset",e.toString()),t.searchParams.set("workspaceId",this.getWorkspaceId()),this._sendHttpRequest({url:t}).then((async t=>{if(t.totalCount-(e+50)>0){const i=await this.getAvailableCategories(e+50);return[...t.items,...i]}return t.items})).catch((()=>{this.controller.signal.throwIfAborted(),(0,s.logError)("ckbox-fetch-category-http-error")}))}async getCategoryIdForFile(e){const t=function(e){const t=/\.(?<ext>[^.]+)$/;return e.match(t).groups.ext.toLowerCase()}(e.name),i=await this.getAvailableCategories();if(!i)return null;const o=this.editor.config.get("ckbox.defaultUploadCategories");if(o){const e=Object.keys(o).find((e=>o[e].find((e=>e.toLowerCase()==t))));if(e){const t=i.find((t=>t.id===e||t.name===e));return t?t.id:null}}const r=i.find((e=>e.extensions.find((e=>e.toLowerCase()==t))));return r?r.id:null}async upload(){const e=this.editor.t,t=e("Cannot determine a category for the uploaded file."),i=await this.loader.file,o=await this.getCategoryIdForFile(i);if(!o)return Promise.reject(t);const r=new URL("assets",this.serviceOrigin),n=new FormData;r.searchParams.set("workspaceId",this.getWorkspaceId()),n.append("categoryId",o),n.append("file",i);const s={method:"POST",url:r,data:n,onUploadProgress:e=>{e.lengthComputable&&(this.loader.uploadTotal=e.total,this.loader.uploaded=e.loaded)}};return this._sendHttpRequest(s).then((async e=>{const t=f(e.imageUrls);return{ckboxImageId:e.id,default:t.imageFallbackUrl,sources:t.imageSources}})).catch((()=>{const t=e("Cannot upload file:")+` ${i.name}.`;return Promise.reject(t)}))}abort(){this.controller.abort()}_sendHttpRequest({url:e,method:t="GET",data:i,onUploadProgress:o}){const r=this.controller.signal,n=new XMLHttpRequest;n.open(t,e.toString(),!0),n.setRequestHeader("Authorization",this.token.value),n.setRequestHeader("CKBox-Version","CKEditor 5"),n.responseType="json";const s=()=>{n.abort()};return new Promise(((e,t)=>{r.addEventListener("abort",s),n.addEventListener("loadstart",(()=>{r.addEventListener("abort",s)})),n.addEventListener("loadend",(()=>{r.removeEventListener("abort",s)})),n.addEventListener("error",(()=>{t()})),n.addEventListener("abort",(()=>{t()})),n.addEventListener("load",(async()=>{const i=n.response;return!i||i.statusCode>=400?t(i&&i.message):e(i)})),o&&n.upload.addEventListener("progress",(e=>{o(e)})),n.send(i)}))}}class E extends e.Plugin{static get pluginName(){return"CKBoxEditing"}static get requires(){return["CloudServices","LinkEditing","PictureEditing",A]}async init(){const e=this.editor,t=!!e.config.get("ckbox"),i=!!window.CKBox;if(!t&&!i)return;this._initConfig();const o=e.plugins.get("CloudServicesCore"),r=e.config.get("ckbox.tokenUrl");if(r===e.config.get("cloudServices.tokenUrl")){const t=e.plugins.get("CloudServices");this._token=t.token}else this._token=await o.createToken(r).init();e.config.get("ckbox.ignoreDataId")||(this._initSchema(),this._initConversion(),this._initFixers()),i&&e.commands.add("ckbox",new x(e))}getToken(){return this._token}_initConfig(){const e=this.editor;e.config.define("ckbox",{serviceOrigin:"https://api.ckbox.io",defaultUploadCategories:null,ignoreDataId:!1,language:e.locale.uiLanguage,theme:"lark",tokenUrl:e.config.get("cloudServices.tokenUrl")});if(!e.config.get("ckbox.tokenUrl"))throw new s.CKEditorError("ckbox-plugin-missing-token-url",this);e.plugins.has("ImageBlockEditing")||e.plugins.has("ImageInlineEditing")||(0,s.logError)("ckbox-plugin-image-feature-missing",e)}_initSchema(){const e=this.editor.model.schema;e.extend("$text",{allowAttributes:"ckboxLinkId"}),e.isRegistered("imageBlock")&&e.extend("imageBlock",{allowAttributes:["ckboxImageId","ckboxLinkId"]}),e.isRegistered("imageInline")&&e.extend("imageInline",{allowAttributes:["ckboxImageId","ckboxLinkId"]}),e.addAttributeCheck(((e,t)=>{if(!!!e.last.getAttribute("linkHref")&&"ckboxLinkId"===t)return!1}))}_initConversion(){const e=this.editor;e.conversion.for("downcast").add((e=>{e.on("attribute:ckboxLinkId:imageBlock",((e,t,i)=>{const{writer:o,mapper:r,consumable:n}=i;if(!n.consume(t.item,e.name))return;const s=[...r.toViewElement(t.item).getChildren()].find((e=>"a"===e.name));s&&(t.item.hasAttribute("ckboxLinkId")?o.setAttribute("data-ckbox-resource-id",t.item.getAttribute("ckboxLinkId"),s):o.removeAttribute("data-ckbox-resource-id",s))}),{priority:"low"}),e.on("attribute:ckboxLinkId",((e,t,i)=>{const{writer:o,mapper:r,consumable:n}=i;if(n.consume(t.item,e.name)){if(t.attributeOldValue){const e=_(o,t.attributeOldValue);o.unwrap(r.toViewRange(t.range),e)}if(t.attributeNewValue){const e=_(o,t.attributeNewValue);if(t.item.is("selection")){const t=o.document.selection;o.wrap(t.getFirstRange(),e)}else o.wrap(r.toViewRange(t.range),e)}}}),{priority:"low"})})),e.conversion.for("upcast").add((e=>{e.on("element:a",((e,t,i)=>{const{writer:o,consumable:r}=i;if(!t.viewItem.getAttribute("href"))return;if(!r.consume(t.viewItem,{attributes:["data-ckbox-resource-id"]}))return;const n=t.viewItem.getAttribute("data-ckbox-resource-id");if(n)if(t.modelRange)for(let e of t.modelRange.getItems())e.is("$textProxy")&&(e=e.textNode),S(e)&&o.setAttribute("ckboxLinkId",n,e);else{const e=t.modelCursor.nodeBefore||t.modelCursor.parent;o.setAttribute("ckboxLinkId",n,e)}}),{priority:"low"})})),e.conversion.for("downcast").attributeToAttribute({model:"ckboxImageId",view:"data-ckbox-resource-id"}),e.conversion.for("upcast").elementToAttribute({model:{key:"ckboxImageId",value:e=>e.getAttribute("data-ckbox-resource-id")},view:{attributes:{"data-ckbox-resource-id":/[\s\S]+/}}});const t=e.commands.get("replaceImageSource");t&&this.listenTo(t,"cleanupImage",((e,[t,i])=>{t.removeAttribute("ckboxImageId",i)}))}_initFixers(){const e=this.editor,t=e.model,i=t.document.selection;t.document.registerPostFixer(function(e){return t=>{let i=!1;const o=e.model,r=e.commands.get("ckbox");if(!r)return i;for(const e of o.document.differ.getChanges()){if("insert"!==e.type&&"attribute"!==e.type)continue;const o="insert"===e.type?new n.Range(e.position,e.position.getShiftedBy(e.length)):e.range,s="attribute"===e.type&&"linkHref"===e.attributeKey&&null===e.attributeNewValue;for(const e of o.getItems()){if(s&&e.hasAttribute("ckboxLinkId")){t.removeAttribute("ckboxLinkId",e),i=!0;continue}const o=L(e,r._chosenAssets);for(const r of o){const o="image"===r.type?"ckboxImageId":"ckboxLinkId";r.id!==e.getAttribute(o)&&(t.setAttribute(o,r.id,e),i=!0)}}}return i}}(e)),t.document.registerPostFixer(function(e){return t=>!(e.hasAttribute("linkHref")||!e.hasAttribute("ckboxLinkId"))&&(t.removeSelectionAttribute("ckboxLinkId"),!0)}(i))}}function L(e,t){const i=e.is("element","imageInline")||e.is("element","imageBlock"),o=e.hasAttribute("linkHref");return[...t].filter((t=>"image"===t.type&&i?t.attributes.imageFallbackUrl===e.getAttribute("src"):"link"===t.type&&o?t.attributes.linkHref===e.getAttribute("linkHref"):void 0))}function _(e,t){const i=e.createAttributeElement("a",{"data-ckbox-resource-id":t},{priority:5});return e.setCustomProperty("link",!0,i),i}function S(e){return!!e.is("$text")||!(!e.is("element","imageInline")&&!e.is("element","imageBlock"))}class P extends e.Plugin{static get pluginName(){return"CKBox"}static get requires(){return[E,r]}}})(),(window.CKEditor5=window.CKEditor5||{}).ckbox=o})();