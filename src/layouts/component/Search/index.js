import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import 'tippy.js/dist/tippy.css'; // optional
import HeadlessTippy from '@tippyjs/react/headless';

import { useDebounce } from '~/hooks';
import { Wrapper as PopperWrapper } from '../Popper';
import AccountItem from '~/component/GlobalStyles/AccountItem';

import { IconClear, IconLoading, IconSearch } from '~/component/Icons';
import * as searchServices from '~/services/searchServices';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

function Search() {
  //Search result
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const debouncedValue = useDebounce(searchValue, 600);
  const inputRef = useRef();

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
      return;
    }
    const fetchApi = async () => {
      setLoading(true);
      const result = await searchServices.search(debouncedValue);
      setSearchResult(result);
      setLoading(false);
    };

    fetchApi();
  }, [debouncedValue]);

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  return (
    <div>
 
      <HeadlessTippy
        interactive={true}
        visible={debouncedValue.trim() && showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title')}>Accounts</h4>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx('search')}>
          <form className={cx('search-form')} action={routesConfig.search}>
            <input
              ref={inputRef}
              value={searchValue}
              className={cx('input')}
              placeholder="Search accounts and videos"
              spellCheck={false}
              onChange={handleChange}
              onFocus={() => setShowResult(true)}
            />

            {!!searchValue.trim() && !loading && (
              <button className={cx('clear-btn')} onClick={handleClear}>
                <IconClear className={cx('clear-icon')} />
              </button>
            )}

            {loading && <IconLoading className={cx('loading-icon')} />}

            <span className={cx('spanSplit')}></span>

            <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
              <IconSearch className={cx('search-icon')} />
            </button>
          </form>
        </div>
      </HeadlessTippy>
    </div>
  );
}
export default Search;
