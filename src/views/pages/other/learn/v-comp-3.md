<script>
	// 正常通信 
	this.$emit("dispevent",param); // 抛出事件
	<my-comp @dispevent="eventHandle"></my-comp> // 接听事件

	// v-model双向绑定语法糖通信
	this.$emit("input",param); // 抛出事件
	<my-comp v-model="value"></my-comp> // 接听事件
</script>