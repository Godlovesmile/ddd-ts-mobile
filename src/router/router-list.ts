const Home = () => import('@/views/home/index.vue');
const NotebookCreate = () => import('@/views/notebook/create/index.vue');

export default [
    {
        path: '/',
        redirect: '/home'
    },
	{
		path: '/home',
		name: 'home',
        component: Home,
        children: [
            {
                path: 'notebook/create',
                name: 'notebook-create',
                component: NotebookCreate
            }
        ]
    }
];
