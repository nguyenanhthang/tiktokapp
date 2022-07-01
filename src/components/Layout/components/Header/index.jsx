import style from './Header.module.scss';
import classNames from 'classnames/bind';
import image from '~/assets/imgs/index'
const cx = classNames.bind(style);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt="TikTok" />
                </div>
                <div className={cx('search')}>
                    
                </div>
            </div>
        </header>
    );
}

export default Header;
