import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        src="https://jbagy.me/wp-content/uploads/2025/03/anh-avatar-dep-vo-tri-3.jpg"
        alt="Hoa"
        className={cx('avatar')}
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
        </h4>
        <span className={cx('username')}>NguyenvanA</span>
      </div>
    </div>
  );
}

export default AccountItem;
