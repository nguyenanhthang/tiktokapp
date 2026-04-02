import Config from '~/config/config';
//layouts
import { HeaderOnly } from '~/layouts';
//pages
import Home from '~/pages/Home/Home';
import Following from '~/pages/Following/Following';
import Profile from '~/pages/Profile/Profile';
import Upload from '~/pages/Upload/Upload';
import Search from '~/pages/Search/Search';
import Live from '~/pages/Live/Live';
import AIAssistant from '~/pages/AIAssistant/AIAssistant';
const publishRoutes = [
    { path: Config.routes.home, component: Home },
    { path: Config.routes.following, component: Following },
    { path: Config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: Config.routes.profile, component: Profile },
    { path: Config.routes.live, component: Live },
    { path: Config.routes.search, component: Search, layout: null },
    { path: Config.routes.ai, component: AIAssistant },
];
const privateRoutes = [];
export { publishRoutes, privateRoutes };
