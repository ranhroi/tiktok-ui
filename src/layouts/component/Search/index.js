import { useEffect, useState, useRef } from 'react';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import { Wrapper as PopperWrapper } from '../Popper';
import AccountItem from '~/component/GlobalStyles/AccountItem';

import { IconClear, IconLoading, IconSearch } from '~/component/Icons';

const cx = classNames.bind(styles);

function Search() {
  //Search result
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);

  const inputRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([123, 4, 7, 7]);
    }, 2000);
  }, []);

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <HeadlessTippy
      interactive={true}
      visible={showResult && searchResult.length > 0}
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
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValue}
          className={cx('input')}
          placeholder="Search accounts and videos"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />

        {!!searchValue && (
          <button className={cx('clear-btn')} onClick={handleClear}>
            <IconClear className={cx('clear-icon')} />
            <IconLoading className={cx('loading-icon')} />
          </button>
        )}

        <span className={cx('spanSplit')}></span>
        <button className={cx('search-btn')}>
          <IconSearch className={cx('search-icon')} />
        </button>
      </div>
    </HeadlessTippy>
  );
}
export default Search;
