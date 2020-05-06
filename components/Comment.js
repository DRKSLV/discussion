import { Vote } from "./Vote";
import { Timestamp } from "./Timestamp"
import { Threadindent } from "./threadindent"

import s from "../style/post.module.sass";

export function Comment(props) {
    var c = props.comment;

    var indents = [];
    for(let i=0; i<c.level; i++) {
        indents.push(<Threadindent/>)
    }


    return (
        <div className={s.commentWrap}>
            <div className={s.indents}>{indents}</div>
            <div className={s.comment}>
                <div className={s.indentVote}>
                    <Vote votes={c.entity.votes} small={true}></Vote>
                    <Threadindent></Threadindent>
                </div>
                <div className={s.content}>
                    <div>
                        <p className={s.author}>
                            posted by <span>{c.author ? c.author.username : "❌DELETED❌"}</span> <b>·</b> <Timestamp time={c.createdAt} edit={c.updatedAt} compact={true}></Timestamp>
                        </p>
                    </div>
                    <div className={s.body}>
                        <p>
                            {c.text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}