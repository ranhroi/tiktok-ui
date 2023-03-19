import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import { Wrapper as PopperWrapper } from '../Popper';
import { Logo, Close, Loading, Search, Plus } from '~/assets/images/';
import AccountItem from '~/component/GlobalStyles/AccountItem';
import Button from '~/component/Button';

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 2000);
  }, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <Link to="/" alt="Home">
            <Logo />
          </Link>
        </div>

        <Tippy
          interactive={true}
          visible={searchResult.length > 0}
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
            <input className={cx('input')} placeholder="Tìm kiếm tài khoản và video" spellCheck={false} />
            <button className={cx('close-btn')}>
              <Close className={cx('icon-close')} />
              <Loading className={cx('icon-loading')} />
            </button>
            <span className={cx('spanSplit')}></span>
            <button className={cx('search-btn')}>
              <Search className={cx('icon-search')} />
            </button>
          </div>
        </Tippy>

        <div className={cx('actions')}>
          <Button href="/upload" leftIcon={<Plus />} text><span className={cx("text")}>Upload</span></Button>
          <Button primary>Log in</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
