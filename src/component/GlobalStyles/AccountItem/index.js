import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { IconCheck } from '~/component/Icons';
import Image from '~/component/Images';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
      <Image className={cx('avatar')} src={data.avatar} alt={data.fullname} />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>{data.full_name}</span>
          {data.tick && <IconCheck className={cx('check-icon')} />}
        </h4>
        <span className={cx('usename')}>{data.nickname}</span>
      </div>
    </Link>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
