(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();class Kd{constructor(e,t,n){this.world=e,this.cfg=t,this.systems=n}step(e){this.world.t+=e;for(const t of this.systems)t(this.world,this.cfg,e)}setConfig(e){this.cfg=e}}class xu{constructor(e,t,n=()=>!1){this.fixedDt=e,this.step=t,this.isPaused=n}acc=0;lastMs=0;tick(e){if(this.lastMs===0&&(this.lastMs=e),this.isPaused()){this.lastMs=e,this.acc=0;return}const t=Math.max(0,(e-this.lastMs)/1e3);for(this.lastMs=e,this.acc+=t;this.acc>=this.fixedDt;)this.step(this.fixedDt),this.acc-=this.fixedDt}}const $d={"app.title":"Kestrel Drift","app.logo_alt":"Kestrel Drift logo","ui.menu":"Menu","ui.loading":"Loading","ui.fullscreen":"Fullscreen","menu.continue":"Continue","menu.restart":"Restart","menu.keybindings":"Keybindings","menu.gamepad":"Gamepad calibration","menu.settings":"Settings","common.back":"← Back","common.apply":"Apply","common.save":"Save","common.reset":"Reset","common.canceled":"Canceled.","hint.esc_close":"Esc — close","hint.esc_back":"Esc — back","hint.esc_cancel_back":"Esc — cancel capture / back","kb.reset_defaults":"Reset to defaults","kb.hint_click_bind":"Click a bind to rebind.","kb.gamepad_note":"Gamepad (alt): Toggle Cam = Button 1, Toggle Dev = Button 9, Drop = Button 0, Cam Tilt = Axis 4, Cam Zoom = Axis 5","kb.press_key_for":"Press a key for: {id} (Esc to cancel)","kb.bound":"Bound {id} to {key}.","kb.reset_done":"Reset done.","kb.bind.throttleUp":"Throttle Up","kb.bind.throttleDown":"Throttle Down","kb.bind.yawLeft":"Yaw Left","kb.bind.yawRight":"Yaw Right","kb.bind.pitchUp":"Pitch Up","kb.bind.pitchDown":"Pitch Down","kb.bind.rollLeft":"Roll Left","kb.bind.rollRight":"Roll Right","kb.bind.camTiltUp":"Camera Tilt Up","kb.bind.camTiltDown":"Camera Tilt Down","kb.bind.camZoomIn":"Camera Zoom In","kb.bind.camZoomOut":"Camera Zoom Out","kb.bind.minimapZoomIn":"Minimap Zoom In","kb.bind.minimapZoomOut":"Minimap Zoom Out","kb.bind.drop":"Drop Payload","kb.bind.toggleDev":"Toggle Debug","kb.bind.toggleCam":"Switch Camera View","kb.bind.restart":"Restart Simulation","settings.language":"Language","settings.drone_preset":"Drone preset","settings.select_zone":"Select zone","settings.wind_enabled":"Wind enabled","settings.wind_direction":"Wind direction","settings.wind_dir_viz":"Wind direction visualization","settings.wind_base_speed":"Base speed (m/s)","settings.wind_gust_max":"Gust max (m/s)","settings.variation":"Variation","settings.gustiness":"Gustiness","gp.waiting":"Waiting for gamepad… (press any button/stick to wake it)","gp.no_gamepad":"No gamepad detected. Press any button/stick to wake it.","gp.detected":"{id} (axes {axes}, buttons {buttons})","gp.hint_click_field":"Click a field to rebind. Esc to cancel.","gp.axis_captured":"Axis captured.","gp.button_captured":"Button captured.","gp.axis_captured_for_action":"Axis captured for action.","gp.axis_line":"AXIS {i}  {v}","gp.btn_none":"BTN: none","gp.btn_list":"BTN: {list}","gp.move_axis_for":"Move axis for: {key} (Esc to cancel)","gp.press_button_for":"Press button for: {key} (Esc to cancel)","gp.move_axis_for_action":"Move axis for action: {key} (Esc to cancel)","gp.swap_yaw_roll":"Swap Yaw/Roll","gp.inverted":"Inverted","gp.normal":"Normal","gp.bind_axis":"Bind Axis","gp.buttons_header":"Buttons","gp.invert_toggled":"Invert toggled.","gp.saved":"Saved to localStorage.","gp.reset_defaults":"Reset to defaults.","gp.bind.yaw":"Yaw","gp.bind.pitch":"Pitch","gp.bind.roll":"Roll","gp.bind.throttle":"Throttle","gp.bind.cam_tilt":"Cam Tilt","gp.bind.cam_zoom":"Cam Zoom","gp.bind.drop":"Drop","gp.bind.toggle_cam":"Toggle Cam","gp.bind.restart":"Restart","gp.bind.toggle_dev":"Toggle Dev","osd.mission.title":"MISSION","osd.mission.status.empty":"EMPTY","osd.mission.status.landed":"LANDED","osd.mission.status.dropped":"DROPPED","osd.mission.status.armed":"ARMED","osd.mission.hitTail":"{d}m","osd.mission.hitTailMissing":"--","touch.restart":"RESTART","touch.drop":"DROP","touch.camera":"CAM"},Zd={"app.title":"Kestrel Drift","app.logo_alt":"Логотип Kestrel Drift","ui.menu":"Меню","ui.loading":"Завантаження","ui.fullscreen":"Повний екран","menu.continue":"Продовжити","menu.restart":"Перезапустити","menu.keybindings":"Клавіші","menu.gamepad":"Калібрування геймпада","menu.settings":"Налаштування","common.back":"← Назад","common.apply":"Застосувати","common.save":"Зберегти","common.reset":"Скинути","common.canceled":"Скасовано.","hint.esc_close":"Esc — закрити","hint.esc_back":"Esc — назад","hint.esc_cancel_back":"Esc — скасувати захоплення / назад","kb.reset_defaults":"Скинути до стандартних","kb.hint_click_bind":"Натисни на бінд, щоб перев’язати.","kb.gamepad_note":"Геймпад (alt): Toggle Cam = Button 1, Toggle Dev = Button 9, Drop = Button 0, Cam Tilt = Axis 4, Cam Zoom = Axis 5","kb.press_key_for":"Натисни клавішу для: {id} (Esc — скасувати)","kb.bound":"Прив’язано {id} до {key}.","kb.reset_done":"Скинуто.","kb.bind.throttleUp":"Газ вгору","kb.bind.throttleDown":"Газ вниз","kb.bind.yawLeft":"Yaw вліво","kb.bind.yawRight":"Yaw вправо","kb.bind.pitchUp":"Pitch вгору","kb.bind.pitchDown":"Pitch вниз","kb.bind.rollLeft":"Roll вліво","kb.bind.rollRight":"Roll вправо","kb.bind.camTiltUp":"Тілт камери вгору","kb.bind.camTiltDown":"Тілт камери вниз","kb.bind.camZoomIn":"Зум камери +","kb.bind.camZoomOut":"Зум камери −","kb.bind.minimapZoomIn":"Зум мапи +","kb.bind.minimapZoomOut":"Зум мапи -","kb.bind.drop":"Скинути вантаж","kb.bind.toggleDev":"Debug режим","kb.bind.toggleCam":"Перемкнути камеру","kb.bind.restart":"Перезапуск симуляції","settings.language":"Мова","settings.drone_preset":"Пресет дрона","settings.select_zone":"Вибір зони","settings.wind_enabled":"Вітер увімкнено","settings.wind_direction":"Напрям вітру","settings.wind_dir_viz":"Візуалізація напрямку вітру","settings.wind_base_speed":"Базова швидкість (м/с)","settings.wind_gust_max":"Макс. порив (м/с)","settings.variation":"Варіативність","settings.gustiness":"Пористість","gp.waiting":"Очікую геймпад… (натисни будь-яку кнопку/стік, щоб розбудити)","gp.no_gamepad":"Геймпад не знайдено. Натисни будь-яку кнопку/стік, щоб розбудити.","gp.detected":"{id} (осі {axes}, кнопки {buttons})","gp.hint_click_field":"Клікни по полю, щоб перев’язати. Esc — скасувати.","gp.axis_captured":"Вісь захоплено.","gp.button_captured":"Кнопку захоплено.","gp.axis_captured_for_action":"Вісь захоплено для дії.","gp.axis_line":"AXIS {i}  {v}","gp.btn_none":"BTN: немає","gp.btn_list":"BTN: {list}","gp.move_axis_for":"Рухни вісь для: {key} (Esc — скасувати)","gp.press_button_for":"Натисни кнопку для: {key} (Esc — скасувати)","gp.move_axis_for_action":"Рухни вісь для дії: {key} (Esc — скасувати)","gp.swap_yaw_roll":"Поміняти Yaw/Roll місцями","gp.inverted":"Інвертовано","gp.normal":"Нормально","gp.bind_axis":"Прив’язати вісь","gp.buttons_header":"Кнопки","gp.invert_toggled":"Інверсію перемкнуто.","gp.saved":"Збережено в localStorage.","gp.reset_defaults":"Скинуто до стандартних.","gp.bind.yaw":"Yaw","gp.bind.pitch":"Pitch","gp.bind.roll":"Roll","gp.bind.throttle":"Throttle","gp.bind.cam_tilt":"Tilt камери","gp.bind.cam_zoom":"Зум камери","gp.bind.drop":"Скидання","gp.bind.toggle_cam":"Камера","gp.bind.restart":"Рестарт","gp.bind.toggle_dev":"Dev","osd.mission.title":"МІСІЯ","osd.mission.status.empty":"ПУСТО","osd.mission.status.landed":"НА ЗЕМЛІ","osd.mission.status.dropped":"СКИНУТО","osd.mission.status.armed":"ГОТОВИЙ","osd.mission.hitTail":"{d}м","osd.mission.hitTailMissing":"--","touch.restart":"РЕСТАРТ","touch.drop":"СКИД","touch.camera":"КАМЕРА"},Dc={uk:"Українська",en:"English"},Ml={en:$d,uk:Zd},vu="kd.locale";let Ic=Jd();function Jr(){return Ic}function jd(i){Ic=i,localStorage.setItem(vu,i)}function Jd(){const i=localStorage.getItem(vu);return i&&i in Dc?i:"uk"}function ke(i,e){const t=Ml[Ic][i]??Ml.en[i]??i;return e?t.replace(/\{(\w+)\}/g,(n,s)=>String(e[s]??`{${s}}`)):t}const Mu="kd.gp.lastId",Lc="kd.gp.calib.v1.";function yu(i,e,t){return Math.max(e,Math.min(t,i))}function Qd(){const i=localStorage.getItem(Mu);if(!i)return null;const e=Nc(i);return e?{id:i,calib:e}:null}function ef(i){return(i.id||"gamepad").toLowerCase().trim().replace(/\s+/g," ").slice(0,120)}function oa(){return{axis:{roll:0,pitch:1,thr:2,yaw:3,camTilt:4,camZoom:5},invert:{roll:1,pitch:1,yaw:1,thr:1,camTilt:-1,camZoom:1},buttons:{drop:0,restart:1,toggleCam:-6,toggleDev:-7},swapYawRoll:!1}}function tf(i,e){const t=i||"gamepad",n=Lc+t;localStorage.setItem(n,JSON.stringify(e)),localStorage.setItem(Mu,t)}function Nc(i){const e=Lc+(i||"gamepad"),t=localStorage.getItem(e);if(!t)return null;try{const n=JSON.parse(t);return!n?.axis||!n?.invert||!n?.buttons?null:n}catch{return null}}function nf(i){const e=i||"gamepad",t=Lc+e;return localStorage.removeItem(t),localStorage.getItem("kd.gp.lastId")===e&&localStorage.removeItem("kd.gp.lastId"),oa()}function Xn(i,e){return yu(i.axes?.[e]??0,-1,1)}function as(i,e){return i.buttons?.[e]?.pressed??!1}function yl(i,e){return yu(i.buttons?.[e]?.value??0,0,1)}let ca=[],la=[],Po=[],Do=[];function On(i){const e=i.axes?.length??0;ca=new Array(e),Po=new Array(e);for(let n=0;n<e;n++){const s=Xn(i,n);ca[n]=s,Po[n]=s}const t=i.buttons?.length??0;la=new Array(t),Do=new Array(t);for(let n=0;n<t;n++){const s=as(i,n);la[n]=s,Do[n]=s}}function Sl(i,e=.6){const s=i.axes?.length??0;for(let r=0;r<s;r++){const a=Xn(i,r),o=ca[r]??a,c=Po[r]??0;ca[r]=a;const l=Math.abs(a)>=e,h=Math.abs(a-c)>=.25,u=Math.abs(a-o)>.06;if(l&&h&&u)return r}return null}function sf(i){const e=i.buttons?.length??0;for(let t=0;t<e;t++){const n=as(i,t),s=la[t]??!1;la[t]=n;const r=Do[t]??!1;if(n&&!s&&!r)return t}return null}const bl={name:"Generic Mode 2",match:i=>!0,axis:{roll:3,pitch:1,thr:2,yaw:0},invert:{roll:1,pitch:1,yaw:1,thr:1}},rf={name:"Radiomaster TX12 Mode 2",match:i=>{const e=i.toLowerCase();return e.includes("radiomaster")||e.includes("tx12")||e.includes("opentx")||e.includes("edgetx")},axis:{roll:0,pitch:1,thr:2,yaw:3},invert:{roll:1,pitch:1,yaw:1,thr:1}};function af(i){return[rf,bl].find(t=>t.match(i))??bl}const El=[];function fr(i,e){if(e===-1||e<0)return!1;const t=as(i,e),n=El[e]??!1;return El[e]=t,t&&!n}function of(i){const e=Nc(i);if(e)return e;const t=af(i),n=oa();return n.axis.roll=t.axis.roll,n.axis.pitch=t.axis.pitch,n.axis.yaw=t.axis.yaw,n.axis.thr=t.axis.thr,n.invert.roll=t.invert.roll,n.invert.pitch=t.invert.pitch,n.invert.yaw=t.invert.yaw,n.invert.thr=t.invert.thr,n}function cf(){const i=navigator.getGamepads?.()??[],e=Array.from(i).find(Boolean)??null;if(!e)return{connected:!1,gamepadId:"no gamepad",gamepadIndex:-1,rcRaw:{roll:0,pitch:0,yaw:0,thr:0},frame:{roll:0,pitch:0,yaw:0,throttle:0,drop:!1},extras:{cam:{tiltAxis:0,zoomAxis:0},actions:{toggleCam:!1,toggleDev:!1,restart:!1,drop:!1}}};const t=e.id||"gamepad",n=of(t),s=n.invert.roll*Xn(e,n.axis.roll),r=n.invert.pitch*Xn(e,n.axis.pitch),a=n.invert.yaw*Xn(e,n.axis.yaw),o=n.invert.thr*Xn(e,n.axis.thr),c=n.swapYawRoll?a:s,l=n.swapYawRoll?s:a,h=r,u=o,d=fr(e,n.buttons.toggleCam),m=fr(e,n.buttons.toggleDev),g=fr(e,n.buttons.restart),_=fr(e,n.buttons.drop),p=.08,f=n.invert.camTilt*Xn(e,n.axis.camTilt),y=Math.abs(f)<p?0:f,b=n.invert.camZoom*Xn(e,n.axis.camZoom),S=Math.abs(b)<p?0:b,T=yl(e,6),w=yl(e,7),R=as(e,14),x=(as(e,15)?1:0)-(R?1:0),M=w-T,P=Math.abs(M)>.001?M:x,N=S!==0?S:P;return{connected:!0,gamepadId:t,gamepadIndex:e.index??-1,rcRaw:{roll:c,pitch:h,yaw:l,thr:u},frame:{roll:c,pitch:h,yaw:l,throttle:u,drop:_},extras:{cam:{tiltAxis:y,zoomAxis:N},actions:{toggleCam:d,toggleDev:m,restart:g,drop:_}}}}const Su="kd.keybinds.v1",Qr={throttleUp:"KeyW",throttleDown:"KeyS",yawLeft:"KeyA",yawRight:"KeyD",rollLeft:"ArrowLeft",rollRight:"ArrowRight",pitchUp:"ArrowUp",pitchDown:"ArrowDown",camZoomOut:"KeyQ",camZoomIn:"KeyE",camTiltUp:"KeyR",camTiltDown:"KeyF",drop:"Space",toggleDev:"KeyZ",toggleCam:"KeyC",restart:"KeyX",minimapZoomOut:"BracketLeft",minimapZoomIn:"BracketRight"};function ha(){try{const i=localStorage.getItem(Su);if(!i)return{...Qr};const e=JSON.parse(i);return{...Qr,...e}}catch{return{...Qr}}}function bu(i){localStorage.setItem(Su,JSON.stringify(i))}function lf(){const i={...Qr};return bu(i),i}function Tl(i){return i==="Space"?"Space":i.startsWith("Key")?i.slice(3):i.startsWith("Digit")?i.slice(5):i.startsWith("Arrow")?i.replace("Arrow","Arrow "):i}const wt=new Set,Wn=new Set,Eu=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"]);window.addEventListener("keydown",i=>{Eu.has(i.code)&&i.preventDefault(),wt.has(i.code)||Wn.add(i.code),wt.add(i.code)});window.addEventListener("keyup",i=>{Eu.has(i.code)&&i.preventDefault(),wt.delete(i.code)});function Ti(i,e){return(e?1:0)-(i?1:0)}function hf(){const i=ha(),e=wt.has(i.throttleUp),t=wt.has(i.throttleDown),n=wt.has(i.yawLeft),s=wt.has(i.yawRight),r=wt.has(i.rollLeft),a=wt.has(i.rollRight),o=wt.has(i.pitchUp),c=wt.has(i.pitchDown);return{roll:Ti(r,a),pitch:Ti(c,o),yaw:Ti(n,s),throttle:Ti(t,e),drop:wt.has(i.drop)}}function uf(){const i=ha(),e=wt.has(i.camTiltUp),t=wt.has(i.camTiltDown),n=wt.has(i.camZoomOut),s=wt.has(i.camZoomIn),r=wt.has(i.minimapZoomOut),a=wt.has(i.minimapZoomIn),o=Wn.has(i.toggleCam),c=Wn.has(i.toggleDev),l=Wn.has(i.restart),h=Wn.has(i.drop);return o&&Wn.delete(i.toggleCam),c&&Wn.delete(i.toggleDev),l&&Wn.delete(i.restart),h&&Wn.delete(i.drop),{cam:{tiltAxis:Ti(e,t),zoomAxis:Ti(n,s)},minimap:{zoomAxis:Ti(r,a)},actions:{toggleCam:o,toggleDev:c,restart:l,drop:h}}}const wl=64,Al=.08,Rl=1.4,df=.006,ff=.25;function pf(i,e,t){return Math.max(e,Math.min(t,i))}function qs(i){return pf(i,-1,1)}function Cl(i,e){return Math.hypot(i.x-e.x,i.y-e.y)}function Pl(i,e){const t=i.x/e,n=i.y/e,s=Math.hypot(t,n);return s<=1?{x:t,y:n}:{x:t/s,y:n/s}}function Dl(i,e,t){const n=e,s=Math.abs(i.x)<n?0:(Math.abs(i.x)-n)/(1-n)*Math.sign(i.x),r=Math.abs(i.y)<n?0:(Math.abs(i.y)-n)/(1-n)*Math.sign(i.y),a=Math.sign(s)*Math.pow(Math.abs(s),t),o=Math.sign(r)*Math.pow(Math.abs(r),t);return{x:qs(a),y:qs(o)}}class mf{el=null;pointers=new Map;left={activeId:null,origin:{x:0,y:0},pos:{x:0,y:0}};right={activeId:null,origin:{x:0,y:0},pos:{x:0,y:0}};leftStart={x:0,y:0};rightStart={x:0,y:0};pinchIds=null;pinchDist0=0;dropDown=!1;dropPressedFrame=!1;restartDown=!1;restartPressedFrame=!1;camDown=!1;toggleCamPressedFrame=!1;tiltActiveId=null;tiltLastY=0;tiltDeltaDegFrame=0;zoomDeltaFrame=0;attach(e){this.el||(this.el=e,e.style.touchAction="none",e.style.userSelect="none",e.addEventListener("pointerdown",this.onDown,{passive:!1}),e.addEventListener("pointermove",this.onMove,{passive:!1}),e.addEventListener("pointerup",this.onUp,{passive:!1}),e.addEventListener("pointercancel",this.onUp,{passive:!1}),e.addEventListener("contextmenu",t=>t.preventDefault()))}beginFrame(){this.dropPressedFrame=!1,this.tiltDeltaDegFrame=0,this.zoomDeltaFrame=0}getHudState(){if(this.el){const e=this.el.getBoundingClientRect(),t=e.width,n=e.height,s=72,r=n*.5,a={x:s,y:r},o={x:t-s,y:r};this.left.activeId===null&&(this.left.origin=a),this.right.activeId===null&&(this.right.origin=o)}return{left:this.left,right:this.right,dropDown:this.dropDown,restartDown:this.restartDown,camDown:this.camDown}}snapshot(){const e=(navigator.maxTouchPoints??0)>0,t=Dl(this.left.pos,Al,Rl),n=Dl(this.right.pos,Al,Rl),s=t.x,r=-t.y,a=n.x,o=-n.y,c=this.left.activeId!==null||this.right.activeId!==null||this.tiltActiveId!==null||this.pinchIds!==null||this.dropDown||this.dropPressedFrame,l={roll:a,pitch:o,yaw:s,throttle:r,drop:!1},h={cam:{tiltAxis:qs(this.tiltDeltaDegFrame),zoomAxis:qs(this.zoomDeltaFrame)},minimap:{zoomAxis:qs(this.zoomDeltaFrame)},actions:{drop:this.dropPressedFrame,restart:this.restartPressedFrame,toggleCam:this.toggleCamPressedFrame}};return this.dropPressedFrame=!1,this.restartPressedFrame=!1,this.toggleCamPressedFrame=!1,this.tiltDeltaDegFrame=0,this.zoomDeltaFrame=0,{connected:e,active:c,frame:l,extras:h}}getCssPoint(e){const t=this.el.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}}getSize(){const e=this.el.getBoundingClientRect();return{w:e.width,h:e.height}}isInTiltStrip(e,t,n){const s=t*.22,r=(t-s)*.5,a=r+s,o=n*.12,c=n*.12;return e.x>=r&&e.x<=a&&e.y>=o&&e.y<=n-c}hitButton(e,t,n,s){const u=(t-388)*.5+s*134,d=n-18-58;return e.x>=u&&e.x<=u+120&&e.y>=d&&e.y<=d+58}tryStartPinch(){if(this.pinchIds||this.pointers.size<2)return;const t=Array.from(this.pointers.keys()).filter(n=>n!==this.left.activeId&&n!==this.right.activeId&&n!==this.tiltActiveId);t.length<2||(this.pinchIds=[t[0],t[1]],this.pinchDist0=Cl(this.pointers.get(t[0]).p,this.pointers.get(t[1]).p))}updatePinch(){if(!this.pinchIds)return;const e=this.pointers.get(this.pinchIds[0]),t=this.pointers.get(this.pinchIds[1]);if(!e||!t){this.pinchIds=null;return}const n=Cl(e.p,t.p);this.pinchDist0<=1e-6&&(this.pinchDist0=n);const s=n-this.pinchDist0;this.pinchDist0=n,this.zoomDeltaFrame+=s*df}onDown=e=>{if(e.preventDefault(),!this.el)return;e.target.setPointerCapture?.(e.pointerId);const t=this.getCssPoint(e);this.pointers.set(e.pointerId,{id:e.pointerId,p:t});const{w:n,h:s}=this.getSize();if(this.hitButton(t,n,s,0)){this.restartDown=!0,this.restartPressedFrame=!0;return}if(this.hitButton(t,n,s,1)){this.dropDown=!0,this.dropPressedFrame=!0;return}if(this.hitButton(t,n,s,2)){this.camDown=!0,this.toggleCamPressedFrame=!0;return}if(this.isInTiltStrip(t,n,s)&&this.tiltActiveId===null){this.tiltActiveId=e.pointerId,this.tiltLastY=t.y;return}const r=72,a=s*.5,o={x:r,y:a},c={x:n-r,y:a};t.x<n*.5&&this.left.activeId===null?(this.left.activeId=e.pointerId,this.left.origin=o,this.leftStart=t,this.left.pos={x:0,y:0}):t.x>=n*.5&&this.right.activeId===null&&(this.right.activeId=e.pointerId,this.right.origin=c,this.rightStart=t,this.right.pos={x:0,y:0}),this.tryStartPinch()};onMove=e=>{e.preventDefault();const t=this.pointers.get(e.pointerId);if(t){if(t.p=this.getCssPoint(e),this.tiltActiveId===e.pointerId){const n=t.p.y-this.tiltLastY;this.tiltLastY=t.p.y,this.tiltDeltaDegFrame+=n*ff}this.left.activeId===e.pointerId?this.left.pos=Pl({x:t.p.x-this.leftStart.x,y:t.p.y-this.leftStart.y},wl):this.right.activeId===e.pointerId&&(this.right.pos=Pl({x:t.p.x-this.rightStart.x,y:t.p.y-this.rightStart.y},wl)),this.updatePinch()}};onUp=e=>{e.preventDefault(),this.pointers.delete(e.pointerId),this.left.activeId===e.pointerId&&(this.left.activeId=null,this.left.pos={x:0,y:0}),this.right.activeId===e.pointerId&&(this.right.activeId=null,this.right.pos={x:0,y:0}),this.tiltActiveId===e.pointerId&&(this.tiltActiveId=null),this.dropDown=!1,this.restartDown=!1,this.camDown=!1,this.pinchIds=null,this.pinchDist0=0,this.tryStartPinch()}}const Uc=new mf;function gf(i){Uc.attach(i)}function _f(){return Uc.snapshot()}function xf(){return Uc.getHudState()}function Ua(i){return Math.max(-1,Math.min(1,i))}class vf{update(e){const t=cf(),n=hf(),s=uf(),r=_f(),a=t.connected?t.extras.cam.tiltAxis??0:0,o=t.connected?t.extras.cam.zoomAxis??0:0,c=s.cam.tiltAxis??0,l=s.cam.zoomAxis??0,h=r.connected?r.extras.cam.tiltAxis??0:0,u=r.connected?r.extras.cam.zoomAxis??0:0,d=Ua(a+c+h),m=Ua(o+l+u),g=s.minimap.zoomAxis??0,_=r.connected?r.extras.minimap.zoomAxis??0:0,p=Ua(g+_),f={toggleCam:(t.connected?t.extras.actions.toggleCam:!1)||s.actions.toggleCam||(r.connected?r.extras.actions.toggleCam:!1),toggleDev:(t.connected?t.extras.actions.toggleDev:!1)||s.actions.toggleDev,restart:(t.connected?t.extras.actions.restart:!1)||s.actions.restart||(r.connected?r.extras.actions.restart:!1),drop:(t.connected?t.extras.actions.drop:!1)||s.actions.drop||(r.connected?r.extras.actions.drop:!1)};let y=t.connected?"gamepad":"keyboard",b=t.connected?t.frame:n;return r.connected&&r.active&&(y="touch",b=r.frame),{source:y,raw:b,camAxes:{tiltAxis:d,zoomAxis:m},minimapAxes:{zoomAxis:p},actions:f,touchHud:r.connected?xf():void 0,gamepad:{connected:t.connected,id:t.connected?t.gamepadId:"no gamepad",index:t.connected?t.gamepadIndex:-1,rcRaw:t.connected?t.rcRaw:{roll:0,pitch:0,yaw:0,thr:0}}}}}function ua(){return{roll:0,pitch:0,yaw:0,throttle:0,drop:!1}}function bn(i,e,t){return Math.max(e,Math.min(t,i))}function Mf(i){return i<0?-1:1}function Fa(i,e){const t=bn(e,0,.95),n=Math.abs(i);if(n<=t)return 0;const s=(n-t)/(1-t);return Mf(i)*s}function Oa(i,e){const t=bn(e,0,1),n=Math.abs(i),s=(1-t)*n+t*n*n*n;return i<0?-s:s}function yf(i,e,t){const n=bn(e,0,.99),s=Oa(Fa(bn(i.roll,-1,1),n),t),r=Oa(Fa(bn(i.pitch,-1,1),n),t),a=Oa(Fa(bn(i.yaw,-1,1),n),t),o=bn(i.throttle,-1,1);return{roll:bn(s,-1,1),pitch:bn(r,-1,1),yaw:bn(a,-1,1),throttle:o,drop:!!i.drop}}class Sf{constructor(e){this.cfg=e}raw=ua();frame=ua();prevDropDown=!1;update(){const e=yf(this.raw,this.cfg.deadzone,this.cfg.expo),t=!!this.raw.drop,n=t&&!this.prevDropDown;this.prevDropDown=t,e.drop=n,this.frame=e}getFrame(){return this.frame}setRaw(e){this.raw=e}}function Il(i){return i=i%360,i<0&&(i+=360),i}function bf(i){return i=i%360,i>180&&(i-=360),i<-180&&(i+=360),i}function Tu(i){const e=i.targetPos.x-i.dronePos.x,t=i.targetPos.z-i.dronePos.z,n=Math.hypot(e,t),s=i.wind.x,r=i.wind.z,a=Math.hypot(s,r),o=Math.hypot(i.droneVel.x,i.droneVel.z),c=i.droneVel.x+s,l=i.droneVel.z+r,h=Math.hypot(c,l),u=Math.atan2(s,-r),d=Il(u*180/Math.PI),m=Il(i.droneRot.yaw*180/Math.PI),g=bf(d-m),_=i.payloads??[],p=_.some(y=>!!y&&y.active),f=_.length>0&&_.every(y=>!!y&&y.landed);return{distToTargetM:n,windSpeedMps:a,windAzimuthDeg:d,windRelDeg:g,airSpeedMps:o,groundSpeedMps:h,yawDeg:m,gustCount:i.gusts.length,payloadActive:p,payloadLanded:f}}function wu(i,e){if(!Number.isFinite(i)||!Number.isFinite(e)||e<=0)return 1;const t=i*Math.PI/180,n=e*Math.PI/180;return Math.tan(t*.5)/Math.tan(n*.5)}function ti(i){return(typeof i=="number"&&Number.isFinite(i)?i:0).toFixed(3).padStart(7," ")}function Ll(i,e=42){const t=typeof i=="string"?i:"";return t.length>e?t.slice(0,e-1)+"…":t}function pr(i,e,t="--"){return typeof i!="number"||!Number.isFinite(i)?t:i.toFixed(e)}function mr(i){return i.toFixed(0)}function cn(i){return i.toFixed(1)}function bs(i){return i.toFixed(2)}function Ef(i,e){return(Math.atan2(i,e)*180/Math.PI+360)%360}function Tf(i){const e=[0,3,1,2];for(let t=0;t<e.length;t++){const n=e[t];if(n<i.length&&i[n]>1e-6)return n}for(let t=0;t<i.length;t++)if(i[t]>1e-6)return t;return-1}function wf(i){return i.landed?"LANDED":i.active?"FALL":"OFF"}function Af(i,e,t){return Math.sqrt(i*i+e*e+t*t)}class Rf{constructor(e,t){this.el=e,this.config=t,this.applyVisibility()}config;enabled=!0;fps=0;lastNow=0;setEnabled(e){this.enabled=e,this.applyVisibility()}toggle(){this.enabled=!this.enabled,this.applyVisibility()}render(e,t){if(!this.enabled)return;if(typeof t=="number"){if(this.lastNow>0){const M=1e3/Math.max(1,t-this.lastNow);this.fps=this.fps<=0?M:this.fps*.9+M*.1}this.lastNow=t}const n=e.gamepadId??"no gamepad",s=Number.isFinite(e.gamepadIndex)?e.gamepadIndex:-1,r=e.rcRaw,a=e.rc,o=e.camera?.combatPitchDeg,c=wu(this.config.render.cameras.combat.fovDegDefault,e.camera?.combatFow),l=Tu(e),h=e.dronePos.x,u=e.dronePos.y,d=e.dronePos.z,m=e.targetPos.x-h,g=e.targetPos.z-d,_=Ef(m,g),p=e.presetName??"default",f=e.payloadSlotsKg??[],y=Tf(f),b=[];for(let x=0;x<4;x++){const M=f[x]??0,P=M>1e-6,N=P?"READY":"EMPTY",U=x===y?" <- next":"";b.push(`  slot${x}: ${N} ${P?`(${bs(M)}kg)`:""}${U}`.trimEnd())}const S=e.payloadImpacts??[],T=new Map;for(let x=0;x<S.length;x++){const M=S[x];T.set(M.payloadId,M)}const w=e.payloads??[],R=[];if(!w.length)R.push("  (no dropped payloads)");else for(let x=0;x<w.length;x++){const M=w[x],P=wf(M),N=M.pos.x,U=M.pos.y,O=M.pos.z,V=M.vel.x,k=M.vel.y,G=M.vel.z,K=T.get(M.id)??null,ne=K?` miss:${cn(K.missM)}m`:"";R.push(`  #${M.id} ${P}  pos(${cn(N)},${cn(U)},${cn(O)})  vel(${cn(V)},${cn(k)},${cn(G)})${ne}`)}const C=Af(e.droneCtrlAcc.x,e.droneCtrlAcc.y,e.droneCtrlAcc.z);this.el.textContent=`DEV OVERLAY (Z)
preset: ${Ll(p)}
fps: ${this.fps?this.fps.toFixed(1):"--"}
t: ${e.t.toFixed(2)} s

HUD METRICS
pos:  X ${cn(h)}  Z ${cn(d)}
alt:  ${cn(u)} m
dist: ${cn(l.distToTargetM)} m
tgt:  az ${mr(_)}°

wind: ${bs(l.windSpeedMps)} m/s  az: ${mr(l.windAzimuthDeg)}°  rel: ${mr(l.windRelDeg)}°
air:  ${bs(l.airSpeedMps)} m/s
gnd:  ${bs(l.groundSpeedMps)} m/s

yaw: ${mr(l.yawDeg)}°   gusts: ${l.gustCount}

PAYLOADS
SLOTS
${b.join(`
`)}
UNITS
${R.join(`
`)}

SIM / CAM
cam tilt: ${pr(o,0)}°
cam zoom: x${pr(c,1)}
mass: ${pr(e.totalMassKg,2)} kg
ctrlAcc: ${bs(C)} m/s²
windScale: ${pr(e.windScale,2)}

PAD
pad: ${Ll(n)} (#${s})

RC raw  r:${ti(r.roll)} p:${ti(r.pitch)} y:${ti(r.yaw)} t:${ti(r.thr)}
RC norm r:${ti(a.roll)} p:${ti(a.pitch)} y:${ti(a.yaw)} t:${ti(a.thr)}`}resize(){}applyVisibility(){this.el.style.display=this.enabled?"block":"none"}}function de(i,e){return Math.round(i*e)}function Nl(i){let e=i%360;return e<0&&(e+=360),e}function Io(i){return i*180/Math.PI}function Cf(i,e,t){i.clearRect(0,0,e,t)}function Au(i,e,t){i.save(),i.globalAlpha=t,i.fillStyle="#0b0f14",i.fillRect(e.x,e.y,e.w,e.h),i.restore()}function Fc(i,e,t,n,s=1){i.save(),i.globalAlpha=s,i.strokeStyle=n,i.lineWidth=t,i.strokeRect(e.x,e.y,e.w,e.h),i.restore()}function pn(i,e,t,n,s,r,a,o=1){i.save(),i.globalAlpha=o,i.strokeStyle=a,i.lineWidth=r,i.beginPath(),i.moveTo(e,t),i.lineTo(n,s),i.stroke(),i.restore()}function An(i,e,t,n,s,r,a="left",o=1,c=!1){i.save(),i.globalAlpha=o,i.fillStyle=r,i.font=`${c?"bold ":""}${s}px monospace`,i.textBaseline="top",i.textAlign=a,i.fillText(n,e,t),i.restore()}function Ba(i,e,t,n,s,r,a=1){i.save(),i.globalAlpha=a,i.strokeStyle=r,i.lineWidth=s,i.beginPath(),i.arc(e,t,n,0,Math.PI*2),i.stroke(),i.restore()}function Pf(i,e,t,n,s,r=1){i.save(),i.globalAlpha=r,i.fillStyle=s,i.beginPath(),i.arc(e,t,n,0,Math.PI*2),i.fill(),i.restore()}function Df(i,e,t,n,s,r){const a=Math.max(0,Math.min(r,Math.min(n,s)*.5));i.beginPath(),i.moveTo(e+a,t),i.lineTo(e+n-a,t),i.quadraticCurveTo(e+n,t,e+n,t+a),i.lineTo(e+n,t+s-a),i.quadraticCurveTo(e+n,t+s,e+n-a,t+s),i.lineTo(e+a,t+s),i.quadraticCurveTo(e,t+s,e,t+s-a),i.lineTo(e,t+a),i.quadraticCurveTo(e,t,e+a,t),i.closePath()}function Ul(i,e,t){return Math.max(e,Math.min(t,i))}const If="#0040b8",Lf="#ffcc00",Es="#ffffff",Nf="#ffffff",Uf="#ffffff",ka="#ffffff",Fl="#ffffff",Ff="#ffffff",Of="#ffffff";class Bf{draw(e,t,n,s){const r=s.scale,a=Io(n.world.droneRot.pitch),o=Io(n.world.droneRot.roll),c=t.x+t.w*.5,l=t.y+t.h*.5,h=t.x,u=t.y,d=t.w,m=t.h;e.save(),e.beginPath(),e.rect(h,u,d,m),e.clip();const g=m/60,_=-Ul(a,-45,45)*g,p=o*Math.PI/180;e.save(),e.translate(c,l),e.rotate(-p),e.translate(0,_),e.fillStyle=If,e.fillRect(-d,-m*2,d*2,m*2),e.fillStyle=Lf,e.fillRect(-d,0,d*2,m*2),pn(e,-d,0,d,0,de(3,r),Es,.95);const f=30;for(let b=-f;b<=f;b+=5){if(b===0)continue;const S=-b*g,T=b%10===0,w=T?d*.16:d*.1,R=T?Nf:Uf,C=T?.9:.6,x=de(T?2:1,r);if(pn(e,-w,S,w,S,x,R,C),T){const M=de(5,r);pn(e,-w,S,-w,S+M,x,R,C),pn(e,w,S,w,S+M,x,R,C);const P=Math.abs(b).toString(),N=de(6,r);An(e,-w-N,S-de(7,r),P,de(12,r),Es,"right",.9,!0),An(e,w+N,S-de(7,r),P,de(12,r),Es,"left",.9,!0)}}e.restore(),e.restore(),this.drawRollArc(e,c,t.y+de(6,r),d,r,o),this.drawCenterMarker(e,c,l,r),An(e,t.x+de(10,r),t.y+de(10,r),`P ${a.toFixed(1)}°`,de(14,r),Es,"left",.95,!0),An(e,t.x+de(10,r),t.y+de(30,r),`R ${o.toFixed(1)}°`,de(14,r),Es,"left",.95,!0);const y=n.world.dronePos.y;An(e,c,t.y+t.h-de(18,r),`ALT: ${y.toFixed(0)}m`,de(14,r),Of,"center",.95,!0)}drawCenterMarker(e,t,n,s){const r=de(24,s),a=de(8,s);pn(e,t-r,n,t-a,n,de(3,s),ka,.9),pn(e,t+a,n,t+r,n,de(3,s),ka,.9),e.save(),e.fillStyle=ka,e.globalAlpha=.9,e.beginPath(),e.arc(t,n,de(2.5,s),0,Math.PI*2),e.fill(),e.restore()}drawRollArc(e,t,n,s,r,a){const o=s*.34,c=n+o+de(10,r);e.save(),e.strokeStyle=Fl,e.globalAlpha=.5,e.lineWidth=de(2,r),e.beginPath(),e.arc(t,c,o,Math.PI*1.05,Math.PI*1.95),e.stroke();const l=[-60,-45,-30,-15,0,15,30,45,60];for(const g of l){const _=Math.PI/180*(g-90),p=g%30===0,f=de(p?10:6,r),y=t+Math.cos(_)*o,b=c+Math.sin(_)*o,S=t+Math.cos(_)*(o-f),T=c+Math.sin(_)*(o-f);pn(e,y,b,S,T,de(2,r),Fl,p?.85:.65)}const h=Ul(a,-80,80),u=Math.PI/180*(h-90),d=t+Math.cos(u)*o,m=c+Math.sin(u)*o;pn(e,d,m,d+Math.cos(u)*de(10,r),m+Math.sin(u)*de(10,r),de(3,r),Ff,1),e.restore()}}const Li={panel:.35,border:.9,tick:.95,label:.95,centerMarker:1,readout:1},Ts={border:"#243245",tick:"#cfe7ff",label:"#cfe7ff",centerMarker:"#ff3b30",readout:"#4ade80"};function kf(i){let e=(i+540)%360-180;return e<-180&&(e+=360),e}class zf{draw(e,t,n,s){const r=s.scale,a=Nl(Io(n.world.droneRot.yaw));Au(e,t,Li.panel),Fc(e,t,de(1,r),Ts.border,Li.border);const o=t.x+t.w*.5,c=t.y+de(6,r),l=t.y+t.h-de(6,r);pn(e,o,c,o,l,de(2,r),Ts.centerMarker,Li.centerMarker);const h=5,u=15,d=45,m=t.w/(d*2),g=Math.round(a/h)*h;for(let p=g-d;p<=g+d;p+=h){const f=Nl(p),y=kf(p-a),b=o+y*m;if(b<t.x-2||b>t.x+t.w+2)continue;const S=Math.round(f)%u===0,T=de(S?18:10,r),w=t.y+t.h-de(8,r),R=w-T;if(pn(e,b,R,b,w,de(2,r),Ts.tick,Li.tick),S){const C=this.label(Math.round(f));An(e,b,R-de(2,r)-de(14,r),C,de(14,r),Ts.label,"center",Li.label,!0)}}const _=`${Math.round(a).toString().padStart(3,"0")}°`;An(e,o,t.y+de(6,r),_,de(16,r),Ts.readout,"center",Li.readout,!0)}label(e){return e===0?"N":e===90?"E":e===180?"S":e===270?"W":String(e)}}class Vf{scale=4;cx=0;cz=0;setCenter(e){this.cx=e.x,this.cz=e.z}worldToScreen(e,t,n,s){const r=(e-this.cx)*this.scale+n*.5,a=(this.cz-t)*this.scale+s*.5;return{x:r,y:a}}}const Hf=.25;function Gf(i){return Math.max(0,Math.min(1,i))}function Wf(i,e){if(e<=1e-6)return 0;const t=Gf(i/e);return Math.sin(Math.PI*t)}class Xf{cam=new Vf;bgColor="#0b1020";constructor(){this.cam.scale=2.5}draw(e,t,n,s){const r=n.world;e.save(),e.translate(t.x,t.y);const a=t.w,o=t.h;e.beginPath(),e.rect(0,0,a,o),e.clip();const c=n.controls.minimapAxes.zoomAxis;c!==0&&this.applyZoom(c),this.setCenterFromWorld(r),e.fillStyle=this.bgColor,e.fillRect(0,0,a,o),this.drawGrid(e,r,a,o,s);for(const l of r.gusts){const h=r.t-l.startT,u=Wf(h,l.duration);if(u<=0)continue;const d=this.w2s(l.center.x,l.center.z,a,o),m=l.radius*this.cam.scale;e.globalAlpha=.18*u,e.beginPath(),e.arc(d.x,d.y,m,0,Math.PI*2),e.strokeStyle="#88c0ff",e.lineWidth=2*s.scale,e.stroke(),e.globalAlpha=1}this.drawTarget(e,r.targetPos,a,o,s),this.drawTrail(e,r.trail,a,o,s),this.drawDrone(e,r,a,o,s),this.drawCoords(e,r,a,o,s),e.restore()}applyZoom(e){const t=this.cam.scale+e*Hf;this.cam.scale=Math.max(.8,Math.min(6,t))}setCenterFromWorld(e){this.cam.setCenter({x:e.dronePos.x,y:0,z:-e.dronePos.z})}w2s(e,t,n,s){return this.cam.worldToScreen(e,-t,n,s)}drawCoords(e,t,n,s,r){const a=6*r.scale,o=12*r.scale,c=t.dronePos.x,l=t.dronePos.z,h=Tu(t),u=[`POS:  ${c.toFixed(0)}, ${l.toFixed(0)}`,`SPD:  ${h.groundSpeedMps.toFixed(1)} m/s`,`VSPD: ${t.droneVel.y.toFixed(1)} m/s`];e.save(),e.font=`${o}px monospace`,e.textBaseline="top";let d=0;for(const b of u)d=Math.max(d,e.measureText(b).width);const m=2*r.scale,g=d+a*2,_=u.length*o+a*2+(u.length-1)*m,p=a,f=a;e.globalAlpha=.55,e.fillStyle="#000000",e.fillRect(p,f,g,_),e.globalAlpha=.95,e.fillStyle="#c0caf5";let y=f+a;for(const b of u)e.fillText(b,p+a,y),y+=o+m;e.restore()}drawGrid(e,t,n,s,r){const o=t.dronePos.x,c=-t.dronePos.z,l=n*.5/this.cam.scale,h=s*.5/this.cam.scale,u=o-l,d=o+l,m=c-h,g=c+h,_=Math.floor(u/10)*10,p=Math.ceil(d/10)*10,f=Math.floor(m/10)*10,y=Math.ceil(g/10)*10,b=10*this.cam.scale,S=6*r.scale,T=24*r.scale,R=.04+.1*Math.max(0,Math.min(1,(b-S)/(T-S)));e.save(),e.globalAlpha=R,e.strokeStyle="#7aa2f7",e.lineWidth=1*r.scale,e.beginPath();for(let C=_;C<=p+1e-6;C+=10){const x=this.cam.worldToScreen(C,m,n,s),M=this.cam.worldToScreen(C,g,n,s);e.moveTo(x.x,x.y),e.lineTo(M.x,M.y)}for(let C=f;C<=y+1e-6;C+=10){const x=this.cam.worldToScreen(u,C,n,s),M=this.cam.worldToScreen(d,C,n,s);e.moveTo(x.x,x.y),e.lineTo(M.x,M.y)}e.stroke(),e.restore()}drawTarget(e,t,n,s,r){const a=this.w2s(t.x,t.z,n,s),o=10*r.scale,c=o,l=o,h=n-o,u=s-o;if(a.x>=c&&a.x<=h&&a.y>=l&&a.y<=u){const m=2*r.scale,g=Math.round(m)%2?.5:0,_=Math.round(a.x)+g,p=Math.round(a.y)+g;e.strokeStyle="#ffd166",e.lineWidth=m;const f=10*r.scale;e.beginPath(),e.moveTo(_-f,p),e.lineTo(_+f,p),e.moveTo(_,p-f),e.lineTo(_,p+f),e.stroke();return}this.drawTargetArrow(e,a.x,a.y,n,s,r)}drawTargetArrow(e,t,n,s,r,a){const o=10*a.scale,c=o,l=o,h=s-o,u=r-o,d=s*.5,m=r*.5;let g=t-d,_=n-m;const p=Math.hypot(g,_);if(p<=1e-6)return;g/=p,_/=p;const f=g>0?(h-d)/g:(c-d)/g,y=_>0?(u-m)/_:(l-m)/_,b=Math.min(f,y),S=d+g*b,T=m+_*b,w=14*a.scale,R=10*a.scale,C=S,x=T,M=C-g*w,P=x-_*w,N=-_,U=g,O=M+N*(R*.5),V=P+U*(R*.5),k=M-N*(R*.5),G=P-U*(R*.5);e.save(),e.globalAlpha=.95,e.fillStyle="#ffd166",e.strokeStyle="#000000",e.lineWidth=2*a.scale,e.beginPath(),e.moveTo(C,x),e.lineTo(O,V),e.lineTo(k,G),e.closePath(),e.fill(),e.globalAlpha=.35,e.stroke(),e.restore()}drawTrail(e,t,n,s,r){if(t.length<2)return;e.strokeStyle="#c0caf5",e.lineWidth=2*r.scale,e.globalAlpha=.7,e.beginPath();const a=this.w2s(t[0].x,t[0].z,n,s);e.moveTo(a.x,a.y);for(let o=1;o<t.length;o++){const c=this.w2s(t[o].x,t[o].z,n,s);e.lineTo(c.x,c.y)}e.stroke(),e.globalAlpha=1}drawDrone(e,t,n,s,r){const a=this.w2s(t.dronePos.x,t.dronePos.z,n,s);e.fillStyle="#e0fbfc",e.beginPath(),e.arc(a.x,a.y,5*r.scale,0,Math.PI*2),e.fill();const o=18*r.scale,c=Math.sin(t.droneRot.yaw),l=-Math.cos(t.droneRot.yaw),h=a.x+c*o,u=a.y+l*o;e.strokeStyle="#06d6a0",e.lineWidth=2*r.scale,e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(h,u),e.stroke()}}const ns={title:"#d7e9ff",text:"#cfe7ff",good:"#4ade80",warn:"#f59e0b",bad:"#fb7185",border:"#243245"},gr={panel:.75,border:.9,title:.95,line:.95};function Yf(i){const e=[0,3,1,2];for(let t=0;t<e.length;t++){const n=e[t];if(n<i.length&&i[n]>1e-6)return n}for(let t=0;t<i.length;t++)if(i[t]>1e-6)return t;return-1}function Ol(i){return i.toFixed(1)}function qf(i){return i<=2?ns.good:i<=5?ns.warn:ns.bad}class Kf{draw(e,t,n,s){const r=s.scale,a=n.world.payloadSlotsKg??[],o=n.world.payloads??[],c=n.world.payloadImpacts??[],l=Yf(a),h=new Map;for(let g=0;g<c.length;g++){const _=c[g];h.set(_.payloadId,_)}const u=new Map;for(let g=0;g<o.length;g++){const _=o[g];u.set(_.slotIndex,_)}Au(e,t,gr.panel),Fc(e,t,de(1,r),ns.border,gr.border);const d=t.x+de(10,r);let m=t.y+de(8,r);An(e,d,m,ke("osd.mission.title"),de(14,r),ns.title,"left",gr.title,!0),m+=de(20,r);for(let g=0;g<4;g++){const _=g+1,p=u.get(g)??null,f=a[g]??0,y=p?p.massKg:f,b=`(${Ol(y)}kg)`;let S="empty",T="",w=ns.text;if(p)if(p.landed){S="landed";const x=h.get(p.id)??null;if(x){const M=x.missM;T=` | ${ke("osd.mission.hitTail",{d:Ol(M)})}`,w=qf(M)}else T=` | ${ke("osd.mission.hitTailMissing")}`}else S="dropped";else f>1e-6&&(S="armed",g===l&&(T=" [N]"));const R=ke(`osd.mission.status.${S}`),C=`#${_} ${b} ${R}${T}`;An(e,d,m,C,de(12,r),w,"left",gr.line),m+=de(16,r)}}}class $f{draw(e,t,n,s){const r=n.controls.touchHud;if(!r)return;const a=s.scale,o=t.w,c=t.h,l=de(64,a);this.drawStick(e,r.left.origin,r.left.pos,l,a,r.left.activeId!==null),this.drawStick(e,r.right.origin,r.right.pos,l,a,r.right.activeId!==null),this.drawBottomButtons(e,o,c,a,r)}drawStick(e,t,n,s,r,a){const o={x:t.x+n.x*s,y:t.y+n.y*s};Ba(e,t.x,t.y,s,de(2,r),"#cfe7ff",a?.55:.25),Ba(e,t.x,t.y,s*.55,de(2,r),"#cfe7ff",a?.35:.15),a&&pn(e,t.x,t.y,o.x,o.y,de(2,r),"#cfe7ff",.35),Pf(e,o.x,o.y,s*.22,"#cfe7ff",a?.75:.35),Ba(e,o.x,o.y,s*.22,de(2,r),"#0b0f14",a?.35:.2)}drawBottomButtons(e,t,n,s,r){const a=de(120,s),o=de(58,s),c=de(18,s),l=de(14,s),h=a*3+l*2,u=Math.round((t-h)*.5),d=n-c-o,m={x:u,y:d,w:a,h:o},g={x:u+(a+l),y:d,w:a,h:o},_={x:u+(a+l)*2,y:d,w:a,h:o};this.drawButton(e,m,s,ke("touch.restart"),r.restartDown===!0,"restart"),this.drawButton(e,g,s,ke("touch.drop"),r.dropDown===!0,"drop"),this.drawButton(e,_,s,ke("touch.camera"),r.camDown===!0,"cam")}drawButton(e,t,n,s,r,a){e.save(),e.globalAlpha=.92;const o=a==="drop"?r?"#fb7185":"#243245":r?"#4ade80":"#243245";e.fillStyle=o,Df(e,t.x,t.y,t.w,t.h,de(12,n)),e.fill(),Fc(e,t,de(2,n),"#cfe7ff",.8),An(e,t.x+t.w*.5,t.y+de(18,n),s,de(16,n),"#d7e9ff","center",1,!0),e.restore()}}class Zf{constructor(e){this.cfg=e}heading=new zf;attitude=new Bf;minimap=new Xf;mission=new Kf;touchHud=new $f;setConfig(e){this.cfg={...this.cfg,...e}}draw(e,t){const n=this.cfg.scale,s=de(this.cfg.marginPx,n),r=window.devicePixelRatio||1,a=Math.max(1,Math.round(e.canvas.width/r)),o=Math.max(1,Math.round(e.canvas.height/r)),c={x:0,y:0,w:a,h:o},l=de(520,n),h=de(70,n),u={x:Math.round((a-l)*.5),y:s,w:l,h},d=de(320,n),m=de(210,n),g={x:s,y:o-s-m,w:d,h:m},_={x:a-s-d,y:o-s-m,w:d,h:m},p=de(220,n),f=de(100,n),y={x:a-s-p,y:s,w:p,h:f};this.heading.draw(e,u,t,this.cfg),this.attitude.draw(e,g,t,this.cfg),this.minimap.draw(e,_,t,this.cfg),this.mission.draw(e,y,t,this.cfg),this.touchHud.draw(e,c,t,this.cfg)}}function jf(i,e,t){return Math.max(e,Math.min(t,i))}const Jf=1280,Qf=720;class ep{constructor(e,t){this.canvas=e,this.config=t;const n=e.getContext("2d");if(!n)throw new Error("OSD canvas 2D context not available");this.ctx=n,this.root=new Zf({scale:1,marginPx:10})}ctx;root;controls=null;setConfig(e){this.config=e}setScale(e){this.root.setConfig({scale:e})}setControls(e){this.controls=e}render(e,t){this.controls&&(Cf(this.ctx,this.canvas.width,this.canvas.height),this.root.draw(this.ctx,{world:e,config:this.config,nowMs:t,controls:this.controls}))}resize(){const e=window.devicePixelRatio||1,t=this.canvas.clientWidth,n=this.canvas.clientHeight,s=Math.max(1,Math.floor(t*e)),r=Math.max(1,Math.floor(n*e));(this.canvas.width!==s||this.canvas.height!==r)&&(this.canvas.width=s,this.canvas.height=r),this.ctx.setTransform(e,0,0,e,0,0);const a=Math.min(t/Jf,n/Qf),o=jf(a,.75,1.35);this.root.setConfig({scale:o})}}const Oc="182",tp=0,Bl=1,np=2,ip=0,Ks=1,Ru=2,es=3,jn=0,Wt=1,mn=2,$n=0,ui=1,da=2,kl=3,zl=4,sp=5,bi=100,rp=101,ap=102,op=103,cp=104,lp=200,hp=201,up=202,dp=203,Lo=204,No=205,fp=206,pp=207,mp=208,gp=209,_p=210,xp=211,vp=212,Mp=213,yp=214,Uo=0,Fo=1,Oo=2,Ci=3,Bo=4,ko=5,zo=6,Vo=7,Cu=0,Sp=1,bp=2,_n=0,Bc=1,kc=2,zc=3,Vc=4,Pu=5,Du=6,Iu=7,Vl="attached",Ep="detached",Lu=300,Pi=301,os=302,fa=303,Ho=304,Sa=306,cs=1e3,At=1001,pa=1002,Mt=1003,Nu=1004,Xs=1005,je=1006,ea=1007,Rn=1008,Jt=1009,Uu=1010,Fu=1011,Qs=1012,Hc=1013,In=1014,Bt=1015,Qt=1016,Gc=1017,Wc=1018,er=1020,Ou=35902,Bu=35899,ku=1021,zu=1022,on=1023,Jn=1026,wi=1027,Xc=1028,Yc=1029,ls=1030,qc=1031,Kc=1033,ta=33776,na=33777,ia=33778,sa=33779,Go=35840,Wo=35841,Xo=35842,Yo=35843,qo=36196,Ko=37492,$o=37496,Zo=37488,jo=37489,Jo=37490,Qo=37491,ec=37808,tc=37809,nc=37810,ic=37811,sc=37812,rc=37813,ac=37814,oc=37815,cc=37816,lc=37817,hc=37818,uc=37819,dc=37820,fc=37821,pc=36492,mc=36494,gc=36495,_c=36283,xc=36284,vc=36285,Mc=36286,tr=2300,nr=2301,za=2302,Hl=2400,Gl=2401,Wl=2402,Tp=2500,wp=0,Vu=1,yc=2,Ap=3200,Hu=0,Rp=1,li="",gt="srgb",Rt="srgb-linear",ma="linear",tt="srgb",Ni=7680,Xl=519,Cp=512,Pp=513,Dp=514,$c=515,Ip=516,Lp=517,Zc=518,Np=519,Sc=35044,Yl="300 es",Cn=2e3,ga=2001;function Gu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Up(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fp(){const i=ir("canvas");return i.style.display="block",i}const ql={};function _a(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ee(...i){const e="THREE."+i.shift();console.warn(e,...i)}function Ce(...i){const e="THREE."+i.shift();console.error(e,...i)}function sr(...i){const e=i.join(" ");e in ql||(ql[e]=!0,Ee(...i))}function Op(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kl=1234567;const $s=Math.PI/180,hs=180/Math.PI;function xn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function jc(i,e){return(i%e+e)%e}function Bp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function kp(i,e,t){return i!==e?(t-i)/(e-i):0}function Zs(i,e,t){return(1-t)*i+t*e}function zp(i,e,t,n){return Zs(i,e,1-Math.exp(-t*n))}function Vp(i,e=1){return e-Math.abs(jc(i,e*2)-e)}function Hp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Gp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Wp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Xp(i,e){return i+Math.random()*(e-i)}function Yp(i){return i*(.5-Math.random())}function qp(i){i!==void 0&&(Kl=i);let e=Kl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kp(i){return i*$s}function $p(i){return i*hs}function Zp(i){return(i&i-1)===0&&i!==0}function jp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Jp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qp(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),m=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*m,o*l);break;case"YXY":i.set(c*m,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*m,o*h,o*l);break;default:Ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const em={DEG2RAD:$s,RAD2DEG:hs,generateUUID:xn,clamp:We,euclideanModulo:jc,mapLinear:Bp,inverseLerp:kp,lerp:Zs,damp:zp,pingpong:Vp,smoothstep:Hp,smootherstep:Gp,randInt:Wp,randFloat:Xp,randFloatSpread:Yp,seededRandom:qp,degToRad:Kp,radToDeg:$p,isPowerOfTwo:Zp,ceilPowerOfTwo:jp,floorPowerOfTwo:Jp,setQuaternionFromProperEuler:Qp,normalize:nt,denormalize:gn};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==m||h!==g){let p=c*d+l*m+h*g+u*_;p<0&&(d=-d,m=-m,g=-g,_=-_,p=-p);let f=1-o;if(p<.9995){const y=Math.acos(p),b=Math.sin(y);f=Math.sin(f*y)/b,o=Math.sin(o*y)/b,c=c*f+d*o,l=l*f+m*o,h=h*f+g*o,u=u*f+_*o}else{c=c*f+d*o,l=l*f+m*o,h=h*f+g*o,u=u*f+_*o;const y=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=y,l*=y,h*=y,u*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*m-l*d,e[t+1]=c*g+h*d+l*u-o*m,e[t+2]=l*g+h*m+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:Ee("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($l.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($l.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Va.copy(this).projectOnVector(e),this.sub(Va)}reflect(e){return this.sub(Va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Va=new I,$l=new Nt;class Oe{constructor(e,t,n,s,r,a,o,c,l){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],_=s[0],p=s[3],f=s[6],y=s[1],b=s[4],S=s[7],T=s[2],w=s[5],R=s[8];return r[0]=a*_+o*y+c*T,r[3]=a*p+o*b+c*w,r[6]=a*f+o*S+c*R,r[1]=l*_+h*y+u*T,r[4]=l*p+h*b+u*w,r[7]=l*f+h*S+u*R,r[2]=d*_+m*y+g*T,r[5]=d*p+m*b+g*w,r[8]=d*f+m*S+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,m=l*r-a*c,g=t*u+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=m*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ha.makeScale(e,t)),this}rotate(e){return this.premultiply(Ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ha=new Oe,Zl=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jl=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tm(){const i={enabled:!0,workingColorSpace:Rt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===tt&&(s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===li?ma:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return sr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return sr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Rt]:{primaries:e,whitePoint:n,transfer:ma,toXYZ:Zl,fromXYZ:jl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gt},outputColorSpaceConfig:{drawingBufferColorSpace:gt}},[gt]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:Zl,fromXYZ:jl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gt}}}),i}const Ye=tm();function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ui;class nm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ui===void 0&&(Ui=ir("canvas")),Ui.width=e.width,Ui.height=e.height;const s=Ui.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ui}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ir("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Zn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let im=0;class Jc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=xn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ga(s[a].image)):r.push(Ga(s[a]))}else r=Ga(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ga(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ee("Texture: Unable to serialize Texture."),{})}let sm=0;const Wa=new I;class yt extends gs{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,n=At,s=At,r=je,a=Rn,o=on,c=Jt,l=yt.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=xn(),this.name="",this.source=new Jc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wa).x}get height(){return this.source.getSize(Wa).y}get depth(){return this.source.getSize(Wa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ee(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ee(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cs:e.x=e.x-Math.floor(e.x);break;case At:e.x=e.x<0?0:1;break;case pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cs:e.y=e.y-Math.floor(e.y);break;case At:e.y=e.y<0?0:1;break;case pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=Lu;yt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,s=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],_=c[2],p=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,S=(m+1)/2,T=(f+1)/2,w=(h+d)/4,R=(u+_)/4,C=(g+p)/4;return b>S&&b>T?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=R/n):S>T?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=w/s,r=C/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=R/r,s=C/r),this.set(n,s,r,t),this}let y=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rm extends gs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new yt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:je,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Jc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends rm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wu extends yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=At,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class am extends yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=At,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ei{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ln):ln.fromBufferAttribute(r,a),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(e.matrixWorld),this.union(_r)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ws),xr.subVectors(this.max,ws),Fi.subVectors(e.a,ws),Oi.subVectors(e.b,ws),Bi.subVectors(e.c,ws),ni.subVectors(Oi,Fi),ii.subVectors(Bi,Oi),pi.subVectors(Fi,Bi);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-pi.z,pi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,pi.z,0,-pi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-pi.y,pi.x,0];return!Xa(t,Fi,Oi,Bi,xr)||(t=[1,0,0,0,1,0,0,0,1],!Xa(t,Fi,Oi,Bi,xr))?!1:(vr.crossVectors(ni,ii),t=[vr.x,vr.y,vr.z],Xa(t,Fi,Oi,Bi,xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bn=[new I,new I,new I,new I,new I,new I,new I,new I],ln=new I,_r=new ei,Fi=new I,Oi=new I,Bi=new I,ni=new I,ii=new I,pi=new I,ws=new I,xr=new I,vr=new I,mi=new I;function Xa(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){mi.fromArray(i,r);const o=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),c=e.dot(mi),l=t.dot(mi),h=n.dot(mi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const om=new ei,As=new I,Ya=new I;class Nn{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):om.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);const t=As.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(As,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(Ya)),this.expandByPoint(As.copy(e.center).sub(Ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const kn=new I,qa=new I,Mr=new I,si=new I,Ka=new I,yr=new I,$a=new I;class ba{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){qa.copy(e).add(t).multiplyScalar(.5),Mr.copy(t).sub(e).normalize(),si.copy(this.origin).sub(qa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Mr),o=si.dot(this.direction),c=-si.dot(Mr),l=si.lengthSq(),h=Math.abs(1-a*a);let u,d,m,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,m=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(qa).addScaledVector(Mr,d),m}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const n=kn.dot(this.direction),s=kn.dot(kn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,s,r){Ka.subVectors(t,e),yr.subVectors(n,e),$a.crossVectors(Ka,yr);let a=this.direction.dot($a),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;si.subVectors(this.origin,e);const c=o*this.direction.dot(yr.crossVectors(si,yr));if(c<0)return null;const l=o*this.direction.dot(Ka.cross(si));if(l<0||c+l>a)return null;const h=-o*si.dot($a);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(e,t,n,s,r,a,o,c,l,h,u,d,m,g,_,p){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,m,g,_,p)}set(e,t,n,s,r,a,o,c,l,h,u,d,m,g,_,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ki.setFromMatrixColumn(e,0).length(),r=1/ki.setFromMatrixColumn(e,1).length(),a=1/ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,m=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,m=c*u,g=l*h,_=l*u;t[0]=d+_*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,m=c*u,g=l*h,_=l*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,m=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=g*l-m,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,m=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*c,m=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=a*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cm,e,lm)}lookAt(e,t,n){const s=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),ri.crossVectors(n,$t),ri.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),ri.crossVectors(n,$t)),ri.normalize(),Sr.crossVectors($t,ri),s[0]=ri.x,s[4]=Sr.x,s[8]=$t.x,s[1]=ri.y,s[5]=Sr.y,s[9]=$t.y,s[2]=ri.z,s[6]=Sr.z,s[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],y=n[3],b=n[7],S=n[11],T=n[15],w=s[0],R=s[4],C=s[8],x=s[12],M=s[1],P=s[5],N=s[9],U=s[13],O=s[2],V=s[6],k=s[10],G=s[14],K=s[3],ne=s[7],ee=s[11],he=s[15];return r[0]=a*w+o*M+c*O+l*K,r[4]=a*R+o*P+c*V+l*ne,r[8]=a*C+o*N+c*k+l*ee,r[12]=a*x+o*U+c*G+l*he,r[1]=h*w+u*M+d*O+m*K,r[5]=h*R+u*P+d*V+m*ne,r[9]=h*C+u*N+d*k+m*ee,r[13]=h*x+u*U+d*G+m*he,r[2]=g*w+_*M+p*O+f*K,r[6]=g*R+_*P+p*V+f*ne,r[10]=g*C+_*N+p*k+f*ee,r[14]=g*x+_*U+p*G+f*he,r[3]=y*w+b*M+S*O+T*K,r[7]=y*R+b*P+S*V+T*ne,r[11]=y*C+b*N+S*k+T*ee,r[15]=y*x+b*U+S*G+T*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],_=e[7],p=e[11],f=e[15],y=c*m-l*d,b=o*m-l*u,S=o*d-c*u,T=a*m-l*h,w=a*d-c*h,R=a*u-o*h;return t*(_*y-p*b+f*S)-n*(g*y-p*T+f*w)+s*(g*b-_*T+f*R)-r*(g*S-_*w+p*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],_=e[13],p=e[14],f=e[15],y=u*p*l-_*d*l+_*c*m-o*p*m-u*c*f+o*d*f,b=g*d*l-h*p*l-g*c*m+a*p*m+h*c*f-a*d*f,S=h*_*l-g*u*l+g*o*m-a*_*m-h*o*f+a*u*f,T=g*u*c-h*_*c-g*o*d+a*_*d+h*o*p-a*u*p,w=t*y+n*b+s*S+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=y*R,e[1]=(_*d*r-u*p*r-_*s*m+n*p*m+u*s*f-n*d*f)*R,e[2]=(o*p*r-_*c*r+_*s*l-n*p*l-o*s*f+n*c*f)*R,e[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*m-n*c*m)*R,e[4]=b*R,e[5]=(h*p*r-g*d*r+g*s*m-t*p*m-h*s*f+t*d*f)*R,e[6]=(g*c*r-a*p*r-g*s*l+t*p*l+a*s*f-t*c*f)*R,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*m+t*c*m)*R,e[8]=S*R,e[9]=(g*u*r-h*_*r-g*n*m+t*_*m+h*n*f-t*u*f)*R,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*f+t*o*f)*R,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*m-t*o*m)*R,e[12]=T*R,e[13]=(h*_*s-g*u*s+g*n*d-t*_*d-h*n*p+t*u*p)*R,e[14]=(g*o*s-a*_*s-g*n*c+t*_*c+a*n*p-t*o*p)*R,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*d+t*o*d)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,m=r*h,g=r*u,_=a*h,p=a*u,f=o*u,y=c*l,b=c*h,S=c*u,T=n.x,w=n.y,R=n.z;return s[0]=(1-(_+f))*T,s[1]=(m+S)*T,s[2]=(g-b)*T,s[3]=0,s[4]=(m-S)*w,s[5]=(1-(d+f))*w,s[6]=(p+y)*w,s[7]=0,s[8]=(g+b)*R,s[9]=(p-y)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=ki.set(s[0],s[1],s[2]).length();const a=ki.set(s[4],s[5],s[6]).length(),o=ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),hn.copy(this);const l=1/r,h=1/a,u=1/o;return hn.elements[0]*=l,hn.elements[1]*=l,hn.elements[2]*=l,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,t.setFromRotationMatrix(hn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Cn,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),m=(n+s)/(n-s);let g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===Cn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ga)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Cn,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),m=-(n+s)/(n-s);let g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===Cn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===ga)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ki=new I,hn=new Ue,cm=new I(0,0,0),lm=new I(1,1,1),ri=new I,Sr=new I,$t=new I,Jl=new Ue,Ql=new Nt;class kt{constructor(e=0,t=0,n=0,s=kt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ql.setFromEuler(this),this.setFromQuaternion(Ql,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kt.DEFAULT_ORDER="XYZ";class Xu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hm=0;const eh=new I,zi=new Nt,zn=new Ue,br=new I,Rs=new I,um=new I,dm=new Nt,th=new I(1,0,0),nh=new I(0,1,0),ih=new I(0,0,1),sh={type:"added"},fm={type:"removed"},Vi={type:"childadded",child:null},Za={type:"childremoved",child:null};class ft extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new I,t=new kt,n=new Nt,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Oe}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(th,e)}rotateY(e){return this.rotateOnAxis(nh,e)}rotateZ(e){return this.rotateOnAxis(ih,e)}translateOnAxis(e,t){return eh.copy(e).applyQuaternion(this.quaternion),this.position.add(eh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(th,e)}translateY(e){return this.translateOnAxis(nh,e)}translateZ(e){return this.translateOnAxis(ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?br.copy(e):br.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Rs,br,this.up):zn.lookAt(br,Rs,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),zi.setFromRotationMatrix(zn),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ce("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sh),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fm),Za.child=e,this.dispatchEvent(Za),Za.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sh),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,e,um),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,dm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ft.DEFAULT_UP=new I(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new I,Vn=new I,ja=new I,Hn=new I,Hi=new I,Gi=new I,rh=new I,Ja=new I,Qa=new I,eo=new I,to=new dt,no=new dt,io=new dt;class an{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),un.subVectors(e,t),s.cross(un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){un.subVectors(s,t),Vn.subVectors(n,t),ja.subVectors(e,t);const a=un.dot(un),o=un.dot(Vn),c=un.dot(ja),l=Vn.dot(Vn),h=Vn.dot(ja),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,m=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Hn.x),c.addScaledVector(a,Hn.y),c.addScaledVector(o,Hn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return to.setScalar(0),no.setScalar(0),io.setScalar(0),to.fromBufferAttribute(e,t),no.fromBufferAttribute(e,n),io.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(to,r.x),a.addScaledVector(no,r.y),a.addScaledVector(io,r.z),a}static isFrontFacing(e,t,n,s){return un.subVectors(n,t),Vn.subVectors(e,t),un.cross(Vn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),un.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return an.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Hi.subVectors(s,n),Gi.subVectors(r,n),Ja.subVectors(e,n);const c=Hi.dot(Ja),l=Gi.dot(Ja);if(c<=0&&l<=0)return t.copy(n);Qa.subVectors(e,s);const h=Hi.dot(Qa),u=Gi.dot(Qa);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Hi,a);eo.subVectors(e,r);const m=Hi.dot(eo),g=Gi.dot(eo);if(g>=0&&m<=g)return t.copy(r);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Gi,o);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return rh.subVectors(r,s),o=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector(rh,o);const f=1/(p+_+d);return a=_*f,o=d*f,t.copy(n).addScaledVector(Hi,a).addScaledVector(Gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Er={h:0,s:0,l:0};function so(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ye.workingColorSpace){if(e=jc(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=so(a,r,e+1/3),this.g=so(a,r,e),this.b=so(a,r,e-1/3)}return Ye.colorSpaceToWorking(this,s),this}setStyle(e,t=gt){function n(r){r!==void 0&&parseFloat(r)<1&&Ee("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ee("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ee("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){const n=Yu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ee("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return Ye.workingToColorSpace(It.copy(this),e),Math.round(We(It.r*255,0,255))*65536+Math.round(We(It.g*255,0,255))*256+Math.round(We(It.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(It.copy(this),t);const n=It.r,s=It.g,r=It.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=gt){Ye.workingToColorSpace(It.copy(this),e);const t=It.r,n=It.g,s=It.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(Er);const n=Zs(ai.h,Er.h,t),s=Zs(ai.s,Er.s,t),r=Zs(ai.l,Er.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Le;Le.NAMES=Yu;let pm=0;class vn extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=xn(),this.name="",this.type="Material",this.blending=ui,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lo,this.blendDst=No,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ee(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ee(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Lo&&(n.blendSrc=this.blendSrc),this.blendDst!==No&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pn extends vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kt,this.combine=Cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qn=mm();function mm(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function gm(i){Math.abs(i)>65504&&Ee("DataUtils.toHalfFloat(): Value out of range."),i=We(i,-65504,65504),qn.floatView[0]=i;const e=qn.uint32View[0],t=e>>23&511;return qn.baseTable[t]+((e&8388607)>>qn.shiftTable[t])}function _m(i){const e=i>>10;return qn.uint32View[0]=qn.mantissaTable[qn.offsetTable[e]+(i&1023)]+qn.exponentTable[e],qn.floatView[0]}class Tr{static toHalfFloat(e){return gm(e)}static fromHalfFloat(e){return _m(e)}}const vt=new I,wr=new Ne;let xm=0;class zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sc,this.updateRanges=[],this.gpuType=Bt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wr.fromBufferAttribute(this,t),wr.applyMatrix3(e),this.setXY(t,wr.x,wr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sc&&(e.usage=this.usage),e}}class qu extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ku extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xt extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let vm=0;const tn=new Ue,ro=new ft,Wi=new I,Zt=new ei,Cs=new ei,Tt=new I;class Yt extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gu(e)?Ku:qu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return ro.lookAt(e),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Zt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Cs.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Zt.min,Cs.min),Zt.expandByPoint(Tt),Tt.addVectors(Zt.max,Cs.max),Zt.expandByPoint(Tt)):(Zt.expandByPoint(Cs.min),Zt.expandByPoint(Cs.max))}Zt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Tt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Tt.fromBufferAttribute(o,l),c&&(Wi.fromBufferAttribute(e,l),Tt.add(Wi)),s=Math.max(s,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new I,c[C]=new I;const l=new I,h=new I,u=new I,d=new Ne,m=new Ne,g=new Ne,_=new I,p=new I;function f(C,x,M){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,C),m.fromBufferAttribute(r,x),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),m.sub(d),g.sub(d);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(P),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(P),o[C].add(_),o[x].add(_),o[M].add(_),c[C].add(p),c[x].add(p),c[M].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,x=y.length;C<x;++C){const M=y[C],P=M.start,N=M.count;for(let U=P,O=P+N;U<O;U+=3)f(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const b=new I,S=new I,T=new I,w=new I;function R(C){T.fromBufferAttribute(s,C),w.copy(T);const x=o[C];b.copy(x),b.sub(T.multiplyScalar(T.dot(x))).normalize(),S.crossVectors(w,x);const P=S.dot(c[C])<0?-1:1;a.setXYZW(C,b.x,b.y,b.z,P)}for(let C=0,x=y.length;C<x;++C){const M=y[C],P=M.start,N=M.count;for(let U=P,O=P+N;U<O;U+=3)R(e.getX(U+0)),R(e.getX(U+1)),R(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[m++]}return new zt(d,h,u)}if(this.index===null)return Ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],m=e(d,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ah=new Ue,gi=new ba,Ar=new Nn,oh=new I,Rr=new I,Cr=new I,Pr=new I,ao=new I,Dr=new I,ch=new I,Ir=new I;class Pt extends ft{constructor(e=new Yt,t=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Dr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(ao.fromBufferAttribute(u,e),a?Dr.addScaledVector(ao,h):Dr.addScaledVector(ao.sub(t),h))}t.add(Dr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(r),gi.copy(e.ray).recast(e.near),!(Ar.containsPoint(gi.origin)===!1&&(gi.intersectSphere(Ar,oh)===null||gi.origin.distanceToSquared(oh)>(e.far-e.near)**2))&&(ah.copy(r).invert(),gi.copy(e.ray).applyMatrix4(ah),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=a[p.materialIndex],y=Math.max(p.start,m.start),b=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=y,T=b;S<T;S+=3){const w=o.getX(S),R=o.getX(S+1),C=o.getX(S+2);s=Lr(this,f,e,n,l,h,u,w,R,C),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const y=o.getX(p),b=o.getX(p+1),S=o.getX(p+2);s=Lr(this,a,e,n,l,h,u,y,b,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=a[p.materialIndex],y=Math.max(p.start,m.start),b=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let S=y,T=b;S<T;S+=3){const w=S,R=S+1,C=S+2;s=Lr(this,f,e,n,l,h,u,w,R,C),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const y=p,b=p+1,S=p+2;s=Lr(this,a,e,n,l,h,u,y,b,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Mm(i,e,t,n,s,r,a,o){let c;if(e.side===Wt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===jn,o),c===null)return null;Ir.copy(o),Ir.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ir);return l<t.near||l>t.far?null:{distance:l,point:Ir.clone(),object:i}}function Lr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Rr),i.getVertexPosition(c,Cr),i.getVertexPosition(l,Pr);const h=Mm(i,e,t,n,Rr,Cr,Pr,ch);if(h){const u=new I;an.getBarycoord(ch,Rr,Cr,Pr,u),s&&(h.uv=an.getInterpolatedAttribute(s,o,c,l,u,new Ne)),r&&(h.uv1=an.getInterpolatedAttribute(r,o,c,l,u,new Ne)),a&&(h.normal=an.getInterpolatedAttribute(a,o,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new I,materialIndex:0};an.getNormal(Rr,Cr,Pr,d.normal),h.face=d,h.barycoord=u}return h}class _s extends Yt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(u,2));function g(_,p,f,y,b,S,T,w,R,C,x){const M=S/R,P=T/C,N=S/2,U=T/2,O=w/2,V=R+1,k=C+1;let G=0,K=0;const ne=new I;for(let ee=0;ee<k;ee++){const he=ee*P-U;for(let Ae=0;Ae<V;Ae++){const Re=Ae*M-N;ne[_]=Re*y,ne[p]=he*b,ne[f]=O,l.push(ne.x,ne.y,ne.z),ne[_]=0,ne[p]=0,ne[f]=w>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(Ae/R),u.push(1-ee/C),G+=1}}for(let ee=0;ee<C;ee++)for(let he=0;he<R;he++){const Ae=d+he+V*ee,Re=d+he+V*(ee+1),ot=d+(he+1)+V*(ee+1),ut=d+(he+1)+V*ee;c.push(Ae,Re,ut),c.push(Re,ot,ut),K+=6}o.addGroup(m,K,x),m+=K,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function us(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ot(i){const e={};for(let t=0;t<i.length;t++){const n=us(i[t]);for(const s in n)e[s]=n[s]}return e}function ym(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function $u(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const Sm={clone:us,merge:Ot};var bm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bm,this.fragmentShader=Em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=ym(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Zu extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new I,lh=new Ne,hh=new Ne;class Lt extends Zu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hs*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,lh,hh),t.subVectors(hh,lh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($s*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xi=-90,Yi=1;class Tm extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Lt(Xi,Yi,e,t);s.layers=this.layers,this.add(s);const r=new Lt(Xi,Yi,e,t);r.layers=this.layers,this.add(r);const a=new Lt(Xi,Yi,e,t);a.layers=this.layers,this.add(a);const o=new Lt(Xi,Yi,e,t);o.layers=this.layers,this.add(o);const c=new Lt(Xi,Yi,e,t);c.layers=this.layers,this.add(c);const l=new Lt(Xi,Yi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ga)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ju extends yt{constructor(e=[],t=Pi,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ju extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ju(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new _s(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:$n});r.uniforms.tEquirect.value=t;const a=new Pt(s,r),o=t.minFilter;return t.minFilter===Rn&&(t.minFilter=je),new Tm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class Gt extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wm={type:"move"};class oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),f=this._getHandJoint(l,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Am extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kt,this.environmentIntensity=1,this.environmentRotation=new kt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Qu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sc,this.updateRanges=[],this.version=0,this.uuid=xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ft=new I;class rr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){_a("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new rr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_a("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ar extends vn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let qi;const Ps=new I,Ki=new I,$i=new I,Zi=new Ne,Ds=new Ne,ed=new Ue,Nr=new I,Is=new I,Ur=new I,uh=new Ne,co=new Ne,dh=new Ne;class xa extends ft{constructor(e=new ar){if(super(),this.isSprite=!0,this.type="Sprite",qi===void 0){qi=new Yt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Qu(t,5);qi.setIndex([0,1,2,0,2,3]),qi.setAttribute("position",new rr(n,3,0,!1)),qi.setAttribute("uv",new rr(n,2,3,!1))}this.geometry=qi,this.material=e,this.center=new Ne(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ce('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ki.setFromMatrixScale(this.matrixWorld),ed.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$i.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ki.multiplyScalar(-$i.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Fr(Nr.set(-.5,-.5,0),$i,a,Ki,s,r),Fr(Is.set(.5,-.5,0),$i,a,Ki,s,r),Fr(Ur.set(.5,.5,0),$i,a,Ki,s,r),uh.set(0,0),co.set(1,0),dh.set(1,1);let o=e.ray.intersectTriangle(Nr,Is,Ur,!1,Ps);if(o===null&&(Fr(Is.set(-.5,.5,0),$i,a,Ki,s,r),co.set(0,1),o=e.ray.intersectTriangle(Nr,Ur,Is,!1,Ps),o===null))return;const c=e.ray.origin.distanceTo(Ps);c<e.near||c>e.far||t.push({distance:c,point:Ps.clone(),uv:an.getInterpolation(Ps,Nr,Is,Ur,uh,co,dh,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Fr(i,e,t,n,s,r){Zi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ds.x=r*Zi.x-s*Zi.y,Ds.y=s*Zi.x+r*Zi.y):Ds.copy(Zi),i.copy(e),i.x+=Ds.x,i.y+=Ds.y,i.applyMatrix4(ed)}const fh=new I,ph=new dt,mh=new dt,Rm=new I,gh=new Ue,Or=new I,lo=new Nn,_h=new Ue,ho=new ba;class Cm extends Pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vl,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ei),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Or),this.boundingBox.expandByPoint(Or)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Or),this.boundingSphere.expandByPoint(Or)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lo.copy(this.boundingSphere),lo.applyMatrix4(s),e.ray.intersectsSphere(lo)!==!1&&(_h.copy(s).invert(),ho.copy(e.ray).applyMatrix4(_h),!(this.boundingBox!==null&&ho.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ho)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ep?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ee("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;ph.fromBufferAttribute(s.attributes.skinIndex,e),mh.fromBufferAttribute(s.attributes.skinWeight,e),fh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=mh.getComponent(r);if(a!==0){const o=ph.getComponent(r);gh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Rm.copy(fh).applyMatrix4(gh),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class td extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ea extends yt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Mt,h=Mt,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xh=new Ue,Pm=new Ue;class Qc{constructor(e=[],t=[]){this.uuid=xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ee("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Pm;xh.multiplyMatrices(o,t[r]),xh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Qc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ea(t,e,e,on,Bt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Ee("Skeleton: No bone found with UUID:",r),a=new td),this.bones.push(a),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class bc extends zt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ji=new Ue,vh=new Ue,Br=[],Mh=new ei,Dm=new Ue,Ls=new Pt,Ns=new Nn;class nd extends Pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Dm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ji),Mh.copy(e.boundingBox).applyMatrix4(ji),this.boundingBox.union(Mh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ji),Ns.copy(e.boundingSphere).applyMatrix4(ji),this.boundingSphere.union(Ns)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ls.geometry=this.geometry,Ls.material=this.material,Ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ns.copy(this.boundingSphere),Ns.applyMatrix4(n),e.ray.intersectsSphere(Ns)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ji),vh.multiplyMatrices(n,ji),Ls.matrixWorld=vh,Ls.raycast(e,Br);for(let a=0,o=Br.length;a<o;a++){const c=Br[a];c.instanceId=r,c.object=this,t.push(c)}Br.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ea(new Float32Array(s*this.count),s,this.count,Xc,Bt));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const uo=new I,Im=new I,Lm=new Oe;class yi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=uo.subVectors(n,t).cross(Im.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(uo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lm.getNormalMatrix(e),s=this.coplanarPoint(uo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new Nn,Nm=new Ne(.5,.5),kr=new I;class el{constructor(e=new yi,t=new yi,n=new yi,s=new yi,r=new yi,a=new yi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Cn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],m=r[7],g=r[8],_=r[9],p=r[10],f=r[11],y=r[12],b=r[13],S=r[14],T=r[15];if(s[0].setComponents(l-a,m-h,f-g,T-y).normalize(),s[1].setComponents(l+a,m+h,f+g,T+y).normalize(),s[2].setComponents(l+o,m+u,f+_,T+b).normalize(),s[3].setComponents(l-o,m-u,f-_,T-b).normalize(),n)s[4].setComponents(c,d,p,S).normalize(),s[5].setComponents(l-c,m-d,f-p,T-S).normalize();else if(s[4].setComponents(l-c,m-d,f-p,T-S).normalize(),t===Cn)s[5].setComponents(l+c,m+d,f+p,T+S).normalize();else if(t===ga)s[5].setComponents(c,d,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){_i.center.set(0,0,0);const t=Nm.distanceTo(e.center);return _i.radius=.7071067811865476+t,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(kr.x=s.normal.x>0?e.max.x:e.min.x,kr.y=s.normal.y>0?e.max.y:e.min.y,kr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class id extends vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const va=new I,Ma=new I,yh=new Ue,Us=new ba,zr=new Nn,fo=new I,Sh=new I;class tl extends ft{constructor(e=new Yt,t=new id){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)va.fromBufferAttribute(t,s-1),Ma.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=va.distanceTo(Ma);e.setAttribute("lineDistance",new Xt(n,1))}else Ee("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(s),zr.radius+=r,e.ray.intersectsSphere(zr)===!1)return;yh.copy(s).invert(),Us.copy(e.ray).applyMatrix4(yh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=m,p=g-1;_<p;_+=l){const f=h.getX(_),y=h.getX(_+1),b=Vr(this,e,Us,c,f,y,_);b&&t.push(b)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(m),f=Vr(this,e,Us,c,_,p,g-1);f&&t.push(f)}}else{const m=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=m,p=g-1;_<p;_+=l){const f=Vr(this,e,Us,c,_,_+1,_);f&&t.push(f)}if(this.isLineLoop){const _=Vr(this,e,Us,c,g-1,m,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Vr(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(va.fromBufferAttribute(o,s),Ma.fromBufferAttribute(o,r),t.distanceSqToSegment(va,Ma,fo,Sh)>n)return;fo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(fo);if(!(l<e.near||l>e.far))return{distance:l,point:Sh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const bh=new I,Eh=new I;class Um extends tl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)bh.fromBufferAttribute(t,s),Eh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+bh.distanceTo(Eh);e.setAttribute("lineDistance",new Xt(n,1))}else Ee("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fm extends tl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class sd extends vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Th=new Ue,Ec=new ba,Hr=new Nn,Gr=new I;class Om extends ft{constructor(e=new Yt,t=new sd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(s),Hr.radius+=r,e.ray.intersectsSphere(Hr)===!1)return;Th.copy(s).invert(),Ec.copy(e.ray).applyMatrix4(Th);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=d,_=m;g<_;g++){const p=l.getX(g);Gr.fromBufferAttribute(u,p),wh(Gr,p,c,s,e,t,this)}}else{const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=d,_=m;g<_;g++)Gr.fromBufferAttribute(u,g),wh(Gr,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function wh(i,e,t,n,s,r,a){const o=Ec.distanceSqToPoint(i);if(o<t){const c=new I;Ec.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class nl extends yt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class or extends yt{constructor(e,t,n=In,s,r,a,o=Mt,c=Mt,l,h=Jn,u=1){if(h!==Jn&&h!==wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Bm extends or{constructor(e,t=In,n=Pi,s,r,a=Mt,o=Mt,c,l=Jn){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class rd extends yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ta extends Yt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],m=[];let g=0;const _=[],p=n/2;let f=0;y(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(m,2));function y(){const S=new I,T=new I;let w=0;const R=(t-e)/n;for(let C=0;C<=r;C++){const x=[],M=C/r,P=M*(t-e)+e;for(let N=0;N<=s;N++){const U=N/s,O=U*c+o,V=Math.sin(O),k=Math.cos(O);T.x=P*V,T.y=-M*n+p,T.z=P*k,u.push(T.x,T.y,T.z),S.set(V,R,k).normalize(),d.push(S.x,S.y,S.z),m.push(U,1-M),x.push(g++)}_.push(x)}for(let C=0;C<s;C++)for(let x=0;x<r;x++){const M=_[x][C],P=_[x+1][C],N=_[x+1][C+1],U=_[x][C+1];(e>0||x!==0)&&(h.push(M,P,U),w+=3),(t>0||x!==r-1)&&(h.push(P,N,U),w+=3)}l.addGroup(f,w,0),f+=w}function b(S){const T=g,w=new Ne,R=new I;let C=0;const x=S===!0?e:t,M=S===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,p*M,0),d.push(0,M,0),m.push(.5,.5),g++;const P=g;for(let N=0;N<=s;N++){const O=N/s*c+o,V=Math.cos(O),k=Math.sin(O);R.x=x*k,R.y=p*M,R.z=x*V,u.push(R.x,R.y,R.z),d.push(0,M,0),w.x=V*.5+.5,w.y=k*.5*M+.5,m.push(w.x,w.y),g++}for(let N=0;N<s;N++){const U=T+N,O=P+N;S===!0?h.push(O,O+1,U):h.push(O+1,O,U),C+=3}l.addGroup(f,C,S===!0?1:2),f+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class il extends Ta{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new il(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xs extends Yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,m=[],g=[],_=[],p=[];for(let f=0;f<h;f++){const y=f*d-a;for(let b=0;b<l;b++){const S=b*u-r;g.push(S,-y,0),_.push(0,0,1),p.push(b/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<o;y++){const b=y+l*f,S=y+l*(f+1),T=y+1+l*(f+1),w=y+1+l*f;m.push(b,S,w),m.push(S,T,w)}this.setIndex(m),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.width,e.height,e.widthSegments,e.heightSegments)}}class km extends Ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wa extends vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hu,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Un extends wa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class zm extends vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vm extends vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Wr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Hm(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Ah(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function ad(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class lr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Gm extends lr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hl,endingEnd:Hl}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gl:r=e,o=2*t-n;break;case Wl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Gl:a=e,c=2*n-t;break;case Wl:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),_=g*g,p=_*g,f=-d*p+2*d*_-d*g,y=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,b=(-1-m)*p+(1.5+m)*_+.5*g,S=m*p-m*_;for(let T=0;T!==o;++T)r[T]=f*a[h+T]+y*a[l+T]+b*a[c+T]+S*a[u+T];return r}}class Wm extends lr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}}class Xm extends lr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Mn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wr(t,this.TimeBufferType),this.values=Wr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wr(e.times,Array),values:Wr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case tr:t=this.InterpolantFactoryMethodDiscrete;break;case nr:t=this.InterpolantFactoryMethodLinear;break;case za:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ee("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tr;case this.InterpolantFactoryMethodLinear:return nr;case this.InterpolantFactoryMethodSmooth:return za}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ce("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(Ce("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){Ce("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ce("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Up(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){Ce("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===za,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{const u=o*n,d=u-n,m=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[m+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let m=0;m!==n;++m)t[d+m]=t[u+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=nr;class vs extends Mn{constructor(e,t,n){super(e,t,n)}}vs.prototype.ValueTypeName="bool";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=tr;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;class od extends Mn{constructor(e,t,n,s){super(e,t,n,s)}}od.prototype.ValueTypeName="color";class ds extends Mn{constructor(e,t,n,s){super(e,t,n,s)}}ds.prototype.ValueTypeName="number";class Ym extends lr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t);let l=e*o;for(let h=l+o;l!==h;l+=4)Nt.slerpFlat(r,0,a,l-o,a,l,c);return r}}class fs extends Mn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ym(this.times,this.values,this.getValueSize(),e)}}fs.prototype.ValueTypeName="quaternion";fs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ms extends Mn{constructor(e,t,n){super(e,t,n)}}Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=tr;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;class ps extends Mn{constructor(e,t,n,s){super(e,t,n,s)}}ps.prototype.ValueTypeName="vector";class qm{constructor(e="",t=-1,n=[],s=Tp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=xn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push($m(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Mn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=Hm(c);c=Ah(c,1,h),l=Ah(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new ds(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(Ee("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ce("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,m,g,_){if(m.length!==0){const p=[],f=[];ad(m,p,f,g),p.length!==0&&_.push(new u(d,p,f))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const m={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)m[d[g].morphTargets[_]]=-1;for(const _ in m){const p=[],f=[];for(let y=0;y!==d[g].morphTargets.length;++y){const b=d[g];p.push(b.time),f.push(b.morphTarget===_?1:0)}s.push(new ds(".morphTargetInfluence["+_+"]",p,f))}c=m.length*a}else{const m=".bones["+t[u].name+"]";n(ps,m+".position",d,"pos",s),n(fs,m+".quaternion",d,"rot",s),n(ps,m+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Km(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ds;case"vector":case"vector2":case"vector3":case"vector4":return ps;case"color":return od;case"quaternion":return fs;case"bool":case"boolean":return vs;case"string":return Ms}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function $m(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Km(i.type);if(i.times===void 0){const t=[],n=[];ad(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Kn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Zm{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const jm=new Zm;class Di{constructor(e){this.manager=e!==void 0?e:jm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Di.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gn={};class Jm extends Error{constructor(e,t){super(e),this.response=t}}class sl extends Di{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Kn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Gn[e]!==void 0){Gn[e].push({onLoad:t,onProgress:n,onError:s});return}Gn[e]=[],Gn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ee("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Gn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=d?parseInt(d):0,g=m!==0;let _=0;const p=new ReadableStream({start(f){y();function y(){u.read().then(({done:b,value:S})=>{if(b)f.close();else{_+=S.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let w=0,R=h.length;w<R;w++){const C=h[w];C.onProgress&&C.onProgress(T)}f.enqueue(S),y()}},b=>{f.error(b)})}}});return new Response(p)}else throw new Jm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(d);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{Kn.add(`file:${e}`,l);const h=Gn[e];delete Gn[e];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{const h=Gn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Gn[e];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ji=new WeakMap;class Qm extends Di{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Kn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Ji.get(a);u===void 0&&(u=[],Ji.set(a,u)),u.push({onLoad:t,onError:s})}return a}const o=ir("img");function c(){h(),t&&t(this);const u=Ji.get(this)||[];for(let d=0;d<u.length;d++){const m=u[d];m.onLoad&&m.onLoad(this)}Ji.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Kn.remove(`image:${e}`);const d=Ji.get(this)||[];for(let m=0;m<d.length;m++){const g=d[m];g.onError&&g.onError(u)}Ji.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Kn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class eg extends Di{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new Ea,o=new sl(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(h){if(s!==void 0)s(h);else{h(h);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:At,a.wrapT=l.wrapT!==void 0?l.wrapT:At,a.magFilter=l.magFilter!==void 0?l.magFilter:je,a.minFilter=l.minFilter!==void 0?l.minFilter:je,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=Rn),l.mipmapCount===1&&(a.minFilter=je),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l)},n,s),a}}class cd extends Di{constructor(e){super(e)}load(e,t,n,s){const r=new yt,a=new Qm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class rl extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const po=new Ue,Rh=new I,Ch=new I;class al{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=Jt,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new el,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Rh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rh),Ch.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ch),t.updateMatrixWorld(),po.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(po,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(po)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class tg extends al{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=hs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ng extends rl{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new tg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class ig extends al{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0}}class sg extends rl{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ig}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Aa extends Zu{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class rg extends al{constructor(){super(new Aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ld extends rl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new rg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class js{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const mo=new WeakMap;class ag extends Di{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ee("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ee("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Kn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(mo.has(a)===!0)s&&s(mo.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Kn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),mo.set(c,l),Kn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Kn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class og extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ol="\\[\\]\\.:\\/",cg=new RegExp("["+ol+"]","g"),cl="[^"+ol+"]",lg="[^"+ol.replace("\\.","")+"]",hg=/((?:WC+[\/:])*)/.source.replace("WC",cl),ug=/(WCOD+)?/.source.replace("WCOD",lg),dg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cl),fg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cl),pg=new RegExp("^"+hg+ug+dg+fg+"$"),mg=["material","materials","bones","map"];class gg{constructor(e,t,n){const s=n||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class it{constructor(e,t,n){this.path=t,this.parsedPath=n||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new it.Composite(e,t,n):new it(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cg,"")}static parseTrackName(e){const t=pg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);mg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=it.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ce("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[s];if(a===void 0){const l=t.nodeName;Ce("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=gg;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Ph(i,e,t,n){const s=_g(n);switch(t){case ku:return i*e;case Xc:return i*e/s.components*s.byteLength;case Yc:return i*e/s.components*s.byteLength;case ls:return i*e*2/s.components*s.byteLength;case qc:return i*e*2/s.components*s.byteLength;case zu:return i*e*3/s.components*s.byteLength;case on:return i*e*4/s.components*s.byteLength;case Kc:return i*e*4/s.components*s.byteLength;case ta:case na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ia:case sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wo:case Yo:return Math.max(i,16)*Math.max(e,8)/4;case Go:case Xo:return Math.max(i,8)*Math.max(e,8)/2;case qo:case Ko:case Zo:case jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $o:case Jo:case Qo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case nc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ic:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case sc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case rc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ac:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case oc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case cc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case lc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case hc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case uc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case dc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case fc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case pc:case mc:case gc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case _c:case xc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case vc:case Mc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _g(i){switch(i){case Jt:case Uu:return{byteLength:1,components:1};case Qs:case Fu:case Qt:return{byteLength:2,components:1};case Gc:case Wc:return{byteLength:2,components:4};case In:case Hc:case Bt:return{byteLength:4,components:1};case Ou:case Bu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oc}}));typeof window<"u"&&(window.__THREE__?Ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oc);function hd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function xg(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<u.length;m++){const g=u[d],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let m=0,g=u.length;m<g;m++){const _=u[m];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var vg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Eg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ag=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Rg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ig=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Hg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$g="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Jg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,e0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,n0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,s0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,o0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,c0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,h0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,u0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,d0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,x0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,M0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,T0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,w0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,R0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,I0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,U0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,O0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,H0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,K0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,t_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,n_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,i_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,s_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,a_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,c_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,d_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,f_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,g_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,__=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const x_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,T_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,w_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,A_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,L_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,O_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,k_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,z_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,G_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,q_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,K_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Z_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,j_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:vg,alphahash_pars_fragment:Mg,alphamap_fragment:yg,alphamap_pars_fragment:Sg,alphatest_fragment:bg,alphatest_pars_fragment:Eg,aomap_fragment:Tg,aomap_pars_fragment:wg,batching_pars_vertex:Ag,batching_vertex:Rg,begin_vertex:Cg,beginnormal_vertex:Pg,bsdfs:Dg,iridescence_fragment:Ig,bumpmap_pars_fragment:Lg,clipping_planes_fragment:Ng,clipping_planes_pars_fragment:Ug,clipping_planes_pars_vertex:Fg,clipping_planes_vertex:Og,color_fragment:Bg,color_pars_fragment:kg,color_pars_vertex:zg,color_vertex:Vg,common:Hg,cube_uv_reflection_fragment:Gg,defaultnormal_vertex:Wg,displacementmap_pars_vertex:Xg,displacementmap_vertex:Yg,emissivemap_fragment:qg,emissivemap_pars_fragment:Kg,colorspace_fragment:$g,colorspace_pars_fragment:Zg,envmap_fragment:jg,envmap_common_pars_fragment:Jg,envmap_pars_fragment:Qg,envmap_pars_vertex:e0,envmap_physical_pars_fragment:u0,envmap_vertex:t0,fog_vertex:n0,fog_pars_vertex:i0,fog_fragment:s0,fog_pars_fragment:r0,gradientmap_pars_fragment:a0,lightmap_pars_fragment:o0,lights_lambert_fragment:c0,lights_lambert_pars_fragment:l0,lights_pars_begin:h0,lights_toon_fragment:d0,lights_toon_pars_fragment:f0,lights_phong_fragment:p0,lights_phong_pars_fragment:m0,lights_physical_fragment:g0,lights_physical_pars_fragment:_0,lights_fragment_begin:x0,lights_fragment_maps:v0,lights_fragment_end:M0,logdepthbuf_fragment:y0,logdepthbuf_pars_fragment:S0,logdepthbuf_pars_vertex:b0,logdepthbuf_vertex:E0,map_fragment:T0,map_pars_fragment:w0,map_particle_fragment:A0,map_particle_pars_fragment:R0,metalnessmap_fragment:C0,metalnessmap_pars_fragment:P0,morphinstance_vertex:D0,morphcolor_vertex:I0,morphnormal_vertex:L0,morphtarget_pars_vertex:N0,morphtarget_vertex:U0,normal_fragment_begin:F0,normal_fragment_maps:O0,normal_pars_fragment:B0,normal_pars_vertex:k0,normal_vertex:z0,normalmap_pars_fragment:V0,clearcoat_normal_fragment_begin:H0,clearcoat_normal_fragment_maps:G0,clearcoat_pars_fragment:W0,iridescence_pars_fragment:X0,opaque_fragment:Y0,packing:q0,premultiplied_alpha_fragment:K0,project_vertex:$0,dithering_fragment:Z0,dithering_pars_fragment:j0,roughnessmap_fragment:J0,roughnessmap_pars_fragment:Q0,shadowmap_pars_fragment:e_,shadowmap_pars_vertex:t_,shadowmap_vertex:n_,shadowmask_pars_fragment:i_,skinbase_vertex:s_,skinning_pars_vertex:r_,skinning_vertex:a_,skinnormal_vertex:o_,specularmap_fragment:c_,specularmap_pars_fragment:l_,tonemapping_fragment:h_,tonemapping_pars_fragment:u_,transmission_fragment:d_,transmission_pars_fragment:f_,uv_pars_fragment:p_,uv_pars_vertex:m_,uv_vertex:g_,worldpos_vertex:__,background_vert:x_,background_frag:v_,backgroundCube_vert:M_,backgroundCube_frag:y_,cube_vert:S_,cube_frag:b_,depth_vert:E_,depth_frag:T_,distance_vert:w_,distance_frag:A_,equirect_vert:R_,equirect_frag:C_,linedashed_vert:P_,linedashed_frag:D_,meshbasic_vert:I_,meshbasic_frag:L_,meshlambert_vert:N_,meshlambert_frag:U_,meshmatcap_vert:F_,meshmatcap_frag:O_,meshnormal_vert:B_,meshnormal_frag:k_,meshphong_vert:z_,meshphong_frag:V_,meshphysical_vert:H_,meshphysical_frag:G_,meshtoon_vert:W_,meshtoon_frag:X_,points_vert:Y_,points_frag:q_,shadow_vert:K_,shadow_frag:$_,sprite_vert:Z_,sprite_frag:j_},ce={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Tn={basic:{uniforms:Ot([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Ot([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Le(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Ot([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Ot([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Ot([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Le(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Ot([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Ot([ce.points,ce.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Ot([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Ot([ce.common,ce.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Ot([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Ot([ce.sprite,ce.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:Ot([ce.common,ce.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:Ot([ce.lights,ce.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Tn.physical={uniforms:Ot([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Xr={r:0,b:0,g:0},xi=new kt,J_=new Ue;function Q_(i,e,t,n,s,r,a){const o=new Le(0);let c=r===!0?0:1,l,h,u=null,d=0,m=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function _(b){let S=!1;const T=g(b);T===null?f(o,c):T&&T.isColor&&(f(T,1),S=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,S){const T=g(S);T&&(T.isCubeTexture||T.mapping===Sa)?(h===void 0&&(h=new Pt(new _s(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:us(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),xi.copy(S.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(J_.makeRotationFromEuler(xi)),h.material.toneMapped=Ye.getTransfer(T.colorSpace)!==tt,(u!==T||d!==T.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,m=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Pt(new xs(2,2),new Ln({name:"BackgroundMaterial",uniforms:us(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(T.colorSpace)!==tt,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=T,d=T.version,m=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function f(b,S){b.getRGB(Xr,$u(i)),n.buffers.color.setClear(Xr.r,Xr.g,Xr.b,S,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),c=S,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,f(o,c)},render:_,addToRenderList:p,dispose:y}}function ex(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(M,P,N,U,O){let V=!1;const k=u(U,N,P);r!==k&&(r=k,l(r.object)),V=m(M,U,N,O),V&&g(M,U,N,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,S(M,P,N,U),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,P,N){const U=N.wireframe===!0;let O=n[M.id];O===void 0&&(O={},n[M.id]=O);let V=O[P.id];V===void 0&&(V={},O[P.id]=V);let k=V[U];return k===void 0&&(k=d(c()),V[U]=k),k}function d(M){const P=[],N=[],U=[];for(let O=0;O<t;O++)P[O]=0,N[O]=0,U[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:U,object:M,attributes:{},index:null}}function m(M,P,N,U){const O=r.attributes,V=P.attributes;let k=0;const G=N.getAttributes();for(const K in G)if(G[K].location>=0){const ee=O[K];let he=V[K];if(he===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),ee===void 0||ee.attribute!==he||he&&ee.data!==he.data)return!0;k++}return r.attributesNum!==k||r.index!==U}function g(M,P,N,U){const O={},V=P.attributes;let k=0;const G=N.getAttributes();for(const K in G)if(G[K].location>=0){let ee=V[K];ee===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor));const he={};he.attribute=ee,ee&&ee.data&&(he.data=ee.data),O[K]=he,k++}r.attributes=O,r.attributesNum=k,r.index=U}function _(){const M=r.newAttributes;for(let P=0,N=M.length;P<N;P++)M[P]=0}function p(M){f(M,0)}function f(M,P){const N=r.newAttributes,U=r.enabledAttributes,O=r.attributeDivisors;N[M]=1,U[M]===0&&(i.enableVertexAttribArray(M),U[M]=1),O[M]!==P&&(i.vertexAttribDivisor(M,P),O[M]=P)}function y(){const M=r.newAttributes,P=r.enabledAttributes;for(let N=0,U=P.length;N<U;N++)P[N]!==M[N]&&(i.disableVertexAttribArray(N),P[N]=0)}function b(M,P,N,U,O,V,k){k===!0?i.vertexAttribIPointer(M,P,N,O,V):i.vertexAttribPointer(M,P,N,U,O,V)}function S(M,P,N,U){_();const O=U.attributes,V=N.getAttributes(),k=P.defaultAttributeValues;for(const G in V){const K=V[G];if(K.location>=0){let ne=O[G];if(ne===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),ne!==void 0){const ee=ne.normalized,he=ne.itemSize,Ae=e.get(ne);if(Ae===void 0)continue;const Re=Ae.buffer,ot=Ae.type,ut=Ae.bytesPerElement,q=ot===i.INT||ot===i.UNSIGNED_INT||ne.gpuType===Hc;if(ne.isInterleavedBufferAttribute){const j=ne.data,me=j.stride,Fe=ne.offset;if(j.isInstancedInterleavedBuffer){for(let xe=0;xe<K.locationSize;xe++)f(K.location+xe,j.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let xe=0;xe<K.locationSize;xe++)p(K.location+xe);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let xe=0;xe<K.locationSize;xe++)b(K.location+xe,he/K.locationSize,ot,ee,me*ut,(Fe+he/K.locationSize*xe)*ut,q)}else{if(ne.isInstancedBufferAttribute){for(let j=0;j<K.locationSize;j++)f(K.location+j,ne.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let j=0;j<K.locationSize;j++)p(K.location+j);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let j=0;j<K.locationSize;j++)b(K.location+j,he/K.locationSize,ot,ee,he*ut,he/K.locationSize*j*ut,q)}}else if(k!==void 0){const ee=k[G];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(K.location,ee);break;case 3:i.vertexAttrib3fv(K.location,ee);break;case 4:i.vertexAttrib4fv(K.location,ee);break;default:i.vertexAttrib1fv(K.location,ee)}}}}y()}function T(){C();for(const M in n){const P=n[M];for(const N in P){const U=P[N];for(const O in U)h(U[O].object),delete U[O];delete P[N]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const N in P){const U=P[N];for(const O in U)h(U[O].object),delete U[O];delete P[N]}delete n[M.id]}function R(M){for(const P in n){const N=n[P];if(N[M.id]===void 0)continue;const U=N[M.id];for(const O in U)h(U[O].object),delete U[O];delete N[M.id]}}function C(){x(),a=!0,r!==s&&(r=s,l(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:x,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function tx(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];t.update(m,n,1)}function c(l,h,u,d){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function nx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==on&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const C=R===Qt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Jt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Bt&&!C)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Ee("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:S,maxSamples:T,samples:w}}function ix(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new yi,o=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||s;return s=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{const y=r?0:n,b=y*4;let S=f.clippingState||null;c.value=S,S=h(g,d,b,m);for(let T=0;T!==b;++T)S[T]=t[T];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const f=m+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<f)&&(p=new Float32Array(f));for(let b=0,S=m;b!==_;++b,S+=4)a.copy(u[b]).applyMatrix4(y,o),a.normal.toArray(p,S),p[S+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function sx(i){let e=new WeakMap;function t(a,o){return o===fa?a.mapping=Pi:o===Ho&&(a.mapping=os),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===fa||o===Ho)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Ju(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const hi=4,Dh=[.125,.215,.35,.446,.526,.582],Ei=20,rx=256,Fs=new Aa,Ih=new Le;let go=null,_o=0,xo=0,vo=!1;const ax=new I;class Tc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=ax}=r;go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(go,_o,xo),this._renderer.xr.enabled=vo,e.scissorTest=!1,Qi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pi||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:Qt,format:on,colorSpace:Rt,depthBuffer:!1},s=Lh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lh(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ox(r)),this._blurMaterial=lx(r,e,t),this._ggxMaterial=cx(r,e,t)}return s}_compileMaterial(e){const t=new Pt(new Yt,e);this._renderer.compile(t,Fs)}_sceneToCubeUV(e,t,n,s,r){const c=new Lt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,m=u.toneMapping;u.getClearColor(Ih),u.toneMapping=_n,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new _s,new Pn({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let f=!1;const y=e.background;y?y.isColor&&(p.color.copy(y),e.background=null,f=!0):(p.color.copy(Ih),f=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):S===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));const T=this._cubeSize;Qi(s,S*T,b>2?T:0,T,T),u.setRenderTarget(s),f&&u.render(_,c),u.render(e,c)}u.toneMapping=m,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Pi||e.mapping===os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Qi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Fs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=0+l*1.25,m=u*d,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-hi?n-g+hi:0),f=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=g-t,Qi(r,p,f,3*_,2*_),s.setRenderTarget(r),s.render(o,Fs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Qi(e,p,f,3*_,2*_),s.setRenderTarget(e),s.render(o,Fs)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[s];u.material=l;const d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ei-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Ei;p>Ei&&Ee(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ei}`);const f=[];let y=0;for(let R=0;R<Ei;++R){const C=R/_,x=Math.exp(-C*C/2);f.push(x),R===0?y+=x:R<p&&(y+=2*x)}for(let R=0;R<f.length;R++)f[R]=f[R]/y;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const S=this._sizeLods[s],T=3*S*(s>b-hi?s-b+hi:0),w=4*(this._cubeSize-S);Qi(t,T,w,3*S,2*S),c.setRenderTarget(t),c.render(u,Fs)}}function ox(i){const e=[],t=[],n=[];let s=i;const r=i-hi+1+Dh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-hi?c=Dh[a-i+hi-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,f=1,y=new Float32Array(_*g*m),b=new Float32Array(p*g*m),S=new Float32Array(f*g*m);for(let w=0;w<m;w++){const R=w%3*2/3-1,C=w>2?0:-1,x=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];y.set(x,_*g*w),b.set(d,p*g*w);const M=[w,w,w,w,w,w];S.set(M,f*g*w)}const T=new Yt;T.setAttribute("position",new zt(y,_)),T.setAttribute("uv",new zt(b,p)),T.setAttribute("faceIndex",new zt(S,f)),n.push(new Pt(T,null)),s>hi&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Lh(i,e,t){const n=new Dn(i,e,t);return n.texture.mapping=Sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function cx(i,e,t){return new Ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ra(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function lx(i,e,t){const n=new Float32Array(Ei),s=new I(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Nh(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Uh(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Ra(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hx(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===fa||c===Ho,h=c===Pi||c===os;if(l||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Tc(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return l&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new Tc(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ux(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&sr("WebGLRenderer: "+n+" extension not supported."),s}}}function dx(i,e,t,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const m in d)e.update(d[m],i.ARRAY_BUFFER)}function l(u){const d=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let b=0,S=y.length;b<S;b+=3){const T=y[b+0],w=y[b+1],R=y[b+2];d.push(T,w,w,R,R,T)}}else if(g!==void 0){const y=g.array;_=g.version;for(let b=0,S=y.length/3-1;b<S;b+=3){const T=b+0,w=b+1,R=b+2;d.push(T,w,w,R,R,T)}}else return;const p=new(Gu(d)?Ku:qu)(d,1);p.version=_;const f=r.get(u);f&&e.remove(f),r.set(u,p)}function h(u){const d=r.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function fx(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,m){i.drawElements(n,m,r,d*a),t.update(m,n,1)}function l(d,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,d*a,g),t.update(m,n,g))}function h(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];t.update(p,n,1)}function u(d,m,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)l(d[f]/a,m[f],_[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,_,0,g);let f=0;for(let y=0;y<g;y++)f+=m[y]*_[y];t.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function px(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ce("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function mx(i,e,t){const n=new WeakMap,s=new dt;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let x=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",x)};d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let b=0;m===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let S=o.attributes.position.count*b,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const w=new Float32Array(S*T*4*u),R=new Wu(w,S,T,u);R.type=Bt,R.needsUpdate=!0;const C=b*4;for(let M=0;M<u;M++){const P=p[M],N=f[M],U=y[M],O=S*T*4*M;for(let V=0;V<P.count;V++){const k=V*C;m===!0&&(s.fromBufferAttribute(P,V),w[O+k+0]=s.x,w[O+k+1]=s.y,w[O+k+2]=s.z,w[O+k+3]=0),g===!0&&(s.fromBufferAttribute(N,V),w[O+k+4]=s.x,w[O+k+5]=s.y,w[O+k+6]=s.z,w[O+k+7]=0),_===!0&&(s.fromBufferAttribute(U,V),w[O+k+8]=s.x,w[O+k+9]=s.y,w[O+k+10]=s.z,w[O+k+11]=U.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new Ne(S,T)},n.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];const g=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function gx(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const _x={[Bc]:"LINEAR_TONE_MAPPING",[kc]:"REINHARD_TONE_MAPPING",[zc]:"CINEON_TONE_MAPPING",[Vc]:"ACES_FILMIC_TONE_MAPPING",[Du]:"AGX_TONE_MAPPING",[Iu]:"NEUTRAL_TONE_MAPPING",[Pu]:"CUSTOM_TONE_MAPPING"};function xx(i,e,t,n,s){const r=new Dn(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),a=new Dn(e,t,{type:Qt,depthBuffer:!1,stencilBuffer:!1}),o=new Yt;o.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Xt([0,2,0,0,2,0],2));const c=new km({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Pt(o,c),h=new Aa(-1,1,1,-1,0,1);let u=null,d=null,m=!1,g,_=null,p=[],f=!1;this.setSize=function(y,b){r.setSize(y,b),a.setSize(y,b);for(let S=0;S<p.length;S++){const T=p[S];T.setSize&&T.setSize(y,b)}},this.setEffects=function(y){p=y,f=p.length>0&&p[0].isRenderPass===!0;const b=r.width,S=r.height;for(let T=0;T<p.length;T++){const w=p[T];w.setSize&&w.setSize(b,S)}},this.begin=function(y,b){if(m||y.toneMapping===_n&&p.length===0)return!1;if(_=b,b!==null){const S=b.width,T=b.height;(r.width!==S||r.height!==T)&&this.setSize(S,T)}return f===!1&&y.setRenderTarget(r),g=y.toneMapping,y.toneMapping=_n,!0},this.hasRenderPass=function(){return f},this.end=function(y,b){y.toneMapping=g,m=!0;let S=r,T=a;for(let w=0;w<p.length;w++){const R=p[w];if(R.enabled!==!1&&(R.render(y,T,S,b),R.needsSwap!==!1)){const C=S;S=T,T=C}}if(u!==y.outputColorSpace||d!==y.toneMapping){u=y.outputColorSpace,d=y.toneMapping,c.defines={},Ye.getTransfer(u)===tt&&(c.defines.SRGB_TRANSFER="");const w=_x[d];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,y.setRenderTarget(_),y.render(l,h),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),c.dispose()}}const ud=new yt,wc=new or(1,1),dd=new Wu,fd=new am,pd=new ju,Fh=[],Oh=[],Bh=new Float32Array(16),kh=new Float32Array(9),zh=new Float32Array(4);function ys(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Fh[s];if(r===void 0&&(r=new Float32Array(s),Fh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function St(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ca(i,e){let t=Oh[e];t===void 0&&(t=new Int32Array(e),Oh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function vx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Mx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function yx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function Sx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function bx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(St(t,n))return;zh.set(n),i.uniformMatrix2fv(this.addr,!1,zh),bt(t,n)}}function Ex(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(St(t,n))return;kh.set(n),i.uniformMatrix3fv(this.addr,!1,kh),bt(t,n)}}function Tx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(St(t,n))return;Bh.set(n),i.uniformMatrix4fv(this.addr,!1,Bh),bt(t,n)}}function wx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ax(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2iv(this.addr,e),bt(t,e)}}function Rx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3iv(this.addr,e),bt(t,e)}}function Cx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4iv(this.addr,e),bt(t,e)}}function Px(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Dx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2uiv(this.addr,e),bt(t,e)}}function Ix(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3uiv(this.addr,e),bt(t,e)}}function Lx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4uiv(this.addr,e),bt(t,e)}}function Nx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wc.compareFunction=t.isReversedDepthBuffer()?Zc:$c,r=wc):r=ud,t.setTexture2D(e||r,s)}function Ux(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||fd,s)}function Fx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||pd,s)}function Ox(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||dd,s)}function Bx(i){switch(i){case 5126:return vx;case 35664:return Mx;case 35665:return yx;case 35666:return Sx;case 35674:return bx;case 35675:return Ex;case 35676:return Tx;case 5124:case 35670:return wx;case 35667:case 35671:return Ax;case 35668:case 35672:return Rx;case 35669:case 35673:return Cx;case 5125:return Px;case 36294:return Dx;case 36295:return Ix;case 36296:return Lx;case 35678:case 36198:case 36298:case 36306:case 35682:return Nx;case 35679:case 36299:case 36307:return Ux;case 35680:case 36300:case 36308:case 36293:return Fx;case 36289:case 36303:case 36311:case 36292:return Ox}}function kx(i,e){i.uniform1fv(this.addr,e)}function zx(i,e){const t=ys(e,this.size,2);i.uniform2fv(this.addr,t)}function Vx(i,e){const t=ys(e,this.size,3);i.uniform3fv(this.addr,t)}function Hx(i,e){const t=ys(e,this.size,4);i.uniform4fv(this.addr,t)}function Gx(i,e){const t=ys(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Wx(i,e){const t=ys(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Xx(i,e){const t=ys(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Yx(i,e){i.uniform1iv(this.addr,e)}function qx(i,e){i.uniform2iv(this.addr,e)}function Kx(i,e){i.uniform3iv(this.addr,e)}function $x(i,e){i.uniform4iv(this.addr,e)}function Zx(i,e){i.uniform1uiv(this.addr,e)}function jx(i,e){i.uniform2uiv(this.addr,e)}function Jx(i,e){i.uniform3uiv(this.addr,e)}function Qx(i,e){i.uniform4uiv(this.addr,e)}function ev(i,e,t){const n=this.cache,s=e.length,r=Ca(t,s);St(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=wc:a=ud;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function tv(i,e,t){const n=this.cache,s=e.length,r=Ca(t,s);St(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||fd,r[a])}function nv(i,e,t){const n=this.cache,s=e.length,r=Ca(t,s);St(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||pd,r[a])}function iv(i,e,t){const n=this.cache,s=e.length,r=Ca(t,s);St(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||dd,r[a])}function sv(i){switch(i){case 5126:return kx;case 35664:return zx;case 35665:return Vx;case 35666:return Hx;case 35674:return Gx;case 35675:return Wx;case 35676:return Xx;case 5124:case 35670:return Yx;case 35667:case 35671:return qx;case 35668:case 35672:return Kx;case 35669:case 35673:return $x;case 5125:return Zx;case 36294:return jx;case 36295:return Jx;case 36296:return Qx;case 35678:case 36198:case 36298:case 36306:case 35682:return ev;case 35679:case 36299:case 36307:return tv;case 35680:case 36300:case 36308:case 36293:return nv;case 36289:case 36303:case 36311:case 36292:return iv}}class rv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Bx(t.type)}}class av{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sv(t.type)}}class ov{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Mo=/(\w+)(\])?(\[|\.)?/g;function Vh(i,e){i.seq.push(e),i.map[e.id]=e}function cv(i,e,t){const n=i.name,s=n.length;for(Mo.lastIndex=0;;){const r=Mo.exec(n),a=Mo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Vh(t,l===void 0?new rv(o,i,e):new av(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new ov(o),Vh(t,u)),t=u}}}class ra{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);cv(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Hh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const lv=37297;let hv=0;function uv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Gh=new Oe;function dv(i){Ye._getMatrix(Gh,Ye.workingColorSpace,i);const e=`mat3( ${Gh.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case ma:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return Ee("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Wh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+uv(i.getShaderSource(e),o)}else return r}function fv(i,e){const t=dv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const pv={[Bc]:"Linear",[kc]:"Reinhard",[zc]:"Cineon",[Vc]:"ACESFilmic",[Du]:"AgX",[Iu]:"Neutral",[Pu]:"Custom"};function mv(i,e){const t=pv[e];return t===void 0?(Ee("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Yr=new I;function gv(){Ye.getLuminanceCoefficients(Yr);const i=Yr.x.toFixed(4),e=Yr.y.toFixed(4),t=Yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _v(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function xv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ys(i){return i!==""}function Xh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(i){return i.replace(Mv,Sv)}const yv=new Map;function Sv(i,e){let t=Be[e];if(t===void 0){const n=yv.get(e);if(n!==void 0)t=Be[n],Ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ac(t)}const bv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qh(i){return i.replace(bv,Ev)}function Ev(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Tv={[Ks]:"SHADOWMAP_TYPE_PCF",[es]:"SHADOWMAP_TYPE_VSM"};function wv(i){return Tv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Av={[Pi]:"ENVMAP_TYPE_CUBE",[os]:"ENVMAP_TYPE_CUBE",[Sa]:"ENVMAP_TYPE_CUBE_UV"};function Rv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Av[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Cv={[os]:"ENVMAP_MODE_REFRACTION"};function Pv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Cv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Dv={[Cu]:"ENVMAP_BLENDING_MULTIPLY",[Sp]:"ENVMAP_BLENDING_MIX",[bp]:"ENVMAP_BLENDING_ADD"};function Iv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Dv[i.combine]||"ENVMAP_BLENDING_NONE"}function Lv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Nv(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=wv(t),l=Rv(t),h=Pv(t),u=Iv(t),d=Lv(t),m=_v(t),g=xv(r),_=s.createProgram();let p,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ys).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ys).join(`
`),f.length>0&&(f+=`
`)):(p=[Kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),f=[Kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?Be.tonemapping_pars_fragment:"",t.toneMapping!==_n?mv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,fv("linearToOutputTexel",t.outputColorSpace),gv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ys).join(`
`)),a=Ac(a),a=Xh(a,t),a=Yh(a,t),o=Ac(o),o=Xh(o,t),o=Yh(o,t),a=qh(a),o=qh(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=y+p+a,S=y+f+o,T=Hh(s,s.VERTEX_SHADER,b),w=Hh(s,s.FRAGMENT_SHADER,S);s.attachShader(_,T),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(P){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(_)||"",U=s.getShaderInfoLog(T)||"",O=s.getShaderInfoLog(w)||"",V=N.trim(),k=U.trim(),G=O.trim();let K=!0,ne=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,w);else{const ee=Wh(s,T,"vertex"),he=Wh(s,w,"fragment");Ce("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+ee+`
`+he)}else V!==""?Ee("WebGLProgram: Program Info Log:",V):(k===""||G==="")&&(ne=!1);ne&&(P.diagnostics={runnable:K,programLog:V,vertexShader:{log:k,prefix:p},fragmentShader:{log:G,prefix:f}})}s.deleteShader(T),s.deleteShader(w),C=new ra(s,_),x=vv(s,_)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let x;this.getAttributes=function(){return x===void 0&&R(this),x};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,lv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}let Uv=0;class Fv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ov(e),t.set(e,n)),n}}class Ov{constructor(e){this.id=Uv++,this.code=e,this.usedTimes=0}}function Bv(i,e,t,n,s,r,a){const o=new Xu,c=new Fv,l=new Set,h=[],u=new Map,d=s.logarithmicDepthBuffer;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,M,P,N,U){const O=N.fog,V=U.geometry,k=x.isMeshStandardMaterial?N.environment:null,G=(x.isMeshStandardMaterial?t:e).get(x.envMap||k),K=G&&G.mapping===Sa?G.image.height:null,ne=g[x.type];x.precision!==null&&(m=s.getMaxPrecision(x.precision),m!==x.precision&&Ee("WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const ee=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,he=ee!==void 0?ee.length:0;let Ae=0;V.morphAttributes.position!==void 0&&(Ae=1),V.morphAttributes.normal!==void 0&&(Ae=2),V.morphAttributes.color!==void 0&&(Ae=3);let Re,ot,ut,q;if(ne){const Qe=Tn[ne];Re=Qe.vertexShader,ot=Qe.fragmentShader}else Re=x.vertexShader,ot=x.fragmentShader,c.update(x),ut=c.getVertexShaderID(x),q=c.getFragmentShaderID(x);const j=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Fe=U.isInstancedMesh===!0,xe=U.isBatchedMesh===!0,Ke=!!x.map,Et=!!x.matcap,qe=!!G,Je=!!x.aoMap,rt=!!x.lightMap,ze=!!x.bumpMap,_t=!!x.normalMap,D=!!x.displacementMap,xt=!!x.emissiveMap,Ze=!!x.metalnessMap,ct=!!x.roughnessMap,Me=x.anisotropy>0,A=x.clearcoat>0,v=x.dispersion>0,F=x.iridescence>0,Y=x.sheen>0,Z=x.transmission>0,X=Me&&!!x.anisotropyMap,Se=A&&!!x.clearcoatMap,se=A&&!!x.clearcoatNormalMap,ve=A&&!!x.clearcoatRoughnessMap,De=F&&!!x.iridescenceMap,Q=F&&!!x.iridescenceThicknessMap,ae=Y&&!!x.sheenColorMap,_e=Y&&!!x.sheenRoughnessMap,ye=!!x.specularMap,re=!!x.specularColorMap,Ve=!!x.specularIntensityMap,L=Z&&!!x.transmissionMap,ue=Z&&!!x.thicknessMap,te=!!x.gradientMap,fe=!!x.alphaMap,J=x.alphaTest>0,$=!!x.alphaHash,ie=!!x.extensions;let Ie=_n;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ie=i.toneMapping);const lt={shaderID:ne,shaderType:x.type,shaderName:x.name,vertexShader:Re,fragmentShader:ot,defines:x.defines,customVertexShaderID:ut,customFragmentShaderID:q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:xe,batchingColor:xe&&U._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&U.instanceColor!==null,instancingMorph:Fe&&U.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Rt,alphaToCoverage:!!x.alphaToCoverage,map:Ke,matcap:Et,envMap:qe,envMapMode:qe&&G.mapping,envMapCubeUVHeight:K,aoMap:Je,lightMap:rt,bumpMap:ze,normalMap:_t,displacementMap:D,emissiveMap:xt,normalMapObjectSpace:_t&&x.normalMapType===Rp,normalMapTangentSpace:_t&&x.normalMapType===Hu,metalnessMap:Ze,roughnessMap:ct,anisotropy:Me,anisotropyMap:X,clearcoat:A,clearcoatMap:Se,clearcoatNormalMap:se,clearcoatRoughnessMap:ve,dispersion:v,iridescence:F,iridescenceMap:De,iridescenceThicknessMap:Q,sheen:Y,sheenColorMap:ae,sheenRoughnessMap:_e,specularMap:ye,specularColorMap:re,specularIntensityMap:Ve,transmission:Z,transmissionMap:L,thicknessMap:ue,gradientMap:te,opaque:x.transparent===!1&&x.blending===ui&&x.alphaToCoverage===!1,alphaMap:fe,alphaTest:J,alphaHash:$,combine:x.combine,mapUv:Ke&&_(x.map.channel),aoMapUv:Je&&_(x.aoMap.channel),lightMapUv:rt&&_(x.lightMap.channel),bumpMapUv:ze&&_(x.bumpMap.channel),normalMapUv:_t&&_(x.normalMap.channel),displacementMapUv:D&&_(x.displacementMap.channel),emissiveMapUv:xt&&_(x.emissiveMap.channel),metalnessMapUv:Ze&&_(x.metalnessMap.channel),roughnessMapUv:ct&&_(x.roughnessMap.channel),anisotropyMapUv:X&&_(x.anisotropyMap.channel),clearcoatMapUv:Se&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(x.sheenRoughnessMap.channel),specularMapUv:ye&&_(x.specularMap.channel),specularColorMapUv:re&&_(x.specularColorMap.channel),specularIntensityMapUv:Ve&&_(x.specularIntensityMap.channel),transmissionMapUv:L&&_(x.transmissionMap.channel),thicknessMapUv:ue&&_(x.thicknessMap.channel),alphaMapUv:fe&&_(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(_t||Me),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!V.attributes.uv&&(Ke||fe),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:U.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Ae,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Ke&&x.map.isVideoTexture===!0&&Ye.getTransfer(x.map.colorSpace)===tt,decodeVideoTextureEmissive:xt&&x.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(x.emissiveMap.colorSpace)===tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===mn,flipSided:x.side===Wt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ie&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&x.extensions.multiDraw===!0||xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return lt.vertexUv1s=l.has(1),lt.vertexUv2s=l.has(2),lt.vertexUv3s=l.has(3),l.clear(),lt}function f(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)M.push(P),M.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(y(M,x),b(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function y(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function b(x,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),x.push(o.mask)}function S(x){const M=g[x.type];let P;if(M){const N=Tn[M];P=Sm.clone(N.uniforms)}else P=x.uniforms;return P}function T(x,M){let P=u.get(M);return P!==void 0?++P.usedTimes:(P=new Nv(i,M,x,r),h.push(P),u.set(M,P)),P}function w(x){if(--x.usedTimes===0){const M=h.indexOf(x);h[M]=h[h.length-1],h.pop(),u.delete(x.cacheKey),x.destroy()}}function R(x){c.remove(x)}function C(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:S,acquireProgram:T,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:C}}function kv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function zv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function $h(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Zh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,m,g,_,p){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=p),e++,f}function o(u,d,m,g,_,p){const f=a(u,d,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function c(u,d,m,g,_,p){const f=a(u,d,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||zv),n.length>1&&n.sort(d||$h),s.length>1&&s.sort(d||$h)}function h(){for(let u=e,d=i.length;u<d;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Vv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Zh,i.set(n,[a])):s>=r.length?(a=new Zh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Hv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Le};break;case"SpotLight":t={position:new I,direction:new I,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Gv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Wv=0;function Xv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Yv(i){const e=new Hv,t=Gv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new Ue,a=new Ue;function o(l){let h=0,u=0,d=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let m=0,g=0,_=0,p=0,f=0,y=0,b=0,S=0,T=0,w=0,R=0;l.sort(Xv);for(let x=0,M=l.length;x<M;x++){const P=l[x],N=P.color,U=P.intensity,O=P.distance;let V=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ls?V=P.shadow.map.texture:V=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=N.r*U,u+=N.g*U,d+=N.b*U;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],U);R++}else if(P.isDirectionalLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const G=P.shadow,K=t.get(P);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,n.directionalShadow[m]=K,n.directionalShadowMap[m]=V,n.directionalShadowMatrix[m]=P.shadow.matrix,y++}n.directional[m]=k,m++}else if(P.isSpotLight){const k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(N).multiplyScalar(U),k.distance=O,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[_]=k;const G=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,G.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=G.matrix,P.castShadow){const K=t.get(P);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,n.spotShadow[_]=K,n.spotShadowMap[_]=V,S++}_++}else if(P.isRectAreaLight){const k=e.get(P);k.color.copy(N).multiplyScalar(U),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=k,p++}else if(P.isPointLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const G=P.shadow,K=t.get(P);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,K.shadowCameraNear=G.camera.near,K.shadowCameraFar=G.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=k,g++}else if(P.isHemisphereLight){const k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(U),k.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[f]=k,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==m||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==p||C.hemiLength!==f||C.numDirectionalShadows!==y||C.numPointShadows!==b||C.numSpotShadows!==S||C.numSpotMaps!==T||C.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,C.directionalLength=m,C.pointLength=g,C.spotLength=_,C.rectAreaLength=p,C.hemiLength=f,C.numDirectionalShadows=y,C.numPointShadows=b,C.numSpotShadows=S,C.numSpotMaps=T,C.numLightProbes=R,n.version=Wv++)}function c(l,h){let u=0,d=0,m=0,g=0,_=0;const p=h.matrixWorldInverse;for(let f=0,y=l.length;f<y;f++){const b=l[f];if(b.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(b.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(p),_++}}}return{setup:o,setupView:c,state:n}}function jh(i){const e=new Yv(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function qv(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new jh(i),e.set(s,[o])):r>=a.length?(o=new jh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Kv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$v=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Zv=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],jv=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Jh=new Ue,Os=new I,yo=new I;function Jv(i,e,t){let n=new el;const s=new Ne,r=new Ne,a=new dt,o=new zm,c=new Vm,l={},h=t.maxTextureSize,u={[jn]:Wt,[Wt]:jn,[mn]:mn},d=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Kv,fragmentShader:$v}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Yt;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ks;let f=this.type;this.render=function(w,R,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;w.type===Ru&&(Ee("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=Ks);const x=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending($n),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=f!==this.type;U&&R.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(V=>V.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,V=w.length;O<V;O++){const k=w[O],G=k.shadow;if(G===void 0){Ee("WebGLShadowMap:",k,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const K=G.getFrameExtents();if(s.multiply(K),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,G.mapSize.y=r.y)),G.map===null||U===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===es){if(k.isPointLight){Ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Dn(s.x,s.y,{format:ls,type:Qt,minFilter:je,magFilter:je,generateMipmaps:!1}),G.map.texture.name=k.name+".shadowMap",G.map.depthTexture=new or(s.x,s.y,Bt),G.map.depthTexture.name=k.name+".shadowMapDepth",G.map.depthTexture.format=Jn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Mt,G.map.depthTexture.magFilter=Mt}else{k.isPointLight?(G.map=new Ju(s.x),G.map.depthTexture=new Bm(s.x,In)):(G.map=new Dn(s.x,s.y),G.map.depthTexture=new or(s.x,s.y,In)),G.map.depthTexture.name=k.name+".shadowMap",G.map.depthTexture.format=Jn;const ee=i.state.buffers.depth.getReversed();this.type===Ks?(G.map.depthTexture.compareFunction=ee?Zc:$c,G.map.depthTexture.minFilter=je,G.map.depthTexture.magFilter=je):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Mt,G.map.depthTexture.magFilter=Mt)}G.camera.updateProjectionMatrix()}const ne=G.map.isWebGLCubeRenderTarget?6:1;for(let ee=0;ee<ne;ee++){if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,ee),i.clear();else{ee===0&&(i.setRenderTarget(G.map),i.clear());const he=G.getViewport(ee);a.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),N.viewport(a)}if(k.isPointLight){const he=G.camera,Ae=G.matrix,Re=k.distance||he.far;Re!==he.far&&(he.far=Re,he.updateProjectionMatrix()),Os.setFromMatrixPosition(k.matrixWorld),he.position.copy(Os),yo.copy(he.position),yo.add(Zv[ee]),he.up.copy(jv[ee]),he.lookAt(yo),he.updateMatrixWorld(),Ae.makeTranslation(-Os.x,-Os.y,-Os.z),Jh.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Jh,he.coordinateSystem,he.reversedDepth)}else G.updateMatrices(k);n=G.getFrustum(),S(R,C,G.camera,k,this.type)}G.isPointLightShadow!==!0&&this.type===es&&y(G,C),G.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(x,M,P)};function y(w,R){const C=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Dn(s.x,s.y,{format:ls,type:Qt})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,C,d,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,C,m,_,null)}function b(w,R,C,x){let M=null;const P=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)M=P;else if(M=C.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=M.uuid,U=R.uuid;let O=l[N];O===void 0&&(O={},l[N]=O);let V=O[U];V===void 0&&(V=M.clone(),O[U]=V,R.addEventListener("dispose",T)),M=V}if(M.visible=R.visible,M.wireframe=R.wireframe,x===es?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=i.properties.get(M);N.light=C}return M}function S(w,R,C,x,M){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===es)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const U=e.update(w),O=w.material;if(Array.isArray(O)){const V=U.groups;for(let k=0,G=V.length;k<G;k++){const K=V[k],ne=O[K.materialIndex];if(ne&&ne.visible){const ee=b(w,ne,x,M);w.onBeforeShadow(i,w,R,C,U,ee,K),i.renderBufferDirect(C,null,U,ee,w,K),w.onAfterShadow(i,w,R,C,U,ee,K)}}}else if(O.visible){const V=b(w,O,x,M);w.onBeforeShadow(i,w,R,C,U,V,null),i.renderBufferDirect(C,null,U,V,w,null),w.onAfterShadow(i,w,R,C,U,V,null)}}const N=w.children;for(let U=0,O=N.length;U<O;U++)S(N[U],R,C,x,M)}function T(w){w.target.removeEventListener("dispose",T);for(const C in l){const x=l[C],M=w.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}const Qv={[Uo]:Fo,[Oo]:zo,[Bo]:Vo,[Ci]:ko,[Fo]:Uo,[zo]:Oo,[Vo]:Bo,[ko]:Ci};function eM(i,e){function t(){let L=!1;const ue=new dt;let te=null;const fe=new dt(0,0,0,0);return{setMask:function(J){te!==J&&!L&&(i.colorMask(J,J,J,J),te=J)},setLocked:function(J){L=J},setClear:function(J,$,ie,Ie,lt){lt===!0&&(J*=Ie,$*=Ie,ie*=Ie),ue.set(J,$,ie,Ie),fe.equals(ue)===!1&&(i.clearColor(J,$,ie,Ie),fe.copy(ue))},reset:function(){L=!1,te=null,fe.set(-1,0,0,0)}}}function n(){let L=!1,ue=!1,te=null,fe=null,J=null;return{setReversed:function($){if(ue!==$){const ie=e.get("EXT_clip_control");$?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),ue=$;const Ie=J;J=null,this.setClear(Ie)}},getReversed:function(){return ue},setTest:function($){$?j(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function($){te!==$&&!L&&(i.depthMask($),te=$)},setFunc:function($){if(ue&&($=Qv[$]),fe!==$){switch($){case Uo:i.depthFunc(i.NEVER);break;case Fo:i.depthFunc(i.ALWAYS);break;case Oo:i.depthFunc(i.LESS);break;case Ci:i.depthFunc(i.LEQUAL);break;case Bo:i.depthFunc(i.EQUAL);break;case ko:i.depthFunc(i.GEQUAL);break;case zo:i.depthFunc(i.GREATER);break;case Vo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=$}},setLocked:function($){L=$},setClear:function($){J!==$&&(ue&&($=1-$),i.clearDepth($),J=$)},reset:function(){L=!1,te=null,fe=null,J=null,ue=!1}}}function s(){let L=!1,ue=null,te=null,fe=null,J=null,$=null,ie=null,Ie=null,lt=null;return{setTest:function(Qe){L||(Qe?j(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(Qe){ue!==Qe&&!L&&(i.stencilMask(Qe),ue=Qe)},setFunc:function(Qe,yn,Fn){(te!==Qe||fe!==yn||J!==Fn)&&(i.stencilFunc(Qe,yn,Fn),te=Qe,fe=yn,J=Fn)},setOp:function(Qe,yn,Fn){($!==Qe||ie!==yn||Ie!==Fn)&&(i.stencilOp(Qe,yn,Fn),$=Qe,ie=yn,Ie=Fn)},setLocked:function(Qe){L=Qe},setClear:function(Qe){lt!==Qe&&(i.clearStencil(Qe),lt=Qe)},reset:function(){L=!1,ue=null,te=null,fe=null,J=null,$=null,ie=null,Ie=null,lt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,m=[],g=null,_=!1,p=null,f=null,y=null,b=null,S=null,T=null,w=null,R=new Le(0,0,0),C=0,x=!1,M=null,P=null,N=null,U=null,O=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,G=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(K)[1]),k=G>=1):K.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),k=G>=2);let ne=null,ee={};const he=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),Re=new dt().fromArray(he),ot=new dt().fromArray(Ae);function ut(L,ue,te,fe){const J=new Uint8Array(4),$=i.createTexture();i.bindTexture(L,$),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ie=0;ie<te;ie++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,J):i.texImage2D(ue+ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,J);return $}const q={};q[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(Ci),ze(!1),_t(Bl),j(i.CULL_FACE),Je($n);function j(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function me(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Fe(L,ue){return u[L]!==ue?(i.bindFramebuffer(L,ue),u[L]=ue,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ue),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function xe(L,ue){let te=m,fe=!1;if(L){te=d.get(ue),te===void 0&&(te=[],d.set(ue,te));const J=L.textures;if(te.length!==J.length||te[0]!==i.COLOR_ATTACHMENT0){for(let $=0,ie=J.length;$<ie;$++)te[$]=i.COLOR_ATTACHMENT0+$;te.length=J.length,fe=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,fe=!0);fe&&i.drawBuffers(te)}function Ke(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const Et={[bi]:i.FUNC_ADD,[rp]:i.FUNC_SUBTRACT,[ap]:i.FUNC_REVERSE_SUBTRACT};Et[op]=i.MIN,Et[cp]=i.MAX;const qe={[lp]:i.ZERO,[hp]:i.ONE,[up]:i.SRC_COLOR,[Lo]:i.SRC_ALPHA,[_p]:i.SRC_ALPHA_SATURATE,[mp]:i.DST_COLOR,[fp]:i.DST_ALPHA,[dp]:i.ONE_MINUS_SRC_COLOR,[No]:i.ONE_MINUS_SRC_ALPHA,[gp]:i.ONE_MINUS_DST_COLOR,[pp]:i.ONE_MINUS_DST_ALPHA,[xp]:i.CONSTANT_COLOR,[vp]:i.ONE_MINUS_CONSTANT_COLOR,[Mp]:i.CONSTANT_ALPHA,[yp]:i.ONE_MINUS_CONSTANT_ALPHA};function Je(L,ue,te,fe,J,$,ie,Ie,lt,Qe){if(L===$n){_===!0&&(me(i.BLEND),_=!1);return}if(_===!1&&(j(i.BLEND),_=!0),L!==sp){if(L!==p||Qe!==x){if((f!==bi||S!==bi)&&(i.blendEquation(i.FUNC_ADD),f=bi,S=bi),Qe)switch(L){case ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case da:i.blendFunc(i.ONE,i.ONE);break;case kl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ce("WebGLState: Invalid blending: ",L);break}else switch(L){case ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case da:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case kl:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zl:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",L);break}y=null,b=null,T=null,w=null,R.set(0,0,0),C=0,p=L,x=Qe}return}J=J||ue,$=$||te,ie=ie||fe,(ue!==f||J!==S)&&(i.blendEquationSeparate(Et[ue],Et[J]),f=ue,S=J),(te!==y||fe!==b||$!==T||ie!==w)&&(i.blendFuncSeparate(qe[te],qe[fe],qe[$],qe[ie]),y=te,b=fe,T=$,w=ie),(Ie.equals(R)===!1||lt!==C)&&(i.blendColor(Ie.r,Ie.g,Ie.b,lt),R.copy(Ie),C=lt),p=L,x=!1}function rt(L,ue){L.side===mn?me(i.CULL_FACE):j(i.CULL_FACE);let te=L.side===Wt;ue&&(te=!te),ze(te),L.blending===ui&&L.transparent===!1?Je($n):Je(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const fe=L.stencilWrite;o.setTest(fe),fe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),xt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function ze(L){M!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),M=L)}function _t(L){L!==tp?(j(i.CULL_FACE),L!==P&&(L===Bl?i.cullFace(i.BACK):L===np?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),P=L}function D(L){L!==N&&(k&&i.lineWidth(L),N=L)}function xt(L,ue,te){L?(j(i.POLYGON_OFFSET_FILL),(U!==ue||O!==te)&&(i.polygonOffset(ue,te),U=ue,O=te)):me(i.POLYGON_OFFSET_FILL)}function Ze(L){L?j(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function ct(L){L===void 0&&(L=i.TEXTURE0+V-1),ne!==L&&(i.activeTexture(L),ne=L)}function Me(L,ue,te){te===void 0&&(ne===null?te=i.TEXTURE0+V-1:te=ne);let fe=ee[te];fe===void 0&&(fe={type:void 0,texture:void 0},ee[te]=fe),(fe.type!==L||fe.texture!==ue)&&(ne!==te&&(i.activeTexture(te),ne=te),i.bindTexture(L,ue||q[L]),fe.type=L,fe.texture=ue)}function A(){const L=ee[ne];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(L){Ce("WebGLState:",L)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(L){Ce("WebGLState:",L)}}function Y(){try{i.texSubImage2D(...arguments)}catch(L){Ce("WebGLState:",L)}}function Z(){try{i.texSubImage3D(...arguments)}catch(L){Ce("WebGLState:",L)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Ce("WebGLState:",L)}}function Se(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Ce("WebGLState:",L)}}function se(){try{i.texStorage2D(...arguments)}catch(L){Ce("WebGLState:",L)}}function ve(){try{i.texStorage3D(...arguments)}catch(L){Ce("WebGLState:",L)}}function De(){try{i.texImage2D(...arguments)}catch(L){Ce("WebGLState:",L)}}function Q(){try{i.texImage3D(...arguments)}catch(L){Ce("WebGLState:",L)}}function ae(L){Re.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Re.copy(L))}function _e(L){ot.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ot.copy(L))}function ye(L,ue){let te=l.get(ue);te===void 0&&(te=new WeakMap,l.set(ue,te));let fe=te.get(L);fe===void 0&&(fe=i.getUniformBlockIndex(ue,L.name),te.set(L,fe))}function re(L,ue){const fe=l.get(ue).get(L);c.get(ue)!==fe&&(i.uniformBlockBinding(ue,fe,L.__bindingPointIndex),c.set(ue,fe))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ne=null,ee={},u={},d=new WeakMap,m=[],g=null,_=!1,p=null,f=null,y=null,b=null,S=null,T=null,w=null,R=new Le(0,0,0),C=0,x=!1,M=null,P=null,N=null,U=null,O=null,Re.set(0,0,i.canvas.width,i.canvas.height),ot.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:me,bindFramebuffer:Fe,drawBuffers:xe,useProgram:Ke,setBlending:Je,setMaterial:rt,setFlipSided:ze,setCullFace:_t,setLineWidth:D,setPolygonOffset:xt,setScissorTest:Ze,activeTexture:ct,bindTexture:Me,unbindTexture:A,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:De,texImage3D:Q,updateUBOMapping:ye,uniformBlockBinding:re,texStorage2D:se,texStorage3D:ve,texSubImage2D:Y,texSubImage3D:Z,compressedTexSubImage2D:X,compressedTexSubImage3D:Se,scissor:ae,viewport:_e,reset:Ve}}function tM(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ne,h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return m?new OffscreenCanvas(A,v):ir("canvas")}function _(A,v,F){let Y=1;const Z=Me(A);if((Z.width>F||Z.height>F)&&(Y=F/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor(Y*Z.width),Se=Math.floor(Y*Z.height);u===void 0&&(u=g(X,Se));const se=v?g(X,Se):u;return se.width=X,se.height=Se,se.getContext("2d").drawImage(A,0,0,X,Se),Ee("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+Se+")."),se}else return"data"in A&&Ee("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function p(A){return A.generateMipmaps}function f(A){i.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,v,F,Y,Z=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=v;if(v===i.RED&&(F===i.FLOAT&&(X=i.R32F),F===i.HALF_FLOAT&&(X=i.R16F),F===i.UNSIGNED_BYTE&&(X=i.R8)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.R8UI),F===i.UNSIGNED_SHORT&&(X=i.R16UI),F===i.UNSIGNED_INT&&(X=i.R32UI),F===i.BYTE&&(X=i.R8I),F===i.SHORT&&(X=i.R16I),F===i.INT&&(X=i.R32I)),v===i.RG&&(F===i.FLOAT&&(X=i.RG32F),F===i.HALF_FLOAT&&(X=i.RG16F),F===i.UNSIGNED_BYTE&&(X=i.RG8)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RG8UI),F===i.UNSIGNED_SHORT&&(X=i.RG16UI),F===i.UNSIGNED_INT&&(X=i.RG32UI),F===i.BYTE&&(X=i.RG8I),F===i.SHORT&&(X=i.RG16I),F===i.INT&&(X=i.RG32I)),v===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGB8UI),F===i.UNSIGNED_SHORT&&(X=i.RGB16UI),F===i.UNSIGNED_INT&&(X=i.RGB32UI),F===i.BYTE&&(X=i.RGB8I),F===i.SHORT&&(X=i.RGB16I),F===i.INT&&(X=i.RGB32I)),v===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),F===i.UNSIGNED_INT&&(X=i.RGBA32UI),F===i.BYTE&&(X=i.RGBA8I),F===i.SHORT&&(X=i.RGBA16I),F===i.INT&&(X=i.RGBA32I)),v===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),v===i.RGBA){const Se=Z?ma:Ye.getTransfer(Y);F===i.FLOAT&&(X=i.RGBA32F),F===i.HALF_FLOAT&&(X=i.RGBA16F),F===i.UNSIGNED_BYTE&&(X=Se===tt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function S(A,v){let F;return A?v===null||v===In||v===er?F=i.DEPTH24_STENCIL8:v===Bt?F=i.DEPTH32F_STENCIL8:v===Qs&&(F=i.DEPTH24_STENCIL8,Ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===In||v===er?F=i.DEPTH_COMPONENT24:v===Bt?F=i.DEPTH_COMPONENT32F:v===Qs&&(F=i.DEPTH_COMPONENT16),F}function T(A,v){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Mt&&A.minFilter!==je?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function w(A){const v=A.target;v.removeEventListener("dispose",w),C(v),v.isVideoTexture&&h.delete(v)}function R(A){const v=A.target;v.removeEventListener("dispose",R),M(v)}function C(A){const v=n.get(A);if(v.__webglInit===void 0)return;const F=A.source,Y=d.get(F);if(Y){const Z=Y[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&x(A),Object.keys(Y).length===0&&d.delete(F)}n.remove(A)}function x(A){const v=n.get(A);i.deleteTexture(v.__webglTexture);const F=A.source,Y=d.get(F);delete Y[v.__cacheKey],a.memory.textures--}function M(A){const v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let Z=0;Z<v.__webglFramebuffer[Y].length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[Y][Z]);else i.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)i.deleteFramebuffer(v.__webglFramebuffer[Y]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=A.textures;for(let Y=0,Z=F.length;Y<Z;Y++){const X=n.get(F[Y]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(F[Y])}n.remove(A)}let P=0;function N(){P=0}function U(){const A=P;return A>=s.maxTextures&&Ee("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),P+=1,A}function O(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function V(A,v){const F=n.get(A);if(A.isVideoTexture&&Ze(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){const Y=A.image;if(Y===null)Ee("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ee("WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,A,v);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function k(A,v){const F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){q(F,A,v);return}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function G(A,v){const F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){q(F,A,v);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function K(A,v){const F=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&F.__version!==A.version){j(F,A,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}const ne={[cs]:i.REPEAT,[At]:i.CLAMP_TO_EDGE,[pa]:i.MIRRORED_REPEAT},ee={[Mt]:i.NEAREST,[Nu]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[je]:i.LINEAR,[ea]:i.LINEAR_MIPMAP_NEAREST,[Rn]:i.LINEAR_MIPMAP_LINEAR},he={[Cp]:i.NEVER,[Np]:i.ALWAYS,[Pp]:i.LESS,[$c]:i.LEQUAL,[Dp]:i.EQUAL,[Zc]:i.GEQUAL,[Ip]:i.GREATER,[Lp]:i.NOTEQUAL};function Ae(A,v){if(v.type===Bt&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===je||v.magFilter===ea||v.magFilter===Xs||v.magFilter===Rn||v.minFilter===je||v.minFilter===ea||v.minFilter===Xs||v.minFilter===Rn)&&Ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ne[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ne[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ne[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ee[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ee[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,he[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Mt||v.minFilter!==Xs&&v.minFilter!==Rn||v.type===Bt&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Re(A,v){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",w));const Y=v.source;let Z=d.get(Y);Z===void 0&&(Z={},d.set(Y,Z));const X=O(v);if(X!==A.__cacheKey){Z[X]===void 0&&(Z[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[X].usedTimes++;const Se=Z[A.__cacheKey];Se!==void 0&&(Z[A.__cacheKey].usedTimes--,Se.usedTimes===0&&x(v)),A.__cacheKey=X,A.__webglTexture=Z[X].texture}return F}function ot(A,v,F){return Math.floor(Math.floor(A/F)/v)}function ut(A,v,F,Y){const X=A.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,F,Y,v.data);else{X.sort((Q,ae)=>Q.start-ae.start);let Se=0;for(let Q=1;Q<X.length;Q++){const ae=X[Se],_e=X[Q],ye=ae.start+ae.count,re=ot(_e.start,v.width,4),Ve=ot(ae.start,v.width,4);_e.start<=ye+1&&re===Ve&&ot(_e.start+_e.count-1,v.width,4)===re?ae.count=Math.max(ae.count,_e.start+_e.count-ae.start):(++Se,X[Se]=_e)}X.length=Se+1;const se=i.getParameter(i.UNPACK_ROW_LENGTH),ve=i.getParameter(i.UNPACK_SKIP_PIXELS),De=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Q=0,ae=X.length;Q<ae;Q++){const _e=X[Q],ye=Math.floor(_e.start/4),re=Math.ceil(_e.count/4),Ve=ye%v.width,L=Math.floor(ye/v.width),ue=re,te=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Ve,L,ue,te,F,Y,v.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,se),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,De)}}function q(A,v,F){let Y=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=i.TEXTURE_3D);const Z=Re(A,v),X=v.source;t.bindTexture(Y,A.__webglTexture,i.TEXTURE0+F);const Se=n.get(X);if(X.version!==Se.__version||Z===!0){t.activeTexture(i.TEXTURE0+F);const se=Ye.getPrimaries(Ye.workingColorSpace),ve=v.colorSpace===li?null:Ye.getPrimaries(v.colorSpace),De=v.colorSpace===li||se===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let Q=_(v.image,!1,s.maxTextureSize);Q=ct(v,Q);const ae=r.convert(v.format,v.colorSpace),_e=r.convert(v.type);let ye=b(v.internalFormat,ae,_e,v.colorSpace,v.isVideoTexture);Ae(Y,v);let re;const Ve=v.mipmaps,L=v.isVideoTexture!==!0,ue=Se.__version===void 0||Z===!0,te=X.dataReady,fe=T(v,Q);if(v.isDepthTexture)ye=S(v.format===wi,v.type),ue&&(L?t.texStorage2D(i.TEXTURE_2D,1,ye,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,ye,Q.width,Q.height,0,ae,_e,null));else if(v.isDataTexture)if(Ve.length>0){L&&ue&&t.texStorage2D(i.TEXTURE_2D,fe,ye,Ve[0].width,Ve[0].height);for(let J=0,$=Ve.length;J<$;J++)re=Ve[J],L?te&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,re.width,re.height,ae,_e,re.data):t.texImage2D(i.TEXTURE_2D,J,ye,re.width,re.height,0,ae,_e,re.data);v.generateMipmaps=!1}else L?(ue&&t.texStorage2D(i.TEXTURE_2D,fe,ye,Q.width,Q.height),te&&ut(v,Q,ae,_e)):t.texImage2D(i.TEXTURE_2D,0,ye,Q.width,Q.height,0,ae,_e,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,ye,Ve[0].width,Ve[0].height,Q.depth);for(let J=0,$=Ve.length;J<$;J++)if(re=Ve[J],v.format!==on)if(ae!==null)if(L){if(te)if(v.layerUpdates.size>0){const ie=Ph(re.width,re.height,v.format,v.type);for(const Ie of v.layerUpdates){const lt=re.data.subarray(Ie*ie/re.data.BYTES_PER_ELEMENT,(Ie+1)*ie/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Ie,re.width,re.height,1,ae,lt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,re.width,re.height,Q.depth,ae,re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,ye,re.width,re.height,Q.depth,0,re.data,0,0);else Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,re.width,re.height,Q.depth,ae,_e,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,ye,re.width,re.height,Q.depth,0,ae,_e,re.data)}else{L&&ue&&t.texStorage2D(i.TEXTURE_2D,fe,ye,Ve[0].width,Ve[0].height);for(let J=0,$=Ve.length;J<$;J++)re=Ve[J],v.format!==on?ae!==null?L?te&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,re.width,re.height,ae,re.data):t.compressedTexImage2D(i.TEXTURE_2D,J,ye,re.width,re.height,0,re.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?te&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,re.width,re.height,ae,_e,re.data):t.texImage2D(i.TEXTURE_2D,J,ye,re.width,re.height,0,ae,_e,re.data)}else if(v.isDataArrayTexture)if(L){if(ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,ye,Q.width,Q.height,Q.depth),te)if(v.layerUpdates.size>0){const J=Ph(Q.width,Q.height,v.format,v.type);for(const $ of v.layerUpdates){const ie=Q.data.subarray($*J/Q.data.BYTES_PER_ELEMENT,($+1)*J/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,Q.width,Q.height,1,ae,_e,ie)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ae,_e,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,Q.width,Q.height,Q.depth,0,ae,_e,Q.data);else if(v.isData3DTexture)L?(ue&&t.texStorage3D(i.TEXTURE_3D,fe,ye,Q.width,Q.height,Q.depth),te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ae,_e,Q.data)):t.texImage3D(i.TEXTURE_3D,0,ye,Q.width,Q.height,Q.depth,0,ae,_e,Q.data);else if(v.isFramebufferTexture){if(ue)if(L)t.texStorage2D(i.TEXTURE_2D,fe,ye,Q.width,Q.height);else{let J=Q.width,$=Q.height;for(let ie=0;ie<fe;ie++)t.texImage2D(i.TEXTURE_2D,ie,ye,J,$,0,ae,_e,null),J>>=1,$>>=1}}else if(Ve.length>0){if(L&&ue){const J=Me(Ve[0]);t.texStorage2D(i.TEXTURE_2D,fe,ye,J.width,J.height)}for(let J=0,$=Ve.length;J<$;J++)re=Ve[J],L?te&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ae,_e,re):t.texImage2D(i.TEXTURE_2D,J,ye,ae,_e,re);v.generateMipmaps=!1}else if(L){if(ue){const J=Me(Q);t.texStorage2D(i.TEXTURE_2D,fe,ye,J.width,J.height)}te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,_e,Q)}else t.texImage2D(i.TEXTURE_2D,0,ye,ae,_e,Q);p(v)&&f(Y),Se.__version=X.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function j(A,v,F){if(v.image.length!==6)return;const Y=Re(A,v),Z=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+F);const X=n.get(Z);if(Z.version!==X.__version||Y===!0){t.activeTexture(i.TEXTURE0+F);const Se=Ye.getPrimaries(Ye.workingColorSpace),se=v.colorSpace===li?null:Ye.getPrimaries(v.colorSpace),ve=v.colorSpace===li||Se===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const De=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,ae=[];for(let $=0;$<6;$++)!De&&!Q?ae[$]=_(v.image[$],!0,s.maxCubemapSize):ae[$]=Q?v.image[$].image:v.image[$],ae[$]=ct(v,ae[$]);const _e=ae[0],ye=r.convert(v.format,v.colorSpace),re=r.convert(v.type),Ve=b(v.internalFormat,ye,re,v.colorSpace),L=v.isVideoTexture!==!0,ue=X.__version===void 0||Y===!0,te=Z.dataReady;let fe=T(v,_e);Ae(i.TEXTURE_CUBE_MAP,v);let J;if(De){L&&ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Ve,_e.width,_e.height);for(let $=0;$<6;$++){J=ae[$].mipmaps;for(let ie=0;ie<J.length;ie++){const Ie=J[ie];v.format!==on?ye!==null?L?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie,0,0,Ie.width,Ie.height,ye,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie,Ve,Ie.width,Ie.height,0,Ie.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie,0,0,Ie.width,Ie.height,ye,re,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie,Ve,Ie.width,Ie.height,0,ye,re,Ie.data)}}}else{if(J=v.mipmaps,L&&ue){J.length>0&&fe++;const $=Me(ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Ve,$.width,$.height)}for(let $=0;$<6;$++)if(Q){L?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ae[$].width,ae[$].height,ye,re,ae[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ve,ae[$].width,ae[$].height,0,ye,re,ae[$].data);for(let ie=0;ie<J.length;ie++){const lt=J[ie].image[$].image;L?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie+1,0,0,lt.width,lt.height,ye,re,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie+1,Ve,lt.width,lt.height,0,ye,re,lt.data)}}else{L?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ye,re,ae[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ve,ye,re,ae[$]);for(let ie=0;ie<J.length;ie++){const Ie=J[ie];L?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie+1,0,0,ye,re,Ie.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie+1,Ve,ye,re,Ie.image[$])}}}p(v)&&f(i.TEXTURE_CUBE_MAP),X.__version=Z.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function me(A,v,F,Y,Z,X){const Se=r.convert(F.format,F.colorSpace),se=r.convert(F.type),ve=b(F.internalFormat,Se,se,F.colorSpace),De=n.get(v),Q=n.get(F);if(Q.__renderTarget=v,!De.__hasExternalTextures){const ae=Math.max(1,v.width>>X),_e=Math.max(1,v.height>>X);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,X,ve,ae,_e,v.depth,0,Se,se,null):t.texImage2D(Z,X,ve,ae,_e,0,Se,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),xt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Z,Q.__webglTexture,0,D(v)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Z,Q.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(A,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){const Y=v.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,X=S(v.stencilBuffer,Z),Se=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,D(v),X,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,D(v),X,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,X,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,A)}else{const Y=v.textures;for(let Z=0;Z<Y.length;Z++){const X=Y[Z],Se=r.convert(X.format,X.colorSpace),se=r.convert(X.type),ve=b(X.internalFormat,Se,se,X.colorSpace);xt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,D(v),ve,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,D(v),ve,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ve,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xe(A,v,F){const Y=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,v.depthTexture);const De=r.convert(v.depthTexture.format),Q=r.convert(v.depthTexture.type);let ae;v.depthTexture.format===Jn?ae=i.DEPTH_COMPONENT24:v.depthTexture.format===wi&&(ae=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ae,v.width,v.height,0,De,Q,null)}}else V(v.depthTexture,0);const X=Z.__webglTexture,Se=D(v),se=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,ve=v.depthTexture.format===wi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Jn)xt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,se,X,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,ve,se,X,0);else if(v.depthTexture.format===wi)xt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,se,X,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,ve,se,X,0);else throw new Error("Unknown depthTexture format")}function Ke(A){const v=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=Y}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(F)for(let Y=0;Y<6;Y++)xe(v.__webglFramebuffer[Y],A,Y);else{const Y=A.texture.mipmaps;Y&&Y.length>0?xe(v.__webglFramebuffer[0],A,0):xe(v.__webglFramebuffer,A,0)}else if(F){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=i.createRenderbuffer(),Fe(v.__webglDepthbuffer[Y],A,!1);else{const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,X)}}else{const Y=A.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Fe(v.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(A,v,F){const Y=n.get(A);v!==void 0&&me(Y.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ke(A)}function qe(A){const v=A.texture,F=n.get(A),Y=n.get(v);A.addEventListener("dispose",R);const Z=A.textures,X=A.isWebGLCubeRenderTarget===!0,Se=Z.length>1;if(Se||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=v.version,a.memory.textures++),X){F.__webglFramebuffer=[];for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[se]=[];for(let ve=0;ve<v.mipmaps.length;ve++)F.__webglFramebuffer[se][ve]=i.createFramebuffer()}else F.__webglFramebuffer[se]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let se=0;se<v.mipmaps.length;se++)F.__webglFramebuffer[se]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Se)for(let se=0,ve=Z.length;se<ve;se++){const De=n.get(Z[se]);De.__webglTexture===void 0&&(De.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&xt(A)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let se=0;se<Z.length;se++){const ve=Z[se];F.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[se]);const De=r.convert(ve.format,ve.colorSpace),Q=r.convert(ve.type),ae=b(ve.internalFormat,De,Q,ve.colorSpace,A.isXRRenderTarget===!0),_e=D(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,ae,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,F.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,v);for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)me(F.__webglFramebuffer[se][ve],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ve);else me(F.__webglFramebuffer[se],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);p(v)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let se=0,ve=Z.length;se<ve;se++){const De=Z[se],Q=n.get(De);let ae=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ae=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,Q.__webglTexture),Ae(ae,De),me(F.__webglFramebuffer,A,De,i.COLOR_ATTACHMENT0+se,ae,0),p(De)&&f(ae)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(se=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,Y.__webglTexture),Ae(se,v),v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)me(F.__webglFramebuffer[ve],A,v,i.COLOR_ATTACHMENT0,se,ve);else me(F.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,se,0);p(v)&&f(se),t.unbindTexture()}A.depthBuffer&&Ke(A)}function Je(A){const v=A.textures;for(let F=0,Y=v.length;F<Y;F++){const Z=v[F];if(p(Z)){const X=y(A),Se=n.get(Z).__webglTexture;t.bindTexture(X,Se),f(X),t.unbindTexture()}}}const rt=[],ze=[];function _t(A){if(A.samples>0){if(xt(A)===!1){const v=A.textures,F=A.width,Y=A.height;let Z=i.COLOR_BUFFER_BIT;const X=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(A),se=v.length>1;if(se)for(let De=0;De<v.length;De++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const ve=A.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let De=0;De<v.length;De++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[De]);const Q=n.get(v[De]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,F,Y,0,0,F,Y,Z,i.NEAREST),c===!0&&(rt.length=0,ze.length=0,rt.push(i.COLOR_ATTACHMENT0+De),A.depthBuffer&&A.resolveDepthBuffer===!1&&(rt.push(X),ze.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ze)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let De=0;De<v.length;De++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,Se.__webglColorRenderbuffer[De]);const Q=n.get(v[De]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,Q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function D(A){return Math.min(s.maxSamples,A.samples)}function xt(A){const v=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ze(A){const v=a.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function ct(A,v){const F=A.colorSpace,Y=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Rt&&F!==li&&(Ye.getTransfer(F)===tt?(Y!==on||Z!==Jt)&&Ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",F)),v}function Me(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.setTexture2D=V,this.setTexture2DArray=k,this.setTexture3D=G,this.setTextureCube=K,this.rebindTextures=Et,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=me,this.useMultisampledRTT=xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function nM(i,e){function t(n,s=li){let r;const a=Ye.getTransfer(s);if(n===Jt)return i.UNSIGNED_BYTE;if(n===Gc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ou)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Uu)return i.BYTE;if(n===Fu)return i.SHORT;if(n===Qs)return i.UNSIGNED_SHORT;if(n===Hc)return i.INT;if(n===In)return i.UNSIGNED_INT;if(n===Bt)return i.FLOAT;if(n===Qt)return i.HALF_FLOAT;if(n===ku)return i.ALPHA;if(n===zu)return i.RGB;if(n===on)return i.RGBA;if(n===Jn)return i.DEPTH_COMPONENT;if(n===wi)return i.DEPTH_STENCIL;if(n===Xc)return i.RED;if(n===Yc)return i.RED_INTEGER;if(n===ls)return i.RG;if(n===qc)return i.RG_INTEGER;if(n===Kc)return i.RGBA_INTEGER;if(n===ta||n===na||n===ia||n===sa)if(a===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Go||n===Wo||n===Xo||n===Yo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Go)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qo||n===Ko||n===$o||n===Zo||n===jo||n===Jo||n===Qo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qo||n===Ko)return a===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$o)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Zo)return r.COMPRESSED_R11_EAC;if(n===jo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Jo)return r.COMPRESSED_RG11_EAC;if(n===Qo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===cc||n===lc||n===hc||n===uc||n===dc||n===fc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ec)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tc)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nc)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ic)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sc)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rc)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ac)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oc)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cc)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lc)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hc)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uc)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dc)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fc)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pc||n===mc||n===gc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===pc)return a===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_c||n===xc||n===vc||n===Mc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_c)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const iM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new rd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ln({vertexShader:iM,fragmentShader:sM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new xs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aM extends gs{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,g=null;const _=typeof XRWebGLBinding<"u",p=new rM,f={},y=t.getContextAttributes();let b=null,S=null;const T=[],w=[],R=new Ne;let C=null;const x=new Lt;x.viewport=new dt;const M=new Lt;M.viewport=new dt;const P=[x,M],N=new og;let U=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=T[q];return j===void 0&&(j=new oo,T[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=T[q];return j===void 0&&(j=new oo,T[q]=j),j.getGripSpace()},this.getHand=function(q){let j=T[q];return j===void 0&&(j=new oo,T[q]=j),j.getHandSpace()};function V(q){const j=w.indexOf(q.inputSource);if(j===-1)return;const me=T[j];me!==void 0&&(me.update(q.inputSource,q.frame,l||a),me.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",G);for(let q=0;q<T.length;q++){const j=w[q];j!==null&&(w[q]=null,T[q].disconnect(j))}U=null,O=null,p.reset();for(const q in f)delete f[q];e.setRenderTarget(b),m=null,d=null,u=null,s=null,S=null,ut.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",k),s.addEventListener("inputsourceschange",G),y.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Fe=null,xe=null;y.depth&&(xe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=y.stencil?wi:Jn,Fe=y.stencil?er:In);const Ke={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ke),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Dn(d.textureWidth,d.textureHeight,{format:on,type:Jt,depthTexture:new or(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const me={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Dn(m.framebufferWidth,m.framebufferHeight,{format:on,type:Jt,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ut.setContext(s),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function G(q){for(let j=0;j<q.removed.length;j++){const me=q.removed[j],Fe=w.indexOf(me);Fe>=0&&(w[Fe]=null,T[Fe].disconnect(me))}for(let j=0;j<q.added.length;j++){const me=q.added[j];let Fe=w.indexOf(me);if(Fe===-1){for(let Ke=0;Ke<T.length;Ke++)if(Ke>=w.length){w.push(me),Fe=Ke;break}else if(w[Ke]===null){w[Ke]=me,Fe=Ke;break}if(Fe===-1)break}const xe=T[Fe];xe&&xe.connect(me)}}const K=new I,ne=new I;function ee(q,j,me){K.setFromMatrixPosition(j.matrixWorld),ne.setFromMatrixPosition(me.matrixWorld);const Fe=K.distanceTo(ne),xe=j.projectionMatrix.elements,Ke=me.projectionMatrix.elements,Et=xe[14]/(xe[10]-1),qe=xe[14]/(xe[10]+1),Je=(xe[9]+1)/xe[5],rt=(xe[9]-1)/xe[5],ze=(xe[8]-1)/xe[0],_t=(Ke[8]+1)/Ke[0],D=Et*ze,xt=Et*_t,Ze=Fe/(-ze+_t),ct=Ze*-ze;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ct),q.translateZ(Ze),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),xe[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Me=Et+Ze,A=qe+Ze,v=D-ct,F=xt+(Fe-ct),Y=Je*qe/A*Me,Z=rt*qe/A*Me;q.projectionMatrix.makePerspective(v,F,Y,Z,Me,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function he(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let j=q.near,me=q.far;p.texture!==null&&(p.depthNear>0&&(j=p.depthNear),p.depthFar>0&&(me=p.depthFar)),N.near=M.near=x.near=j,N.far=M.far=x.far=me,(U!==N.near||O!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),U=N.near,O=N.far),N.layers.mask=q.layers.mask|6,x.layers.mask=N.layers.mask&3,M.layers.mask=N.layers.mask&5;const Fe=q.parent,xe=N.cameras;he(N,Fe);for(let Ke=0;Ke<xe.length;Ke++)he(xe[Ke],Fe);xe.length===2?ee(N,x,M):N.projectionMatrix.copy(x.projectionMatrix),Ae(q,N,Fe)};function Ae(q,j,me){me===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(me.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=hs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(q){return f[q]};let Re=null;function ot(q,j){if(h=j.getViewerPose(l||a),g=j,h!==null){const me=h.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let Fe=!1;me.length!==N.cameras.length&&(N.cameras.length=0,Fe=!0);for(let qe=0;qe<me.length;qe++){const Je=me[qe];let rt=null;if(m!==null)rt=m.getViewport(Je);else{const _t=u.getViewSubImage(d,Je);rt=_t.viewport,qe===0&&(e.setRenderTargetTextures(S,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(S))}let ze=P[qe];ze===void 0&&(ze=new Lt,ze.layers.enable(qe),ze.viewport=new dt,P[qe]=ze),ze.matrix.fromArray(Je.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Je.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(rt.x,rt.y,rt.width,rt.height),qe===0&&(N.matrix.copy(ze.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Fe===!0&&N.cameras.push(ze)}const xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const qe=u.getDepthInformation(me[0]);qe&&qe.isValid&&qe.texture&&p.init(qe,s.renderState)}if(xe&&xe.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let qe=0;qe<me.length;qe++){const Je=me[qe].camera;if(Je){let rt=f[Je];rt||(rt=new rd,f[Je]=rt);const ze=u.getCameraImage(Je);rt.sourceTexture=ze}}}}for(let me=0;me<T.length;me++){const Fe=w[me],xe=T[me];Fe!==null&&xe!==void 0&&xe.update(Fe,j,l||a)}Re&&Re(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const ut=new hd;ut.setAnimationLoop(ot),this.setAnimationLoop=function(q){Re=q},this.dispose=function(){}}}const vi=new kt,oM=new Ue;function cM(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,$u(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,y,b,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,S)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),_(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,y,b):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Wt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Wt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const y=e.get(f),b=y.envMap,S=y.envMapRotation;b&&(p.envMap.value=b,vi.copy(S),vi.x*=-1,vi.y*=-1,vi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),p.envMapRotation.value.setFromMatrix4(oM.makeRotationFromEuler(vi)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,y,b){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*y,p.scale.value=b*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,y){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Wt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const y=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lM(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,b){const S=b.program;n.uniformBlockBinding(y,S)}function l(y,b){let S=s[y.id];S===void 0&&(g(y),S=h(y),s[y.id]=S,y.addEventListener("dispose",p));const T=b.program;n.updateUBOMapping(y,T);const w=e.render.frame;r[y.id]!==w&&(d(y),r[y.id]=w)}function h(y){const b=u();y.__bindingPointIndex=b;const S=i.createBuffer(),T=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const b=s[y.id],S=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let w=0,R=S.length;w<R;w++){const C=Array.isArray(S[w])?S[w]:[S[w]];for(let x=0,M=C.length;x<M;x++){const P=C[x];if(m(P,w,x,T)===!0){const N=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let O=0;for(let V=0;V<U.length;V++){const k=U[V],G=_(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,N+O,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,O),O+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,b,S,T){const w=y.value,R=b+"_"+S;if(T[R]===void 0)return typeof w=="number"||typeof w=="boolean"?T[R]=w:T[R]=w.clone(),!0;{const C=T[R];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return T[R]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(y){const b=y.uniforms;let S=0;const T=16;for(let R=0,C=b.length;R<C;R++){const x=Array.isArray(b[R])?b[R]:[b[R]];for(let M=0,P=x.length;M<P;M++){const N=x[M],U=Array.isArray(N.value)?N.value:[N.value];for(let O=0,V=U.length;O<V;O++){const k=U[O],G=_(k),K=S%T,ne=K%G.boundary,ee=K+ne;S+=ne,ee!==0&&T-ee<G.storage&&(S+=T-ee),N.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=G.storage}}}const w=S%T;return w>0&&(S+=T-w),y.__size=S,y.__cache={},this}function _(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ee("WebGLRenderer: Unsupported uniform value type.",y),b}function p(y){const b=y.target;b.removeEventListener("dispose",p);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}const hM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Sn=null;function uM(){return Sn===null&&(Sn=new Ea(hM,16,16,ls,Qt),Sn.name="DFG_LUT",Sn.minFilter=je,Sn.magFilter=je,Sn.wrapS=At,Sn.wrapT=At,Sn.generateMipmaps=!1,Sn.needsUpdate=!0),Sn}class dM{constructor(e={}){const{canvas:t=Fp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Jt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=m,p=new Set([Kc,qc,Yc]),f=new Set([Jt,In,Qs,er,Gc,Wc]),y=new Uint32Array(4),b=new Int32Array(4);let S=null,T=null;const w=[],R=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let M=!1;this._outputColorSpace=gt;let P=0,N=0,U=null,O=-1,V=null;const k=new dt,G=new dt;let K=null;const ne=new Le(0);let ee=0,he=t.width,Ae=t.height,Re=1,ot=null,ut=null;const q=new dt(0,0,he,Ae),j=new dt(0,0,he,Ae);let me=!1;const Fe=new el;let xe=!1,Ke=!1;const Et=new Ue,qe=new I,Je=new dt,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function _t(){return U===null?Re:1}let D=n;function xt(E,B){return t.getContext(E,B)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oc}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",Qe,!1),D===null){const B="webgl2";if(D=xt(B,E),D===null)throw xt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Ce("WebGLRenderer: "+E.message),E}let Ze,ct,Me,A,v,F,Y,Z,X,Se,se,ve,De,Q,ae,_e,ye,re,Ve,L,ue,te,fe,J;function $(){Ze=new ux(D),Ze.init(),te=new nM(D,Ze),ct=new nx(D,Ze,e,te),Me=new eM(D,Ze),ct.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),A=new px(D),v=new kv,F=new tM(D,Ze,Me,v,ct,te,A),Y=new sx(x),Z=new hx(x),X=new xg(D),fe=new ex(D,X),Se=new dx(D,X,A,fe),se=new gx(D,Se,X,A),Ve=new mx(D,ct,F),_e=new ix(v),ve=new Bv(x,Y,Z,Ze,ct,fe,_e),De=new cM(x,v),Q=new Vv,ae=new qv(Ze),re=new Q_(x,Y,Z,Me,se,g,c),ye=new Jv(x,se,ct),J=new lM(D,A,ct,Me),L=new tx(D,Ze,A),ue=new fx(D,Ze,A),A.programs=ve.programs,x.capabilities=ct,x.extensions=Ze,x.properties=v,x.renderLists=Q,x.shadowMap=ye,x.state=Me,x.info=A}$(),_!==Jt&&(C=new xx(_,t.width,t.height,s,r));const ie=new aM(x,D);this.xr=ie,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Ze.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ze.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Re},this.setPixelRatio=function(E){E!==void 0&&(Re=E,this.setSize(he,Ae,!1))},this.getSize=function(E){return E.set(he,Ae)},this.setSize=function(E,B,W=!0){if(ie.isPresenting){Ee("WebGLRenderer: Can't change size while VR device is presenting.");return}he=E,Ae=B,t.width=Math.floor(E*Re),t.height=Math.floor(B*Re),W===!0&&(t.style.width=E+"px",t.style.height=B+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(he*Re,Ae*Re).floor()},this.setDrawingBufferSize=function(E,B,W){he=E,Ae=B,Re=W,t.width=Math.floor(E*W),t.height=Math.floor(B*W),this.setViewport(0,0,E,B)},this.setEffects=function(E){if(_===Jt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let B=0;B<E.length;B++)if(E[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(k)},this.getViewport=function(E){return E.copy(q)},this.setViewport=function(E,B,W,H){E.isVector4?q.set(E.x,E.y,E.z,E.w):q.set(E,B,W,H),Me.viewport(k.copy(q).multiplyScalar(Re).round())},this.getScissor=function(E){return E.copy(j)},this.setScissor=function(E,B,W,H){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,B,W,H),Me.scissor(G.copy(j).multiplyScalar(Re).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(E){Me.setScissorTest(me=E)},this.setOpaqueSort=function(E){ot=E},this.setTransparentSort=function(E){ut=E},this.getClearColor=function(E){return E.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,W=!0){let H=0;if(E){let z=!1;if(U!==null){const oe=U.texture.format;z=p.has(oe)}if(z){const oe=U.texture.type,pe=f.has(oe),le=re.getClearColor(),ge=re.getClearAlpha(),be=le.r,Pe=le.g,Te=le.b;pe?(y[0]=be,y[1]=Pe,y[2]=Te,y[3]=ge,D.clearBufferuiv(D.COLOR,0,y)):(b[0]=be,b[1]=Pe,b[2]=Te,b[3]=ge,D.clearBufferiv(D.COLOR,0,b))}else H|=D.COLOR_BUFFER_BIT}B&&(H|=D.DEPTH_BUFFER_BIT),W&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Qe,!1),re.dispose(),Q.dispose(),ae.dispose(),v.dispose(),Y.dispose(),Z.dispose(),se.dispose(),fe.dispose(),J.dispose(),ve.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",fl),ie.removeEventListener("sessionend",pl),di.stop()};function Ie(E){E.preventDefault(),_a("WebGLRenderer: Context Lost."),M=!0}function lt(){_a("WebGLRenderer: Context Restored."),M=!1;const E=A.autoReset,B=ye.enabled,W=ye.autoUpdate,H=ye.needsUpdate,z=ye.type;$(),A.autoReset=E,ye.enabled=B,ye.autoUpdate=W,ye.needsUpdate=H,ye.type=z}function Qe(E){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function yn(E){const B=E.target;B.removeEventListener("dispose",yn),Fn(B)}function Fn(E){zd(E),v.remove(E)}function zd(E){const B=v.get(E).programs;B!==void 0&&(B.forEach(function(W){ve.releaseProgram(W)}),E.isShaderMaterial&&ve.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,W,H,z,oe){B===null&&(B=rt);const pe=z.isMesh&&z.matrixWorld.determinant()<0,le=Hd(E,B,W,H,z);Me.setMaterial(H,pe);let ge=W.index,be=1;if(H.wireframe===!0){if(ge=Se.getWireframeAttribute(W),ge===void 0)return;be=2}const Pe=W.drawRange,Te=W.attributes.position;let Ge=Pe.start*be,st=(Pe.start+Pe.count)*be;oe!==null&&(Ge=Math.max(Ge,oe.start*be),st=Math.min(st,(oe.start+oe.count)*be)),ge!==null?(Ge=Math.max(Ge,0),st=Math.min(st,ge.count)):Te!=null&&(Ge=Math.max(Ge,0),st=Math.min(st,Te.count));const pt=st-Ge;if(pt<0||pt===1/0)return;fe.setup(z,H,le,W,ge);let mt,at=L;if(ge!==null&&(mt=X.get(ge),at=ue,at.setIndex(mt)),z.isMesh)H.wireframe===!0?(Me.setLineWidth(H.wireframeLinewidth*_t()),at.setMode(D.LINES)):at.setMode(D.TRIANGLES);else if(z.isLine){let we=H.linewidth;we===void 0&&(we=1),Me.setLineWidth(we*_t()),z.isLineSegments?at.setMode(D.LINES):z.isLineLoop?at.setMode(D.LINE_LOOP):at.setMode(D.LINE_STRIP)}else z.isPoints?at.setMode(D.POINTS):z.isSprite&&at.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)sr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))at.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const we=z._multiDrawStarts,et=z._multiDrawCounts,$e=z._multiDrawCount,qt=ge?X.get(ge).bytesPerElement:1,Ii=v.get(H).currentProgram.getUniforms();for(let Kt=0;Kt<$e;Kt++)Ii.setValue(D,"_gl_DrawID",Kt),at.render(we[Kt]/qt,et[Kt])}else if(z.isInstancedMesh)at.renderInstances(Ge,pt,z.count);else if(W.isInstancedBufferGeometry){const we=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,et=Math.min(W.instanceCount,we);at.renderInstances(Ge,pt,et)}else at.render(Ge,pt)};function dl(E,B,W){E.transparent===!0&&E.side===mn&&E.forceSinglePass===!1?(E.side=Wt,E.needsUpdate=!0,dr(E,B,W),E.side=jn,E.needsUpdate=!0,dr(E,B,W),E.side=mn):dr(E,B,W)}this.compile=function(E,B,W=null){W===null&&(W=E),T=ae.get(W),T.init(B),R.push(T),W.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),E!==W&&E.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights();const H=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const oe=z.material;if(oe)if(Array.isArray(oe))for(let pe=0;pe<oe.length;pe++){const le=oe[pe];dl(le,W,z),H.add(le)}else dl(oe,W,z),H.add(oe)}),T=R.pop(),H},this.compileAsync=function(E,B,W=null){const H=this.compile(E,B,W);return new Promise(z=>{function oe(){if(H.forEach(function(pe){v.get(pe).currentProgram.isReady()&&H.delete(pe)}),H.size===0){z(E);return}setTimeout(oe,10)}Ze.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Ia=null;function Vd(E){Ia&&Ia(E)}function fl(){di.stop()}function pl(){di.start()}const di=new hd;di.setAnimationLoop(Vd),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(E){Ia=E,ie.setAnimationLoop(E),E===null?di.stop():di.start()},ie.addEventListener("sessionstart",fl),ie.addEventListener("sessionend",pl),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const W=ie.enabled===!0&&ie.isPresenting===!0,H=C!==null&&(U===null||W)&&C.begin(x,U);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(B),B=ie.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,B,U),T=ae.get(E,R.length),T.init(B),R.push(T),Et.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Fe.setFromProjectionMatrix(Et,Cn,B.reversedDepth),Ke=this.localClippingEnabled,xe=_e.init(this.clippingPlanes,Ke),S=Q.get(E,w.length),S.init(),w.push(S),ie.enabled===!0&&ie.isPresenting===!0){const pe=x.xr.getDepthSensingMesh();pe!==null&&La(pe,B,-1/0,x.sortObjects)}La(E,B,0,x.sortObjects),S.finish(),x.sortObjects===!0&&S.sort(ot,ut),ze=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,ze&&re.addToRenderList(S,E),this.info.render.frame++,xe===!0&&_e.beginShadows();const z=T.state.shadowsArray;if(ye.render(z,E,B),xe===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&C.hasRenderPass())===!1){const pe=S.opaque,le=S.transmissive;if(T.setupLights(),B.isArrayCamera){const ge=B.cameras;if(le.length>0)for(let be=0,Pe=ge.length;be<Pe;be++){const Te=ge[be];gl(pe,le,E,Te)}ze&&re.render(E);for(let be=0,Pe=ge.length;be<Pe;be++){const Te=ge[be];ml(S,E,Te,Te.viewport)}}else le.length>0&&gl(pe,le,E,B),ze&&re.render(E),ml(S,E,B)}U!==null&&N===0&&(F.updateMultisampleRenderTarget(U),F.updateRenderTargetMipmap(U)),H&&C.end(x),E.isScene===!0&&E.onAfterRender(x,E,B),fe.resetDefaultState(),O=-1,V=null,R.pop(),R.length>0?(T=R[R.length-1],xe===!0&&_e.setGlobalState(x.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?S=w[w.length-1]:S=null};function La(E,B,W,H){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Fe.intersectsSprite(E)){H&&Je.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Et);const pe=se.update(E),le=E.material;le.visible&&S.push(E,pe,le,W,Je.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Fe.intersectsObject(E))){const pe=se.update(E),le=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Je.copy(E.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Je.copy(pe.boundingSphere.center)),Je.applyMatrix4(E.matrixWorld).applyMatrix4(Et)),Array.isArray(le)){const ge=pe.groups;for(let be=0,Pe=ge.length;be<Pe;be++){const Te=ge[be],Ge=le[Te.materialIndex];Ge&&Ge.visible&&S.push(E,pe,Ge,W,Je.z,Te)}}else le.visible&&S.push(E,pe,le,W,Je.z,null)}}const oe=E.children;for(let pe=0,le=oe.length;pe<le;pe++)La(oe[pe],B,W,H)}function ml(E,B,W,H){const{opaque:z,transmissive:oe,transparent:pe}=E;T.setupLightsView(W),xe===!0&&_e.setGlobalState(x.clippingPlanes,W),H&&Me.viewport(k.copy(H)),z.length>0&&ur(z,B,W),oe.length>0&&ur(oe,B,W),pe.length>0&&ur(pe,B,W),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function gl(E,B,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){const Ge=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new Dn(1,1,{generateMipmaps:!0,type:Ge?Qt:Jt,minFilter:Rn,samples:ct.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const oe=T.state.transmissionRenderTarget[H.id],pe=H.viewport||k;oe.setSize(pe.z*x.transmissionResolutionScale,pe.w*x.transmissionResolutionScale);const le=x.getRenderTarget(),ge=x.getActiveCubeFace(),be=x.getActiveMipmapLevel();x.setRenderTarget(oe),x.getClearColor(ne),ee=x.getClearAlpha(),ee<1&&x.setClearColor(16777215,.5),x.clear(),ze&&re.render(W);const Pe=x.toneMapping;x.toneMapping=_n;const Te=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),xe===!0&&_e.setGlobalState(x.clippingPlanes,H),ur(E,W,H),F.updateMultisampleRenderTarget(oe),F.updateRenderTargetMipmap(oe),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let st=0,pt=B.length;st<pt;st++){const mt=B[st],{object:at,geometry:we,material:et,group:$e}=mt;if(et.side===mn&&at.layers.test(H.layers)){const qt=et.side;et.side=Wt,et.needsUpdate=!0,_l(at,W,H,we,et,$e),et.side=qt,et.needsUpdate=!0,Ge=!0}}Ge===!0&&(F.updateMultisampleRenderTarget(oe),F.updateRenderTargetMipmap(oe))}x.setRenderTarget(le,ge,be),x.setClearColor(ne,ee),Te!==void 0&&(H.viewport=Te),x.toneMapping=Pe}function ur(E,B,W){const H=B.isScene===!0?B.overrideMaterial:null;for(let z=0,oe=E.length;z<oe;z++){const pe=E[z],{object:le,geometry:ge,group:be}=pe;let Pe=pe.material;Pe.allowOverride===!0&&H!==null&&(Pe=H),le.layers.test(W.layers)&&_l(le,B,W,ge,Pe,be)}}function _l(E,B,W,H,z,oe){E.onBeforeRender(x,B,W,H,z,oe),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(x,B,W,H,E,oe),z.transparent===!0&&z.side===mn&&z.forceSinglePass===!1?(z.side=Wt,z.needsUpdate=!0,x.renderBufferDirect(W,B,H,z,E,oe),z.side=jn,z.needsUpdate=!0,x.renderBufferDirect(W,B,H,z,E,oe),z.side=mn):x.renderBufferDirect(W,B,H,z,E,oe),E.onAfterRender(x,B,W,H,z,oe)}function dr(E,B,W){B.isScene!==!0&&(B=rt);const H=v.get(E),z=T.state.lights,oe=T.state.shadowsArray,pe=z.state.version,le=ve.getParameters(E,z.state,oe,B,W),ge=ve.getProgramCacheKey(le);let be=H.programs;H.environment=E.isMeshStandardMaterial?B.environment:null,H.fog=B.fog,H.envMap=(E.isMeshStandardMaterial?Z:Y).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,be===void 0&&(E.addEventListener("dispose",yn),be=new Map,H.programs=be);let Pe=be.get(ge);if(Pe!==void 0){if(H.currentProgram===Pe&&H.lightsStateVersion===pe)return vl(E,le),Pe}else le.uniforms=ve.getUniforms(E),E.onBeforeCompile(le,x),Pe=ve.acquireProgram(le,ge),be.set(ge,Pe),H.uniforms=le.uniforms;const Te=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Te.clippingPlanes=_e.uniform),vl(E,le),H.needsLights=Wd(E),H.lightsStateVersion=pe,H.needsLights&&(Te.ambientLightColor.value=z.state.ambient,Te.lightProbe.value=z.state.probe,Te.directionalLights.value=z.state.directional,Te.directionalLightShadows.value=z.state.directionalShadow,Te.spotLights.value=z.state.spot,Te.spotLightShadows.value=z.state.spotShadow,Te.rectAreaLights.value=z.state.rectArea,Te.ltc_1.value=z.state.rectAreaLTC1,Te.ltc_2.value=z.state.rectAreaLTC2,Te.pointLights.value=z.state.point,Te.pointLightShadows.value=z.state.pointShadow,Te.hemisphereLights.value=z.state.hemi,Te.directionalShadowMap.value=z.state.directionalShadowMap,Te.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Te.spotShadowMap.value=z.state.spotShadowMap,Te.spotLightMatrix.value=z.state.spotLightMatrix,Te.spotLightMap.value=z.state.spotLightMap,Te.pointShadowMap.value=z.state.pointShadowMap,Te.pointShadowMatrix.value=z.state.pointShadowMatrix),H.currentProgram=Pe,H.uniformsList=null,Pe}function xl(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=ra.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function vl(E,B){const W=v.get(E);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function Hd(E,B,W,H,z){B.isScene!==!0&&(B=rt),F.resetTextureUnits();const oe=B.fog,pe=H.isMeshStandardMaterial?B.environment:null,le=U===null?x.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Rt,ge=(H.isMeshStandardMaterial?Z:Y).get(H.envMap||pe),be=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Pe=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Te=!!W.morphAttributes.position,Ge=!!W.morphAttributes.normal,st=!!W.morphAttributes.color;let pt=_n;H.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(pt=x.toneMapping);const mt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,at=mt!==void 0?mt.length:0,we=v.get(H),et=T.state.lights;if(xe===!0&&(Ke===!0||E!==V)){const Ut=E===V&&H.id===O;_e.setState(H,E,Ut)}let $e=!1;H.version===we.__version?(we.needsLights&&we.lightsStateVersion!==et.state.version||we.outputColorSpace!==le||z.isBatchedMesh&&we.batching===!1||!z.isBatchedMesh&&we.batching===!0||z.isBatchedMesh&&we.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&we.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&we.instancing===!1||!z.isInstancedMesh&&we.instancing===!0||z.isSkinnedMesh&&we.skinning===!1||!z.isSkinnedMesh&&we.skinning===!0||z.isInstancedMesh&&we.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&we.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&we.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&we.instancingMorph===!1&&z.morphTexture!==null||we.envMap!==ge||H.fog===!0&&we.fog!==oe||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==_e.numPlanes||we.numIntersection!==_e.numIntersection)||we.vertexAlphas!==be||we.vertexTangents!==Pe||we.morphTargets!==Te||we.morphNormals!==Ge||we.morphColors!==st||we.toneMapping!==pt||we.morphTargetsCount!==at)&&($e=!0):($e=!0,we.__version=H.version);let qt=we.currentProgram;$e===!0&&(qt=dr(H,B,z));let Ii=!1,Kt=!1,Ss=!1;const ht=qt.getUniforms(),Vt=we.uniforms;if(Me.useProgram(qt.program)&&(Ii=!0,Kt=!0,Ss=!0),H.id!==O&&(O=H.id,Kt=!0),Ii||V!==E){Me.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ht.setValue(D,"projectionMatrix",E.projectionMatrix),ht.setValue(D,"viewMatrix",E.matrixWorldInverse);const Ht=ht.map.cameraPosition;Ht!==void 0&&Ht.setValue(D,qe.setFromMatrixPosition(E.matrixWorld)),ct.logarithmicDepthBuffer&&ht.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ht.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),V!==E&&(V=E,Kt=!0,Ss=!0)}if(we.needsLights&&(et.state.directionalShadowMap.length>0&&ht.setValue(D,"directionalShadowMap",et.state.directionalShadowMap,F),et.state.spotShadowMap.length>0&&ht.setValue(D,"spotShadowMap",et.state.spotShadowMap,F),et.state.pointShadowMap.length>0&&ht.setValue(D,"pointShadowMap",et.state.pointShadowMap,F)),z.isSkinnedMesh){ht.setOptional(D,z,"bindMatrix"),ht.setOptional(D,z,"bindMatrixInverse");const Ut=z.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),ht.setValue(D,"boneTexture",Ut.boneTexture,F))}z.isBatchedMesh&&(ht.setOptional(D,z,"batchingTexture"),ht.setValue(D,"batchingTexture",z._matricesTexture,F),ht.setOptional(D,z,"batchingIdTexture"),ht.setValue(D,"batchingIdTexture",z._indirectTexture,F),ht.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&ht.setValue(D,"batchingColorTexture",z._colorsTexture,F));const en=W.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&Ve.update(z,W,qt),(Kt||we.receiveShadow!==z.receiveShadow)&&(we.receiveShadow=z.receiveShadow,ht.setValue(D,"receiveShadow",z.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Vt.envMap.value=ge,Vt.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&B.environment!==null&&(Vt.envMapIntensity.value=B.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=uM()),Kt&&(ht.setValue(D,"toneMappingExposure",x.toneMappingExposure),we.needsLights&&Gd(Vt,Ss),oe&&H.fog===!0&&De.refreshFogUniforms(Vt,oe),De.refreshMaterialUniforms(Vt,H,Re,Ae,T.state.transmissionRenderTarget[E.id]),ra.upload(D,xl(we),Vt,F)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ra.upload(D,xl(we),Vt,F),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ht.setValue(D,"center",z.center),ht.setValue(D,"modelViewMatrix",z.modelViewMatrix),ht.setValue(D,"normalMatrix",z.normalMatrix),ht.setValue(D,"modelMatrix",z.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ut=H.uniformsGroups;for(let Ht=0,Na=Ut.length;Ht<Na;Ht++){const fi=Ut[Ht];J.update(fi,qt),J.bind(fi,qt)}}return qt}function Gd(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Wd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(E,B,W){const H=v.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),v.get(E.texture).__webglTexture=B,v.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){const W=v.get(E);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0};const Xd=D.createFramebuffer();this.setRenderTarget=function(E,B=0,W=0){U=E,P=B,N=W;let H=null,z=!1,oe=!1;if(E){const le=v.get(E);if(le.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(D.FRAMEBUFFER,le.__webglFramebuffer),k.copy(E.viewport),G.copy(E.scissor),K=E.scissorTest,Me.viewport(k),Me.scissor(G),Me.setScissorTest(K),O=-1;return}else if(le.__webglFramebuffer===void 0)F.setupRenderTarget(E);else if(le.__hasExternalTextures)F.rebindTextures(E,v.get(E.texture).__webglTexture,v.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Pe=E.depthTexture;if(le.__boundDepthTexture!==Pe){if(Pe!==null&&v.has(Pe)&&(E.width!==Pe.image.width||E.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(E)}}const ge=E.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(oe=!0);const be=v.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(be[B])?H=be[B][W]:H=be[B],z=!0):E.samples>0&&F.useMultisampledRTT(E)===!1?H=v.get(E).__webglMultisampledFramebuffer:Array.isArray(be)?H=be[W]:H=be,k.copy(E.viewport),G.copy(E.scissor),K=E.scissorTest}else k.copy(q).multiplyScalar(Re).floor(),G.copy(j).multiplyScalar(Re).floor(),K=me;if(W!==0&&(H=Xd),Me.bindFramebuffer(D.FRAMEBUFFER,H)&&Me.drawBuffers(E,H),Me.viewport(k),Me.scissor(G),Me.setScissorTest(K),z){const le=v.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,le.__webglTexture,W)}else if(oe){const le=B;for(let ge=0;ge<E.textures.length;ge++){const be=v.get(E.textures[ge]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ge,be.__webglTexture,W,le)}}else if(E!==null&&W!==0){const le=v.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,le.__webglTexture,W)}O=-1},this.readRenderTargetPixels=function(E,B,W,H,z,oe,pe,le=0){if(!(E&&E.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(ge=ge[pe]),ge){Me.bindFramebuffer(D.FRAMEBUFFER,ge);try{const be=E.textures[le],Pe=be.format,Te=be.type;if(!ct.textureFormatReadable(Pe)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Te)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-H&&W>=0&&W<=E.height-z&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+le),D.readPixels(B,W,H,z,te.convert(Pe),te.convert(Te),oe))}finally{const be=U!==null?v.get(U).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(E,B,W,H,z,oe,pe,le=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(ge=ge[pe]),ge)if(B>=0&&B<=E.width-H&&W>=0&&W<=E.height-z){Me.bindFramebuffer(D.FRAMEBUFFER,ge);const be=E.textures[le],Pe=be.format,Te=be.type;if(!ct.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ge),D.bufferData(D.PIXEL_PACK_BUFFER,oe.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+le),D.readPixels(B,W,H,z,te.convert(Pe),te.convert(Te),0);const st=U!==null?v.get(U).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,st);const pt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Op(D,pt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ge),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,oe),D.deleteBuffer(Ge),D.deleteSync(pt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,W=0){const H=Math.pow(2,-W),z=Math.floor(E.image.width*H),oe=Math.floor(E.image.height*H),pe=B!==null?B.x:0,le=B!==null?B.y:0;F.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,pe,le,z,oe),Me.unbindTexture()};const Yd=D.createFramebuffer(),qd=D.createFramebuffer();this.copyTextureToTexture=function(E,B,W=null,H=null,z=0,oe=null){oe===null&&(z!==0?(sr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=z,z=0):oe=0);let pe,le,ge,be,Pe,Te,Ge,st,pt;const mt=E.isCompressedTexture?E.mipmaps[oe]:E.image;if(W!==null)pe=W.max.x-W.min.x,le=W.max.y-W.min.y,ge=W.isBox3?W.max.z-W.min.z:1,be=W.min.x,Pe=W.min.y,Te=W.isBox3?W.min.z:0;else{const en=Math.pow(2,-z);pe=Math.floor(mt.width*en),le=Math.floor(mt.height*en),E.isDataArrayTexture?ge=mt.depth:E.isData3DTexture?ge=Math.floor(mt.depth*en):ge=1,be=0,Pe=0,Te=0}H!==null?(Ge=H.x,st=H.y,pt=H.z):(Ge=0,st=0,pt=0);const at=te.convert(B.format),we=te.convert(B.type);let et;B.isData3DTexture?(F.setTexture3D(B,0),et=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(F.setTexture2DArray(B,0),et=D.TEXTURE_2D_ARRAY):(F.setTexture2D(B,0),et=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const $e=D.getParameter(D.UNPACK_ROW_LENGTH),qt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ii=D.getParameter(D.UNPACK_SKIP_PIXELS),Kt=D.getParameter(D.UNPACK_SKIP_ROWS),Ss=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,mt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,be),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Te);const ht=E.isDataArrayTexture||E.isData3DTexture,Vt=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const en=v.get(E),Ut=v.get(B),Ht=v.get(en.__renderTarget),Na=v.get(Ut.__renderTarget);Me.bindFramebuffer(D.READ_FRAMEBUFFER,Ht.__webglFramebuffer),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,Na.__webglFramebuffer);for(let fi=0;fi<ge;fi++)ht&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,v.get(E).__webglTexture,z,Te+fi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,v.get(B).__webglTexture,oe,pt+fi)),D.blitFramebuffer(be,Pe,pe,le,Ge,st,pe,le,D.DEPTH_BUFFER_BIT,D.NEAREST);Me.bindFramebuffer(D.READ_FRAMEBUFFER,null),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||v.has(E)){const en=v.get(E),Ut=v.get(B);Me.bindFramebuffer(D.READ_FRAMEBUFFER,Yd),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,qd);for(let Ht=0;Ht<ge;Ht++)ht?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,en.__webglTexture,z,Te+Ht):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,en.__webglTexture,z),Vt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ut.__webglTexture,oe,pt+Ht):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ut.__webglTexture,oe),z!==0?D.blitFramebuffer(be,Pe,pe,le,Ge,st,pe,le,D.COLOR_BUFFER_BIT,D.NEAREST):Vt?D.copyTexSubImage3D(et,oe,Ge,st,pt+Ht,be,Pe,pe,le):D.copyTexSubImage2D(et,oe,Ge,st,be,Pe,pe,le);Me.bindFramebuffer(D.READ_FRAMEBUFFER,null),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Vt?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(et,oe,Ge,st,pt,pe,le,ge,at,we,mt.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(et,oe,Ge,st,pt,pe,le,ge,at,mt.data):D.texSubImage3D(et,oe,Ge,st,pt,pe,le,ge,at,we,mt):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,oe,Ge,st,pe,le,at,we,mt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,oe,Ge,st,mt.width,mt.height,at,mt.data):D.texSubImage2D(D.TEXTURE_2D,oe,Ge,st,pe,le,at,we,mt);D.pixelStorei(D.UNPACK_ROW_LENGTH,$e),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,qt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ii),D.pixelStorei(D.UNPACK_SKIP_ROWS,Kt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ss),oe===0&&B.generateMipmaps&&D.generateMipmap(et),Me.unbindTexture()},this.initRenderTarget=function(E){v.get(E).__webglFramebuffer===void 0&&F.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?F.setTextureCube(E,0):E.isData3DTexture?F.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?F.setTexture2DArray(E,0):F.setTexture2D(E,0),Me.unbindTexture()},this.resetState=function(){P=0,N=0,U=null,Me.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}const fM="/textures/crosshair.png",Bs=1024,ks=1024,qr=1,pM="#33ff00",mM="bold 36px system-ui, -apple-system, Segoe UI, Roboto, Arial",gM="rgba(0,0,0,0.75)",_M=4,xM=1e3,Qh=30,eu=450;function vM(i,e){const t=document.createElement("canvas");t.width=Bs,t.height=ks;const n=t.getContext("2d");if(!n)throw new Error("Canvas 2D context unavailable");const s=new nl(t);s.anisotropy=i.capabilities.getMaxAnisotropy(),s.needsUpdate=!0,s.generateMipmaps=!1,s.minFilter=je,s.magFilter=je,s.colorSpace=gt;const r=new ar({map:s,transparent:!0,depthTest:!1,depthWrite:!1});r.sizeAttenuation=!1;const a=new xa(r);a.position.set(0,0,-1),a.scale.set(qr,qr,1),e.add(a);const o=new Image;o.src=fM;let c="",l=Number.NaN,h=!1;o.onload=()=>{h=!0,c="",d("")};function u(g,_,p,f){n.font=mM,n.textAlign=f,n.textBaseline="bottom",n.lineWidth=_M,n.strokeStyle=gM,n.strokeText(g,_,p),n.fillStyle=pM,n.fillText(g,_,p)}function d(g,_){if(n.clearRect(0,0,Bs,ks),h){const p=xM,f=(Bs-p)*.5,y=(ks-p)*.5-10;n.drawImage(o,f,y,p,p)}if(typeof _=="number"&&Number.isFinite(_)){const p=`${_.toFixed(0)}°`;u(p,Bs/2-Qh,ks/2+eu,"right")}u(g,Bs/2+Qh,ks/2+eu,"left"),s.needsUpdate=!0}function m(g,_,p){const f=_*Math.PI/180,y=g.fov*Math.PI/180,b=Math.tan(y*.5)/Math.tan(f*.5);a.scale.set(qr*b,qr*b,1);const T=`x${wu(_,g.fov).toFixed(1)}`,w=typeof p=="number"&&Number.isFinite(p)?p!==l:!1;T===c&&!w||(c=T,w&&(l=p),d(T,p))}return{root:a,setVisible:g=>{a.visible=g},update:m}}function tu(i,e,t){return Math.max(e,Math.min(t,i))}function nu(i,e,t,n){const s=1-Math.exp(-12*t);return i+(e-i)*s}function MM(){return{vDrone:new I,vFwd:new I,vTarget:new I,vUp:new I(0,1,0),vCam:new I}}function yM(i,e){const t=i.render.cameras.combat,n=new Lt(t.fovDegDefault,1,.01,t.far),s=MM(),r=vM(e,n),a=t.fovDegDefault;let o=null,c=Number.NaN;const l=new I(0,.05,.35),h=new I,u=new Nt,d=new I,m=new Nt,g=new Nt,_=new Nt().setFromAxisAngle(new I(0,1,0),Math.PI),p={minDeg:t.pitchMinDeg,maxDeg:t.pitchMaxDeg,speedDegPerSec:90},f={minFov:5,maxFov:80,speedDegPerSec:60},y={tiltDeg:t.pitchDegDefault,targetTiltDeg:t.pitchDegDefault,fovDeg:t.fovDegDefault,targetFovDeg:t.fovDegDefault},b=R=>{r.setVisible(R),R&&r.update(n,a,y.tiltDeg)},S=R=>{o=R,n.position.set(0,0,0),n.quaternion.identity(),n.updateMatrixWorld(!0),c=Number.NaN,r.update(n,a,y.tiltDeg)},T=(R,C,x,M)=>{y.targetTiltDeg=tu(y.targetTiltDeg+x.tiltAxis*p.speedDegPerSec*M,p.minDeg,p.maxDeg),y.tiltDeg=nu(y.tiltDeg,y.targetTiltDeg,M),y.targetFovDeg=tu(y.targetFovDeg-x.zoomAxis*f.speedDegPerSec*M,f.minFov,f.maxFov),y.fovDeg=nu(y.fovDeg,y.targetFovDeg,M);const P=Math.abs(n.fov-y.fovDeg)>.001;if(P&&(n.fov=y.fovDeg,n.updateProjectionMatrix()),(!Number.isFinite(c)||Math.abs(c-y.tiltDeg)>.05||P)&&(r.update(n,a,y.tiltDeg),c=y.tiltDeg),!o)return;o.getWorldPosition(h),o.getWorldQuaternion(u);const U=new kt().setFromQuaternion(u,"YXZ");m.setFromEuler(new kt(0,U.y,0,"YXZ")),d.copy(l).applyQuaternion(m),n.position.copy(h).add(d);const O=new kt().setFromQuaternion(u,"YXZ").y,V=y.tiltDeg*Math.PI/180;g.setFromAxisAngle(new I(1,0,0),V),n.quaternion.setFromEuler(new kt(V,O,0,"YXZ")),n.quaternion.multiply(_),n.updateMatrixWorld(!0)},w=()=>{y.tiltDeg=t.pitchDegDefault,y.targetTiltDeg=t.pitchDegDefault,y.fovDeg=t.fovDegDefault,y.targetFovDeg=t.fovDegDefault,n.fov=t.fovDegDefault,n.updateProjectionMatrix(),c=Number.NaN,r.update(n,a,y.tiltDeg)};return b(!0),{cam:n,state:y,scratch:s,update:T,reset:w,setEnabled:b,setMountParent:S}}function SM(i,e,t){return Math.max(e,Math.min(t,i))}function bM(i){const e=Math.PI*2;return i=(i+Math.PI)%e,i<0&&(i+=e),i-Math.PI}function EM(i,e){const t=i.render.cameras.dev,n=new Lt(t.fovDeg,1,t.near,t.far);let s=0,r=t.elevDeg*Math.PI/180,a=t.distM;const o=2,c=500;let l=!1,h=0,u=0;const d=.005,m=.08,g=0;function _(w){w.button===g&&(l=!0,h=w.clientX,u=w.clientY,w.preventDefault())}function p(w){if(!l)return;const R=w.clientX-h,C=w.clientY-u;h=w.clientX,u=w.clientY,s=bM(s-R*d),r+=-C*d,w.preventDefault()}function f(w){w.button===g&&(l=!1)}function y(w){const R=Math.exp((w.deltaY>0?1:-1)*m);a=SM(a*R,o,c),w.preventDefault()}return e.addEventListener("mousedown",_,{passive:!1}),window.addEventListener("mousemove",p,{passive:!1}),window.addEventListener("mouseup",f,{passive:!0}),e.addEventListener("wheel",y,{passive:!1}),{cam:n,update:(w,R,C)=>{const x=R.render.cameras.dev;n.fov=x.fovDeg,n.near=x.near,n.far=x.far,n.updateProjectionMatrix();const M=w.dronePos.x,P=w.dronePos.y,N=w.dronePos.z,U=Math.cos(r),O=Math.sin(r),V=Math.cos(s),G=Math.sin(s)*U*a,K=O*a,ne=V*U*a;n.position.set(M+G,P+K,N+ne),n.up.set(0,1,0),n.lookAt(M,P,N)},reset:()=>{s=0,r=t.elevDeg*Math.PI/180,a=t.distM,l=!1,h=0,u=0},dispose:()=>{e.removeEventListener("mousedown",_),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",f),e.removeEventListener("wheel",y)}}}function TM(i,e,t){return{combat:yM(i,e),dev:EM(i,t)}}const wM=30,AM=.75,RM=2,CM=.9,PM=.9,DM=Math.PI/6,IM=Math.PI/5;function So(i,e,t){return Math.max(e,Math.min(t,i))}function LM(i){const e=new Gt,t=new Gt,n=new Gt;e.add(t),t.add(n);const s=new Pt(new _s(.6,.2,.8),new wa({color:14744572}));s.castShadow=!0,n.add(s);let r=null,a={},o=0,c=0;const l=p=>{const f={};return p.traverse(y=>{y.name&&(y.name==="hub1"&&(f[1]=y),y.name==="hub2"&&(f[2]=y),y.name==="hub3"&&(f[3]=y),y.name==="hub4"&&(f[4]=y))}),f},h=p=>{r&&n.remove(r),r=p,a={},p&&(n.add(p),a=l(p)),s.visible=!p},u=p=>{e.position.set(p.dronePos.x,p.dronePos.y,p.dronePos.z),e.rotation.set(0,-p.droneRot.yaw,0,"YXZ");const f=-p.droneRot.pitch,y=-p.droneRot.roll;o=f,c=y,t.rotation.set(f,0,y,"YXZ")},d=p=>p===1||p===3?1:-1,m=p=>{const f=So(o/DM,-1,1)*CM,y=So(c/IM,-1,1)*PM,S=!(p===1||p===3),T=p===1||p===4,w=S?-f:f,R=T?y:-y,C=1+w+R;return So(C,AM,RM)},g=p=>{const f=wM*p,y=[1,2,3,4];for(const b of y){const S=a[b];if(!S)continue;const T=f*m(b);S.rotation.y+=d(b)*T}},_=p=>{e.visible=p};return h(null),{root:e,attitude:t,modelPivot:n,get model(){return r},setModel:h,applyWorldPose:u,setVisible:_,spinHubs:g}}function iu(i,e){if(e===wp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===yc||e===Vu){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===yc)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class md extends Di{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new BM(t)}),this.register(function(t){return new kM(t)}),this.register(function(t){return new KM(t)}),this.register(function(t){return new $M(t)}),this.register(function(t){return new ZM(t)}),this.register(function(t){return new VM(t)}),this.register(function(t){return new HM(t)}),this.register(function(t){return new GM(t)}),this.register(function(t){return new WM(t)}),this.register(function(t){return new OM(t)}),this.register(function(t){return new XM(t)}),this.register(function(t){return new zM(t)}),this.register(function(t){return new qM(t)}),this.register(function(t){return new YM(t)}),this.register(function(t){return new UM(t)}),this.register(function(t){return new jM(t)}),this.register(function(t){return new JM(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=js.extractUrlBase(e);a=js.resolveURL(l,this.path)}else a=js.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new sl(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===gd){try{a[Xe.KHR_BINARY_GLTF]=new QM(e)}catch(u){s&&s(u);return}r=JSON.parse(a[Xe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new dy(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Xe.KHR_MATERIALS_UNLIT:a[u]=new FM;break;case Xe.KHR_DRACO_MESH_COMPRESSION:a[u]=new ey(r,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:a[u]=new ty;break;case Xe.KHR_MESH_QUANTIZATION:a[u]=new ny;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function NM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class UM{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Le(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Rt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ld(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new sg(h),l.distance=u;break;case"spot":l=new ng(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),En(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class FM{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return Pn}extendParams(e,t,n){const s=[];e.color=new Le(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Rt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,gt))}return Promise.all(s)}}class OM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class BM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(o,o)}return Promise.all(r)}}class kM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class zM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class VM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Rt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,gt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class HM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class GM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(o[0],o[1],o[2],Rt),Promise.all(r)}}class WM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class XM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(o[0],o[1],o[2],Rt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,gt)),Promise.all(r)}}class YM{constructor(e){this.parser=e,this.name=Xe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class qM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class KM{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class $M{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class ZM{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class jM{constructor(e){this.name=Xe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(m){return m.buffer}):a.ready.then(function(){const m=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(m),h,u,d,s.mode,s.filter),m})})}else return null}}class JM{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==sn.TRIANGLES&&l.mode!==sn.TRIANGLE_STRIP&&l.mode!==sn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,m=[];for(const g of u){const _=new Ue,p=new I,f=new Nt,y=new I(1,1,1),b=new nd(g.geometry,g.material,d);for(let S=0;S<d;S++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,S),c.SCALE&&y.fromBufferAttribute(c.SCALE,S),b.setMatrixAt(S,_.compose(p,f,y));for(const S in c)if(S==="_COLOR_0"){const T=c[S];b.instanceColor=new bc(T.array,T.itemSize,T.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,c[S]);ft.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),m.push(b)}return h.isGroup?(h.clear(),h.add(...m),h):m[0]}))}}const gd="glTF",zs=12,su={JSON:1313821514,BIN:5130562};class QM{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,zs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==gd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-zs,r=new DataView(e,zs);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===su.JSON){const l=new Uint8Array(e,zs+a,o);this.content=n.decode(l)}else if(c===su.BIN){const l=zs+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ey{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=Rc[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Rc[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],m=ss[d.componentType];l[u]=m.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(m){for(const g in m.attributes){const _=m.attributes[g],p=c[g];p!==void 0&&(_.normalized=p)}u(m)},o,l,Rt,d)})})}}class ty{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ny{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}}class _d extends lr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,d=u*u,m=d*u,g=e*l,_=g-l,p=-2*m+3*d,f=m-d,y=1-p,b=f-d+u;for(let S=0;S!==o;S++){const T=a[_+S+o],w=a[_+S+c]*h,R=a[g+S+o],C=a[g+S]*h;r[S]=y*T+b*w+p*R+f*C}return r}}const iy=new Nt;class sy extends _d{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return iy.fromArray(r).normalize().toArray(r),r}}const sn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ss={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ru={9728:Mt,9729:je,9984:Nu,9985:ea,9986:Xs,9987:Rn},au={33071:At,33648:pa,10497:cs},bo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ry={CUBICSPLINE:void 0,LINEAR:nr,STEP:tr},Eo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ay(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new wa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:jn})),i.DefaultMaterial}function Mi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function En(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function oy(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function cy(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ly(i){let e;const t=i.extensions&&i.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+To(t.attributes):e=i.indices+":"+To(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+To(i.targets[n]);return e}function To(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Cc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function hy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const uy=new Ue;class dy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new NM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new cd(this.options.manager):this.textureLoader=new ag(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Mi(r,o,s),En(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(js.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=bo[s.type],o=ss[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new zt(l,a,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=bo[s.type],l=ss[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,m=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,p;if(m&&m!==u){const f=Math.floor(d/m),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count;let b=t.cache.get(y);b||(_=new l(o,f*m,s.count*m/h),b=new Qu(_,m/h),t.cache.add(y,b)),p=new rr(b,c,d%m/h,g)}else o===null?_=new l(s.count*c):_=new l(o,d,s.count*c),p=new zt(_,c,g);if(s.sparse!==void 0){const f=bo.SCALAR,y=ss[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,S=s.sparse.values.byteOffset||0,T=new y(a[1],b,s.sparse.count*f),w=new l(a[2],S,s.sparse.count*c);o!==null&&(p=new zt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let R=0,C=T.length;R<C;R++){const x=T[R];if(p.setX(x,w[R*c]),c>=2&&p.setY(x,w[R*c+1]),c>=3&&p.setZ(x,w[R*c+2]),c>=4&&p.setW(x,w[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=ru[d.magFilter]||je,h.minFilter=ru[d.minFilter]||Rn,h.wrapS=au[d.wrapS]||cs,h.wrapT=au[d.wrapT]||cs,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Mt&&h.minFilter!==je,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=s.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,m){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const p=new yt(_);p.needsUpdate=!0,d(p)}),t.load(js.resolveURL(u,r.path),g,void 0,m)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),En(u,a),u.userData.mimeType=a.mimeType||hy(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Xe.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new sd,vn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new id,vn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return wa}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[Xe.KHR_MATERIALS_UNLIT]){const u=s[Xe.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Le(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Rt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,gt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=mn);const h=r.alphaMode||Eo.OPAQUE;if(h===Eo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Eo.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Pn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ne(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Pn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Pn){const u=r.emissiveFactor;o.emissive=new Le().setRGB(u[0],u[1],u[2],Rt)}return r.emissiveTexture!==void 0&&a!==Pn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,gt)),Promise.all(l).then(function(){const u=new a(o);return r.name&&(u.name=r.name),En(u,r),t.associations.set(u,{materials:e}),r.extensions&&Mi(s,u,r),u})}createUniqueName(e){const t=it.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return ou(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=ly(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=ou(new Yt,l,t),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?ay(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let m=0,g=h.length;m<g;m++){const _=h[m],p=a[m];let f;const y=l[m];if(p.mode===sn.TRIANGLES||p.mode===sn.TRIANGLE_STRIP||p.mode===sn.TRIANGLE_FAN||p.mode===void 0)f=r.isSkinnedMesh===!0?new Cm(_,y):new Pt(_,y),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),p.mode===sn.TRIANGLE_STRIP?f.geometry=iu(f.geometry,Vu):p.mode===sn.TRIANGLE_FAN&&(f.geometry=iu(f.geometry,yc));else if(p.mode===sn.LINES)f=new Um(_,y);else if(p.mode===sn.LINE_STRIP)f=new tl(_,y);else if(p.mode===sn.LINE_LOOP)f=new Fm(_,y);else if(p.mode===sn.POINTS)f=new Om(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(f.geometry.morphAttributes).length>0&&cy(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),En(f,r),p.extensions&&Mi(s,f,p),t.assignFinalMaterial(f),u.push(f)}for(let m=0,g=u.length;m<g;m++)t.associations.set(u[m],{meshes:e,primitives:m});if(u.length===1)return r.extensions&&Mi(s,u[0],r),u[0];const d=new Gt;r.extensions&&Mi(s,d,r),t.associations.set(d,{meshes:e});for(let m=0,g=u.length;m<g;m++)d.add(u[m]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Lt(em.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Aa(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),En(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const d=new Ue;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Qc(o,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const m=s.channels[u],g=s.samplers[m.sampler],_=m.target,p=_.node,f=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",y)),l.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],m=u[1],g=u[2],_=u[3],p=u[4],f=[];for(let b=0,S=d.length;b<S;b++){const T=d[b],w=m[b],R=g[b],C=_[b],x=p[b];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const M=n._createAnimationTracks(T,w,R,C,x);if(M)for(let P=0;P<M.length;P++)f.push(M[P])}const y=new qm(r,void 0,f);return En(y,s),y})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(d,uy)});for(let m=0,g=u.length;m<g;m++)h.add(u[m]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new td:l.length>1?h=new Gt:l.length===1?h=l[0]:h=new ft,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),En(h,r),r.extensions&&Mi(n,h,r),r.matrix!==void 0){const u=new Ue;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Gt;n.name&&(r.name=s.createUniqueName(n.name)),En(r,n),n.extensions&&Mi(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,m]of s.associations)(d instanceof vn||d instanceof yt)&&u.set(d,m);return h.traverse(d=>{const m=s.associations.get(d);m!=null&&u.set(d,m)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,c=[];ci[r.path]===ci.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(ci[r.path]){case ci.weights:l=ds;break;case ci.rotation:l=fs;break;case ci.translation:case ci.scale:l=ps;break;default:n.itemSize===1?l=ds:l=ps;break}const h=s.interpolation!==void 0?ry[s.interpolation]:nr,u=this._getArrayFromAccessor(n);for(let d=0,m=c.length;d<m;d++){const g=new l(c[d]+"."+ci[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Cc(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof fs?sy:_d;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function fy(i,e,t){const n=e.attributes,s=new ei;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),o.normalized){const h=Cc(ss[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new I,c=new I;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],m=d.min,g=d.max;if(m!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),d.normalized){const _=Cc(ss[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new Nn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function ou(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=Rc[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Ye.workingColorSpace!==Rt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`),En(i,e),fy(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?oy(i,e.targets,t):i})}class py{loader=new md;root=null;async load(e){const t=await this.loader.loadAsync(e);this.root=t.scene}spawn(e,t){if(!this.root)throw new Error("ModelCatalog not loaded");const n=this.root.getObjectByName(e);if(!n)throw new Error(`Catalog node not found: ${e}`);const s=n.clone(!0);return typeof t.positionY=="number"&&(s.position.y=t.positionY),typeof t.visible=="boolean"&&(s.visible=t.visible),s.traverse(r=>{const a=r;a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)}),t.parent.add(s),s}}const aa=[{x:-.3,y:-.7,z:.05},{x:-.1,y:-.7,z:.05},{x:.1,y:-.7,z:.05},{x:.3,y:-.7,z:.05}];function my(i,e,t){return Math.max(e,Math.min(t,i))}function gy(i){const e=[0,3,1,2];for(let t=0;t<e.length;t++){const n=e[t];if(n>=0&&n<i.length&&i[n]>1e-6)return n}for(let t=0;t<i.length;t++)if(i[t]>1e-6)return t;return-1}function _y(i,e,t,n){const s=t.x-n.x,r=t.z-n.z,a=Math.hypot(s,r);return{payloadId:i,tImpact:e,impactPos:t,dx:s,dz:r,missM:a}}const xy=(i,e,t)=>{const n=Math.max(1e-6,t),s=i.wind.x,r=i.wind.z,a=!!i.input.drop;if(i.input.drop=!1,a){const g=gy(i.payloadSlotsKg);if(g!==-1){const _=aa[g]??{x:0,y:0,z:0},p=Math.cos(i.droneRot.yaw),f=Math.sin(i.droneRot.yaw),y=p*_.x+f*_.z,b=f*_.x-p*_.z,S=i.dronePos.x+y,T=i.dronePos.y+_.y,w=i.dronePos.z+b,R=Number.isFinite(i.droneYawVel)?i.droneYawVel:0,C=R*b,x=-R*y,M=i.droneVel.x+C,P=i.droneVel.y,N=i.droneVel.z+x,U=i.payloadSlotsKg[g];i.payloadSlotsKg[g]=0,i.payloads.push({id:i.payloadNextId++,active:!0,landed:!1,slotIndex:g,massKg:U,pos:{x:S,y:T,z:w},vel:{x:M,y:P,z:N},rot:{pitch:0,yaw:i.droneRot.yaw,roll:0},pitchVel:0})}}if(!i.payloads.length)return;const o=e.scenario.payload,c=Number.isFinite(o.gravityMps2)?o.gravityMps2:9.81,l=Math.max(0,o.dragKxz),h=Math.max(0,o.dragKy),u=-(Math.PI*.5),d=Math.max(0,o.pitchOmegaRad),m=Math.max(0,o.pitchDamp);for(let g=0;g<i.payloads.length;g++){const _=i.payloads[g];if(!_.active||_.landed)continue;const p=_.vel.x-s,f=_.vel.z-r,y=Math.hypot(p,f),b=y>1e-9?-l*p*y:0,S=y>1e-9?-l*f*y:0,T=_.vel.y,w=Math.abs(T)>1e-9?-h*T*Math.abs(T):0;_.vel.x+=b*n,_.vel.y+=(-c+w)*n,_.vel.z+=S*n,_.pos.x+=_.vel.x*n,_.pos.y+=_.vel.y*n,_.pos.z+=_.vel.z*n;const C=(u-_.rot.pitch)*d-_.pitchVel*m;_.pitchVel+=C*n,_.rot.pitch+=_.pitchVel*n,_.rot.pitch=my(_.rot.pitch,-Math.PI*.5,Math.PI*.5),_.pos.y<=0&&(_.pos.y=0,_.active=!1,_.landed=!0,_.pitchVel=0,_.rot.pitch=-Math.PI*.5,i.payloadImpacts.push(_y(_.id,i.t,_.pos,i.targetPos)))}};function vy(){const i=new Gt;i.name="PayloadAttached";const e=new Gt;e.name="PayloadDropped";let t=null;const n=new Array(aa.length).fill(null),s=new Map;function r(g){t=g,t&&(t.visible=!1)}function a(g){g.add(i)}function o(g,_){if(!t)return null;const p=new Gt;p.name=`${g}_pivot`,_.add(p);const f=t.clone(!0);return f.visible=!0,f.name=g,f.position.set(0,0,0),p.add(f),{pivot:p,model:f}}function c(g){if(n[g])return n[g];const _=o(`payload_slot_${g}`,i);return _?(n[g]=_,_):null}function l(g){const _=s.get(g);if(_)return _;const p=o(`payload_drop_${g}`,e);return p?(s.set(g,p),p):null}function h(g){const _=g.payloadSlotsKg??[],p=Math.min(aa.length,_.length);for(let f=0;f<p;f++){const y=c(f);if(!y)continue;const b=_[f]>1e-6;if(y.pivot.visible=b,b){const S=aa[f];y.pivot.position.set(S.x,S.y,S.z),y.pivot.rotation.set(0,0,0,"YXZ")}}for(let f=p;f<n.length;f++){const y=n[f];y&&(y.pivot.visible=!1)}}function u(g){for(const[,p]of s)p.pivot.visible=!1;const _=g.payloads??[];for(let p=0;p<_.length;p++){const f=_[p],y=l(f.id);if(!y)continue;y.pivot.visible=!0,y.pivot.position.set(f.pos.x,f.pos.y,f.pos.z);const b=Number.isFinite(f.rot?.pitch)?f.rot.pitch:0,S=Number.isFinite(f.rot?.yaw)?f.rot.yaw:0,T=Number.isFinite(f.rot?.roll)?f.rot.roll:0;y.pivot.rotation.set(b,-S,-T,"YXZ")}}function d(g){h(g),u(g)}function m(){for(let g=0;g<n.length;g++){const _=n[g];_&&i.remove(_.pivot),n[g]=null}for(const[,g]of s)e.remove(g.pivot);s.clear()}return{attachedRoot:i,droppedRoot:e,setTemplate:r,setDroneMountParent:a,syncFromWorld:d,clear:m}}function My(i,e){const t=new Gt,n=new Pn({color:e}),s=new Pt(new Ta(.6,.6,.1,24),n);s.position.y=.05;const r=new Pt(new il(.35,1.2,24),n);return r.position.y=.1+.6,t.add(s),t.add(r),t.position.y=i,t}function yy(i,e){i&&(i.visible=!0,i.position.set(e.targetPos.x,e.targetPos.y,e.targetPos.z),i.quaternion.set(e.targetRot.x,e.targetRot.y,e.targetRot.z,e.targetRot.w))}var fn=(i=>(i.COMBAT="combat",i.DEV="dev",i))(fn||{});function cu(i,e,t){return Math.max(e,Math.min(t,i))}function wo(i,e,t){return i+(e-i)*t}function Sy(i){const e=new DataView(i);if(e.getUint32(0,!0)!==1213482824)throw new Error("heights.bin: bad magic");const n=e.getUint32(4,!0);if(n!==1)throw new Error(`heights.bin: unsupported version ${n}`);const s=e.getUint32(8,!0),r=e.getUint32(12,!0),a=e.getFloat32(16,!0),o=e.getFloat32(20,!0),c=e.getFloat32(24,!0),l=e.getFloat32(28,!0),h=e.getFloat32(32,!0),u=36,d=s*r;if(i.byteLength<u+d*4)throw new Error("heights.bin: truncated");const m=new Float32Array(i,u,d);return{nx:s,nz:r,cellM:a,originX:o,originZ:c,minY:l,maxY:h,heights:m}}function Kr(i,e,t){const n=cu(e,0,i.nx-1),s=cu(t,0,i.nz-1);return i.heights[s*i.nx+n]??i.minY}function xd(i,e,t){const n=(e-i.originX)/i.cellM,s=(t-i.originZ)/i.cellM;if(!Number.isFinite(n)||!Number.isFinite(s)||n<0||s<0||n>i.nx-1||s>i.nz-1)return null;const r=Math.floor(n),a=Math.floor(s),o=Math.min(r+1,i.nx-1),c=Math.min(a+1,i.nz-1),l=n-r,h=s-a,u=Kr(i,r,a),d=Kr(i,o,a),m=Kr(i,r,c),g=Kr(i,o,c),_=wo(u,d,l),p=wo(m,g,l);return wo(_,p,h)}async function by(i){const e=await fetch(i);if(!e.ok)throw new Error(`Failed to load heights: ${i}`);const t=await e.arrayBuffer();return Sy(t)}const lu=6,Ey=200,Ty=.85;class wy{constructor(e){this.scene=e,this.tex=this.makeDecalTexture(256),this.tex.colorSpace=gt,this.tex.wrapS=At,this.tex.wrapT=At,this.tex.generateMipmaps=!1,this.tex.minFilter=je,this.tex.magFilter=je,this.mat=new Pn({map:this.tex,transparent:!0,depthWrite:!1,depthTest:!1,opacity:Ty}),this.geom=new xs(lu,lu)}decals=[];tex;mat;geom;reset(){for(const e of this.decals)this.scene.remove(e);this.decals.length=0}spawn(e){const t=e.impactPos.x,n=e.impactPos.y,s=e.impactPos.z,r=new Pt(this.geom,this.mat);if(r.position.set(t,n,s),r.rotation.x=-Math.PI/2,r.rotation.z=e.payloadId*1.61803398875%(Math.PI*2),r.renderOrder=5,this.scene.add(r),this.decals.push(r),this.decals.length>Ey){const a=this.decals.shift();this.scene.remove(a)}}makeDecalTexture(e){const t=document.createElement("canvas");t.width=e,t.height=e;const n=t.getContext("2d");if(!n)throw new Error("Canvas 2D context unavailable");const s=e/2,r=e/2;n.clearRect(0,0,e,e);const a=n.createRadialGradient(s,r,e*.1,s,r,e*.5);a.addColorStop(0,"rgba(0,0,0,0.00)"),a.addColorStop(.45,"rgba(0,0,0,0.25)"),a.addColorStop(1,"rgba(0,0,0,0.00)"),n.fillStyle=a,n.fillRect(0,0,e,e);const o=n.createRadialGradient(s,r,0,s,r,e*.22);o.addColorStop(0,"rgba(255,180,70,0.30)"),o.addColorStop(.6,"rgba(255,120,30,0.10)"),o.addColorStop(1,"rgba(0,0,0,0.00)"),n.fillStyle=o,n.fillRect(0,0,e,e);const c=n.getImageData(0,0,e,e),l=c.data;for(let h=0;h<l.length;h+=4){if(l[h+3]/255<=.001)continue;const d=(Math.random()*2-1)*18;l[h+0]=this.clamp255(l[h+0]+d),l[h+1]=this.clamp255(l[h+1]+d),l[h+2]=this.clamp255(l[h+2]+d)}return n.putImageData(c,0,0),new nl(t)}clamp255(e){return Math.max(0,Math.min(255,Math.round(e)))}}class Ay{constructor(e,t){this.scene=e,this.tex=new cd().load(t),this.tex.colorSpace=gt,this.tex.wrapS=At,this.tex.wrapT=At,this.baseMat=new ar({map:this.tex,transparent:!0,depthWrite:!1,depthTest:!1,blending:da,opacity:1})}items=[];tex;baseMat;reset(){for(const e of this.items)this.scene.remove(e.spr);this.items.length=0}spawn(e){const t=new xa(this.baseMat.clone());t.position.set(e.impactPos.x,e.impactPos.y+1,e.impactPos.z);const n=10;t.scale.setScalar(n);const s=t.material;s.opacity=1,s.rotation=e.payloadId*2.399963229728653%(Math.PI*2),this.scene.add(t),this.items.push({spr:t,age:0,life:.16,baseScale:n})}update(e){for(let t=this.items.length-1;t>=0;t--){const n=this.items[t];n.age+=e;const s=n.age/n.life;if(s>=1){this.scene.remove(n.spr),this.items.splice(t,1);continue}const r=1+1.8*(1-Math.exp(-14*n.age));n.spr.scale.setScalar(n.baseScale*r);const a=1-s;n.spr.material.opacity=a*a}}}const Ry=256,dn={opacity0:.33,life:1.1,baseScale:11,yOffset:.35,driftY:.15,driftXZ:.2,growK:1.2,growSpeed:2.2},nn={opacity0:.42,life:2.8,baseScale:14,yOffset:1.2,driftY:.55,driftXZ:.4,growK:1.6,growSpeed:1.2,delay:.08,warmupSec:.25};class Cy{constructor(e){this.scene=e,this.tex=this.makeSmokeTexture(Ry),this.tex.colorSpace=gt,this.tex.wrapS=At,this.tex.wrapT=At,this.tex.generateMipmaps=!1,this.tex.minFilter=je,this.tex.magFilter=je,this.baseMatGround=new ar({map:this.tex,transparent:!0,depthWrite:!1,depthTest:!0,blending:ui,opacity:1}),this.baseMatGround.depthFunc=Ci,this.baseMatAir=new ar({map:this.tex,transparent:!0,depthWrite:!1,depthTest:!1,blending:ui,opacity:1})}items=[];tex;baseMatGround;baseMatAir;reset(){for(const e of this.items)this.scene.remove(e.spr);this.items.length=0}spawn(e){const t=this.hash11(e.payloadId*31+7)*.7,n=this.hash11(e.payloadId*31+13)*.7,s=e.payloadId*1.23456789%(Math.PI*2);{const r=new xa(this.baseMatGround.clone());r.position.set(e.impactPos.x,e.impactPos.y+dn.yOffset,e.impactPos.z),r.scale.setScalar(dn.baseScale);const a=r.material;a.opacity=dn.opacity0,a.rotation=s,this.scene.add(r),this.items.push({spr:r,age:0,life:dn.life,baseScale:dn.baseScale,drift:new I(t*dn.driftXZ,dn.driftY,n*dn.driftXZ),delay:0,opacity0:dn.opacity0})}{const r=new xa(this.baseMatAir.clone());r.position.set(e.impactPos.x,e.impactPos.y+nn.yOffset,e.impactPos.z),r.scale.setScalar(nn.baseScale);const a=r.material;a.opacity=0,a.rotation=s,this.scene.add(r),this.items.push({spr:r,age:0,life:nn.life,baseScale:nn.baseScale,drift:new I(t*nn.driftXZ,nn.driftY,n*nn.driftXZ),delay:nn.delay,opacity0:nn.opacity0})}}update(e){for(let t=this.items.length-1;t>=0;t--){const n=this.items[t];if(n.age+=e,n.delay>0){n.delay-=e,n.spr.material.opacity=0;continue}const s=n.age/n.life;if(s>=1){this.scene.remove(n.spr),this.items.splice(t,1);continue}const r=n.life>2,a=r?nn.growK:dn.growK,o=r?nn.growSpeed:dn.growSpeed,c=1+a*(1-Math.exp(-o*n.age));n.spr.scale.setScalar(n.baseScale*c),n.spr.position.addScaledVector(n.drift,e);const l=1-s;if(r){const h=Math.min(1,n.age/nn.warmupSec),u=n.opacity0*h*l*l;n.spr.material.opacity=Math.max(0,u)}else{const h=n.opacity0*l*l*l;n.spr.material.opacity=Math.max(0,h)}}}makeSmokeTexture(e){const t=document.createElement("canvas");t.width=e,t.height=e;const n=t.getContext("2d");if(!n)throw new Error("Canvas 2D context unavailable");const s=e/2,r=e/2;n.clearRect(0,0,e,e);for(let c=0;c<14;c++){const l=(.1+Math.random()*.22)*e,h=s+(Math.random()*2-1)*e*.12,u=r+(Math.random()*2-1)*e*.12,d=n.createRadialGradient(h,u,0,h,u,l);d.addColorStop(0,"rgba(255,255,255,0.30)"),d.addColorStop(.45,"rgba(180,180,180,0.22)"),d.addColorStop(1,"rgba(0,0,0,0.00)"),n.fillStyle=d,n.beginPath(),n.arc(h,u,l,0,Math.PI*2),n.fill()}const a=n.createRadialGradient(s,r,e*.1,s,r,e*.52);a.addColorStop(0,"rgba(0,0,0,0.00)"),a.addColorStop(.75,"rgba(0,0,0,0.16)"),a.addColorStop(1,"rgba(0,0,0,0.00)"),n.fillStyle=a,n.fillRect(0,0,e,e);const o=new nl(t);return o.needsUpdate=!0,o}hash11(e){const t=Math.sin(e*12.9898)*43758.5453;return(t-Math.floor(t))*2-1}}class Py{constructor(e){this.scene=e;const t=new xs(.12,.55),n=new Pn({color:16761418,transparent:!0,opacity:.9,depthWrite:!1,depthTest:!1,blending:da,side:mn});this.mesh=new nd(t,n,this.max),this.mesh.frustumCulled=!1,this.scene.add(this.mesh);for(let s=0;s<this.max;s++)this.sparks.push({active:!1,age:0,life:0,pos:new I,vel:new I,scale:1}),this.writeHidden(s);this.mesh.instanceMatrix.needsUpdate=!0}max=256;sparks=[];mesh;tmpM=new Ue;tmpQ=new Nt;tmpS=new I;tmpP=new I;reset(){for(let e=0;e<this.sparks.length;e++)this.sparks[e].active=!1,this.writeHidden(e);this.mesh.instanceMatrix.needsUpdate=!0}spawn(e){const n=e.payloadId*9973;for(let s=0;s<36;s++){const r=this.alloc();if(!r)return;const a=this.hash01(n+s*17),o=this.hash01(n+s*29),c=this.hash01(n+s*43);r.active=!0,r.age=0,r.life=.6+.6*a,r.pos.set(e.impactPos.x,e.impactPos.y+.25,e.impactPos.z);const l=o*Math.PI*2,h=10+22*a,u=6+14*c;r.vel.set(Math.sin(l)*h,u,Math.cos(l)*h),r.scale=.9+1.6*o}}update(e){for(let n=0;n<this.sparks.length;n++){const s=this.sparks[n];if(!s.active){this.writeHidden(n);continue}if(s.age+=e,s.age>=s.life){s.active=!1,this.writeHidden(n);continue}s.vel.y+=-5.5*e,s.pos.addScaledVector(s.vel,e);const r=.02;s.pos.y<r&&(s.pos.y=r,s.vel.y*=-.35,s.vel.x*=.78,s.vel.z*=.78);const a=s.vel.x,o=s.vel.y,c=s.vel.z,l=Math.atan2(a,c),h=-Math.atan2(o,Math.sqrt(a*a+c*c));this.tmpQ.setFromEuler(new kt(h,l,0,"YXZ"));const u=s.age/s.life,d=Math.pow(1-u,1.3);this.tmpP.copy(s.pos),this.tmpS.set(1.8,.55,1).multiplyScalar(.9*s.scale*d),this.tmpM.compose(this.tmpP,this.tmpQ,this.tmpS),this.mesh.setMatrixAt(n,this.tmpM)}this.mesh.instanceMatrix.needsUpdate=!0}alloc(){for(let e=0;e<this.sparks.length;e++)if(!this.sparks[e].active)return this.sparks[e];return null}writeHidden(e){this.tmpP.set(0,0,0),this.tmpQ.identity(),this.tmpS.set(0,0,0),this.tmpM.compose(this.tmpP,this.tmpQ,this.tmpS),this.mesh.setMatrixAt(e,this.tmpM)}hash01(e){const t=Math.sin(e*12.9898)*43758.5453;return t-Math.floor(t)}}const Dy=.03;class Iy{lastImpactCount=0;flash;sparks;decals;smoke;hm=null;constructor(e){this.flash=new Ay(e,"/textures/flash.png"),this.sparks=new Py(e),this.decals=new wy(e),this.smoke=new Cy(e)}setHeightMap(e){this.hm=e}reset(){this.lastImpactCount=0,this.flash.reset(),this.sparks.reset(),this.decals.reset(),this.smoke.reset()}update(e,t){this.consumeNewImpacts(e),this.flash.update(t),this.sparks.update(t),this.smoke.update(t)}consumeNewImpacts(e){const t=e.payloadImpacts??[];if(!(t.length<=this.lastImpactCount)){for(let n=this.lastImpactCount;n<t.length;n++)this.onImpact(this.withHeightY(t[n]));this.lastImpactCount=t.length}}withHeightY(e){if(!this.hm)return e;const t=e.impactPos.x,n=e.impactPos.z,s=xd(this.hm,t,n);return typeof s!="number"||!Number.isFinite(s)?e:{...e,impactPos:{...e.impactPos,y:s+Dy}}}onImpact(e){this.flash.spawn(e),this.sparks.spawn(e),this.decals.spawn(e),this.smoke.spawn(e)}}class Ly extends eg{constructor(e){super(e),this.type=Qt}parse(e){const a=function(C,x){switch(C){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(x||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(x||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(x||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(x||""))}},u=function(C,x,M){x=x||1024;let N=C.pos,U=-1,O=0,V="",k=String.fromCharCode.apply(null,new Uint16Array(C.subarray(N,N+128)));for(;0>(U=k.indexOf(`
`))&&O<x&&N<C.byteLength;)V+=k,O+=k.length,N+=128,k+=String.fromCharCode.apply(null,new Uint16Array(C.subarray(N,N+128)));return-1<U?(C.pos+=O+U+1,V+k.slice(0,U)):!1},d=function(C){const x=/^#\?(\S+)/,M=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,N=/^\s*FORMAT=(\S+)\s*$/,U=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,O={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let V,k;for((C.pos>=C.byteLength||!(V=u(C)))&&a(1,"no header found"),(k=V.match(x))||a(3,"bad initial token"),O.valid|=1,O.programtype=k[1],O.string+=V+`
`;V=u(C),V!==!1;){if(O.string+=V+`
`,V.charAt(0)==="#"){O.comments+=V+`
`;continue}if((k=V.match(M))&&(O.gamma=parseFloat(k[1])),(k=V.match(P))&&(O.exposure=parseFloat(k[1])),(k=V.match(N))&&(O.valid|=2,O.format=k[1]),(k=V.match(U))&&(O.valid|=4,O.height=parseInt(k[1],10),O.width=parseInt(k[2],10)),O.valid&2&&O.valid&4)break}return O.valid&2||a(3,"missing format specifier"),O.valid&4||a(3,"missing image size specifier"),O},m=function(C,x,M){const P=x;if(P<8||P>32767||C[0]!==2||C[1]!==2||C[2]&128)return new Uint8Array(C);P!==(C[2]<<8|C[3])&&a(3,"wrong scanline width");const N=new Uint8Array(4*x*M);N.length||a(4,"unable to allocate buffer space");let U=0,O=0;const V=4*P,k=new Uint8Array(4),G=new Uint8Array(V);let K=M;for(;K>0&&O<C.byteLength;){O+4>C.byteLength&&a(1),k[0]=C[O++],k[1]=C[O++],k[2]=C[O++],k[3]=C[O++],(k[0]!=2||k[1]!=2||(k[2]<<8|k[3])!=P)&&a(3,"bad rgbe scanline format");let ne=0,ee;for(;ne<V&&O<C.byteLength;){ee=C[O++];const Ae=ee>128;if(Ae&&(ee-=128),(ee===0||ne+ee>V)&&a(3,"bad scanline data"),Ae){const Re=C[O++];for(let ot=0;ot<ee;ot++)G[ne++]=Re}else G.set(C.subarray(O,O+ee),ne),ne+=ee,O+=ee}const he=P;for(let Ae=0;Ae<he;Ae++){let Re=0;N[U]=G[Ae+Re],Re+=P,N[U+1]=G[Ae+Re],Re+=P,N[U+2]=G[Ae+Re],Re+=P,N[U+3]=G[Ae+Re],U+=4}K--}return N},g=function(C,x,M,P){const N=C[x+3],U=Math.pow(2,N-128)/255;M[P+0]=C[x+0]*U,M[P+1]=C[x+1]*U,M[P+2]=C[x+2]*U,M[P+3]=1},_=function(C,x,M,P){const N=C[x+3],U=Math.pow(2,N-128)/255;M[P+0]=Tr.toHalfFloat(Math.min(C[x+0]*U,65504)),M[P+1]=Tr.toHalfFloat(Math.min(C[x+1]*U,65504)),M[P+2]=Tr.toHalfFloat(Math.min(C[x+2]*U,65504)),M[P+3]=Tr.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;const f=d(p),y=f.width,b=f.height,S=m(p.subarray(p.pos),y,b);let T,w,R;switch(this.type){case Bt:R=S.length/4;const C=new Float32Array(R*4);for(let M=0;M<R;M++)g(S,M*4,C,M*4);T=C,w=Bt;break;case Qt:R=S.length/4;const x=new Uint16Array(R*4);for(let M=0;M<R;M++)_(S,M*4,x,M*4);T=x,w=Qt;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:y,height:b,data:T,header:f.string,gamma:f.gamma,exposure:f.exposure,type:w}}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(a,o){switch(a.type){case Bt:case Qt:a.colorSpace=Rt,a.minFilter=je,a.magFilter=je,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,r,n,s)}}class Ny extends Ly{constructor(e){console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."),super(e)}}function Uy(i){const e=i.originX,t=i.originX+(i.nx-1)*i.cellM,n=i.originZ,s=i.originZ+(i.nz-1)*i.cellM,r=i.cellM;return{sampler:{getHeight:(a,o)=>xd(i,a,o)},bounds:{minX:e,maxX:t,minZ:n,maxZ:s},cellM:r,clearanceM:r,maxClimbM:r*.6}}function Fy(i){switch(i){case"Basic":return ip;case"PCF":return Ks;case"PCFSoft":return Ru;case"VSM":return es}}function Oy(i){return i==="SRGB"?gt:Rt}function By(i){switch(i){case"None":return _n;case"Linear":return Bc;case"Reinhard":return kc;case"Cineon":return zc;case"ACESFilmic":return Vc}}function ky(i,e,t){const n=t.render?.renderer;n&&(typeof n.shadowMapEnabled=="boolean"&&(i.shadowMap.enabled=n.shadowMapEnabled),n.shadowMapType&&(i.shadowMap.type=Fy(n.shadowMapType)),n.outputColorSpace&&(i.outputColorSpace=Oy(n.outputColorSpace)),n.toneMapping&&(i.toneMapping=By(n.toneMapping)),typeof n.toneMappingExposure=="number"&&(i.toneMappingExposure=n.toneMappingExposure));const s=t.render?.scene?.backgroundIntensity;typeof s=="number"&&(e.backgroundIntensity=s);const r=t.environment?.intensity;typeof r=="number"&&(e.environmentIntensity=r)}function $r(i,e){const t=i.getObjectByName(e);if(!t)throw new Error(`Zone GLB: missing node "${e}"`);return t}function zy(i,e=1e-4){return Math.abs(i.x)<e&&Math.abs(i.y)<e&&Math.abs(i.z)<e&&Math.abs(i.w-1)<e}function Vy(i){const e=$r(i,"drone"),t=$r(i,"target"),n=$r(i,"sun"),s=$r(i,"flyzone"),r=new I;e.getWorldPosition(r);const a=new I;t.getWorldPosition(a);const o=new Nt;t.getWorldQuaternion(o);const c=new I;n.getWorldPosition(c);const l=new Nt;n.getWorldQuaternion(l);const h=new I(0,0,-1).applyQuaternion(l).normalize(),u=new I;s.getWorldPosition(u);const d=new I;s.getWorldScale(d);const m=s.getWorldQuaternion(new Nt);if(!zy(m))throw new Error('Zone GLB: "flyzone" must have no rotation (axis-aligned)');return{dronePos:r,targetPos:a,targetRot:o,sunPos:c,sunDir:h,fly:{center:u,halfX:d.x,halfY:d.y,halfZ:d.z}}}class Hy{constructor(e,t){this.r=e,this.scene=t,this.pmrem=new Tc(this.r)}config;markers;terrain=null;heightMap=null;root=null;sunLight=null;sunTarget=null;pmrem;envTex=null;gltfLoader=new md;rgbeLoader=new Ny;async load(e){const t=`/maps/${e}`,n=`${t}/zone.json`,s=`${t}/terrain.glb`,r=`${t}/skybox.hdr`;this.dispose(!1);const a=await fetch(n);if(!a.ok)throw new Error(`Failed to load zone.json for "${e}"`);this.config=await a.json(),ky(this.r,this.scene,this.config);const o=await this.gltfLoader.loadAsync(s);this.root=o.scene,this.scene.add(this.root),this.markers=Vy(this.root),await this.applyHdrSkybox(r);try{const c=await by(`${t}/heights.bin`);this.heightMap=c,this.terrain=Uy(c),console.info(`[Zone] heights.bin loaded (${c.cellM}m grid)`)}catch{this.heightMap=null,this.terrain=null,console.info("[Zone] no heights.bin — flat terrain assumed")}this.setupSunLight()}disposeSun(){this.sunLight&&(this.scene.remove(this.sunLight),this.sunLight.dispose(),this.sunLight=null),this.sunTarget&&(this.scene.remove(this.sunTarget),this.sunTarget=null)}setupSunLight(){const e=this.config.sun;this.disposeSun();const t=new ld(16777215,e.intensity);t.castShadow=e.castShadow,t.position.copy(this.markers.sunPos);const n=new ft;n.position.set(0,0,0),this.scene.add(n),t.target=n,this.scene.add(t),n.updateMatrixWorld(!0),t.updateMatrixWorld(!0),this.sunLight=t,this.sunTarget=n}async applyHdrSkybox(e){this.envTex&&(this.scene.background===this.envTex&&(this.scene.background=null),this.scene.environment===this.envTex&&(this.scene.environment=null),this.envTex.dispose(),this.envTex=null);const t=await this.rgbeLoader.loadAsync(e);t.mapping=fa,t.colorSpace=Rt;const n=this.pmrem.fromEquirectangular(t).texture;this.envTex=n,this.scene.background=n,this.scene.environment=n,t.dispose()}resetForReload(){this.dispose(!1)}dispose(e=!0){this.disposeSun(),this.terrain=null,this.heightMap=null,this.root&&(this.scene.remove(this.root),this.root.traverse(t=>{const n=t;if(!n.isMesh)return;n.geometry&&n.geometry.dispose();const s=n.material;Array.isArray(s)?s.forEach(r=>r.dispose()):s&&s.dispose()}),this.root=null),this.envTex&&(this.scene.background===this.envTex&&(this.scene.background=null),this.scene.environment===this.envTex&&(this.scene.environment=null),this.envTex.dispose(),this.envTex=null),e&&this.pmrem.dispose()}}class Gy{constructor(e,t){this.r=e,this.scene=t}zone=null;loadSeq=0;get activeZone(){return this.zone}get activeZoneConfig(){return this.zone?.config??null}get dronePos(){return this.zone?.markers?.dronePos??null}get targetPos(){return this.zone?.markers?.targetPos??null}get targetRot(){return this.zone?.markers?.targetRot??null}get sunDir(){return this.zone?.markers?.sunDir??null}get flyzone(){return this.zone?.markers?.fly??null}async setZone(e){const t=++this.loadSeq,n=new Hy(this.r,this.scene);if(await n.load(e),t!==this.loadSeq)return n.dispose(),null;this.zone?.dispose(),this.zone=n}clear(){this.loadSeq++,this.zone?.dispose(),this.zone=null}}function wn(i=0,e=0,t=0){return{x:i,y:e,z:t}}function Wy(i,e){const t=Math.hypot(i.x,i.z);if(t<=e||t<1e-8)return i;const n=e/t;return{x:i.x*n,y:i.y,z:i.z*n}}function Xy(i,e,t){if(i.t=0,i.bounds=e?{minX:e.fly.center.x-e.fly.halfX,maxX:e.fly.center.x+e.fly.halfX,minY:e.fly.center.y-e.fly.halfY,maxY:e.fly.center.y+e.fly.halfY,minZ:e.fly.center.z-e.fly.halfZ,maxZ:e.fly.center.z+e.fly.halfZ}:null,i.terrain=t??null,e?(i.dronePos=wn(e.dronePos.x,e.dronePos.y,e.dronePos.z),i.targetPos=wn(e.targetPos.x,e.targetPos.y,e.targetPos.z),i.targetRot={x:e.targetRot.x,y:e.targetRot.y,z:e.targetRot.z,w:e.targetRot.w}):(i.dronePos=wn(0,0,0),i.targetPos=wn(80,0,-80),i.targetRot={x:0,y:0,z:0,w:1}),i.terrain){const n=i.terrain.sampler.getHeight(i.dronePos.x,i.dronePos.z);if(n!==null){const s=n+i.terrain.clearanceM;i.dronePos.y<s&&(i.dronePos.y=s)}}i.droneVel=wn(0,0,0),i.droneRot={pitch:0,yaw:0,roll:0},i.droneCtrlAcc=wn(0,0,0),i.droneYawVel=0,i.trail.length=0}function hu(i){return Math.max(-1,Math.min(1,i))}function Yy(i){return Math.max(0,Math.min(.05,i))}class qy{constructor(e,t){this.canvas=e,this.cfg=t;const{r:n,scene:s}=this.createScene(e,t);this.r=n,this.scene=s,this.zones=new Gy(this.r,this.scene),this.cams=TM(t,this.r,this.canvas),this.activeCam=this.cams.combat.cam,this.droneRig=LM(),this.scene.add(this.droneRig.root),this.payloadRig=vy(),this.scene.add(this.payloadRig.droppedRoot),this.payloadRig.setDroneMountParent(this.droneRig.modelPivot),this.scene.add(this.cams.combat.cam),this.scene.add(this.cams.dev.cam),this.vfx=new Iy(s),this.setCameraMode(fn.COMBAT),this.resize(),this.loadAssetsFromCatalog()}r;scene;zones;cams;activeCam;mode=fn.COMBAT;droneRig;payloadRig;targetMarker=null;extrasInput={tiltAxis:0,zoomAxis:0};lastNowMs=null;catalog=new py;vfx;isReady=!1;onReady=null;createScene(e,t){const n=new dM({canvas:e,antialias:!0});n.setPixelRatio(Math.min(t.render.pixelRatioCap,Math.max(1,window.devicePixelRatio||1)));const s=new Am;return{r:n,scene:s}}async loadAssetsFromCatalog(){try{await this.catalog.load("models/assets.glb");const e=this.catalog.spawn("drone",{parent:this.droneRig.modelPivot,visible:!0});this.droneRig.setModel(e);const t=e.getObjectByName("camera");this.cams.combat.setMountParent(t??this.droneRig.modelPivot),t||console.warn("Drone model missing camera mount");const n=this.catalog.spawn("payload",{parent:this.payloadRig.droppedRoot,visible:!1});this.payloadRig.setTemplate(n);const s=this.catalog.spawn("target",{parent:this.scene,visible:!0});this.targetMarker=s}catch{this.droneRig.setModel(null),this.payloadRig.setTemplate(null);const e=My(0,65280);e.visible=!1,this.scene.add(e),this.targetMarker=e}finally{this.isReady=!0,this.onReady?.()}}async setZone(e,t){await this.zones.setZone(e);const n=this.zones.activeZone;Xy(t,n?.markers,n?.terrain),this.vfx.setHeightMap(n?.heightMap??null),this.vfx.reset()}setOnReady(e){if(this.isReady){e();return}this.onReady=e}setCameraMode(e){this.mode=e,this.activeCam=e===fn.COMBAT?this.cams.combat.cam:this.cams.dev.cam,this.cams.combat.setEnabled(e===fn.COMBAT),this.extrasInput.tiltAxis=0,this.extrasInput.zoomAxis=0}resetCamera(){this.setCameraMode(fn.COMBAT),this.cams.combat?.reset?.(),this.cams.dev?.reset?.()}cycleCameraMode(){this.setCameraMode(this.mode===fn.COMBAT?fn.DEV:fn.COMBAT)}setCameraAxes(e){this.extrasInput.tiltAxis=hu(e.tiltAxis),this.extrasInput.zoomAxis=hu(e.zoomAxis)}render(e,t){let n=.016666666666666666;this.lastNowMs!==null&&(n=(t-this.lastNowMs)/1e3),this.lastNowMs=t,n=Yy(n),this.droneRig.spinHubs(n),this.droneRig.applyWorldPose(e),this.payloadRig.syncFromWorld(e),yy(this.targetMarker,e),this.mode===fn.COMBAT?(this.cams.combat.update(e,this.cfg,this.extrasInput,n),e.camera.combatPitchDeg=this.cams.combat.state.tiltDeg,e.camera.combatFow=this.cams.combat.state.fovDeg):this.cams.dev.update(e,this.cfg,n),this.vfx.update(e,n),this.r.render(this.scene,this.activeCam)}resize(){const e=this.canvas.getBoundingClientRect(),t=Math.max(1,Math.floor(e.width)),n=Math.max(1,Math.floor(e.height));if(this.canvas.width===t&&this.canvas.height===n)return;this.r.setSize(t,n,!1);const s=t/n;this.cams.combat.cam.aspect=s,this.cams.dev.cam.aspect=s,this.cams.combat.cam.updateProjectionMatrix(),this.cams.dev.cam.updateProjectionMatrix()}}const Ky={fixedDt:1/60,seed:12345},$y={pixelRatioCap:2,axes:{flipX:!0},backgroundColorHex:14540253,cameras:{combat:{near:.1,far:12e3,fovDegDefault:80,lookAheadM:6,pitchDegDefault:0,pitchMinDeg:0,pitchMaxDeg:89.99},dev:{fovDeg:80,near:.1,far:12e3,distM:5,elevDeg:45}}},Zy={field:{size:1e4,tile:100,padding:4e3},target:{position:{x:80,y:0,z:-80}},bounds:{mode:"clamp",killOutwardVel:!0},drone:{maxSpeedMps:25,yawRateRadPerSec:Math.PI*2,yawAccelRadPerSec2:24,yawDampingPerSec:2,altitude:{maxClimbMps:6,maxDescentMps:4,responsePerSec:16,dampingPerSec:8},attitude:{maxPitchRad:Math.PI/6,maxRollRad:Math.PI/6,responseRadPerSec:1,timeToMaxSpeedSec:2,dampingPerSec:1.5}},payload:{droneDryMassKg:15,slotsKg:[3,3,3,3],controlMaxForceN:120,gravityMps2:9.81,dragKxz:.05,dragKy:.04,pitchOmegaRad:10,pitchDamp:8},wind:{enabled:!0,dirRad:Math.PI*.25,speedMps:5,varPeriodSec:8,speedJitterMps:2.5,dirJitterRad:Math.PI/10},gust:{enabled:!0,spawnPeriodSec:6,spawnJitterSec:3,durationSec:3,durationJitterSec:1.5,radiusM:45,radiusJitterM:25,peakMps:10,peakJitterMps:6,dirJitterRad:Math.PI/4,maxActive:6,centerJitterM:80}},Pa=[{id:"kazhan",name:"Kazhan E360",override:{drone:{maxSpeedMps:25,yawRateRadPerSec:Math.PI*1.4,altitude:{maxClimbMps:6,maxDescentMps:4,responsePerSec:6,dampingPerSec:1.2},attitude:{responseRadPerSec:1,timeToMaxSpeedSec:2,dampingPerSec:1.6}}}},{id:"pegas",name:"Pegasus PA25",override:{drone:{yawRateRadPerSec:Math.PI*1,altitude:{maxClimbMps:2.5,maxDescentMps:2,responsePerSec:4,dampingPerSec:2},attitude:{responseRadPerSec:.5,timeToMaxSpeedSec:3,dampingPerSec:2.5}}}},{id:"mavic",name:"Mavic 3",override:{drone:{yawRateRadPerSec:Math.PI*1.9,altitude:{maxClimbMps:6,maxDescentMps:4.5,responsePerSec:10,dampingPerSec:.8},attitude:{responseRadPerSec:2,timeToMaxSpeedSec:1,dampingPerSec:1}}}}],vd=new Map(Pa.map(i=>[i.id,i]));function Md(i){return vd.has(i)}function jy(i){return vd.get(i)??Pa[0]}function Jy(i,e){return{bounds:{...i.bounds,...e.bounds??{}},field:{...i.field,...e.field??{}},target:{...i.target,...e.target??{},position:{...i.target.position,...e.target?.position??{}}},drone:{...i.drone,...e.drone??{},altitude:{...i.drone.altitude,...e.drone?.altitude??{}},attitude:{...i.drone.attitude,...e.drone?.attitude??{}}},payload:{...i.payload,...e.payload??{}},wind:{...i.wind,...e.wind??{}},gust:{...i.gust,...e.gust??{}}}}const yd="kd.scenario",Sd="kd.wind",bd="kd.zone",ll=Pa[0]?.id??"default",Ed="snowy_mountain",Vs={dirDeg:45,speedMps:5,gustMaxMps:15,variation:.35,gustiness:.45};function ts(i,e,t){return Math.max(e,Math.min(t,i))}function Td(i){const e=i%360;return e<0?e+360:e}function uu(i){return i*Math.PI/180}function Hs(i,e){const t=typeof i=="number"?i:Number(i);return Number.isFinite(t)?t:e}function Qy(i){try{const e=localStorage.getItem(i);return e?JSON.parse(e):null}catch{return null}}function eS(i,e){localStorage.setItem(i,JSON.stringify(e))}function wd(i){const e=i??{},t=!!e.enabled,n=Td(Math.round(Hs(e.dirDeg,Vs.dirDeg))),s=ts(Hs(e.speedMps,Vs.speedMps),0,50),r=ts(Hs(e.gustMaxMps,Vs.gustMaxMps),0,80),a=Math.max(r,s),o=ts(Hs(e.variation,Vs.variation),0,1),c=ts(Hs(e.gustiness,Vs.gustiness),0,1);return{enabled:t,dirDeg:n,speedMps:s,gustMaxMps:a,variation:o,gustiness:c}}function Ad(){const i=Qy(Sd);return wd(i)}function tS(){const i=localStorage.getItem(bd);return i&&typeof i=="string"&&i.length>0?i:Ed}function nS(i,e){if(!e.enabled)return{...i,wind:{...i.wind,enabled:!1},gust:{...i.gust,enabled:!1}};const t=Math.max(0,e.speedMps),n=Math.max(t,e.gustMaxMps),s=Math.max(0,n-t),r=ts(e.variation,0,1),a=ts(e.gustiness,0,1),o=20-16*r,c=t*(.05+.6*r),l=uu(2+28*r),h=10-8*a;return{...i,wind:{...i.wind,enabled:!0,dirRad:uu(Td(e.dirDeg)),speedMps:t,varPeriodSec:Math.max(1,o),speedJitterMps:Math.max(0,c),dirJitterRad:Math.max(0,l)},gust:{...i.gust,enabled:s>0&&a>.01,peakMps:s,spawnPeriodSec:Math.max(.5,h)}}}let rs=ll,hr=Da(rs);function Da(i){const e=jy(i);let t=Jy(Zy,e.override);const n=Ad();return t=nS(t,n),{scenarioId:e.id,scenarioName:e.name,scenario:t,zoneId:tS(),core:{...Ky},render:{...$y},windUser:n}}function iS(){const i=localStorage.getItem(yd),e=i&&Md(i)?i:ll;Cd(e)}function Rd(){return hr}function Ao(){return hr}function Cd(i){rs=Md(i)?i:ll,hr=Da(rs),localStorage.setItem(yd,rs)}function sS(i){const e=Ad(),t=wd({...e,...i});eS(Sd,t),hr=Da(rs)}function rS(i){const e=(i||"").trim(),t=e.length>0?e:Ed;localStorage.setItem(bd,t),hr=Da(rs)}function Ri(i=0,e=0){return{x:i,z:e}}function Pd(i){const e=i.scenario,t=e.payload.slotsKg.slice(),n=t.reduce((a,o)=>a+o,0),s=e.payload.droneDryMassKg+n,r=e.target.position;return{t:0,terrain:null,bounds:null,presetName:i.scenarioName,dronePos:wn(0,0,0),droneVel:wn(0,0,0),droneRot:{pitch:0,yaw:0,roll:0},droneCtrlAcc:wn(0,0,0),droneYawVel:0,camera:{combatPitchDeg:0,combatFow:0},wind:Ri(0,0),gusts:[],payloadSlotsKg:t,payloadNextId:1,payloads:[],payloadImpacts:[],totalMassKg:s,windScale:1,input:ua(),targetPos:wn(r.x,r.y,r.z),targetRot:{x:0,y:0,z:0,w:1},trail:[],gamepadId:"no gamepad",gamepadIndex:-1,rcRaw:{roll:0,pitch:0,yaw:0,thr:0},rc:{roll:0,pitch:0,yaw:0,thr:0}}}function Ro(i,e,t){return Math.max(e,Math.min(t,i))}function aS(i,e,t){const n=Ro(i.x,t.minX,t.maxX),s=Ro(i.y,t.minY,t.maxY),r=Ro(i.z,t.minZ,t.maxZ);n!==i.x&&(i.x=n,e.x!==0&&(e.x=0)),s!==i.y&&(i.y=s,e.y!==0&&(e.y=0)),r!==i.z&&(i.z=r,e.z!==0&&(e.z=0))}function du(i,e,t){return Math.max(e,Math.min(t,i))}function oS(i,e,t){const n=du(i.x,t.minX,t.maxX),s=du(i.z,t.minZ,t.maxZ);n!==i.x&&(i.x=n,e.x!==0&&(e.x=0)),s!==i.z&&(i.z=s,e.z!==0&&(e.z=0))}function cS(i,e,t,n){oS(i,e,n.bounds);const s=n.sampler.getHeight(t.x,t.z),r=n.sampler.getHeight(i.x,i.z);if(s!==null&&r!==null){r-s>n.maxClimbM&&(i.x=t.x,i.z=t.z,e.x=0,e.z=0);const a=n.sampler.getHeight(i.x,i.z);if(a!==null){const o=a+n.clearanceM;i.y<o&&(i.y=o,e.y<0&&(e.y=0))}}else i.x=t.x,i.z=t.z,e.x=0,e.z=0}function Si(i,e,t){return Math.max(e,Math.min(t,i))}function lS(i){const e=Math.PI*2;return i=(i+Math.PI)%e,i<0&&(i+=e),i-Math.PI}function Zr(i,e,t){const n=e-i,s=Si(n,-t,t);return i+s}function hS(i,e,t){const n=Math.max(1e-6,t),s=e.scenario.drone,r=e.scenario.payload,a=s.altitude,o=Si(Number.isFinite(i.input.throttle)?i.input.throttle:0,-1,1),c=o>=0?o*a.maxClimbMps:o*a.maxDescentMps,l=Math.max(a.maxClimbMps,a.maxDescentMps),h=Math.max(0,a.responsePerSec)*l*n;i.droneVel.y=Zr(i.droneVel.y,c,h);const d=1-Math.min(1,Math.abs(o)/.2),m=Math.max(0,a.dampingPerSec)*d,g=Math.exp(-m*n);i.droneVel.y*=g,i.dronePos.y+=i.droneVel.y*n;const _=Si(Number.isFinite(i.input.roll)?i.input.roll:0,-1,1),p=Si(Number.isFinite(i.input.pitch)?i.input.pitch:0,-1,1),f=Math.hypot(_,p),y=f>1?1/f:1,b=_*y,S=p*y,T=S*s.attitude.maxPitchRad,w=b*s.attitude.maxRollRad,R=Math.max(0,s.attitude.responseRadPerSec)*n;i.droneRot.pitch=Zr(i.droneRot.pitch,T,R),i.droneRot.roll=Zr(i.droneRot.roll,w,R);const C=Si(Number.isFinite(i.input.yaw)?i.input.yaw:0,-1,1),x=Math.max(0,s.yawRateRadPerSec),M=C*x,P=Math.max(1e-6,r.droneDryMassKg),N=Math.max(1e-6,Number.isFinite(i.totalMassKg)?i.totalMassKg:P),U=Si(P/N,.25,2),k=Math.max(0,s.yawAccelRadPerSec2)*U*n;i.droneYawVel=Zr(Number.isFinite(i.droneYawVel)?i.droneYawVel:0,M,k);const K=Math.abs(C)<.05,ne=Math.max(0,s.yawDampingPerSec),he=1-.6*(x>1e-6?Si(Math.abs(i.droneYawVel)/x,0,1):0),Ae=ne*U*he;if(K&&Ae>0){const Re=Math.exp(-Ae*n);i.droneYawVel*=Re}return i.droneRot.yaw=lS(i.droneRot.yaw+i.droneYawVel*n),{stickRoll:b,stickPitch:S,stickMag:Math.hypot(b,S)}}function fu(i,e,t){return Math.max(e,Math.min(t,i))}function uS(i){let e=0;for(let t=0;t<i.length;t++)e+=i[t];return e}const dS=(i,e,t)=>{const n=Math.max(1e-6,t),s=e.scenario,r=uS(i.payloadSlotsKg??[]),a=Math.max(1e-6,s.payload.droneDryMassKg+r);i.totalMassKg=a,hS(i,e,n);const o=Math.max(1e-6,s.drone.attitude.timeToMaxSpeedSec),c=s.drone.maxSpeedMps/o,l=Math.max(0,s.payload.controlMaxForceN)/a,h=Math.min(c,l),u=s.drone.attitude.maxPitchRad>1e-6?fu(i.droneRot.pitch/s.drone.attitude.maxPitchRad,-1,1):0,m=(s.drone.attitude.maxRollRad>1e-6?fu(i.droneRot.roll/s.drone.attitude.maxRollRad,-1,1):0)*h,g=u*h,_=Math.cos(i.droneRot.yaw),p=Math.sin(i.droneRot.yaw),f=m*_+g*p,y=m*p-g*_,b=i.droneVel.x-i.wind.x,S=i.droneVel.z-i.wind.z,T=Math.hypot(b,S),w=Math.max(1e-6,s.drone.maxSpeedMps),R=Math.max(1e-6,s.payload.droneDryMassKg),C=Math.max(0,s.payload.controlMaxForceN)/R,M=Math.min(c,C)/(w*w),P=T>1e-9?-M*b*T:0,N=T>1e-9?-M*S*T:0;i.droneVel.x+=(f+P)*n,i.droneVel.z+=(y+N)*n,i.droneVel=Wy(i.droneVel,s.drone.maxSpeedMps);const U={x:i.dronePos.x,y:i.dronePos.y,z:i.dronePos.z};i.dronePos.x+=i.droneVel.x*n,i.dronePos.z+=i.droneVel.z*n,i.bounds&&aS(i.dronePos,i.droneVel,i.bounds);const O=i.terrain;O&&cS(i.dronePos,i.droneVel,U,O)};function fS(i,e){return Math.hypot(i.x-e.x,i.z-e.z)}const pS=(i=240,e=.5)=>t=>{const n=t.dronePos,s=t.trail.length?t.trail[t.trail.length-1]:void 0;(!s||fS(n,s)>=e)&&(t.trail.push({x:n.x,y:n.y,z:n.z}),t.trail.length>i&&t.trail.shift())};function mS(i){return Math.max(0,Math.min(1,i))}function Ai(i,e,t){return i+(e-i)*t}function gS(i){return i=mS(i),i*i*(3-2*i)}function pu(i){return i|=0,i=Math.imul(i^i>>>16,2146121005),i=Math.imul(i^i>>>15,2221713035),i=i^i>>>16,i>>>0}function Yn(i,e){return pu(i^pu(e))/4294967295}function mu(i,e,t,n=0){const s=Math.max(1e-6,t),r=e/s,a=Math.floor(r),o=a+1,c=Yn(i+n*1013,a),l=Yn(i+n*1013,o),h=gS(r-a);return Ai(c,l,h)}function Dd(i){return{x:Math.sin(i),z:-Math.cos(i)}}function Id(i){return Math.max(0,Math.min(1,i))}function _S(i,e){if(e<=1e-6)return 0;const t=Id(i/e);return Math.sin(Math.PI*t)}function xS(i,e){if(e<=1e-6)return 0;const t=Id(1-i/e);return t*t*(3-2*t)}function vS(i,e){return Math.hypot(i.x-e.x,i.z-e.z)}function MS(i,e,t,n){const s=mu(t.seed,i,n.varPeriodSec,1),r=mu(t.seed,i,n.varPeriodSec,2),a=n.speedMps+Ai(-n.speedJitterMps,n.speedJitterMps,s),o=n.dirRad+Ai(-n.dirJitterRad,n.dirJitterRad,r),c=Dd(o);return Ri(c.x*a,c.z*a)}function yS(i,e,t){const n=e-i.startT;if(n<0||n>i.duration)return Ri(0,0);const s=vS(t,i.center);if(s>i.radius)return Ri(0,0);const r=_S(n,i.duration),a=xS(s,i.radius),o=i.peakMps*r*a,c=Dd(i.dirRad);return Ri(c.x*o,c.z*o)}function SS(i,e,t,n,s){const r=n.wind,a=r.enabled?MS(i,e,t,r):Ri(0,0);let o=0,c=0;if(n.gust.enabled)for(const l of s){const h=yS(l,i,e);o+=h.x,c+=h.z}return Ri(a.x+o,a.z+c)}function bS(i,e,t,n,s){const r=n.gust,a=n.wind,o=Yn(t.seed+7001,s*5+0),c=Yn(t.seed+7001,s*5+1),l=Yn(t.seed+7001,s*5+2),h=Yn(t.seed+7001,s*5+3),u=Yn(t.seed+7001,s*5+4),d=r.durationSec+Ai(-r.durationJitterSec,r.durationJitterSec,o),m=r.radiusM+Ai(-r.radiusJitterM,r.radiusJitterM,c),g=r.peakMps+Ai(-r.peakJitterMps,r.peakJitterMps,l),_=a.dirRad+Ai(-r.dirJitterRad,r.dirJitterRad,h),p=u*Math.PI*2,f=r.centerJitterM*Math.sqrt(Yn(t.seed+7331,s)),y=e.x+Math.cos(p)*f,b=e.z+Math.sin(p)*f;return{id:s,startT:i,duration:Math.max(.25,d),center:{x:y,y:0,z:b},radius:Math.max(5,m),dirRad:_,peakMps:Math.max(0,g)}}function ES(i,e,t,n,s,r){const a=r.gust;if(!a.enabled){i.length=0;return}const o=Math.max(.25,a.spawnPeriodSec),c=Math.floor(t/o),l=Math.floor(e/o);c>l&&i.length<a.maxActive&&Yn(s.seed+9001,c)<.75&&i.push(bS(t,n,s,r,c));for(let h=i.length-1;h>=0;h--){const u=i[h];t>u.startT+u.duration&&i.splice(h,1)}}const TS=(i,e,t)=>{if(!e.scenario.wind.enabled){i.wind.x=0,i.wind.z=0,i.gusts.length=0;return}ES(i.gusts,i.t-t,i.t,i.dronePos,e.core,e.scenario),i.wind=SS(i.t,i.dronePos,e.core,e.scenario,i.gusts)};function Co(i,e,t){const n=i.getAttribute(t);n&&i.setAttribute(e,ke(n))}function Ld(i=document){(i.querySelectorAll?.("[data-i18n]")??[]).forEach(r=>{const a=r.getAttribute("data-i18n");a&&(r.textContent=ke(a))}),(i.querySelectorAll?.("[data-i18n-title]")??[]).forEach(r=>Co(r,"title","data-i18n-title")),(i.querySelectorAll?.("[data-i18n-aria-label]")??[]).forEach(r=>Co(r,"aria-label","data-i18n-aria-label")),(i.querySelectorAll?.("[data-i18n-alt]")??[]).forEach(r=>Co(r,"alt","data-i18n-alt"))}let hl="sim";function Gs(){return hl}function Ws(i){hl=i}function Nd(){return hl!=="sim"}function He(i){const e=document.querySelector(i);if(!e)throw new Error(`Missing DOM element: ${i}`);return e}function wS(i){return i<0?`AXIS ${Math.abs(i)}`:`BTN ${i}`}class AS{constructor(e){this.deps=e}back=He("#menu-back-gamepad");gpStatus=He("#gp-status");gpLive=He("#gp-live");gpPressed=He("#gp-pressed");gpBindings=He("#gp-bindings");gpHint=He("#gp-hint");gpSwap=He("#gp-swap-yaw-roll");gpSave=He("#gp-save");gpReset=He("#gp-reset");gpCalib=oa();gpId="gamepad";gpBindMode=null;gpRaf=null;gpIndex=null;ready=!1;bind(){this.back.addEventListener("click",()=>this.deps.openRoot()),this.gpSave.addEventListener("click",()=>this.gpDoSave()),this.gpReset.addEventListener("click",()=>this.gpDoReset()),this.gpSwap.addEventListener("change",()=>{this.gpCalib.swapYawRoll=this.gpSwap.checked,this.gpRenderBindings()})}onEnter(){this.stopLoop(),this.gpBindMode=null,this.gpIndex=null,this.ready=!1;const e=Qd();e&&(this.gpId=e.id,this.gpCalib=e.calib,this.gpSwap.checked=!!this.gpCalib.swapYawRoll,this.gpRenderBindings()),this.gpStatus.textContent=ke("gp.waiting"),this.gpLive.textContent="",this.gpPressed.textContent="",this.gpHint.textContent="",this.startLoop()}onExit(){this.gpBindMode=null,this.gpIndex=null,this.ready=!1,this.stopLoop()}onEsc(){if(!this.gpBindMode)return!1;this.gpBindMode=null;const e=this.getActiveGamepad();return e&&On(e),this.gpHint.textContent=ke("common.canceled"),this.gpRenderBindings(),!0}startLoop(){if(this.gpRaf!=null)return;const e=()=>{this.update(),this.gpRaf=requestAnimationFrame(e)};this.gpRaf=requestAnimationFrame(e)}stopLoop(){this.gpRaf!=null&&cancelAnimationFrame(this.gpRaf),this.gpRaf=null}getActiveGamepad(){const e=navigator.getGamepads?.()??[],t=Array.from(e).filter(Boolean);if(this.gpIndex!=null){const n=t.find(s=>s.index===this.gpIndex);if(n)return n}return t[0]??null}ensureReady(e){this.ready||(this.gpIndex=e.index??null,this.gpId=ef(e),this.gpCalib=Nc(this.gpId)??oa(),this.gpSwap.checked=!!this.gpCalib.swapYawRoll,On(e),this.ready=!0,this.gpHint.textContent=ke("gp.hint_click_field"),this.gpRenderBindings())}update(){const e=this.getActiveGamepad();if(!e){this.gpStatus.textContent=ke("gp.no_gamepad"),this.gpPressed.textContent=ke("gp.btn_none");return}if(this.ensureReady(e),this.gpStatus.textContent=ke("gp.detected",{id:e.id||"gamepad",axes:e.axes.length,buttons:e.buttons.length}),this.gpBindMode)if(this.gpBindMode.kind==="axis"){const s=Sl(e);s!=null&&(this.gpCalib.axis[this.gpBindMode.key]=s,this.gpBindMode=null,this.gpHint.textContent=ke("gp.axis_captured"),this.gpRenderBindings(),On(e))}else if(this.gpBindMode.kind==="btn"){const s=sf(e);s!=null&&(this.gpCalib.buttons[this.gpBindMode.key]=s,this.gpBindMode=null,this.gpHint.textContent=ke("gp.button_captured"),this.gpRenderBindings(),On(e))}else{const s=Sl(e);s!=null&&(this.gpCalib.buttons[this.gpBindMode.key]=-s,this.gpBindMode=null,this.gpHint.textContent=ke("gp.axis_captured_for_action"),this.gpRenderBindings(),On(e))}const t=[];for(let s=0;s<(e.axes?.length??0);s++)t.push(ke("gp.axis_line",{i:String(s).padStart(2," "),v:Xn(e,s).toFixed(2)}));this.gpLive.textContent=t.join(`
`);const n=[];for(let s=0;s<(e.buttons?.length??0);s++)as(e,s)&&n.push(s);this.gpPressed.textContent=n.length?ke("gp.btn_list",{list:n.join(", ")}):ke("gp.btn_none")}startBindAxis(e){const t=this.getActiveGamepad();t&&On(t),this.gpBindMode={kind:"axis",key:e},this.gpHint.textContent=ke("gp.move_axis_for",{key:e}),this.gpRenderBindings()}startBindBtn(e){const t=this.getActiveGamepad();t&&On(t),this.gpBindMode={kind:"btn",key:e},this.gpHint.textContent=ke("gp.press_button_for",{key:e}),this.gpRenderBindings()}startBindBtnAxis(e){const t=this.getActiveGamepad();t&&On(t),this.gpBindMode={kind:"btnAxis",key:e},this.gpHint.textContent=ke("gp.move_axis_for_action",{key:e}),this.gpRenderBindings()}gpRenderBindings(){const e=this.gpCalib,t=[{kind:"axis",labelKey:"gp.bind.yaw",key:"yaw",inv:"yaw"},{kind:"axis",labelKey:"gp.bind.pitch",key:"pitch",inv:"pitch"},{kind:"axis",labelKey:"gp.bind.cam_tilt",key:"camTilt",inv:"camTilt"},{kind:"axis",labelKey:"gp.bind.throttle",key:"thr",inv:"thr"},{kind:"axis",labelKey:"gp.bind.roll",key:"roll",inv:"roll"},{kind:"axis",labelKey:"gp.bind.cam_zoom",key:"camZoom",inv:"camZoom"}],n=[{kind:"btn",labelKey:"gp.bind.drop",key:"drop"},{kind:"spacer"},{kind:"btn",labelKey:"gp.bind.toggle_cam",key:"toggleCam"},{kind:"btn",labelKey:"gp.bind.restart",key:"restart"},{kind:"spacer"},{kind:"btn",labelKey:"gp.bind.toggle_dev",key:"toggleDev"}],s=this.gpBindMode?.kind==="axis"?this.gpBindMode.key:null,r=this.gpBindMode?.kind==="btn"||this.gpBindMode?.kind==="btnAxis"?this.gpBindMode.key:null,a=t.map(c=>{if(c.kind==="spacer")return'<div class="gp-row gp-row--spacer"></div>';const l=e.axis[c.key],h=e.invert[c.inv],u=s===c.key;return`
<div class="gp-row">
  <div class="gp-name">${ke(c.labelKey)}</div>

  <button
    class="gp-pill gp-pill-btn"
    data-bind-axis="${c.key}"
    style="${u?"outline:2px solid rgba(255,255,255,0.35);":""}"
  >
    AXIS ${l}
  </button>

  <button class="gp-mini" data-invert="${c.inv}">
    ${h<0?ke("gp.inverted"):ke("gp.normal")}
  </button>
</div>
`}).join(""),o=n.map(c=>{if(c.kind==="spacer")return'<div class="gp-row gp-row--spacer"></div>';const l=e.buttons[c.key],h=r===c.key;return`
<div class="gp-row">
  <div class="gp-name">${ke(c.labelKey)}</div>

  <button
    class="gp-pill gp-pill-btn"
    data-bind-btn="${c.key}"
    style="${h?"outline:2px solid rgba(255,255,255,0.35);":""}"
  >
    ${wS(l)}
  </button>

  <button class="gp-mini" data-bind-btn-axis="${c.key}">
    ${ke("gp.bind_axis")}
  </button>
</div>
`}).join("");this.gpBindings.innerHTML=a+`<div class="menu-note" style="margin-top:8px;">${ke("gp.buttons_header")}</div>`+o,this.gpBindings.querySelectorAll("[data-bind-axis]").forEach(c=>{c.addEventListener("click",()=>{const l=c.getAttribute("data-bind-axis");this.startBindAxis(l)})}),this.gpBindings.querySelectorAll("[data-bind-btn]").forEach(c=>{c.addEventListener("click",()=>{const l=c.getAttribute("data-bind-btn");this.startBindBtn(l)})}),this.gpBindings.querySelectorAll("[data-bind-btn-axis]").forEach(c=>{c.addEventListener("click",()=>{const l=c.getAttribute("data-bind-btn-axis");this.startBindBtnAxis(l)})}),this.gpBindings.querySelectorAll("[data-invert]").forEach(c=>{c.addEventListener("click",()=>{const l=c.getAttribute("data-invert");this.gpCalib.invert[l]*=-1,this.gpHint.textContent=ke("gp.invert_toggled"),this.gpRenderBindings()})})}gpDoSave(){tf(this.gpId,this.gpCalib),localStorage.setItem("kd:lastGamepadId",this.gpId),this.gpHint.textContent=ke("gp.saved")}gpDoReset(){this.gpCalib=nf(this.gpId),this.gpSwap.checked=!!this.gpCalib.swapYawRoll,this.gpBindMode=null,this.gpRenderBindings();const e=this.getActiveGamepad();e&&On(e),this.gpHint.textContent=ke("gp.reset_defaults")}}class RS{constructor(e){this.deps=e}back=He("#menu-back-keybinds");list=He("#kb-list");reset=He("#kb-reset");hint=He("#kb-hint");rebindId=null;rebindHandler=null;bind(){this.back.addEventListener("click",()=>this.deps.openRoot()),this.reset.addEventListener("click",()=>{lf(),this.render(),this.hint.textContent=ke("kb.reset_done")})}onEnter(){this.render()}onExit(){this.stopRebind()}onEsc(){return this.rebindHandler?(this.stopRebind(),this.hint.textContent=ke("common.canceled"),!0):!1}render(){const e=ha(),t=[{kind:"bind",id:"throttleUp",labelKey:"kb.bind.throttleUp"},{kind:"bind",id:"yawLeft",labelKey:"kb.bind.yawLeft"},{kind:"bind",id:"pitchUp",labelKey:"kb.bind.pitchUp"},{kind:"bind",id:"throttleDown",labelKey:"kb.bind.throttleDown"},{kind:"bind",id:"yawRight",labelKey:"kb.bind.yawRight"},{kind:"bind",id:"pitchDown",labelKey:"kb.bind.pitchDown"},{kind:"bind",id:"rollLeft",labelKey:"kb.bind.rollLeft"},{kind:"bind",id:"camTiltUp",labelKey:"kb.bind.camTiltUp"},{kind:"bind",id:"camZoomIn",labelKey:"kb.bind.camZoomIn"},{kind:"bind",id:"rollRight",labelKey:"kb.bind.rollRight"},{kind:"bind",id:"camTiltDown",labelKey:"kb.bind.camTiltDown"},{kind:"bind",id:"camZoomOut",labelKey:"kb.bind.camZoomOut"},{kind:"bind",id:"drop",labelKey:"kb.bind.drop"},{kind:"bind",id:"minimapZoomIn",labelKey:"kb.bind.minimapZoomIn"},{kind:"bind",id:"minimapZoomOut",labelKey:"kb.bind.minimapZoomOut"},{kind:"bind",id:"toggleDev",labelKey:"kb.bind.toggleDev"},{kind:"bind",id:"toggleCam",labelKey:"kb.bind.toggleCam"},{kind:"bind",id:"restart",labelKey:"kb.bind.restart"}];this.list.innerHTML="";for(const n of t){if(n.kind==="spacer"){const o=document.createElement("div");o.className="kb-row kb-row--spacer",this.list.appendChild(o);continue}const s=document.createElement("div");s.className="kb-row";const r=document.createElement("div");r.className="kb-name",r.textContent=ke(n.labelKey);const a=document.createElement("button");a.className="kb-bind",a.textContent=Tl(e[n.id]),a.addEventListener("click",()=>this.startRebind(n.id)),s.appendChild(r),s.appendChild(a),this.list.appendChild(s)}this.hint.textContent=ke("kb.hint_click_bind")}startRebind(e){this.stopRebind(),this.rebindId=e,this.hint.textContent=ke("kb.press_key_for",{id:e}),this.rebindHandler=t=>{if(t.preventDefault(),t.code==="Escape"){this.stopRebind(),this.hint.textContent=ke("common.canceled");return}const n=ha();n[e]=t.code,bu(n),this.stopRebind(),this.render(),this.hint.textContent=ke("kb.bound",{id:e,key:Tl(t.code)})},window.addEventListener("keydown",this.rebindHandler,{capture:!0})}stopRebind(){this.rebindHandler&&window.removeEventListener("keydown",this.rebindHandler,{capture:!0}),this.rebindHandler=null,this.rebindId=null}}class CS{constructor(e){this.deps=e}btnContinue=He("#menu-continue");btnRestart=He("#menu-restart");btnKeybinds=He("#menu-keybinds");btnGamepad=He("#menu-gamepad");btnSettings=He("#menu-settings");bind(){this.btnContinue.addEventListener("click",()=>this.deps.goSim()),this.btnRestart.addEventListener("click",()=>this.deps.restart()),this.btnKeybinds.addEventListener("click",()=>this.deps.setScreen("keybindings")),this.btnGamepad.addEventListener("click",()=>this.deps.setScreen("gamepad")),this.btnSettings.addEventListener("click",()=>this.deps.setScreen("settings"))}}function jr(i,e,t){return Math.max(e,Math.min(t,i))}function Ct(i,e){const t=Number(i);return Number.isFinite(t)?t:e}function gu(i){return i.toFixed(1)}function PS(i){return i in Dc?i:null}class DS{constructor(e){this.deps=e}back=He("#menu-back-settings");scenarioSelect=He("#scenario-select");zoneSelect=He("#zone-select");zonesLoaded=!1;windEnabled=He("#wind-enabled");windDir=He("#wind-dir");windMin=He("#wind-min");windMax=He("#wind-max");dirArrow=He("#wind-dir-arrow");windVariation=He("#wind-variation");windGustiness=He("#wind-gustiness");dirVal=He("#wind-dir-val");minVal=He("#wind-min-val");maxVal=He("#wind-max-val");variationVal=He("#wind-variation-val");gustinessVal=He("#wind-gustiness-val");apply=He("#settings-apply");localeSelect=He("#locale-select");bind(){this.back.addEventListener("click",()=>this.deps.openRoot());const e=()=>{this.normalizeWindUI(),this.updateLabels(),this.applyEnabledState()};this.windEnabled.addEventListener("change",e),this.windDir.addEventListener("input",e),this.windMin.addEventListener("input",e),this.windMax.addEventListener("input",e),this.windVariation.addEventListener("input",e),this.windGustiness.addEventListener("input",e),this.apply.addEventListener("click",()=>{this.normalizeWindUI();const t=PS(this.localeSelect.value);if(t){const n=Jr();t!==n&&(jd(t),document.documentElement.lang=Jr(),Ld(document))}Cd(this.scenarioSelect.value),rS(this.zoneSelect.value),sS({enabled:this.windEnabled.checked,dirDeg:Math.floor(Ct(this.windDir.value,0))%360,speedMps:Ct(this.windMin.value,0),gustMaxMps:Ct(this.windMax.value,0),variation:Ct(this.windVariation.value,0),gustiness:Ct(this.windGustiness.value,0)}),this.deps.goSim(),window.dispatchEvent(new CustomEvent("kd:restart",{detail:{reason:"settings"}}))})}onEnter(){this.fillLocale(),this.fillScenarios(),this.fillWind(),this.fillZones(),this.normalizeWindUI(),this.updateLabels(),this.applyEnabledState()}onExit(){}fillLocale(){const e=Jr();this.localeSelect.innerHTML="",Object.entries(Dc).forEach(([t,n])=>{const s=document.createElement("option");s.value=t,s.textContent=n,this.localeSelect.appendChild(s)}),this.localeSelect.value=e}fillScenarios(){this.scenarioSelect.innerHTML="";for(const e of Pa){const t=document.createElement("option");t.value=e.id,t.textContent=e.name,this.scenarioSelect.appendChild(t)}this.scenarioSelect.value=Ao().scenarioId}fillWind(){const e=Ao().windUser;this.windEnabled.checked=!!e.enabled,this.windDir.value=String(e.dirDeg??0),this.windMin.value=String(e.speedMps??0),this.windMax.value=String(e.gustMaxMps??0),this.windVariation.value=String(e.variation??0),this.windGustiness.value=String(e.gustiness??0)}async fillZones(){if(!this.zonesLoaded){this.zonesLoaded=!0,this.zoneSelect.innerHTML="";try{const e=await fetch("/maps/index.json",{cache:"no-cache"});if(!e.ok)throw new Error(`HTTP ${e.status}`);const t=await e.json();for(const[r,a]of Object.entries(t)){const o=document.createElement("option");o.value=r,o.textContent=a,this.zoneSelect.appendChild(o)}const n=Ao(),s=typeof n.zoneId=="string"?n.zoneId:"";s&&(this.zoneSelect.value=s)}catch(e){const t=document.createElement("option");t.value="",t.textContent="Failed to load maps",this.zoneSelect.appendChild(t),this.zoneSelect.disabled=!0,console.warn("Failed to load /maps/index.json",e)}}}applyEnabledState(){const e=this.windEnabled.checked;this.windDir.disabled=!e,this.windMin.disabled=!e,this.windMax.disabled=!e,this.windVariation.disabled=!e,this.windGustiness.disabled=!e;const t=e?"1":"0.5";this.dirVal.style.opacity=t,this.minVal.style.opacity=t,this.maxVal.style.opacity=t,this.variationVal.style.opacity=t,this.gustinessVal.style.opacity=t}normalizeWindUI(){let e=Math.floor(Ct(this.windDir.value,0));e=(e%360+360)%360;const t=Ct(this.windMin.min,0),n=Ct(this.windMax.max,30);let s=Ct(this.windMin.value,t),r=Ct(this.windMax.value,s);s=jr(s,t,n),r=jr(r,s,n);const a=jr(Ct(this.windVariation.value,0),0,1),o=jr(Ct(this.windGustiness.value,0),0,1);this.windDir.value=String(e),this.windMin.value=String(s),this.windMax.value=String(r),this.windVariation.value=String(a),this.windGustiness.value=String(o)}updateLabels(){const e=this.windEnabled.checked,t=Math.floor(Ct(this.windDir.value,0)),n=Ct(this.windMin.value,0),s=Ct(this.windMax.value,0),r=Ct(this.windVariation.value,0),a=Ct(this.windGustiness.value,0);this.dirVal.textContent=e?`${t}°`:"—",this.minVal.textContent=e?`${gu(n)}`:"—",this.maxVal.textContent=e?`${gu(s)}`:"—",this.variationVal.textContent=e?`${Math.round(r*100)}%`:"—",this.gustinessVal.textContent=e?`${Math.round(a*100)}%`:"—";const o=e?t:0;this.dirArrow.style.transform=`rotate(${o}deg)`,this.dirArrow.style.opacity=e?"1":"0.35"}}class IS{overlay=He("#menu-overlay");panel=He("#menu-panel");menuBtn=He("#menu-btn");fullscreenBtn=He("#fullscreen-btn");current="root";root=new CS({setScreen:e=>this.openDialog(e),openRoot:()=>this.openRoot(),goSim:()=>this.goSim(),restart:()=>this.restart()});keybinds=new RS({setScreen:e=>this.openDialog(e),openRoot:()=>this.openRoot(),goSim:()=>this.goSim(),restart:()=>this.restart()});gamepad=new AS({setScreen:e=>this.openDialog(e),openRoot:()=>this.openRoot(),goSim:()=>this.goSim(),restart:()=>this.restart()});settings=new DS({setScreen:e=>this.openDialog(e),openRoot:()=>this.openRoot(),goSim:()=>this.goSim(),restart:()=>this.restart()});constructor(){this.root.bind(),this.keybinds.bind(),this.gamepad.bind(),this.settings.bind(),this.menuBtn.addEventListener("click",()=>this.toggleRoot()),this.fullscreenBtn.addEventListener("click",()=>this.toggleFullscreen()),window.addEventListener("keydown",e=>{e.code==="Escape"&&(e.preventDefault(),this.handleEsc())}),this.syncDom()}handleEsc(){return this.current==="keybindings"&&this.keybinds.onEsc()||this.current==="gamepad"&&this.gamepad.onEsc()?void 0:Gs()==="sim"?this.openRoot():this.current!=="root"?this.openRoot():this.goSim()}toggleRoot(){Gs()==="sim"?this.openRoot():this.goSim()}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})}openRoot(){Gs()==="sim"&&Ws("menu"),this.setScreen("root"),Ws("menu"),this.syncDom()}openDialog(e){if(e==="root")return this.openRoot();Gs()==="sim"&&Ws("menu"),this.setScreen(e),Ws(e),this.syncDom()}goSim(){this.setScreen("root"),Ws("sim"),this.syncDom()}restart(){window.dispatchEvent(new CustomEvent("kd:restart",{detail:{reason:"menu"}})),this.goSim()}setScreen(e){this.current!==e&&(this.onExit(this.current),this.current=e,this.panel.dataset.screen=e,this.onEnter(e))}onEnter(e){e==="keybindings"&&this.keybinds.onEnter(),e==="gamepad"&&this.gamepad.onEnter(),e==="settings"&&this.settings.onEnter()}onExit(e){e==="keybindings"&&this.keybinds.onExit(),e==="gamepad"&&this.gamepad.onExit(),e==="settings"&&this.settings.onExit?.()}syncDom(){const e=Gs()!=="sim";this.overlay.dataset.open=e?"true":"false"}}document.documentElement.lang=Jr();Ld(document);iS();let jt=Rd();const Ud=Pd(jt),Js=new Sf({deadzone:.12,expo:.2}),LS=new vf,rn=new Kd(Ud,jt,[TS,dS,pS(300,.4),xy]),Pc=document.getElementById("splash"),Fd=document.getElementById("view3d"),ul=document.getElementById("osd"),_u=document.getElementById("dev");if(!Fd)throw new Error("#view3d canvas not found");if(!ul)throw new Error("#osd canvas not found");gf(ul);const Qn=new qy(Fd,jt);await Qn.setZone(jt.zoneId,Ud);Qn.setOnReady(()=>Pc.classList.add("splash--hide"));Qn.setCameraMode(fn.COMBAT);const cr=new ep(ul,jt);cr.setScale(1);const ms=_u?new Rf(_u,jt):null;ms&&ms.setEnabled(!1);const ya=ms?[Qn,cr,ms]:[Qn,cr];let Od=new xu(jt.core.fixedDt,i=>rn.step(i),Nd);new IS;function NS(i){const e=LS.update(i);Js.setRaw(e.raw),Js.update();const t=Js.getFrame();t.drop=e.actions.drop,rn.world.input=t,rn.world.gamepadId=e.gamepad.id,rn.world.gamepadIndex=e.gamepad.index,rn.world.rcRaw=e.gamepad.rcRaw;const n=rn.world.input;return rn.world.rc={roll:n.roll,pitch:n.pitch,yaw:n.yaw,thr:n.throttle},Qn.setCameraAxes(e.camAxes),e.actions.toggleCam&&Qn.cycleCameraMode(),e.actions.toggleDev&&ms&&ms.toggle(),e.actions.restart&&window.dispatchEvent(new CustomEvent("kd:restart",{detail:{reason:"input"}})),e}function US(i){for(let e=0;e<ya.length;e++)ya[e].render(rn.world,i)}function Bd(){for(let i=0;i<ya.length;i++)ya[i].resize()}function kd(i){const e=NS(i);cr.setControls(e),Od.tick(i),US(i),requestAnimationFrame(kd)}async function FS(){Pc.classList.remove("splash--hide"),jt=Rd(),rn.setConfig(jt),rn.world=Pd(jt),cr.setConfig(jt),Js.setRaw(ua()),Js.update(),Qn.resetCamera(),await Qn.setZone(jt.zoneId,rn.world),Od=new xu(jt.core.fixedDt,i=>rn.step(i),Nd),Pc.classList.add("splash--hide")}window.addEventListener("resize",Bd);window.addEventListener("kd:restart",()=>{FS()});Bd();requestAnimationFrame(kd);
