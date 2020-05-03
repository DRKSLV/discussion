import style from "../../style/container.module.sass";

export function Container(props) {
    return (
        <div className={style.container}>
            {props.children}
        </div>
    );
}