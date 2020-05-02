import CommentIcon from "../res/img/commentIcon.svg"
import { Vote } from "./Vote";
import { Timestamp } from "./Timestamp"

export function Post(props) {
    var p = props.post;

    return (
        <div>
            <Vote votes={p.entity.votes}></Vote>
            <div>
                <div>
                    <CommentIcon className="comments" width="2rem" height="2rem"/>
                    <b>{p.title}</b>
                    <br/>
                    <span>posted by {p.author.username}</span> 
                </div>
                <div>
                    <p style={{"whiteSpace":"pre-wrap"}}>
                        {p.text}
                    </p>
                </div>
                <div>
                    <Timestamp time={p.createdAt} edit={p.updatedAt}></Timestamp>
                </div>
            </div>
        </div>
    );
}