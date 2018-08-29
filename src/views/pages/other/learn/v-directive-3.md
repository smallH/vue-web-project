<script>
	el： 指令所绑定的元素，可以用来直接操作DOM.
	bind： 一个对象，包含以下属性：
		name： 指令名，不包括v-前缀
		value：指令的绑定值，例如v-my-directive="1+1"，value的值是2
		oldValue：指令绑定的前一个值，仅在update和componentUpdate钩子中可用。无论值是否改变都可用
		expression：绑定值的字符串形式。例如v-my-directive="1+1"，expression的值时"1+1"
		arg：传给指令的参数。例如v-my-directive:foo，arg的值是foo
		modifiers：一个包含修饰符的对象。例如v-my-directive.foo.bar，修饰符对象modifiers的值是{foo:true,bar:true}
	vnode：Vue编译生成的虚拟节点
	oldVnode：上一个虚拟节点仅在update和componentUpdate钩子中可用
</script>