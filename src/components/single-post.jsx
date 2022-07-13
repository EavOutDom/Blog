import React from "react";
import { Link } from "react-router-dom";
const SinglePost = ({ post }) => {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className="p-2 shadow-md">
                <h1 className={"font-semibold"}>{post.title}</h1>
                <h1 className="text-sm text-gray-500">{post.date}</h1>
                <h1>
                    {post.body.length <= 30
                        ? post.body
                        : `${post.body.slice(0, 30)}...`}
                </h1>
            </div>
        </Link>
    );
};

export default SinglePost;
