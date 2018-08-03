<script>
    // 发送
	this.$router.push({
		path: '/pages/action/param/getparam',
		query: {
			data: _this.inputText
		}
	})
	
	// 接收
	this.param = this.$route.query.data;
</script>