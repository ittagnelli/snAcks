import HomePage from '../pages/home.svelte';
import StoricoPage from '../pages/storico.svelte';
import OrdiniPage from '../pages/ordini.svelte';
import LoginPage from '../pages/login.svelte';
import AboutPage from '../pages/about.svelte';
import FeedbackPage from '../pages/feedback.svelte';
import Manuale from '../pages/manuale.svelte';
import Ritiro from '../pages/ritiro.svelte';


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
    path: '/feedback/',
    component: FeedbackPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/manuale/',
    component: Manuale,
  },
  {
    path: '/ritiro/',
    component: Ritiro,
  }
];

export default routes;
