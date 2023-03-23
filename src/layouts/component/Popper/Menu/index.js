import { useState } from 'react';
import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
import { default as PopperWrapper } from '../Wrapper';

const cx = classNames.bind(styles);
const defaultFc = () => {};

function Menu({ items = [], hideOnClick = false, children, onChange = defaultFc }) {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];

  const renderItem = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <HeadlessTippy
      hideOnClick={hideOnClick}
      interactive
      // visible
      delay={[50, 500]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {history.length > 1 && (
              <Header
                title={current.title}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            <div className={cx('menu-body')}>{renderItem()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => {
        setHistory((prev) => prev.slice(0, 1));
      }}
      duration={9000}
    >
      {children}
    </HeadlessTippy>
  );
}
Menu.prototype = {
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
};

export default Menu;
