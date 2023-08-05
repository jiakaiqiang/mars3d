<template>
  <div>
    <div id="mars3dContainer" class="mars3d-container"></div>
  </div>
</template>
<script>
import Cesium from 'mars3d-cesium'
export default {
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      var mapOptions = {
        scene: {
          center: { lat: 39.904128, lng: 116.391643, alt: 1054, heading: 0, pitch: -39 },
          showSun: true,
          showMoon: true,
          showSkyBox: true,
          showSkyAtmosphere: false, // 关闭球周边的白色轮廓 map.scene.skyAtmosphere = false
          fog: true,
          fxaa: true,
          globe: {
            showGroundAtmosphere: false, // 关闭大气（球表面白蒙蒙的效果）
            depthTestAgainstTerrain: false,
            baseColor: "#546a53"
          },
          cameraController: {
            zoomFactor: 3.0,
            minimumZoomDistance: 1,
            maximumZoomDistance: 50000000,
            enableRotate: true,
            enableZoom: true
          }
        },
        layers:[
        {
      name: "合肥教育点",
      type: "wfs",
      url: "//server.mars3d.cn/geoserver/mars/wfs",
      layer: "mars:hfjy",
      parameters: {
        // 支持所有wfs的参数
        maxFeatures: 500
      },
      minimumLevel: 13,
      debuggerTileInfo: false,
      symbol: {
        type: "billboardP",
        styleOptions: {
          image: "img/marker/mark-red.png",
        
          scaleByDistance: true,
          scaleByDistance_far: 20000,
          scaleByDistance_farValue: 0.6,
          scaleByDistance_near: 1000,
          scaleByDistance_nearValue: 1,
          clampToGround: true,
          label: {
            text: "{项目名称}",
            font_size: 15,
            color: "#ffffff",
            outline: true,
            outlineColor: "#000000",
            pixelOffsetY: -30,
            distanceDisplayCondition: true,
            distanceDisplayCondition_far: 2000,
            distanceDisplayCondition_near: 0
          }
        }
      },
      popup: "all",
      show: true
    }
        ],

        control: {
          infoBox: true, //信息框
          selectionIndicator: true, //选择框
          vrButton: false, //vr模式按钮
          compass: {
            rotation: true,
            top: '150px',
            right: '10px'

          },
          locationBar: {
            fps: true,
            template: '[中文][坐标位置]{lng}{lat}{alt}{pitch}'
          },
          ///比例尺
          distanceLegend: {
            left: '0px',
            bottom: '40px',

          },
          // //时钟控制
          // clockAnimate:{
          //   format:'yyyy-MM-dd',

          // },
          animation: false, //动画部件按钮（左下角），控制视图动画的播放速度
          timeline: false, //时间线（下侧）,指示当前时间，并允许用户跳到特定的时间
          geocoder: false, //POI查询按钮,
          baseLayerPicker: true, // basemaps底图切换按钮
          homeButton: true, // 视角复位按钮
          sceneModePicker: true, // 二三维切换按钮
          navigationHelpButton: false, // 帮助按钮
          fullscreenButton: true, // 全屏按钮
          contextmenu: { hasDefault: true } // 右键菜单
        },
        terrain: {
          url: "//data.mars3d.cn/terrain",
          show: true
        },
        basemaps: [
          {
            name: "天地图影像",
            icon: "img/basemaps/tdt_img.png",
            type: "tdt",
            layer: "img_d",
            show: true
          }
        ]
      }
      // eslint-disable-next-line no-undef
      var map = new mars3d.Map("mars3dContainer", mapOptions); //支持的参数请看API文档：http://mars3d.cn/api/Map.html
      const position = [116.391643, 39.904128]
      map.openPopup(position, "我是地图上直接弹出的")
      map.openSmallTooltip(position, "测试小提示")
      // 构造鹰眼地图
      // eslint-disable-next-line no-undef
      const overviewMap = new mars3d.control.OverviewMap({
        basemap: {
          name: "天地图电子",
          type: "group",
          layers: [
            { name: "底图", type: "tdt", layer: "vec_d" },
            { name: "注记", type: "tdt", layer: "vec_z" }
          ]
        },
        rectangle: {
          color: "#fecd78",
          opacity: 0.2,
          outline: 1,
          outlineColor: "#ff7800"
        },
        style: {
          left: "5px",
          top: "5px",
          width: "200px",
          height: "150px"
        }
      })
      map.addControl(overviewMap)


// eslint-disable-next-line no-undef
map.terrainProvider = mars3d.LayerUtil.createTerrainProvider({
  type: 'arcgis',
  url: 'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer',
})
//相机配置
// eslint-disable-next-line no-undef
map.on(mars3d.EventType.cameraChanged, map_cameraChangedHandler, this)
function map_cameraChangedHandler(event){
  console.log(event,'-wefwf')
}
// eslint-disable-next-line no-undef
map.on(mars3d.EventType.click,(event)=>{
  console.log('测试点击事件',event)
},this)


//矢量数据图层
// eslint-disable-next-line no-undef
var wfsLayer = new mars3d.layer.ArcGisWfsLayer(  {
      name: "合肥教育点",
      type: "wfs",
      url: "//server.mars3d.cn/geoserver/mars/wfs",
      layer: "mars:hfjy",
      parameters: {
        // 支持所有wfs的参数
        maxFeatures: 500
      },
      minimumLevel: 13,
      debuggerTileInfo: false,
      symbol: {
        type: "billboardP",
        styleOptions: {
          image: "img/marker/mark-red.png",
          verticalOrigin: this.Cesium.VerticalOrigin.BOTTOM,
          scaleByDistance: true,
          scaleByDistance_far: 20000,
          scaleByDistance_farValue: 0.6,
          scaleByDistance_near: 1000,
          scaleByDistance_nearValue: 1,
          clampToGround: true,
          label: {
            text: "{项目名称}",
            font_size: 15,
            color: "#ffffff",
            outline: true,
            outlineColor: "#000000",
            pixelOffsetY: -30,
            distanceDisplayCondition: true,
            distanceDisplayCondition_far: 2000,
            distanceDisplayCondition_near: 0
          }
        }
      },
      popup: "all",
      show: true
    }
    )
map.addLayer(wfsLayer)

//添加wfs 图层





      console.log(map, "map");


    }
  }
}
</script>
<style></style>