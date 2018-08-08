<!--
	组件名称：下拉列组件
	作者：黄泽平
	参数格式：
	@props
	    value[Object] 选项对象，格式{id:"",label:""}
		options[Array] 默认值:[]。选项列表
		placeholder[String] 默认值:"请选择"。提示语
-->
<template>
	<div class="base-select">
		<!-- 输入框 -->
		<div :class="{box:true, focus:inFocus}" @click="clickHandle">
			<input v-model="vmInput" type="text" autocomplete="off" @blur="blurHandle" :placeholder="placeholder" readonly="readonly" />
			<div class="icon">
				<svg t="1528103351049" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6548" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24">
					<path d="M822.125714 331.337143a73.142857 73.142857 0 0 0-103.131428 0L512 537.6 305.005714 331.337143a73.142857 73.142857 0 0 0-103.131428 0 73.142857 73.142857 0 0 0 0 103.131428l258.194285 258.194286a63.634286 63.634286 0 0 0 24.137143 16.091429 73.142857 73.142857 0 0 0 79.725715-16.091429l258.194285-258.194286a73.142857 73.142857 0 0 0 0-103.131428z" p-id="6549" fill="#999999"></path>
				</svg>
			</div>
		</div>
		<!-- 列表框 -->
		<div v-if="optionsDisplay" :class="[{options:true}, optionsOpacity ? {opacityShow:true} : {opacityHide:true}]">
			<ul>
				<li :class="{selected : selectedClass(item.id)}" v-for="item in options" :id="item.id" @click="selectedHandle">{{item.label}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "BaseSelect",
		data() {
			return {
				id: "", // 选项ID
				vmInput: "", // 输入框文本
				inFocus: false, // 是否为焦点
				optionsDisplay: false, // 列表框是否隐藏
				optionsOpacity: false // 列表框是否透明
			}
		},
		props: {
			value: {
				type: Object
			},
			options: {
				type: Array,
				default: []
			},
			placeholder: {
				type: String,
				default: "请选择"
			}
		},
		methods: {
			clickHandle() {
				this.optionsOpacity = this.optionsOpacity ? false : true;
			},
			blurHandle(e) {
				this.optionsOpacity = false;
			},
			selectedHandle(el) {
				this.optionsOpacity = false;
				this.vmInput = el.target.innerText;
				this.id = el.target.id;
				this.$emit('input', {
					id: this.id,
					label: this.vmInput
				});
			},
			selectedClass(itemID) {
				if(itemID == this.id) {
					return true;
				} else {
					return false;
				}
			}
		},
		watch: {
			value(value) {
				this.id = value.id;
				this.vmInput = value.label;
				return value;
			},
			optionsOpacity(bo) {
				let _this = this;
				if(bo) {
					_this.inFocus = true;
					_this.optionsDisplay = true;
				} else {
					_this.inFocus = false;
					setTimeout(function() {
						_this.optionsDisplay = false;
					}, 300)
				}
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.base-select {
		width: 100%;
		height: 36px;
		box-sizing: border-box;
		position: relative;
	}
	
	.box {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		border: solid 1px #DCDFE6;
		border-radius: 2px;
		transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
		cursor: pointer;
		display: flex;
		input {
			width: 100%;
			height: 36px;
			box-sizing: border-box;
			border: none;
			background: rgba(255, 255, 255, 0);
			position: relative;
			text-indent: 10px;
			font-size: 14px;
			margin-top: -1px;
			cursor: pointer;
			overflow: hidden;
			outline: none;
		}
		.icon {
			box-sizing: border-box;
			margin-top: -1px;
			line-height: 50px;
			pointer-events: none;
			background-color: #fff0;
			width: 32px;
			height: 36px;
			i {
				margin-left: -5px;
				display: block;
				margin-top: 10px;
			}
		}
	}
	
	.focus {
		border-color: #41a259;
	}
	
	.options {
		width: 100%;
		max-height: 300px;
		position: absolute;
		margin-top: 2px;
		border: solid 1px #DCDFE6;
		border-radius: 2px;
		overflow-y: auto;
		transition: opacity .3s linear;
		background-color: #ffffff;
		box-sizing: border-box;
		box-shadow: 0px 0px 20px 0px rgba(204, 204, 204, 0.4);
		z-index: 10000;
		ul {
			list-style: none;
			padding: 6px 0;
			margin: 0;
			box-sizing: border-box;
			li {
				height: 34px;
				font-size: 14px;
				padding: 0 15px;
				position: relative;
				color: #606266;
				line-height: 34px;
				box-sizing: border-box;
				cursor: pointer;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			li:hover {
				color: #41A259;
				background-color: #f1f7fa;
			}
		}
		.selected {
			background-color: #f1f7fa;
		}
	}
	
	.opacityHide {
		opacity: 0;
	}
	
	.opacityShow {
		opacity: 1;
	}
</style>