<template>
	<div class="home">
		<div class="layout-page">
			<div class="layout-page-header">
				<timer />
			</div>
			<div class="layout-page-body"></div>
			<router-link class="" to="/home/notebook/create">
				<van-button type="primary" size="normal" icon="plus" round>
					新建任务集
				</van-button>
			</router-link>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import timer from './widgets/timer.vue';

@Component({
	components: { timer }
})
export default class Home extends Vue {
	@Prop() private msg!: string;
}
</script>

<style scoped lang="scss" scoped>
.home {
	position: relative;
	height: 100%;
}
</style>
