import { usePostIds, usePosts } from "../hooks/posts";
import { Post } from "./Post";

export function PostList(props) {
    var postIds = usePostIds();
    var posts = usePosts(postIds);

    var postObjects = posts.map((post) => {
        var str = JSON.stringify(post, null, 4);
        return (<Post key={post.entity.id} post={post}></Post>)
    });

    return (
        <div style={{whiteSpace: "pre"}}>
            {postObjects}
        </div>
    );
}