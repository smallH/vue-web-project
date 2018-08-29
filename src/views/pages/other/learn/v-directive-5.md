<script>
	Vue.directive('clickoutside',{
		bind: function(el, binding, vnode){
			function documentHandler(e){
				if(el.contains(e.target)){
					return false;
				}
				if(binding.expression){
					binding.value(e); // 执行回调函数
				}
			}
			el.__vueClickOutside__ = documentHandler;
			document.addEventListener('click',documentHandler);
		},
		unbind: function(el, binding){
			document.removeEventListener('click', el.__vueClickOutside__);
			delect el.__vueClickOutside__;
		}
	});
</script>