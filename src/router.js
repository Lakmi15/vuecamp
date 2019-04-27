import Router from 'vue-router';
import GettingStarted from './views/getting-started/Getting-Started';
import Directives from './views/directives/Directives';
import Routing from './views/routing/Routing';
import User from './components/features/routing/user/User';
import AllUsers from './components/features/routing/user/All-Users';
import UserDetail from './components/features/routing/user/User-Detail';
import UserEdit from './components/features/routing/user/User-Edit';
import Filters from './views/filters/Filters';

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'start', component: GettingStarted },
    { path: '/directive', name: 'directive', component: Directives },
    {
      path: '/routing',
      name: 'routing',
      component: Routing,
      children: [
        {
          path: ':user',
          component: User,
          children: [
            { path: '', component: AllUsers },
            { path: 'all',
              component: AllUsers,
              beforeEnter: (to, from, next) => {
                console.log('this only execute when "user/all" routing execute');
                next();
              } },
            { path: ':id/detail', component: UserDetail },
            { path: ':id/edit', component: UserEdit }
          ]
        }
      ]
    },
    { path: '/filters', name: 'filters', component: Filters },
  ]
});
