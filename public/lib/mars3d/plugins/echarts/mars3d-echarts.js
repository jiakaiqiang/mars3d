/**
 * Mars3D平台插件,结合echarts可视化功能插件  mars3d-echarts
 *
 * 版本信息：v3.5.15
 * 编译日期：2023-07-11 17:33:29
 * 版权所有：Copyright by 火星科技  http://mars3d.cn
 * 使用单位：免费公开版 ，2023-03-17
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, (window.echarts || require('echarts')), (window.mars3d || require('mars3d'))) :
  typeof define === 'function' && define.amd ? define(['exports', 'echarts', 'mars3d'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["mars3d-echarts"] = {}, global.echarts, global.mars3d));
})(this, (function (exports, echarts, mars3d) { 
'use strict';const _0x5e4183=_0x5577;(function(_0x106789,_0x9275f0){const _0x2f8d25={_0x40ba97:0x9e,_0x469ed9:0xa8,_0x4b19ae:0xb3,_0x12b2da:0xc5,_0x123efe:0x89,_0x4e8aa7:0xab,_0x451e55:0xb1},_0x544f64=_0x5577,_0x1cdb04=_0x106789();while(!![]){try{const _0xf7c4b1=parseInt(_0x544f64(_0x2f8d25._0x40ba97))/0x1*(parseInt(_0x544f64(0xc3))/0x2)+-parseInt(_0x544f64(0xbe))/0x3*(parseInt(_0x544f64(_0x2f8d25._0x469ed9))/0x4)+-parseInt(_0x544f64(0xa9))/0x5*(-parseInt(_0x544f64(_0x2f8d25._0x4b19ae))/0x6)+-parseInt(_0x544f64(_0x2f8d25._0x12b2da))/0x7*(-parseInt(_0x544f64(0xc7))/0x8)+parseInt(_0x544f64(_0x2f8d25._0x123efe))/0x9*(-parseInt(_0x544f64(0xa7))/0xa)+-parseInt(_0x544f64(_0x2f8d25._0x4e8aa7))/0xb+parseInt(_0x544f64(_0x2f8d25._0x451e55))/0xc;if(_0xf7c4b1===_0x9275f0)break;else _0x1cdb04['push'](_0x1cdb04['shift']());}catch(_0x2c509e){_0x1cdb04['push'](_0x1cdb04['shift']());}}}(_0x2f70,0xea986));function _interopNamespace(_0x44bef2){const _0x4f3db4={_0x4e248d:0x88},_0x5e5520=_0x5577;if(_0x44bef2&&_0x44bef2[_0x5e5520(_0x4f3db4._0x4e248d)])return _0x44bef2;var _0x5d966b=Object['create'](null);return _0x44bef2&&Object[_0x5e5520(0xb4)](_0x44bef2)[_0x5e5520(0x92)](function(_0x21eb68){if(_0x21eb68!=='default'){var _0x48744e=Object['getOwnPropertyDescriptor'](_0x44bef2,_0x21eb68);Object['defineProperty'](_0x5d966b,_0x21eb68,_0x48744e['get']?_0x48744e:{'enumerable':!![],'get':function(){return _0x44bef2[_0x21eb68];}});}}),_0x5d966b['default']=_0x44bef2,_0x5d966b;}var echarts__namespace=_interopNamespace(echarts),mars3d__namespace=_interopNamespace(mars3d);const Cesium$1=mars3d__namespace['Cesium'];function _0x2f70(){const _0x52e8e8=['mars3dMap','options','_map','__esModule','27JGoBGF','eachComponent','hidden','EchartsLayer','defineProperty','mars3d-echarts','lng','api','getWidth','forEach','style','layer','scheduler','canvas','_createChartOverlay','_removedHook','_pointerEvents','clear','_mars3d_scene','0px','height','3117BiZZHM','coords','_echartsContainer','_addedHook','mars3dMapRoam','create','zIndex','setEchartsOption','coordinateSystem','2254270jzBfyu','4VqiXxc','1475YiQYYa','setMapOffset','17909716kIEWPc','graphic','SceneMode','clampToGround','getHeight','ecInstance','4216584QoYKCm','scene','15864MjmuxT','keys','register','clientHeight','visible','extendComponentView','off','请引入\x20echarts\x20库\x20','BoundingRect','dispose','echartsDepthTest','577890NnsTXs','clientWidth','div','dispatchAction','_mapOffset','818gjKfAd','_echartsInstance','3681139xLcuwt','resize','16SPUbpE','depthTest','hasOwnProperty','absolute'];_0x2f70=function(){return _0x52e8e8;};return _0x2f70();}class CompositeCoordinateSystem{constructor(_0x1da9f0,_0x3bf0c4){this['_mars3d_scene']=_0x1da9f0,this['dimensions']=['lng','lat'],this['_mapOffset']=[0x0,0x0],this['_api']=_0x3bf0c4;}['setMapOffset'](_0x21c78c){const _0x5983aa={_0x270623:0xc2},_0x130082=_0x5577;this[_0x130082(_0x5983aa._0x270623)]=_0x21c78c;}['getBMap'](){return this['_mars3d_scene'];}['dataToPoint'](_0x2718f9){const _0x4d6308={_0x585200:0xaf,_0x3b74ea:0xad},_0x3e9423=_0x5577,_0x305fa6=this['_mars3d_scene'],_0x1f2417=[NaN,NaN];let _0x56762e=_0x305fa6['echartsFixedHeight'];_0x305fa6['echartsAutoHeight']&&(_0x56762e=_0x305fa6['globe'][_0x3e9423(_0x4d6308._0x585200)](Cesium$1['Cartographic']['fromDegrees'](_0x2718f9[0x0],_0x2718f9[0x1])));const _0x2cc9a9=Cesium$1['Cartesian3']['fromDegrees'](_0x2718f9[0x0],_0x2718f9[0x1],_0x56762e);if(!_0x2cc9a9)return _0x1f2417;const _0x16da69=Cesium$1['SceneTransforms']['wgs84ToWindowCoordinates'](_0x305fa6,_0x2cc9a9);if(!_0x16da69)return _0x1f2417;if(_0x305fa6[_0x3e9423(0xbd)]&&_0x305fa6['mode']===Cesium$1[_0x3e9423(_0x4d6308._0x3b74ea)]['SCENE3D']){const _0xeb75c2=new Cesium$1['EllipsoidalOccluder'](_0x305fa6['globe']['ellipsoid'],_0x305fa6['camera']['positionWC']),_0x2cc8eb=_0xeb75c2['isPointVisible'](_0x2cc9a9);if(!_0x2cc8eb)return _0x1f2417;}return[_0x16da69['x']-this[_0x3e9423(0xc2)][0x0],_0x16da69['y']-this[_0x3e9423(0xc2)][0x1]];}['getViewRect'](){const _0x5c90e3=_0x5577,_0x2e4760=this['_api'];return new echarts__namespace[(_0x5c90e3(0xac))][(_0x5c90e3(0xbb))](0x0,0x0,_0x2e4760[_0x5c90e3(0x91)](),_0x2e4760[_0x5c90e3(0xaf)]());}['getRoamTransform'](){const _0x2c6c8d={_0x3d141e:0xa3},_0x489dfa=_0x5577;return echarts__namespace['matrix'][_0x489dfa(_0x2c6c8d._0x3d141e)]();}}CompositeCoordinateSystem['dimensions']=[_0x5e4183(0x8f),'lat'],CompositeCoordinateSystem[_0x5e4183(0xa3)]=function(_0xf44a62,_0x3eb511){const _0x2f40b4={_0x2fc17c:0x9b,_0x42ccaa:0x85},_0x18be92={_0x5ddd4c:0xa6},_0x59ff64={_0x42d187:0xa6},_0x15e180=_0x5e4183;let _0x123e7c;const _0xbf32ba=_0xf44a62['scheduler'][_0x15e180(0xb0)][_0x15e180(_0x2f40b4._0x2fc17c)];_0xf44a62[_0x15e180(0x8a)](_0x15e180(_0x2f40b4._0x42ccaa),function(_0x3cf127){const _0x488327=_0x15e180,_0x1064e7=_0x3eb511['getZr']()['painter'];if(!_0x1064e7)return;!_0x123e7c&&(_0x123e7c=new CompositeCoordinateSystem(_0xbf32ba,_0x3eb511)),_0x3cf127[_0x488327(_0x59ff64._0x42d187)]=_0x123e7c,_0x123e7c[_0x488327(0xaa)](_0x3cf127['__mapOffset']||[0x0,0x0]);}),_0xf44a62['eachSeries'](function(_0x2747e2){const _0x3dd19b=_0x15e180;_0x2747e2['get'](_0x3dd19b(0xa6))==='mars3dMap'&&(!_0x123e7c&&(_0x123e7c=new CompositeCoordinateSystem(_0xbf32ba,_0x3eb511)),_0x2747e2[_0x3dd19b(_0x18be92._0x5ddd4c)]=_0x123e7c);});};if(echarts__namespace!==null&&echarts__namespace!==void 0x0&&echarts__namespace['init'])echarts__namespace['registerCoordinateSystem']('mars3dMap',CompositeCoordinateSystem),echarts__namespace['registerAction']({'type':'mars3dMapRoam','event':_0x5e4183(0xa2),'update':'updateLayout'},function(_0x33d2ca,_0x2d043d){}),echarts__namespace['extendComponentModel']({'type':_0x5e4183(0x85),'getBMap':function(){return this['_mars3d_scene'];},'defaultOption':{'roam':![]}}),echarts__namespace[_0x5e4183(0xb8)]({'type':_0x5e4183(0x85),'init':function(_0x293020,_0x42d8ab){const _0xd68dc7={_0x3334c2:0x90},_0x539135=_0x5e4183;this[_0x539135(_0xd68dc7._0x3334c2)]=_0x42d8ab,this['scene']=_0x293020[_0x539135(0x95)]['ecInstance']['_mars3d_scene'],this['scene']['postRender']['addEventListener'](this['moveHandler'],this);},'moveHandler':function(_0x5eaf44,_0x378df0){const _0x497993={_0x391971:0xc1},_0x2b27a0=_0x5e4183;this['api'][_0x2b27a0(_0x497993._0x391971)]({'type':'mars3dMapRoam'});},'render':function(_0x1dea3f,_0x582eb5,_0x489860){},'dispose':function(_0x13449c){const _0x459d79={_0x4fd4ca:0xb2},_0x4db68d=_0x5e4183;this[_0x4db68d(_0x459d79._0x4fd4ca)]['postRender']['removeEventListener'](this['moveHandler'],this);}});else throw new Error(_0x5e4183(0xba));const Cesium=mars3d__namespace['Cesium'],BaseLayer=mars3d__namespace[_0x5e4183(0x94)]['BaseLayer'];function _0x5577(_0x4475ca,_0x2a8035){const _0x2f70f4=_0x2f70();return _0x5577=function(_0x5577f3,_0x3b503a){_0x5577f3=_0x5577f3-0x83;let _0xe3deb2=_0x2f70f4[_0x5577f3];return _0xe3deb2;},_0x5577(_0x4475ca,_0x2a8035);}class EchartsLayer extends BaseLayer{constructor(_0x540cce={}){const _0x2acb6a={_0x192949:0x86},_0x32308b=_0x5e4183;super(_0x540cce),this['_pointerEvents']=this[_0x32308b(_0x2acb6a._0x192949)]['pointerEvents'];}get[_0x5e4183(0x94)](){return this['_echartsInstance'];}get['pointerEvents'](){const _0x4e2b3c={_0x53e469:0x99},_0x515159=_0x5e4183;return this[_0x515159(_0x4e2b3c._0x53e469)];}set['pointerEvents'](_0x1b027c){const _0x376d06={_0x10ec40:0xa0},_0x5d45ce=_0x5e4183;this['_pointerEvents']=_0x1b027c,this[_0x5d45ce(_0x376d06._0x10ec40)]&&(_0x1b027c?this['_echartsContainer'][_0x5d45ce(0x93)]['pointerEvents']='all':this['_echartsContainer']['style']['pointerEvents']='none');}['_setOptionsHook'](_0x279738,_0x4623d7){this['setEchartsOption'](_0x279738);}['_showHook'](_0x385fa9){const _0x5bdfaa={_0x41231b:0x8b},_0x41df66=_0x5e4183;_0x385fa9?this['_echartsContainer']['style']['visibility']=_0x41df66(0xb7):this['_echartsContainer'][_0x41df66(0x93)]['visibility']=_0x41df66(_0x5bdfaa._0x41231b);}['_mountedHook'](){const _0x4a2f8d={_0x3c68d5:0xc8,_0xb61b49:0xae,_0x4d6230:0xb2},_0x54e772=_0x5e4183;this[_0x54e772(0x87)]['scene'][_0x54e772(0xbd)]=this['options'][_0x54e772(_0x4a2f8d._0x3c68d5)]??!![],this['_map']['scene']['echartsAutoHeight']=this['options'][_0x54e772(_0x4a2f8d._0xb61b49)]??![],this[_0x54e772(0x87)][_0x54e772(_0x4a2f8d._0x4d6230)]['echartsFixedHeight']=this['options']['fixedHeight']??0x0;}[_0x5e4183(0xa1)](){const _0x2d6619={_0x41bc37:0x97,_0x29bbbb:0xa0},_0x5b1b5c=_0x5e4183;this['_echartsContainer']=this[_0x5b1b5c(_0x2d6619._0x41bc37)](),this['_echartsInstance']=echarts__namespace['init'](this[_0x5b1b5c(_0x2d6619._0x29bbbb)]),this['_echartsInstance']['_mars3d_scene']=this['_map']['scene'],this['setEchartsOption'](this[_0x5b1b5c(0x86)]);}[_0x5e4183(0x98)](){const _0x75c747=_0x5e4183;this['_echartsInstance']&&(this['_echartsInstance'][_0x75c747(0x9a)](),this['_echartsInstance'][_0x75c747(0xbc)](),delete this['_echartsInstance']),this['_echartsContainer']&&(this['_map']['container']['removeChild'](this['_echartsContainer']),delete this['_echartsContainer']);}['_createChartOverlay'](){const _0x1e771f={_0x202f8c:0xbf,_0x578fcc:0x96},_0x5d53de=_0x5e4183,_0x2e1f34=mars3d__namespace['DomUtil']['create'](_0x5d53de(0xc0),_0x5d53de(0x8e),this['_map']['container']);return _0x2e1f34['id']=this['id'],_0x2e1f34['style']['position']=_0x5d53de(0x84),_0x2e1f34['style']['top']=_0x5d53de(0x9c),_0x2e1f34['style']['left']='0px',_0x2e1f34['style']['width']=this['_map']['scene']['canvas'][_0x5d53de(_0x1e771f._0x202f8c)]+'px',_0x2e1f34['style']['height']=this[_0x5d53de(0x87)]['scene'][_0x5d53de(_0x1e771f._0x578fcc)][_0x5d53de(0xb6)]+'px',_0x2e1f34['style']['pointerEvents']=this['_pointerEvents']?'all':'none',_0x2e1f34['style'][_0x5d53de(0xa4)]=this['options']['zIndex']??0x9,_0x2e1f34;}['resize'](){const _0x5b64de={_0x50991e:0xc4,_0x2d67:0xb2,_0x29e252:0x87,_0x50b845:0xc6},_0x18f8c1=_0x5e4183;if(!this[_0x18f8c1(_0x5b64de._0x50991e)])return;this['_echartsContainer']['style']['width']=this['_map'][_0x18f8c1(_0x5b64de._0x2d67)][_0x18f8c1(0x96)]['clientWidth']+'px',this['_echartsContainer'][_0x18f8c1(0x93)][_0x18f8c1(0x9d)]=this[_0x18f8c1(_0x5b64de._0x29e252)]['scene']['canvas']['clientHeight']+'px',this[_0x18f8c1(_0x5b64de._0x50991e)][_0x18f8c1(_0x5b64de._0x50b845)]();}[_0x5e4183(0xa5)](_0x3ada2e,_0x7275ab,_0x1753a4){const _0x2ac8ff={_0x1f08f5:0x85},_0x56810c=_0x5e4183;this['_echartsInstance']&&(_0x3ada2e['mars3dMap']=_0x3ada2e[_0x56810c(_0x2ac8ff._0x1f08f5)]||{},this['_echartsInstance']['setOption'](_0x3ada2e,_0x7275ab,_0x1753a4));}['getRectangle'](_0x499d6c){const _0x410fc3={_0x3f1b82:0x92};let _0xe1b52d,_0xe1a957,_0x531ccd,_0x4c986c;function _0x2ad5f2(_0x5bd91c){if(!Array['isArray'](_0x5bd91c))return;const _0x3a6e00=_0x5bd91c[0x0]||0x0,_0x6e4cc0=_0x5bd91c[0x1]||0x0;_0x3a6e00!==0x0&&_0x6e4cc0!==0x0&&(_0xe1b52d===undefined?(_0xe1b52d=_0x3a6e00,_0xe1a957=_0x3a6e00,_0x531ccd=_0x6e4cc0,_0x4c986c=_0x6e4cc0):(_0xe1b52d=Math['min'](_0xe1b52d,_0x3a6e00),_0xe1a957=Math['max'](_0xe1a957,_0x3a6e00),_0x531ccd=Math['min'](_0x531ccd,_0x6e4cc0),_0x4c986c=Math['max'](_0x4c986c,_0x6e4cc0)));}const _0x493b37=this['options']['series'];_0x493b37&&_0x493b37['forEach'](_0x466cec=>{const _0x5ea79e=_0x5577;_0x466cec['data']&&_0x466cec['data'][_0x5ea79e(_0x410fc3._0x3f1b82)](_0x22078e=>{const _0x1f7c9c=_0x5ea79e;if(_0x22078e['value'])_0x2ad5f2(_0x22078e['value']);else _0x22078e['coords']&&_0x22078e[_0x1f7c9c(0x9f)]['forEach'](_0x3eeefa=>{_0x2ad5f2(_0x3eeefa);});});});if(_0xe1b52d===0x0&&_0x531ccd===0x0&&_0xe1a957===0x0&&_0x4c986c===0x0)return null;return _0x499d6c!==null&&_0x499d6c!==void 0x0&&_0x499d6c['isFormat']?{'xmin':_0xe1b52d,'xmax':_0xe1a957,'ymin':_0x531ccd,'ymax':_0x4c986c}:Cesium['Rectangle']['fromDegrees'](_0xe1b52d,_0x531ccd,_0xe1a957,_0x4c986c);}['on'](_0x45c634,_0x31f583,_0x568504){const _0x304691=_0x5e4183;return this[_0x304691(0xc4)]['on'](_0x45c634,_0x31f583,_0x568504||this),this;}['onByQuery'](_0x34aa79,_0x53f97f,_0x4116bc,_0xbccef){return this['_echartsInstance']['on'](_0x34aa79,_0x53f97f,_0x4116bc,_0xbccef||this),this;}[_0x5e4183(0xb9)](_0x1599a8,_0x198bdd,_0x44b371){return this['_echartsInstance']['off'](_0x1599a8,_0x198bdd,_0x44b371||this),this;}}mars3d__namespace['LayerUtil'][_0x5e4183(0xb5)]('echarts',EchartsLayer),mars3d__namespace['layer'][_0x5e4183(0x8c)]=EchartsLayer,mars3d__namespace['echarts']=echarts__namespace,exports['EchartsLayer']=EchartsLayer,Object[_0x5e4183(0xb4)](echarts)[_0x5e4183(0x92)](function(_0x286019){const _0x29a6eb={_0x5a1035:0x83,_0x1c5d4e:0x8d},_0x53d351=_0x5e4183;if(_0x286019!=='default'&&!exports[_0x53d351(_0x29a6eb._0x5a1035)](_0x286019))Object[_0x53d351(_0x29a6eb._0x1c5d4e)](exports,_0x286019,{'enumerable':!![],'get':function(){return echarts[_0x286019];}});}),Object[_0x5e4183(0x8d)](exports,_0x5e4183(0x88),{'value':!![]});
}));
