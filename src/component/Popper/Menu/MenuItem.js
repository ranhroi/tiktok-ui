import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from "./Menu.module.scss"
import Button from '~/component/Button';

const cx = classNames.bind(styles)
function MenuItem({ data, onClick }) {
    const classes = cx("menu-item", {
        separate: data.separate
    }
    )
    return (
        <Button
            to={data.to}
            leftIcon={data.icon}
            className={classes}
            onClick={onClick}
        >{data.title}</Button>
    )
}
MenuItem.prototype={
  data:PropTypes.object.isRequired,
    onClick:PropTypes.func
}
export default MenuItem