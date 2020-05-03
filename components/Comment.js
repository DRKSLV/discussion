export function Comment(props) {
    return (
        <div>
            <Vote votes={p.entity.votes}></Vote>
            <div>
                <div>
                    <p>
                        <span className={style.author}>posted by {p.author.username}</span>
                    </p>
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