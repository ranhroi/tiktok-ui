import { Link } from "react-router-dom"
import classNames from "classnames/bind"
import styles from "./Button.module.scss"

const cx = classNames.bind(styles)

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    small = false,
    large = false,
    rounded= false,
    disabeld = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Compo = "button"
    const props = {
        onClick,
        ...passProps
    }
    //Remove event Listener when button is disabeld
    if (disabeld) {
        Object.keys(props).forEach(key => {
            if (key.startsWith("on") && typeof props[key] === "function") {
                delete props[key]
            }
        }
        )
    }

    if (to) {
        Compo = Link
    } else if (href) {
        props.href = href
        Compo = "a"
    }


    let classes = cx("wrapper", {
        [className]:className,
        text,
        primary,
        outline,
        small,
        large,
        rounded,
        disabeld,
    })

    return (
        <Compo className={classes} {...props}>
            {leftIcon && <div className={cx("icon-button")}>{leftIcon}</div>}
            {children&& <span className={cx("title-button")}>{children}</span>}
            {rightIcon && <div className={cx("icon-button")}>{rightIcon}</div>}
        </Compo>
    )
}
export default Button