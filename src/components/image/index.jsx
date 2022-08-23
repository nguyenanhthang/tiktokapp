import { useState, forwardRef } from 'react';
import images from '~/assets/imgs';
import styles from './image.module.scss';
import classNames from 'classnames';
import { PropTypes } from 'prop-types';
const Image = forwardRef(({ fallBack: customFallBack=images.noImage, className, src, alt, ...props }, refs) => {
    const [fallBack, setFallBack] = useState('');
    const handleError = () => {
        setFallBack(customFallBack);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={refs}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});
Image.propTypes={
    fallBack:PropTypes.string,
    className:PropTypes.string,
    src:PropTypes.string,
    alt:PropTypes.string,
}
export default Image;
