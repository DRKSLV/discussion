import style from "../../style/header.module.sass";

export function Header(props) {
    return (
        <nav className={style.header}>
            <ul>
                <li>Settings</li>
                <li>User</li>
            </ul>
        </nav>
    );
}