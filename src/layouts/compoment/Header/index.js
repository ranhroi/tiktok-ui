import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { Logo, Close, Loading, Search } from '~/assets/images/';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <Link to="/" alt="Home">
            <Logo />
          </Link>
        </div>
        <form className={cx('search')} action="/search">
          <input className={cx('input')} placeholder="Tìm kiếm tài khoản và video" spellCheck={false} />
          <button className={cx('close-btn')}>
            <Close className={cx('icon-close')}/>
            <Loading className={cx('icon-loading')}/>
          </button>
          <span className={cx('spanSplit')}></span>
          <button className={cx('search-btn')}>
            <Search  className={cx('icon-search')}/>
          </button>
        </form>
        <div className={cx('actions')}>Actions List</div>
      </div>
    </header>
  );
}

export default Header;
