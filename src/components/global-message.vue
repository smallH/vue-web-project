<!--
	组件名称：全局消息状态组件（只需全局初始化一次即可）
	作者：hzp
	
	参数格式：
	@props
		(String) text 消息
	用法：
		this.$globalConfirm("该记录已经删除！","1500");
-->
<template>

	<div id="dom" ref="dom" :class="[hide ? {hideClass:true}:{flexClass:true},{globalmessage:true}]">
		<p class="text">{{text}}</p>
	</div>
</template>

<script>
	export default {
		name: "GlobalMessage",
		data() {
			return {
				timeID: "",
				interID: "",
				hide: true,
			}
		},
		props: {
			text: {
				type: String,
				default: ""
			}
		},
		methods: {
			message($time) {
				let time = "2000";
				if($time) {
					time = $time;
				}
				let _this = this;
				clearTimeout(_this.timeID);
				clearInterval(_this.interID);
				_this.hide = false;
				_this.$refs.dom.style.transform = "translate(0px,20px)";
				_this.$refs.dom.style.opacity = 1;
				_this.timeID = setTimeout(function() {
					_this.$refs.dom.style.transform = "translate(0px,0px)";
					_this.$refs.dom.style.opacity = 0;
					_this.interID = setInterval(function() {
						if(_this.$refs.dom.style.opacity == 0) {
							_this.hide = true;
							clearInterval(_this.interID);
						}
					}, 100);
				}, time);
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.hideClass {
		display: none;
	}
	
	.flexClass {
		display: flex;
	}
	
	.globalmessage {
		font-size: 14px;
		min-width: 130px;
		background-color: #FAFCFD;
		opacity: 0;
		color: #444;
		transform: translate(0px, 0px);
		transform: translateX(-50%);
		-webkit-box-pack: center;
		justify-content: center;
		box-sizing: border-box;
		border-width: 1px;
		border-style: solid;
		border-radius: 2px;
		border-color: #DCDFE6;
		position: fixed;
		left: 50%;
		top: 300px;
		transition: opacity 0.3s, transform 0.4s, -webkit-transform 0.4s;
		padding: 10px;
		align-items: center;
		z-index: 2000000;
	}
</style>