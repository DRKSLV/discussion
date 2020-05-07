import { useCommentIds, useComments } from "../hooks/comments";
import { Comment } from "./Comment";

import { CSSTransition, SwitchTransition } from "react-transition-group";

import s from "../style/commentSection.module.sass";

export function CommentSection(props) {
    console.log("ehrenlos");

    //load comments
    var comIds = useCommentIds(props.open, props.id);
    var comments = useComments(comIds);

    //required by css switch transition
    var animKey = undefined;

    var comObjects = comments.map((comment) => {
        //comments not yet loaded
        if(comment === "not epic") {
            animKey="wait";
            return <p>Loading...</p>;
        } 
        //COMMENTS!
        animKey="cs";
        return (<Comment key={comment.entityId} comment={comment}/>)
    });
    //no comments :(
    if (comments[0] === "not epic") {
        animKey = "no";
        comObjects = [<p>There are no Comments</p>];
    }
    if(!props.open) {
        animKey="hurensohn nein";
        comObjects = [<></>];
    }

    console.log(animKey);

    return (
        <SwitchTransition mode={"out-in"}>
            <CSSTransition 
                timeout={300} 
                classNames={{ ...s }} 
                className={s.commentSection} 
                component="div"
                key={animKey}
            >     
                <div>{comObjects}</div>
            </CSSTransition>
        </SwitchTransition>
    );
}
