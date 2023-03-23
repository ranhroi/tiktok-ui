//Layout
import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Live from '~/pages/Live';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import routesConfig from '~/config/routes';
import Messages from '~/pages/Messages';

const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.search, component: Search, layout: HeaderOnly },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.upload, component: Upload, layout: false },
  { path: routesConfig.messages, component: Messages },
  { path: routesConfig.live, component: Live },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
