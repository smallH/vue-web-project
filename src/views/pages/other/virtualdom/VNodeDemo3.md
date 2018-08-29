<template>
	<ele-list :list="list"></ele-list>
	<button @click="showlist">显示列表</button>
</template>

<script>
	Vue.component('ele-list', {
		render: function(createElement) {
			if(this.list.length) {
				return createElement('ul', this.list.map(function(item) {
					return createElement('li', item);
				}));
			} else {
				return createElement('p', '列表为空');
			}
		},
		props: {
			list: {
				type: Array,
				default: function() {
					return [];
				}
			}
		}
	});
	
	export default {
		data() {
			return {
				list: []
			}
		},
		methods: {
			showlist: function() {
				this.list = ['数组项A', '数组项B', '数组项C'];
			}
		}
	}
</script>