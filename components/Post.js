export function Header(props) {
    return (
        <div>
            <></> //vote
            <div>
                <div className="head">
                    <CommentIcon count = "0" onClick={() => setComments([])}/>
                    <b>{p.title}</b>
                    <br/>
                    <span className="small">posted by {props.author}</span> 
                </div>
                    
                <PostBody>
                    {p.text}
                </PostBody>
            </div>
        </div>
    );
}