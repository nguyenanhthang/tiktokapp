import style from './Header.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind';
import image from '~/assets/imgs/index';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                    <img src={image.logo} alt="TikTok" />
                <div className={cx('search')}>
                    <input spellCheck = {false} placeholder="Search accounts and videos..." />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className ={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className ={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
