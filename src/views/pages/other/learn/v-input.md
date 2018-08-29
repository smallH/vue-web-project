<!-- 用@input替代v-model -->
<div>
	<input type="text" @input="handleInput" />
	<p>输入内容为：{{message}}</p>
</div>

<script>
	methods: {
		handleInput: function(e) {
			this.message = e.target.value;
		}
	}
</script>