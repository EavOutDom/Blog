import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
const PostPage = ({ posts, handleDelete }) => {
    // console.log(handleDelete);
    const { id } = useParams();
    // const postDetails = posts.find((post) => post.id === parseInt(id));
    const [postDetails, setPostDetails] = useState({});

    const fetchPostDetails = async (id) => {
        try {
            const response = await axios.get(
                `http://localhost:3001/posts/${id}`
            );
            const data = response.data;
            setPostDetails(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPostDetails(id);
    }, [id]);

    return (
        <div className="p-4">
            <h1 className={"font-semibold my-1"}>{postDetails.title}</h1>
            <h1 className={"font-sm text-gray-500 my-1"}>{postDetails.date}</h1>
            <h1 className={"my-1"}>{postDetails.body}</h1>
            <div>
                <Link to={"/"}>
                    <button
                        className="bg-red-500 w-20 rounded-md py-1 text-white"
                        onClick={() => handleDelete(postDetails.id)}
                    >
                        DELETE
                    </button>
                </Link>
            </div>
            {!postDetails && <div>Post not found</div>}
        </div>
    );
};

export default PostPage;
