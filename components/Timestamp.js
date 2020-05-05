import moment from "moment";
import style from "../style/post.module.sass";

export function Timestamp(props) {
    var time = moment(props.time);
    var editTime = props.edit ? moment(props.edit) : null;

    var edited = editTime && !editTime.isSame(time);

    return (
        props.compact ? 
    <span className={style.timestamp}>{time.fromNow()} {edited && "(edited)"}</span>
        : <span className={style.timestamp}>created {time.fromNow()} {edited && "－ edited "+editTime.fromNow()}</span>
    );
}