import React from "react";
import { Link } from "react-router-dom";

const NewPost = ({ title, body, handleAdd, setPostTitle, setPostBody }) => {
    return (
        <div>
            <h1 className="text-center my-2">New Post</h1>
            <div className="w-72 mx-auto">
                <input
                    className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="title..."
                    value={title}
                    onChange={(e) => setPostTitle(e.target.value)}
                />
                <textarea
                    className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="body..."
                    rows={2}
                    value={body}
                    onChange={(e) => setPostBody(e.target.value)}
                />

                <div className="w-full flex justify-end">
                    <button
                        onClick={handleAdd}
                        className={"bg-black w-24 text-white py-2 rounded-lg "}
                    >
                        <Link to={"/"}>ADD</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewPost;
