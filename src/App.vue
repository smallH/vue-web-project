<template>
	<div id="app">
		<global-confirm v-if="confirmVisible" :title="confirmTitle" :text="confirmText" @clean="confirmCleanHandle" @ok="confirmOKHandle"></global-confirm>
		<global-message ref="msgComp" :text="messageText"></global-message>
		<router-view/>
	</div>
</template>

<script>
	import { mapState, mapGetters } from 'vuex'
	import GlobalConfirm from '@/components/global-confirm.vue'
	import GlobalMessage from '@/components/global-message.vue'
	import Vue from 'vue';

	Vue.prototype.$globalConfirm = function($title, $msg, $successCallback, $cleanCallback) {
		let _this = this;
		let data = {};
		data.visible = true;
		data.title = $title;
		data.text = $msg;
		data.cleanHandle = function(e) {
			_this.$store.commit("COMP_CONFIRM", {
				visible: false
			});
			$cleanCallback();
		};
		data.okHandle = function() {
			_this.$store.commit("COMP_CONFIRM", {
				visible: false
			});
			$successCallback();
		};
		_this.$store.commit("COMP_CONFIRM", data);
	};

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
				confirmVisible: "getConfirmVisible",
				confirmTitle: "getConfirmTitle",
				confirmText: "getConfirmText",
				confirmCleanHandle: "getConfirmCleanHandle",
				confirmOKHandle: "getConfirmOKHandle",
				messageText: "getMessageText"
			})
		}
	}
</script>

<style></style>