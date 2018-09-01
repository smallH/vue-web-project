<template>
	<div id="vx">
		<div class="bground">
			<div class="title">vuex应用</div>
			<div class="line"></div>
			<div class="content">
				<div>Vuex应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。在实际应用中，vuex主要有两个作用：1.存储状态值，即set/get。2.实现异步请求，如对服务端数据的请求脚本可封装在vuex中。在本框架根目录vuex文件夹中，已配置了一个vuex应用。</div>
				<div class="code-title">存储状态值Demo：</div>
				<div class="param">
					<div class="param-input">
						<input type="text" v-model="setInput" />
					</div>
					<div class="param-btn" @click="setState">存储</div>
					<div class="param-input left">
						<input class="readonly" type="text" v-model="getInput" readonly/>
					</div>
					<div class="param-btn" @click="getState">获取</div>
				</div>
				<div class="code-title">核心代码：</div>
				<div class="md">
					<pre><code>//存储状态
	this.$store.commit("DATA", this.setInput);
	
	//获取状态
	this.getInput = this.$store.getters.getData;</code></pre>
				</div>
				<div class="code-title top">异步请求服务Demo：</div>
				<div class="param">
					<div class="param-input">
						<input class="readonly" type="text" v-model="axiosInput" readonly/>
					</div>
					<div class="param-btn" @click="axiosReq">请求</div>
				</div>
				<div class="code-title">核心代码：</div>
				<div class="md">
					<pre><code>// 通过vuex异步请求接口(需要启动json-server模拟数据)
	let param = {};
	this.$store.dispatch("getJson", param).then((data) => {
		this.axiosInput = (data);
	}, (error) => {
		console.log(error);
	});</code></pre>
				</div>

				<div class="md">
					<pre><code>// vuex内的接口封装
	import { _get, _post, _delete, _put } from "@/assets/js/http";

	let _prefix = ``; // 请求前缀
	
	//异步请求json-server模拟的json数据包
	export const getJson = ({
		commit
	}, query) => {
		const url = `${_prefix}/mockGetJson`;
		return _get({
				url,
				query
			}, commit)
			.then(json => {
				return Promise.resolve(json);
			})
			.catch(error => {
				return Promise.reject(error);
			});
	};</code></pre>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'vx',
		data() {
			return {
				setInput: "",
				getInput: "",
				axiosInput: ""
			}
		},
		methods: {
			setState: function() {
				debugger;
				// 存储状态
				this.$store.commit("DATA", this.setInput);
			},
			getState: function() {
				// 获取状态
				this.getInput = this.$store.getters.getData;
			},
			axiosReq: function() {
				// 通过vuex异步请求接口(需要启动json-server模拟数据)
				let param = {};
				this.$store.dispatch("getJson", param).then((data) => {
					this.axiosInput = (data);
				}, (error) => {
					console.log(error);
				});
			}
		},
		mounted() {}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#vx {
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
	
	.param {
		display: flex;
		.param-input {
			width: 200px;
			input {
				font-size: 16px;
				width: 100%;
				height: 30px;
				border: solid 1px #DCDFE6;
				border-radius: 3px;
			}
			input:focus {
				outline: none;
				border: 1px solid #009688;
			}
		}
		.param-btn {
			cursor: pointer;
			border-radius: 3px;
			background-color: #009688;
			color: white;
			width: fit-content;
			padding: 5px;
			margin-left: 10px;
		}
	}
	
	.left {
		margin-left: 20px;
	}
	
	.top {
		margin-top: 30px;
	}
	
	.readonly {
		background-color: #eeeeee;
	}
</style>