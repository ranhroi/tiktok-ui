import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import images from '~/assets/images';
import styles from './Images.module.scss';

const Image = forwardRef(({ src, alt, className, fallBack: customFallback = images.noImage, ...props }, ref) => {
  const [fallBack, setFallBack] = useState('');

  const handleError = () => setFallBack(images.noImage);

  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallBack || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
});

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
};

export default Image;
