<template>
	<div id="author">
		<div class="bground">
			<div class="title">作者资料</div>
			<div class="line"></div>
			<div class="content">黄泽平，在企业中历任高级前端开发工程师、项目主管、交互体验设计师、DeepUI网创始人。​有7年前后端开发工作经验，熟练掌握 vue、react+redux、angular、nodejs、nwjs、webpack等多种前端主流技术，热爱前端开发，在csdn有大量前端原创技术分享。</div>
			<div class="code-title">csdn个人交流博客：</div>
			<div>http://blog.csdn.net/zeping891103</div>
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
	
	.img {
		width: 20%;
		margin-top: 10px;
	}
</style>