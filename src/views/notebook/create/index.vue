<template>
	<div class="layout-page">
		创建页面
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class NoteCreate extends Vue {
    private created() {
        console.log('--- init ---');
    }
}
</script>

<style scoped lang="scss"></style>
