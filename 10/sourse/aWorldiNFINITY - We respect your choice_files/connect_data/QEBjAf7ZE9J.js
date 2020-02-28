if (self.CavalryLogger) { CavalryLogger.start_js(["Zov8X"]); }

__d('SMSScarceCaptchaController',['CSS','$'],(function a(b,c,d,e,f,g){var h={};h.doSetup=function(i){h.submit_id=i;if(i)c('CSS').addClass(c('$')(i),'hidden_elem');};h.onActivationSuccess=function(i){c('$')('captcha_response').value=i.captcha_nonce;h.letContinue(i)};h.onVerificationComplete=function(i){h.letContinue(i)};h.letContinue=function(i){c('CSS').addClass(c('$')('smsscarce_captcha_instructions'),'hidden_elem');c('CSS').removeClass(c('$')('smsscarce_captcha_done'),'hidden_elem');if(h.submit_id)c('CSS').removeClass(c('$')(h.submit_id),'hidden_elem');};f.exports=h}),null);
__d('legacy:captcha-sms-scarce-captcha',['SMSScarceCaptchaController'],(function a(b,c,d,e,f,g){b.SMSScarceCaptchaController=c('SMSScarceCaptchaController')}),3);
__d('CheckpointSelectorEventEmitter',['EventEmitter'],(function a(b,c,d,e,f,g){'use strict';f.exports=new (c('EventEmitter'))()}),null);
__d('CheckpointSlideAsyncAnimation',['CSS','DOM','EventEmitter','EventListener','Style','ge'],(function a(b,c,d,e,f,g){var h={init:function i(j,k,l,m,n){var o=false;if(l){var p=function r(s){if(s.target&&s.target.id&&!o){o=true;var t=l.cloneNode(true),u=c('ge')(s.target.id,k),v=u.innerText;c('Style').set(u,'min-width',c('Style').get(u,'width'));c('CSS').show(t);c('DOM').setContent(u,t);var w=n.addListener('reset',function(){w.remove();c('DOM').setContent(u,v);o=false})}};for(var q in j)if(Object.prototype.hasOwnProperty.call(j,q))c('EventListener').listen(j[q],'click',p);}if(m)n.addListener('submit',function(){if(!o){o=true;c('CSS').show(m);var r=n.addListener('reset',function(){r.remove();c('CSS').hide(m);o=false})}});}};f.exports=h}),null);
__d('CheckpointSlideController',['cx','CSS','CheckpointSelectorEventEmitter','EventListener','EventEmitter','CheckpointSlideAsyncAnimation'],(function a(b,c,d,e,f,g,h){var i=null;function j(k,l,m,n,o,p,q,r){'use strict';this.$CheckpointSlideController1=k;this.$CheckpointSlideController2=l;this.$CheckpointSlideController3=m;this.$CheckpointSlideController4=n;this.$CheckpointSlideController5=o;this.$CheckpointSlideController6=p;i=this;this.$CheckpointSlideController7();this.$CheckpointSlideController8=this.$CheckpointSlideController9();c('CheckpointSlideAsyncAnimation').init(n,p,q,r,this.$CheckpointSlideController8)}j.prototype.submitButton=function(k){'use strict';var l=this.getButton(k);if(l)l.click();};j.prototype.$CheckpointSlideController9=function(){'use strict';var k=this.$CheckpointSlideController6,l=new (c('EventEmitter'))(),m,n,o;n=c('EventListener').listen(this.$CheckpointSlideController6,'error',function(){c('CSS').removeClass(k,"_jru");l.emit('reset')});o=c('EventListener').listen(this.$CheckpointSlideController6,'success',function(){c('CSS').removeClass(k,"_jru");n.remove();o.remove();m.remove();l.emit('destroy')});m=c('EventListener').listen(this.$CheckpointSlideController6,'submit',function(){c('CSS').addClass(k,"_jru");l.emit('submit')});return l};j.prototype.$CheckpointSlideController7=function(){'use strict';c('CheckpointSelectorEventEmitter').addListener('submit',function(k){if(k){var l=this.getButton(k);if(l){l.click();for(var m in this.$CheckpointSlideController4){c('CSS').addClass(this.$CheckpointSlideController4[m],"_42fr");this.$CheckpointSlideController4[m].disabled='disabled'}}}}.bind(this));c('CheckpointSelectorEventEmitter').addListener('disable_button',function(k){if(k){var l=this.getButton(k);if(l){c('CSS').addClass(l,"_42fr");l.disabled=true}}}.bind(this));c('CheckpointSelectorEventEmitter').addListener('enable_button',function(k){if(k){var l=this.getButton(k);if(l){c('CSS').removeClass(l,"_42fr");l.disabled=false}}}.bind(this))};j.prototype.getRoot=function(){'use strict';return this.$CheckpointSlideController6};j.getInstance=function(){'use strict';return i};j.prototype.getTitleBar=function(){'use strict';return this.$CheckpointSlideController1};j.prototype.getTitle=function(){'use strict';return this.$CheckpointSlideController2};j.prototype.getBottomBar=function(){'use strict';return this.$CheckpointSlideController3};j.prototype.getButton=function(k){'use strict';if(this.$CheckpointSlideController4&&this.$CheckpointSlideController4[k])return this.$CheckpointSlideController4[k];return null};j.prototype.getFooter=function(){'use strict';return this.$CheckpointSlideController5};j.prototype.getEmitter=function(){'use strict';return this.$CheckpointSlideController8};j.prototype.setTitleText=function(k){'use strict';var l=this.getTitle();if(l)l.innerText=k;};j.prototype.hideTitleBar=function(){'use strict';if(this.getTitleBar())c('CSS').hide(this.getTitleBar());};j.prototype.showTitleBar=function(){'use strict';if(this.getTitleBar())c('CSS').show(this.getTitleBar());};j.prototype.hideBottomBar=function(){'use strict';if(this.getBottomBar())c('CSS').hide(this.getBottomBar());};j.prototype.showBottomBar=function(){'use strict';if(this.getBottomBar())c('CSS').show(this.getBottomBar());};j.prototype.hideButton=function(k){'use strict';var l=this.getButton(k);if(l)c('CSS').hide(l);};j.prototype.showButton=function(k){'use strict';var l=this.getButton(k);if(l)c('CSS').show(l);};j.prototype.hideFooter=function(){'use strict';if(this.getFooter())c('CSS').hide(this.getFooter());};j.prototype.showFooter=function(){'use strict';if(this.getFooter())c('CSS').show(this.getFooter());};f.exports=j}),null);
__d('PlatformDialogE2ETracking',['DOMEventListener'],(function a(b,c,d,e,f,g){var h={init:function i(j){var k=j.getForm(),l=k.e2e.value;l=l?JSON.parse(l):{};var m=Object.keys(l).filter(function(n){return /^submit_/.test(n)}).length;c('DOMEventListener').add(k,'submit',function(){if(j.getDisplay()!=='async')if(b._cavalry){l['start_'+m]=window._cstart;l['tti_'+m]=_cavalry.data[_cavalry.tti]}else if(b.CavalryLogger){l['start_'+m]=window._cstart;l['tti_'+m]=CavalryLogger.getInstance().getLastTtiValue()}l['submit_'+m]=Date.now();k.e2e.value=JSON.stringify(l)})},asyncUpdate:function i(){if(b._cavalry){_cavalry.log(_cavalry.tti)}else if(b.CavalryLogger){var j=CavalryLogger.getInstance();j.setTimeStamp(j.tti_event,true)}}};f.exports=h}),null);
__d('PluginResize',['Locale','Log','UnverifiedXD','getOffsetParent','getStyleProperty'],(function a(b,c,d,e,f,g){function h(l){l=l||document.body;var m=0,n=c('getOffsetParent')(l);if(c('Locale').isRTL()&&n){m=n.offsetWidth-l.offsetLeft-l.offsetWidth}else if(!c('Locale').isRTL())m=l.offsetLeft;return i(l)+m}function i(l){return Math.ceil(parseFloat(c('getStyleProperty')(l,'width')))||l.offsetWidth}function j(l){l=l||document.body;return l.offsetHeight+l.offsetTop}function k(l,m,event,n){this.calcWidth=l||h;this.calcHeight=m||j;this.width=undefined;this.height=undefined;this.reposition=!!n;this.event=event||'resize'}Object.assign(k.prototype,{resize:function l(){var m=this.calcWidth(),n=this.calcHeight();if(m!==this.width||n!==this.height){c('Log').debug('Resizing Plugin: (%s, %s, %s, %s)',m,n,this.event,this.reposition);this.width=m;this.height=n;c('UnverifiedXD').send({type:this.event,width:m,height:n,reposition:this.reposition})}return this},auto:function l(m){setInterval(this.resize.bind(this),m||250);return this}});k.auto=function(l,event,m){return new k(h.bind(null,l),j.bind(null,l),event).resize().auto(m)};k.autoHeight=function(l,m,event,n){return new k(function(){return l},j.bind(null,m),event).resize().auto(n)};k.getElementWidth=i;f.exports=k}),null);
__d('PluginXDReady',['Arbiter','UnverifiedXD'],(function a(b,c,d,e,f,g){var h={handleMessage:function i(j){if(!j.method)return;try{c('Arbiter').inform('Connect.Unsafe.'+j.method,JSON.parse(j.params),c('Arbiter').BEHAVIOR_PERSISTENT)}catch(k){}}};b.XdArbiter=h;c('UnverifiedXD').send({xd_action:'plugin_ready',name:window.name});f.exports=null}),null);
__d('FormDisableOnSubmit',[],(function a(b,c,d,e,f,g){function h(i){'use strict';this._form=i}h.prototype.enable=function(){'use strict';this._subscription=this._form.subscribe(['submit','reset'],this._handle.bind(this))};h.prototype.disable=function(){'use strict';this._form.unsubscribe(this._subscription);this._subscription=null};h.prototype._handle=function(i,j){'use strict';if(i=='submit'){if(this._disabled)return false;this._disabled=true;return true}this._disabled=false};Object.assign(h.prototype,{_subscription:null,_disabled:false});f.exports=h}),null);
__d('CheckpointStepIconSwitcher',['CSS'],(function a(b,c,d,e,f,g){var h=null,i=null;function j(k){if(h!==null){c('CSS').hide(h[i]);c('CSS').show(h[k])}i=k}f.exports={initialize:function k(l,m){h=l;var n=i;i=m;if(n!==null)j(n);},show:function k(l){j(l)}}}),null);