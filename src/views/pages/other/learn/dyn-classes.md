<!-- 类名绑定计算属性 -->
<div :class="dynclasses">我是通过计算出来的，我的字体比较大</div>

<script>
	data() {
		return {
			size: "large"
		}
	},
	computed: {
		dynclasses: function() {
			return ["btn",
				{
					["btn-" + this.size]: this.size !== "",
					["disabled"]: this.disabled
				}
			]
		}
	}
</script>