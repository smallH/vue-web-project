<template>
	<smart-item type='img' data='imgtype组件'></smart-item>
</template>

<script>
	Vue.component('img-item', {
		render: function(createElement) {
			return createElement('p', this.data);
		},
		props: {
			data: {
				type: String,
				default: '图片组件'
			}
		}
	});

	Vue.component('video-item', {
		render: function(createElement) {
			return createElement('p', this.data);
		},
		props: {
			data: {
				type: String,
				default: '视频组件'
			}
		}
	});

	Vue.component('smart-item', {
		render: function(createElement) {
			var _this = this;

			function getComponent() {
				if(_this.type == 'img') {
					return 'img-item';
				} else {
					return 'video-item';
				}
			}
			return createElement(getComponent(), {
				props: {
					data: _this.$props.data
				}
			}, this.$slots.default);
		},
		props: {
			type: {
				type: String
			},
			data: {
				type: String
			}
		}
	});
</script>