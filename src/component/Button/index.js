import { Link } from "react-router-dom"
import classNames from "classnames/bind"
import styles from "./Button.module.scss"

const cx = classNames.bind(styles)

function Button({to, href, primary = false, outline = false, small = "medium", children, onClick, ...passProps }) {
    let Compo = "button"
    const props = {
        onClick, ...passProps
    }

    if (to) {
        Compo = Link
    } else if (href) {
        props.href = href
        Compo = "a"
    }

    let classes = cx("wrapper", {
        primary, outline, small
    })

    return (
        <Compo className={classes} {...props}>
            <span> {children}</span>
        </Compo>
    )
}
export default Button