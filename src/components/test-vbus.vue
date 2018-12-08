// 中央事件总线测试
<template>
	<div>
		<button @click="addOneHandle">vue-bus打印测试</button>
	</div>
</template>

<script>
	export default {
		name: "VueBus",
		data() {
			return {}
		},
		mounted() {
			var _this = this;
			this.$bus.on("add", this.add);
			this.$bus.on("edit", this.edit);
		},
		destroyed() {
			this.$bus.off("add", this.add);
			this.$bus.off("edit", this.edit);
		},
		methods: {
			addOneHandle: function() {
				this.$bus.emit('add');
				this.$bus.emit('edit');
			},
			add: function() {
				console.log("add-methods");
			},
			edit: function() {
				console.log("edit-methods");
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>