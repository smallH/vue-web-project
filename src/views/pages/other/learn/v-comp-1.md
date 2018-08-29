<!-- 组件使用入参 -->
<div>
	<base-select :place-holder="param"></base-select>
</div>

<!-- 如给组件base-select.vue设定参数 -->
<script>
	props: {
		placeHolder: {
			type: String,
			default: "请选择"
		}
	}
</script>
