<template>
	<div id="uimap">
		<div class="bground">
			<div class="title">高德地图</div>
			<div class="line"></div>
			<div class="content">
				<div>高德地图，在线数据来源。</div>
				<div class="top">
					<gaode-map ref="amap" :mapWidth="mapWidth" :mapHeight="mapHeight">
						<div ref="slotDiv" slot="slotDiv" class="slotDiv">浮框</div>
					</gaode-map>
				</div>
				<div class="code-title">位置模糊搜索：</div>
				<div class="top">
					<input v-model="vmTextSerachPOI" />
					<button @click="placeSerachHandle">搜索</button>
				</div>
				<div class="code-title">marker标记：</div>
				<div class="top">
					<button title="位置经度118.087828，纬度24.462059" @click="newMarkerHandle">创建一个经纬度标记</button>
					<button @click="getMarkerHandle">获取指定ID的标记</button>
					<button @click="hideMarkerHandle">隐藏指定ID的标记</button>
					<button @click="showMarkerHandle">显示指定ID的标记</button>
					<button @click="removeMarkerHandle">移除指定ID的标记</button>
					<button @click="markerClickHandle">添加指定ID标记点击事件</button>
					<button @click="removeMarkerClickHandle">移除指定ID标记点击事件</button>
				</div>
				<div class="code-title">地域信息：</div>
				<div class="top">
					<button @click="getDistrictDataHandle">获取全国省市名称信息</button>
					<button @click="geocoderHandle">根据经纬度获取详细地址信息</button>
					<button @click="mapFromAdcodeHandle">根据adcode切换地图位置</button>
					<button @click="initDistrictHandle">初始化区域组件</button>
					<button @click="showDistrictHandle">显示区域组件</button>
					<button @click="hideDistrictHandle">隐藏区域组件</button>
				</div>
				<div class="code-title">map地图：</div>
				<div class="top">
					<button @click="mapClickHandle">添加地图点击事件</button>
					<button @click="removeMapClickHandle">移除地图点击事件</button>
					<button @click="mapFromLngLatHandle">设置指定经纬度为地图中心</button>
					<button @click="setMapZoomHandle">设置地图远近层级</button>
					<button @click="getCurCityHandle">获取地图中心点的城市信息</button>
				</div>
				<div class="top">
					<textarea rows="10" cols="100" v-model="vmText" placeholder="（信息展示）"></textarea>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import GaodeMap from '@/components/gaode-map.vue'

	export default {
		name: 'uimap',
		data() {
			return {
				mapWidth: "100%",
				mapHeight: "300px",
				vmTextSerachPOI: "",
				vmText: ""
			}
		},
		components: {
			GaodeMap
		},
		methods: {
			// 地点模糊查询
			placeSerachHandle: function() {
				this.$refs.amap.placeSerachPOI(this.vmTextSerachPOI);
			},
			// 根据经纬度创建一个标记
			newMarkerHandle: function() {
				let marker = {
					id: "myMarker",
					icon: "", // 图标
					lng: "118.087828", // 经度
					lat: "24.462059", // 纬度
					visible: true, // 显示隐藏
					draggable: false //是否可拖动
				};
				this.$refs.amap.newMarker(marker);
				this.vmText = "已在地图上创建ID为myMarker, 经度(lng)为118.087828, 纬度(lat)为24.462059 的标记";
			},
			// 获取指定ID的标记
			getMarkerHandle: function() {
				this.vmText = "标记信息： " + JSON.stringify(this.$refs.amap.getMarkerInfo("myMarker"));
			},
			// 隐藏指定ID的标记
			hideMarkerHandle: function() {
				this.$refs.amap.hideMarker("myMarker");
				this.vmText = "ID为myMarker标记已经隐藏";
			},
			// 显示指定ID的标记
			showMarkerHandle: function() {
				this.$refs.amap.showMarker("myMarker");
				this.vmText = "ID为myMarker标记已经显示，若未在地图上显示表示无此ID的标记";
			},
			// 移除指定ID的标记
			removeMarkerHandle: function() {
				this.$refs.amap.removeMarker("myMarker");
				this.vmText = "ID为myMarker标记已经从地图上移除";
			},
			// 添加指定ID的标记的点击事件
			markerClickHandle: function() {
				let _this = this;
				this.$refs.amap.addMarkerListenEvent("myMarker", "click", function(e) {
					_this.$refs.slotDiv.style.marginLeft = e.pixel.x + "px";
					_this.$refs.slotDiv.style.marginTop = e.pixel.y + "px";
					_this.$refs.slotDiv.style.display = "";
				});
				this.vmText = "ID为myMarker标记已添加点击事件，点击试试看";
			},
			// 移除指定ID标记点击事件
			removeMarkerClickHandle: function() {
				this.$refs.amap.removeMarkerListenEvent("myMarker", "click");
			},
			// 获取全国省市名称信息
			getDistrictDataHandle: function() {
				let _this = this;
				this.$refs.amap.getDistrictData(function(e) {
					console.log(e);
					_this.vmText = "已获取全国省市名称信息,已打印到开发者工具控制台。";
				});
			},
			// 根据经纬度获取详细地址信息
			geocoderHandle: function() {
				let _this = this;
				this.$refs.amap.geocoder("118.087828", "24.462059", function(e) {
					_this.vmText = "经度118.087828，纬度24.462059详细地址为： " + JSON.stringify(e);
				});
			},
			// 根据adcode切换地图位置
			mapFromAdcodeHandle: function() {
				this.$refs.amap.mapFromAdcode("010");
				this.vmText = "adcode为高德地图对位置的唯一表示code，已跳转至code为010，北京";
			},
			// 初始化区域组件
			initDistrictHandle: function() {
				let _this = this;
				this.$refs.amap.initDistrict(0, 0, function(e) {
					_this.$refs.amap.districtUpdate();
				});
			},
			// 显示区域组件
			showDistrictHandle: function() {
				this.$refs.amap.districtShow();
			},
			// 隐藏区域组件
			hideDistrictHandle: function() {
				this.$refs.amap.districtHide();
			},
			// 添加地图点击事件
			mapClickHandle: function() {
				let _this = this;
				_this.$refs.amap.mapMoveEndGetCityEvent(function(e) {});
				_this.$refs.amap.addMapListenEvent("click", function(e) {
					_this.vmText = "点击地图，获取相应点位置信息：" + JSON.stringify(e.lnglat);
				});
				_this.vmText = "点击地图，获取相应点位置信息";
			},
			// 移除地图点击事件
			removeMapClickHandle: function() {
				this.$refs.amap.removeMapListenEvent("click");
				_this.vmText = "地图点击事件已经移除";
			},
			// 设置指定经纬度为地图中心
			mapFromLngLatHandle() {
				this.$refs.amap.mapFromLngLat("118.087828", "24.462059");
				this.vmText = "地图中心点经纬度为: 118.087828, 24.462059";
			},
			// 设置地图远近层级
			setMapZoomHandle() {
				this.$refs.amap.setMapZoom(10);
				this.vmText = "重置了地图远近层级";
			},
			// 获取地图中心点的城市信息
			getCurCityHandle() {
				let _this = this;
				this.$refs.amap.getCurCity(function(e) {
					_this.vmText = "当前地图中心点城市为：" + JSON.stringify(e);;
				});
			}
		},
		mounted() {
			this.$refs.slotDiv.style.display = "none";
		},
		watch: {}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#uimap {
		padding: 30px;
	}
	
	.code-title {
		margin-top: 10px;
		font-weight: bold;
	}
	
	.md {
		color: white;
		background-color: black;
		padding: 10px;
		margin-top: 10px;
		border-radius: 3px;
		font-size: 16px;
		width: 1000px;
	}
	
	.bground {
		width: 100%;
		height: 100%;
		min-height: 500px;
		background-color: #fff;
		border-radius: 5px;
		.title {
			font-size: 36px;
		}
		.line {
			margin-top: 20px;
			border-bottom: solid 1px #E4E4E4;
		}
		.content {
			margin-top: 10px;
		}
	}
	
	.top {
		margin-top: 10px;
	}
	
	.slotDiv {
		width: 100px;
		height: 50px;
		background-color: white;
		border: solid 1px gray;
		border-radius: 2px;
		text-align: center;
		line-height: 48px;
	}
</style>