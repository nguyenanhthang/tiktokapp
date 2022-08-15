import styles from './Sideber.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
function Sidebar() {
    return ( 
        <aside className={cx('wrapper')}>
            <h1>hide side bar</h1>
        </aside>
    );
}

export default Sidebar;