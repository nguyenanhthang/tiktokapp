import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import styles from'./AccountItem.module.scss'
const cx = classNames.bind(styles)
function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/ddcb57a7bcd8bf0fc01c18338b2caf59.jpeg?x-expires=1658390400&x-signature=i6MjestXyXojpCOaiVt1hQovAEs%3D" alt="hoaaa" />
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