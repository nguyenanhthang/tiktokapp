import Home from'~/pages/Home'
import Following from'~/pages/Following'
import Profile from'~/pages/Profile'
import Upload from '~/pages/Upload'
import { HeaderOnly } from '~/components/Layout'
import Search from '~/pages/Search'
const publishRoutes = [
    {path: '/',component: Home},
    {path: '/following',component: Following},
    {path: '/upload',component: Upload, layout:HeaderOnly},
    {path: '/profile',component: Profile},
    {path: '/search',component: Search, layout:null},
]
const privateRoutes = [
    
]
export {publishRoutes ,privateRoutes}