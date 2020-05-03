import CommentIcon from "../res/img/commentIcon.svg"
import { Vote } from "./Vote";
import { Timestamp } from "./Timestamp"

import style from "../style/post.module.sass";
import { useState } from "react";

import { useCommentIds, useComments } from "../hooks/comments";
import { Comment } from "./Comment";


export function Post(props) {
    var p = props.post;

    //load comments
    var [commentsOpen, setCommentsOpen] = useState(false);
    var comIds = useCommentIds(commentsOpen, p.entity.id);
    var comments = useComments(comIds);

    var comObjects = comments.map((comment) => {
        return (<Comment key={post.entity.id} comment={comment}/>)
    });

    return (
        <>
            <div className={style.post} onClick={()=>setCommentsOpen(!commentsOpen)}>
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
                        <p>
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
                    {comObjects}
                </div>
            }
        </>
    );
}