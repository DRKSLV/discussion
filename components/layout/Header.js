import style from "../../style/header.module.sass";
import EyeOfJudgement from "../../res/svg/eyeOfJudgementEllipse.svg"

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
            <div className={style.logo}>
                <EyeOfJudgement/>
            </div>
            <div className={style.headerTray}>
                {props.children}
            </div>
        </nav>
    );
}