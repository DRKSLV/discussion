import { useCommentIds, useComments } from "../hooks/comments";
import { Comment } from "./Comment";

import s from "../style/post.module.sass";

export function CommentSection(props) {
    //load comments
    var comIds = useCommentIds(props.open, props.id);
    var comments = useComments(comIds);

    console.log(comments)
    var comObjects = comments.map((comment) => {
        if(comment === "not epic") {
            return [];
        }
        return (<Comment key={comment.entityId} comment={comment}/>)
    });

    return (
        <>
        {
            props.open && 
            <div className={s.commentSection}>
                {comments[0] !== "not epic" ?
                (comments[0] ? 
                comObjects
                : "There are no Comments")
                : "Loading..."} 
            </div>
        }
        </>
    );
}
