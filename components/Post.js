import CommentIcon from "../res/img/commentIcon.svg"
import { Vote } from "./Vote";
import { Timestamp } from "./Timestamp"

import style from "../style/post.module.sass";
import { useState } from "react";

export function Post(props) {
    var p = props.post;
    var [commentsOpen, setCommentsOpen] = useState(false)

    return (
        <>
            <div className={style.post}>
                <Vote votes={p.entity.votes}></Vote>
                <div className={style.content}>
                    <div>
                        <div className={style.comments}>
                            {(p.entity.comment.rgt-p.entity.comment.lft-1)/2}
                            <CommentIcon/>
                        </div>
                        <p>
                            <b>{p.title}</b><br/>
                            <span className={style.author}>posted by {p.author.username}</span>
                        </p>
                        
                    </div>
                    <div className={style.body}>
                        <p style={{"whiteSpace":"pre-wrap"}}>
                            {p.text}
                        </p>
                    </div>
                    <div>
                        <Timestamp time={p.createdAt} edit={p.updatedAt}></Timestamp>
                    </div>
                </div>
            </div>
            {
                commentsOpen && 
                <div>

                </div>
            }
        </>
    );
}