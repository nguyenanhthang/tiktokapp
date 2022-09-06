import classNames from "classnames/bind";
import styles from './SuggestedAccounts.module.scss'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles)
function AccountItem() {
    return ( 
    <div className={cx('accountItem')}>
        <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1662606000&x-signature=cVK0BpM7cg3Tm0MISe8gnNpnXus%3D" alt="" />
        <div className={cx('itemInfo')}>
            <p className={cx('nickName')}>
                <strong>thangnuyen</strong>
                <FontAwesomeIcon className={cx('check')} icons={faCheckCircle}/>
            </p>
            <p className={cx('name')}>Nguyen thang</p>
        </div>
    </div> 
    );
}
AccountItem.propTypes={

}
export default AccountItem;