import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import styles from'./AccountItem.module.scss'
const cx = classNames.bind(styles)
function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/17937206d75158670a293f5caa5b6dda~c5_300x300.webp?x-expires=1657695600&x-signature=I38%2F%2Bb0USoHXC9ko%2BBNfQkhmFXM%3D" alt="hoaaa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>nguyen van a</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle}/>
                </h4>
                <span className={cx('userName')}></span>
            </div>
        </div>
    );
}

export default AccountItem;