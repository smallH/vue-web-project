<template>
	<jsx-item></jsx-item>
</template>

<script>
	Vue.component('jsx-item', {
		render: function(h) {
			return(
				<div>
					<ul>
						<li>jsx.1</li>
						<li>jsx.2</li>
					</ul>
				</div>
			)
		}
	});
</script>