<!-- 自定义指令v-clickoutside -->
<div v-clickoutside="handleClose">
	// 组件范围内
<div>	
// 组件范围外

<script>
	methods:{
		handleClose: function(){
			this.show = false;
		}
	}
</script>