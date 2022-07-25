import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import TippyH from '@tippyjs/react/headless';

import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faSignIn,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCloudUpload,
    faMessage,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import image from '~/assets/imgs/index';
import style from './Header.module.scss';
import AccountItem from '~/components/Accountitem';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import { UploadIcon } from '~/components/icons';
import Image from '~/components/image';
const cx = classNames.bind(style);
const Menu_Item = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'vietnamese',
        children: {
            title: 'language',
            data: [
                {
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'cn',
                    title: 'China',
                },
                {
                    code: 'kor',
                    title: 'Korean',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'keyboard shortcuts',
    },
];
const currentUser = true;
function Header() {
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResults([]);
        }, 1000);
    }, []);
    const handleMenuChange = (menuItem) => {
        switch (menuItem) {
            case 'language':
                //handle change language
                break;
            default:
        }
    };
    const user_menu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'view profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'get coin',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...Menu_Item,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/log out',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={image.logo} alt="TikTok" />
                <TippyH
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
                </TippyH>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="upload video" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                                {/* <button className={cx('actions-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button> */}
                            </Tippy>
                            <Tippy delay={[0, 200]} content="send mess" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu items={currentUser ? user_menu : Menu_Item} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://luv.vn/wp-content/uploads/2021/11/avatar-gai-xinh-41.jpg"
                                alt="nguyen van a"
                                // fallBack="https://1.bigdata-vn.com/wp-content/uploads/2021/12/Hinh-Nen-Girl-Xinh-Full-HD-Cho-Laptop-Va-May.jpg"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
