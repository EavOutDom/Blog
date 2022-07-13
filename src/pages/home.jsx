import React from "react";
import PostList from "../components/post-list";

const Home = ({ posts }) => {
    return (
        <div>
            {posts.length ? (
                <PostList posts={posts} />
            ) : (
                <div className={"h-40 flex items-center justify-center"}>
                    No post
                </div>
            )}
        </div>
    );
};

export default Home;
