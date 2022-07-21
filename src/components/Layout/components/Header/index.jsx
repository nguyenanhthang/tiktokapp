import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faSignIn,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import image from '~/assets/imgs/index';
import style from './Header.module.scss';
import AccountItem from '~/components/Accountitem';
import Menu from '~/components/Popper/Menu';
const cx = classNames.bind(style);
const Menu_Item = [
    {
        icon:<FontAwesomeIcon icon={faEarthAsia} />,
        title: 'vietnamese',
        children:{
            title:'language',
            data:[
                {
                    code:'vi',
                    title:"Vietnamese"
                },
                {
                    code:'en',
                    title:"English"
                },
                {
                    code:'cn',
                    title:"China"
                },
                {
                    code:'kor',
                    title:"Korean"
                }
            ]
        }
    },
    {
        icon:<FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'feedback and help',
        to:'/feedback'
    },
    {
        icon:<FontAwesomeIcon icon={faKeyboard} />,
        title: 'keyboard shortcuts',
    },
]
function Header() {
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResults([]);
        }, 1000);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={image.logo} alt="TikTok" />
                <Tippy
                    interactive={true}
                    visible={searchResults.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input spellCheck={false} placeholder="Search accounts and videos..." />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button primary>Login</Button>
                    <Menu
                    items={Menu_Item}
                    >
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
