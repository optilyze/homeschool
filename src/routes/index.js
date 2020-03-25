import Vue from 'vue';
import VueRouter from 'vue-router';
import Maths from '../components/Maths.vue';
import Home from '../components/Home.vue';

Vue.use(VueRouter)

const router = new VueRouter({
	mode: "history",
	routes: [
		{
			path: '/maths',
			component: Maths
		},
		{
			path: '/home',
			component: Home,
		},
		{
			path: '/',
			redirect: 'Home'
		},
		{
			path: '*',
			redirect: 'NotFound'
		}
	]
});

export default router;