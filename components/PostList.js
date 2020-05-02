import { usePostIds, usePosts } from "../hooks/posts";

export function PostList(props) {
    var postIds = usePostIds();
    var posts = usePosts(postIds);

    var postObjects = posts.map((post) => {
        var str = JSON.stringify(post, null, 4);
        return (<li key={post.entity.id}>{str}</li>)
    });

    return (
        <div style={{whiteSpace: "pre"}}>
            <ul>
                {postObjects}
            </ul>
        </div>
    );
}