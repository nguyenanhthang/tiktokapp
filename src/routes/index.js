import routesConfig from '~/config/routes'
//layouts
import { HeaderOnly } from '~/components/Layout'
//pages
import Home from'~/pages/Home'
import Following from'~/pages/Following'
import Profile from'~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'
const publishRoutes = [
    {path: routesConfig.home,component: Home},
    {path: routesConfig.following,component: Following},
    {path: routesConfig.upload,component: Upload, layout:HeaderOnly},
    {path: routesConfig.profile,component: Profile},
    {path: routesConfig.search,component: Search, layout:null},
]
const privateRoutes = [
    
]
export {publishRoutes ,privateRoutes}