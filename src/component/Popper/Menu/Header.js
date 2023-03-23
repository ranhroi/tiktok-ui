import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from "./Menu.module.scss"
import { IconChevronLeft } from '~/component/Icons/Icons';


const cx = classNames.bind(styles);

function Header({ title = '', onBack }) {

    return <header className={cx("header")}>
        <button className={cx("back-btn")} onClick={onBack}>
            <IconChevronLeft />
        </button>
        <h4 className={cx("header-title")}>{title}</h4>
    </header>


}

Header.prototype={
    title:PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired
}
export default Header