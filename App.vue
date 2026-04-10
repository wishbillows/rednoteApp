<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import '@/uni_modules/uni-scss/index.scss';

	/* #ifndef APP-NVUE */
	page {
		background-color: #f5f5f5;
		font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, 'PingFang SC', 'Microsoft YaHei', sans-serif;
	}

	* {
		box-sizing: border-box;
	}
	/* #endif */

	/* 全局主色 */
	:root {
		--primary-color: #ff2442;
		--text-primary: #1a1a1a;
		--text-secondary: #666666;
		--text-light: #999999;
		--bg-white: #ffffff;
		--bg-light: #f5f5f5;
		--border-color: #ebebeb;
	}
</style>
