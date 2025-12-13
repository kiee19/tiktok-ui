import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/b72e8d9ad9e0ec8113f83c9a3e22a831~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=75decf2c&x-expires=1765771200&x-signature=y7wm2RwNWFxCfk0HtjkAXhdZXrA%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2"
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
