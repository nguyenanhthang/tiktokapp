import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
function Button({
    small = false,
    lefIcon,
    rightIcon,
    disable = false,
    text = false,
    large = false,
    to,
    href,
    outline = false,
    onClick,
    children,
    className,
    rounded = false,
    primary = false,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    //remove event listeners when btn is disable
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] !== 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disable,
        rounded,
        [className]: className,
    });
    return (
        <Comp className={classes} {...props}>
            {lefIcon && <span className={cx('icon')}>{lefIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}
Button.propTypes={
    small:PropTypes.bool,
    lefIcon:PropTypes.node,
    rightIcon:PropTypes.node,
    disable:PropTypes.bool,
    text:PropTypes.bool,
    large:PropTypes.bool,
    to:PropTypes.string,
    href:PropTypes.string,
    outline:PropTypes.bool,
    onClick:PropTypes.func,
    children:PropTypes.node.isRequired,
    className:PropTypes.string,
    rounded:PropTypes.bool,
    primary:PropTypes.bool,
}
export default Button;
