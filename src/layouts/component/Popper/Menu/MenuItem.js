
import classNames from 'classnames/bind';
import Button from '~/component/Button';
import styles from "./Menu.module.scss"

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
} export default MenuItem