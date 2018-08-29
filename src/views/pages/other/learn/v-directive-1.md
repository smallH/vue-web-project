<script>
	// 全局注册
	Vue.directive('focus',{});
	
	//局部注册
	var app = new Vue({
		el:'#app',
		directives:{
			focus:{}
		}
	});
</script>