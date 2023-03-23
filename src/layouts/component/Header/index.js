import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import Button from '~/component/Button';
import Menu from '../Popper/Menu';
import Image from '~/component/Images';
import Search from '../Search';
import {
  IconLogo,
  IconEffecthouse,
  IconNotification,
  IconMessageWhite,
  IconCoinsTiktok,
  IconFeeedback,
  IconKeyboard,
  IconLanguage,
  IconLogout,
  IconSetting,
  IconPlus,
  IconMore,
  IconUser,
  IconMoon,
} from '~/component/Icons';
import routesConfig from '~/config/routes';

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
        }
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
          <Link to={routesConfig.home} alt="Home" className={cx('link-home')}>
            <IconLogo />
          </Link>
        </div>

        <Search />

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Button to={routesConfig.upload} text leftIcon={<IconPlus />}>
                <span className={cx('text')}>Upload</span>
              </Button>

              <Tippy delay={[0, 50]} content="Create Effect">
                <button className={cx('effecthouse-btn')}>
                  <a href="https://effecthouse.tiktok.com/" target="_blank" alt="Create Effect" rel="noreferrer">
                    <IconEffecthouse />
                  </a>
                </button>
              </Tippy>

              <Tippy delay={[0, 50]} content="Messages">
                <Link to={routesConfig.messages} className={cx('messages-btn')}>
                  <IconMessageWhite width="100%" height="100%" />
                </Link>
              </Tippy>

              <Tippy delay={[0, 50]} content="Inbox">
                <button className={cx('notification-btn')}>
                  <IconNotification width="100%" height="100%" className={cx('notification-icon')} />
                  <span className={cx('badge')}>99+</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button to={routesConfig.upload} leftIcon={<IconPlus />} text>
                <span className={cx('text')}>Upload</span>
              </Button>

              <Button primary>Log in</Button>

              <Tippy delay={[0, 50]} content="Create Effect">
                <button className={cx('effecthouse-btn')}>
                  <a href="https://effecthouse.tiktok.com/" target="_blank" alt="Create Effect" rel="noreferrer">
                    <IconEffecthouse />
                  </a>
                </button>
              </Tippy>
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
