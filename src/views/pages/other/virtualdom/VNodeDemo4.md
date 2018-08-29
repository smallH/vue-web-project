<template>
	<ele-model></ele-model>
</template>

<script>
	Vue.component('ele-model', {
		render: function(createElement) {
			var _this = this;
			return createElement('div', [
				createElement('input', {
					domProps: {
						value: this.value
					},
					on: {
						input: function(e) {
							_this.value = e.target.value;
						}
					}
				}),
				createElement('p', 'value:' + this.value)
			]);
		},
		data: function() {
			return {
				value: ''
			}
		}
	});
</script>