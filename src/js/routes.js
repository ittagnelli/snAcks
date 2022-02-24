import HomePage from '../pages/home.svelte';
import StoricoPage from '../pages/storico.svelte';
import OrdiniPage from '../pages/ordini.svelte';
import LoginPage from '../pages/login.svelte';
import NotFoundPage from '../pages/404.svelte';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/login/',
    component: LoginPage,
  },
  {
    path: '/storico/',
    component: StoricoPage,
  },
  {
    path: '/ordini/',
    component: OrdiniPage,
  },  
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
