import { useEffect, useState, React } from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import { Wrapper as PopperWrapper } from '../Popper';
import AccountItem from '~/component/GlobalStyles/AccountItem';
import Button from '~/component/Button';
import Menu from '../Popper/Menu';
import Image from '~/component/images';
import {
  IconLogo,
  IconEffecthouse,
  IconNotification,
  IconMessage,
  IconCoinsTiktok,
  IconFeeedback,
  IconKeyboard,
  IconLanguage,
  IconLogout,
  IconSetting,
  IconPlus,
  IconMore,
  IconClose,
  IconLoading,
  IconSearch,
  IconUser,
  IconMoon,
} from '~/component/icons';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <IconLanguage />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Vietnamese',
        },
        {
          type: 'language',
          code: 'cn',
          title: 'Chinese',
        },
      ],
    },
  },
  {
    icon: <IconFeeedback />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <IconKeyboard />,
    title: 'Keyboard shortcuts',
  },
  {
    icon: <IconMoon />,
    title: 'Theme mode',
  },
];

function Header() {
  //Current User
  const currentUser = true;

  //Search result
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 2000);
  }, []);

  //Handle Logic
  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  const userMenu = [
    {
      icon: <IconUser />,
      title: 'View Profile',
      to: '/@huypam_289',
    },
    {
      icon: <IconCoinsTiktok />,
      title: 'Get Coins',
      to: '/coins',
    },
    {
      icon: <IconSetting />,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <IconLogout />,
      title: 'Log Out',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <Link to="/" alt="Home" className={cx('link-home')}>
            <IconLogo />
          </Link>
        </div>

        <HeadlessTippy
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
            <input className={cx('input')} placeholder="Search accounts and videos" spellCheck={false} />
            <button className={cx('close-btn')}>
              <IconClose />
              <IconLoading />
            </button>
            <span className={cx('spanSplit')}></span>
            <button className={cx('search-btn')}>
              <IconSearch />
            </button>
          </div>
        </HeadlessTippy>

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Button href="/upload" leftIcon={<IconPlus />} text>
                <span className={cx('text')}>Upload</span>
              </Button>

              <Tippy content="Create Effect">
                <Button
                  href="https://effecthouse.tiktok.com/"
                  className={cx('effecthouse-btn')}
                  leftIcon={<IconEffecthouse />}
                  target="_blank"
                />
              </Tippy>

              <Tippy content="Messages">
                <Button to="/messages" className={cx('messages-btn')} leftIcon={<IconMessage />} />
              </Tippy>

              <Tippy content="Inbox">
                <Button className={cx('notification-btn')} leftIcon={<IconNotification />} />
              </Tippy>
            </>
          ) : (
            <>
              <Button href="/upload" leftIcon={<IconPlus />} text>
                <span className={cx('text')}>Upload</span>
              </Button>
              <Button primary>Log in</Button>
              <Button
                href="https://effecthouse.tiktok.com/"
                className={cx('effecthouse-btn')}
                leftIcon={<IconEffecthouse />}
                target="_blank"
              />
            </>
          )}

          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7201039952703029253~c5_720x720.jpeg?x-expires=1679475600&x-signature=5Gxz4Y27nY%2FwSseKo8rNVn8WmVE%3D"
                alt="Pham van Huy"
               // customFallback=""
              />
            ) : (
              <button className={cx('more-btn')}>
                <IconMore />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
