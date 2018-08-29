<script>
    // 一个VNode的实例对象包含了以下属性
    
	export default class VNode {
		tag: string; // 当前节点的标签名
		data: VNodeData; // 当前节点的数据对象
		children: VNode[]; // 子节点，数组，也是VNode类型
		text: string; // 当前节点的文本，一般文本节点或注释节点会有该属性
		elm: Node; // 当前虚拟节点对应的真实的dom节点
		ns: string; // 节点的namespace
		context: Vue; // 编译作用域
		functionalContext:Vue; // 函数化组件的作用域
		key: string | number; // 节点的key属性，用于作为节点的标识，有利于patch的优化
		componentOptions: VNodeComponentOptions; // 创建组件实例时会用到的选项信息
		componentInstance|child : Vue; // 当前节点对应的组件的实例
		parent: VNode; // 组件的占位节点
		raw: boolean; // 原始html
		isStatic: boolean; // 静态节点的标识
		isRootInsert: boolean; // 是否作为根节点插入，被transition包裹的节点，该属性的值为false
		isComment: boolean; // 当前节点是否是注释节点
		isCloned: boolean; // 当前节点是否为克隆节点
		isOnce: boolean; // 当前节点是否有v-once指令
	}
</script>