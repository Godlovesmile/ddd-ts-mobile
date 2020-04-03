<template>
	<div class="home-timer">
		<div class="home-timer-left">
			<div class="home-timer-left-l">{{ dayjs().format('DD') }}</div>
			<div class="home-timer-left-r">
				<div>{{ dayjs().format('MMMM') }}</div>
				<div>{{ dayjs().format('YYYY') }}</div>
			</div>
		</div>
		<div class="home-timer-right">
			{{ dayjs().format('HH:mm') }}
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Button } from 'vant';
import dayjs from 'dayjs';

Vue.use(Button);

@Component({})
export default class Timer extends Vue {
	private dayjs = dayjs;
}
</script>

<style lang="scss" scoped>
.home-timer {
	display: flex;
	justify-content: space-between;
	.home-timer-left {
		display: flex;
		.home-timer-left-l {
			font-size: 40px;
			margin-right: 4px;
		}
		.home-timer-left-r {
			display: flex;
			flex-direction: column;
            justify-content: space-around;
            color: $gray-dark;
		}
	}
	.home-timer-right {
		font-size: 40px;
	}
}
</style>
