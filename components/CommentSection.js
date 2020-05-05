import { useCommentIds, useComments } from "../hooks/comments";
import { Comment } from "./Comment";

import s from "../style/post.module.sass";

export function CommentSection(props) {
    //load comments
    var comIds = useCommentIds(props.open, props.id);
    var comments = useComments(comIds);

    var comObjects = comments.map((comment) => {
        return (<Comment key={comment.entity.id} comment={comment}/>)
    });

    return (
        <>
        {
            props.open && 
            <div className={s.commentSection}>
                {comObjects[0] ? comObjects : "There are no Comments"} 
            </div>
        }
        </>
    );
}
