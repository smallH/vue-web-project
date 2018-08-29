<template>
	<ele></ele>
</template>

<script>
	Vue.component('ele', {
		render: function(createElement) {
			var ChildNode = createElement('p', 'hello');
			// 设置子节点有多个相同的元素，方法1
			return createElement('div', [ChildNode, ChildNode]);

			// 设置子节点有多个相同的元素，方法2，推荐用这种
			return createElement('div',
				Array.apply(null, {
					length: 5
				}).map(function() {
					return createElement('p', 'hello');
				})
			);
		}
	});
</script>