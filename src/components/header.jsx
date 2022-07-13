import React from "react";
import { Link } from "react-router-dom";
const Header = ({ search, setSearch }) => {
    return (
        <div
            className={
                "bg-purple-600 rounded-t-md h-12 flex items-center px-4 justify-between text-white"
            }
        >
            <Link to="/">
                <h1 className="font-semibold">BLOG.</h1>
            </Link>
            <div className="flex">
                <Link to="/">
                    <h1 className="mx-1">Home</h1>
                </Link>
                <Link to="/post">
                    <h1 className="mx-1">Post</h1>
                </Link>
            </div>
            <form
                className="flex justify-end"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    className={
                        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-10/12 p-2"
                    }
                    placeholder="search..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        console.log(search);
                    }}
                />
            </form>
        </div>
    );
};

export default Header;
