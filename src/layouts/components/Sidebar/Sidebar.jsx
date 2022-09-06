import styles from './Sideber.module.scss'
import classNames from 'classnames/bind'
import Menu,{MenuItem} from './Menu';
import config from '~/config/config';
import { HomeActiveIcon,LiveActiveIcon,UserActiveIcon,HomeGroupIcon,LiveGroupIcon,UserGroupIcon } from '~/components/icons/icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
const cx = classNames.bind(styles)
function Sidebar() {
    return ( 
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} activeIcons={<HomeActiveIcon/>} icons={<HomeGroupIcon/>}/>
                <MenuItem title="Following" to={config.routes.following } activeIcons={<UserActiveIcon/>}icons={<UserGroupIcon/>}/>
                <MenuItem title="Live" to={config.routes.live} activeIcons={<LiveActiveIcon/>}icons={<LiveGroupIcon/>}/>
            </Menu>
            <SuggestedAccounts label="Suggest Accounts"/>
        </aside>
    );
}

export default Sidebar;