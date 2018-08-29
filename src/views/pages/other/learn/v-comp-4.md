<script>
	// bug事件管理器
	var bus = new Vue();
	bus.$emit("on-message","发送事件");
	bus.$on("on-message",function(msg){
		// 接收事件
	});
</script>