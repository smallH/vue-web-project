<template>
	<div id="author">
		<div class="bground">
			<div class="title">作者资料</div>
			<div class="line"></div>
			<div class="content">黄泽平，在企业中历任高级前端开发工程师、项目主管，YYUI网创始人。​有7年开发工作经验，关注前端技术发展动态，掌握vue、angular、react、nodejs、nwjs、webpack等多种前端框架及相关工具。除了前端开发外，在实际工作中也曾使用过java、mysql等后端技术独立完成后台开发，对服务器的部署与运维有一定程度的理解和实践经验。</div>
			<div class="code-title">主要成就：</div>
			<div>CSDN社区拥有原创技术博客100余篇及4个技术专栏；YYUI网创始人；vue-web前端框架创建者。</div>
			<div class="code-title">CSDN个人博客：</div>
			<div>http://blog.csdn.net/zeping891103</div>
			<div class="code-title">YYUI网：</div>
			<div>http://www.helloui.net</div>
			<div class="code-title">GitHub社区vue-web前端框架：</div>
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