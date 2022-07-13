import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
const UpdatePost = ({
    posts,
    title,
    body,
    setUpdateTitle,
    setUpdateBody,
    handleUpdate,
}) => {
    const { id } = useParams();
    const post = posts.find((post) => post.id === parseInt(id));
    

    useEffect(() => {
        if(post){
            setUpdateTitle(post.title);
            setUpdateBody(post.body);
        }
    }, [post, setUpdateBody, setUpdateTitle]);
    return (
        <div>
            <h1 className="text-center my-2">Update Post</h1>
            <div className="w-72 mx-auto">
                <input
                    className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="title..."
                    value={title}
                    onChange={(e) => setUpdateTitle(e.target.value)}
                />
                <textarea
                    className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="body..."
                    rows={2}
                    value={body}
                    onChange={(e) => setUpdateBody(e.target.value)}
                />

                <div className="w-full flex justify-end">
                    <button
                        onClick={() => handleUpdate(post.id)}
                        className={"bg-black w-24 text-white py-2 rounded-lg "}
                    >
                        <Link to={"/"}>SAVE</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdatePost;
