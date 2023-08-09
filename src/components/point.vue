<script>
import {defineComponent} from 'vue'
import * as Cesium from 'mars3d-cesium'
let geoJsonLayer
export default defineComponent({
  name: "point",
  data() {
    return {}
  },
  mounted() {
    this.initMap()

  },
  methods: {
    initMap() {
      let mapOptions = {

        scene: {
          // center: {lat: 39.904128, lng: 116.391643, alt: 1054, heading: 0, pitch: -39},
          center: {lat: 31.722018, lng: 117.251926, alt: 8378, heading: 0, pitch: -33},

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
          contextmenu: {hasDefault: true} // 右键菜单
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
      let map = new mars3d.Map("mars3dContainer1", mapOptions);
      this.map = map
      geoJsonLayer = new mars3d.layer.GeoJsonLayer({
        name: "体育设施点",
        url: "//data.mars3d.cn/file/geojson/hfty-point.json",
        symbol: {
          type: "billboardp",
          styleOptions: {
            image: "/img/marker/red-point.png",
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,

          }
        },
        //popup: [{field:"项目名称",name:"测试"}]
      })



      map.addLayer(geoJsonLayer)
      this.addDemoGraphic4()
      // 创建矢量数据图层
      this.map.graphicLayer.on(mars3d.EventType.drawCreated, (event)=>{
        console.log(event,'fewfwe')
      })


    },
    drawPolygon(clampToGround) {
      this.map.graphicLayer.startDraw({
        type: "polygon",
        style: {
          color: clampToGround ? "#ffff00" : "#3388ff",
          opacity: 0.5,
          outline: true,
          outlineColor: "#ffffff",
          outlineWidth: 2.0,
          clampToGround: clampToGround,
        },
        success:(data)=>{
          console.log(data,'data')
          localStorage.setItem('key',JSON.stringify(data))
        }
      });

    },

    //绘制已有的数据
    handleDarw(){
      //创建图层加到map 中
      this.lary  =  new mars3d.layer.GraphicLayer({
        data:JSON.parse(localStorage.getItem('key'))
      })
      this.map.addLayer(this.lary)
    },
    //绘制飞机

  addDemoGraphic4(graphicLayer) {
  const propertyFJ = this.getSampledPositionProperty([
    [117.341348, 31.875522, 500],
    [117.341432, 31.871815, 500],
    [117.347965, 31.866654, 500],
    [117.352154, 31.855531, 500],
    [117.341181, 31.85326, 500],
    [117.334609, 31.856601, 500],
    [117.337695, 31.866505, 500],
    [117.345018, 31.870448, 500],
    [117.345028, 31.870436, 500]
  ])

  // 飞机
  const graphicModel = new mars3d.graphic.ModelEntity({
    position: propertyFJ,
    orientation: new Cesium.VelocityOrientationProperty(propertyFJ),
    style: {
      url: "//data.mars3d.cn/gltf/mars/wrj.glb",
      scale: 0.1,
      minimumPixelSize: 20,

      distanceDisplayCondition: true,
      distanceDisplayCondition_near: 0,
      distanceDisplayCondition_far: 8000,
      distanceDisplayBillboard: {
        // 当视角距离超过一定距离(distanceDisplayCondition_far定义的) 后显示为图标对象的样式
        image: "img/icon/huojian.svg",
        scale: 0.5,
        alignedAxis: new Cesium.VelocityVectorProperty(propertyFJ, true)
      }
    },
    path: {
      width: 2,
      leadTime: 1, // 不显示前方路线
      color: "#00ffff"
    },
    attr: { remark: "示例4" },
    hasEdit: false
  })
    let graphicLayer1 = new mars3d.layer.GraphicLayer()
    this.map.addLayer(graphicLayer1)
  graphicLayer1.addGraphic(graphicModel)
},

// 计算演示的SampledPositionProperty轨迹
 getSampledPositionProperty(points) {
  const property = new Cesium.SampledPositionProperty()
  property.forwardExtrapolationType = Cesium.ExtrapolationType.HOLD

  const start = this.map.clock.currentTime
  const positions = mars3d.LngLatArray.toCartesians(points)
  for (let i = 0; i < positions.length; i++) {
    const time = Cesium.JulianDate.addSeconds(start, i * 20, new Cesium.JulianDate())
    const position = positions[i]
    property.addSample(time, position)
  }
  return property
},
    // 加载警车
    addDemoGraphic2() {

  const graphic = new mars3d.graphic.ModelEntity({
    name: "警车",
    position: [117.30668309819539, 31.863223786604223, 0],
    style: {
      url: "//data.mars3d.cn/gltf/mars/jingche/jingche.gltf",
      scale: 20,
      minimumPixelSize: 50,
      heading: 90,

      distanceDisplayCondition: true,
      distanceDisplayCondition_near: 0,
      distanceDisplayCondition_far: 10000,
      distanceDisplayPoint: {
        // 当视角距离超过一定距离(distanceDisplayCondition_far定义的) 后显示为点对象的样式
        color: "#00ff00",
        pixelSize: 8
      },

      label: {
        text: "我是原始的",
        font_size: 18,
        color: "#ffffff",
        pixelOffsetY: -50,
        distanceDisplayCondition: true,
        distanceDisplayCondition_far: 10000,
        distanceDisplayCondition_near: 0
      }
    },
    attr: { remark: "示例1" }
  })
      let graphicLayer1 = new mars3d.layer.GraphicLayer()
      this.map.addLayer(graphicLayer1)
      graphicLayer1.addGraphic(graphic)



},
    //清楚所有的绘制
    clearDarw(){
      //取消绘制的图像
      this.map.graphicLayer.clear()
      this.map.removeLayer(this.lary)
      //取消所有的绘制的图形
    }

  }
})
</script>

<template>
  <div>
    <div id="mars3dContainer1" class="mars3d-container"></div>
    <div style="background:pink;height:100px;width:100px;position: absolute;top:20px;right:20px">
      <span>测试绘制</span>
      <button @click="drawPolygon">开始绘制</button>
      <button @click="handleDarw">绘制</button>
      <button @click="clearDarw">取消绘制</button>
      <button @click="addDemoGraphic2">绘制警车</button>
    </div>
  </div>
</template>

<style scoped>

</style>