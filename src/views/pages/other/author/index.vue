<template>
	<div id="author">
		<div class="bground">
			<div class="title">作者资料</div>
			<div class="line"></div>
			<div class="content">黄泽平，在企业中历任高级前端开发工程师、项目主管、产品经理、用户交互体验设计师，交互体验设计网站helloui.net创始人。​有7年开发工作经验，熟练掌握vue、angular、react、nodejs、nwjs、webpack等多种前端技术，熟悉后端系统设计及产品运维。</div>
			<div class="code-title">技术成果：</div>
			<div>helloui.net工作室创始人；CSDN原创技术博客分享100余篇及4个技术专栏；VueYu前端框架（适用于中大型项目）创建者等</div>
			<div class="code-title">个人博客：</div>
			<div>http://blog.csdn.net/zeping891103</div>
			<div class="code-title">GitHub社区VueYu前端框架：</div>
			<div>https://github.com/smallH/vue-web-project</div>
			<div class="code-title">交流微信号：</div>
			<img :src="imgUrl" class="img" />
		</div>
	</div>
</template>

<script>
	export default {
		name: 'author',
		data() {
			return {
				imgUrl: 'static/weixin.jpg'
			}
		},
		mounted() {}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#author {
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
	
	.img{
		width: 20%;
		margin-top: 10px;
	}
</style>