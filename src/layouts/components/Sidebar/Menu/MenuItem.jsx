import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from "./Menu.module.scss"
const cx = classNames.bind(styles)
function MenuItem({title,to,icons,activeIcons}) {
    return (
        <NavLink className={({isActive})=>cx('menu-Item', { active:isActive })} to={to}>
            <span className={cx('icon')}>{icons}</span>
            <span className={cx('activeIcons')}>{activeIcons}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}
MenuItem.prototype={
    title:PropTypes.string.isRequired,
    to:PropTypes.string.isRequired,
    icons:PropTypes.node.isRequired
}
export default MenuItem;