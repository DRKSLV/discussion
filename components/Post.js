import { useState } from "react";

import CommentIcon from "../res/img/commentIcon.svg"
import { Vote } from "./Vote";
import { Timestamp } from "./Timestamp"

import s from "../style/post.module.sass";

import { CommentSection } from "./CommentSection";

export function Post(props) {
    var p = props.post;
    var [commentsOpen, setCommentsOpen] = useState(false);

    return (
        <>
            <div className={s.post} onClick={()=>setCommentsOpen(!commentsOpen)}>
                <Vote votes={p.entity.votes}></Vote>
                <div className={s.content}>
                    <div>
                        <div className={s.comments}>
                            {(p.entity.comment.rgt-p.entity.comment.lft-1)/2}
                            <CommentIcon/>
                        </div>
                        <p>
                            <b>{p.title}</b><br/>
                            <span className={s.author}>posted by {p.author ? p.author.username : "❌DELETED❌"}</span>
                        </p>
                    </div>

                    <div className={s.body}>
                        <p>{p.text}</p>
                    </div>
                    
                    <Timestamp time={p.createdAt} edit={p.updatedAt}></Timestamp>
                </div>
            </div>
            <CommentSection id={p.entity.id} open={commentsOpen}/>
        </>
    );
}