import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Check } from '~/assets/images';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/a67b0e739e298261400485d7e7579b4a.jpeg?x-expires=1679140800&x-signature=Co6rcr7tgOOuV60AL3BI%2Biqn9j4%3D"
        alt="HungKity"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Van Hung </span>
          <Check className={cx('icon-check')} />
        </h4>
        <span className={cx('usename')}>NguyenVanHung</span>
      </div>
    </div>
  );
}
export default AccountItem;
