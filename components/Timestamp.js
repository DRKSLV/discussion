import moment from "moment";

export function Timestamp(props) {
    var time = moment(props.time);
    var editTime = props.edit ? moment(props.edit) : null;

    var edited = editTime && !editTime.isSame(time);

    return (
        <span>created {time.fromNow()} {edited && "－ edited "+editTime.fromNow()}</span>
    );
}