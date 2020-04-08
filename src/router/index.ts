import Vue from 'vue';
import VueRouter from 'vue-router';
import RouterList from './router-list';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: RouterList
});

export default router;
