import React from "react";
import SinglePost from "./single-post";

const PostList = ({ posts }) => {
    return (
        <div>
            {posts?.map((post) => (
                <SinglePost key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostList;
