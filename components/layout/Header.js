import style from "../../style/header.module.sass";

export function HeaderButton(props) {
    return (
        <div className={style.headerButton}>
            {props.icon && props.icon}
        </div>
    );
}

export function Header(props) {
    return (
        <nav className={style.header}>
            {props.children}
        </nav>
    );
}