<template>
	<div id="app">
		<global-confirm v-if="cfmVisible" :title="cfmTitle" :text="cfmText" @clean="cfmCleanHandle" @ok="cfmOKHandle"></global-confirm>
		<global-message ref="msgComp" :text="msgText"></global-message>
		<router-view/>
	</div>
</template>

<script>
	import { mapState, mapGetters } from 'vuex'
	import GlobalConfirm from '@/components/global-confirm.vue'
	import GlobalMessage from '@/components/global-message.vue'
	import Vue from 'vue';

	// 定义全局组件询问框
	Vue.prototype.$globalConfirm = function($title, $msg, $successCallback, $cleanCallback) {
		let _this = this;
		let data = {};
		data.visible = true;
		data.title = $title;
		data.text = $msg;
		data.cleanHandle = (e) => {
			_this.$store.commit("COMP_CONFIRM", {
				visible: false
			});
			$cleanCallback();
		};
		data.okHandle = () => {
			_this.$store.commit("COMP_CONFIRM", {
				visible: false
			});
			$successCallback();
		};
		_this.$store.commit("COMP_CONFIRM", data);
	};

	// 定义全局组件消息框
	Vue.prototype.$globalMessage = function($text, $time) {
		this.$store.commit("COMP_MESSAGE", {
			text: $text
		});
		Vue.prototype.$refs.msgComp.message($time);
	}

	export default {
		name: 'App',
		components: {
			GlobalConfirm,
			GlobalMessage
		},
		mounted() {
			Vue.prototype.$refs = this.$refs;
		},
		computed: {
			...mapGetters({
				cfmVisible: "getVisible_Confirm",
				cfmTitle: "getTitle_Confirm",
				cfmText: "getText_Confirm",
				cfmCleanHandle: "getCleanHandle_Confirm",
				cfmOKHandle: "getOKHandle_Confirm",
				msgText: "getText_Message"
			})
		}
	}
</script>