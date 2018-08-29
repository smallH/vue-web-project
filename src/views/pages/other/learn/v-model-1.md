<input type="radio" :checked="picked" :value="value" />
<input type="checkbox" v-model="picked" :value="value" />

<script>
	data() {
		return {
			picked: true|false, // 单独使用时匹配格式为真假
			value: "A"
		}
	}
</script>