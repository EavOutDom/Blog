import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
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
        </div>
    );
};

export default Header;
