import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = forwardRef(
  (
    {
      to,
      href,
      primary = false,
      outline = false,
      text = false,
      small = false,
      large = false,
      rounded = false,
      disabled = false,
      children,
      className,
      leftIcon,
      rightIcon,
      onClick,
      ...passProps
    },
    ref,
  ) => {
    let Compo = 'button';
    const props = {
      onClick,
      ...passProps,
    };
    //Remove event Listener when button is disabled
    if (disabled) {
      Object.keys(props).forEach((key) => {
        if (key.startsWith('on') && typeof props[key] === 'function') {
          delete props[key];
        }
      });
    }

    if (to) {
      Compo = Link;
      props.to = to;
    } else if (href) {
      props.href = href;
      Compo = 'a';
    }

    let classes = cx('wrapper', {
      [className]: className,
      text,
      primary,
      outline,
      small,
      large,
      rounded,
      disabled,
    });

    return (
      <Compo ref={ref} className={classes} {...props}>
        {leftIcon && <div className={cx('icon-button')}>{leftIcon}</div>}
        {children && <span className={cx('title-button')}>{children}</span>}
        {rightIcon && <div className={cx('icon-button')}>{rightIcon}</div>}
      </Compo>
    );
  },
);

// dùng để săn error
Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  text: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
