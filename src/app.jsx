import React, { useEffect, useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewPost from "./pages/new-post";
import PostPage from "./pages/post-page";
import Error from "./pages/error";
import axios from "axios";
import UpdatePost from "./pages/update-post";

const m = new Date();
const dateString =
    m.getUTCFullYear() +
    "-" +
    ("0" + (m.getUTCMonth() + 1)).slice(-2) +
    "-" +
    ("0" + m.getUTCDate()).slice(-2) +
    " " +
    ("0" + m.getUTCHours()).slice(-2) +
    ":" +
    ("0" + m.getUTCMinutes()).slice(-2) +
    ":" +
    ("0" + m.getUTCSeconds()).slice(-2);

const App = () => {
    // const navigate = useNavigate();
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const [updateTitle, setUpdateTitle] = useState("");
    const [updateBody, setUpdateBody] = useState("");
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const fetchPosts = async () => {
        try {
            const response = await axios.get("http://localhost:3001/posts");
            const data = response.data;
            setPosts(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleDelete = (id) => {
        try {
            axios.delete(`http://localhost:3001/posts/${id}`);
            setPosts(posts.filter((post) => post.id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        if (postTitle.trim() === "" || postBody.trim() === "") {
            alert("Please fill in all fields");
            return;
        } else {
            try {
                const response = await axios.post(
                    "http://localhost:3001/posts",
                    {
                        title: postTitle,
                        body: postBody,
                        date: dateString,
                    }
                );
                const data = response.data;
                setPosts([...posts, data]);
                setPostBody("");
                setPostTitle("");
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleUpdate = async (id) => {
        try {
            const response = await axios.put(
                `http://localhost:3001/posts/${id}`,
                {
                    // id: id,
                    title: updateTitle,
                    body: updateBody,
                    date: dateString,
                }
            );
            const data = response.data;
            console.log(data);
            setPosts(posts.map((post) => (post.id === id ? data : post)));
            setUpdateBody("");
            setUpdateTitle("");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (search.trim() !== "") {
            const results = posts.filter((post) => {
                return Object.values(post)
                    .join("")
                    .toLowerCase()
                    .includes(search.toLowerCase());
            });
            setSearchResults(results);
        } else {
            setSearchResults(posts);
        }
    }, [search, posts]);

    return (
        <BrowserRouter>
            <div className="bg-yellow-400 h-screen">
                <div
                    className={
                        "bg-white sm:w-[38rem] overflow-auto w-80 h-[30rem] absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] rounded-md shadow-xl"
                    }
                >
                    <Header setSearch={setSearch} search={search} />
                    <Routes>
                        <Route
                            path="/"
                            element={<Home posts={searchResults} />}
                        />
                        <Route
                            path="/post"
                            element={
                                <NewPost
                                    title={postTitle}
                                    setPostBody={setPostBody}
                                    body={postBody}
                                    setPostTitle={setPostTitle}
                                    handleAdd={handleAdd}
                                />
                            }
                        />
                        <Route
                            path="update/:id"
                            element={
                                <UpdatePost
                                    posts={posts}
                                    title={updateTitle}
                                    setUpdateBody={setUpdateBody}
                                    body={updateBody}
                                    setUpdateTitle={setUpdateTitle}
                                    handleUpdate={handleUpdate}
                                />
                            }
                        />
                        <Route
                            path="/posts/:id"
                            element={
                                <PostPage
                                    posts={posts}
                                    handleDelete={handleDelete}
                                    handleUpdate={handleUpdate}
                                />
                            }
                        />
                        <Route path="*" element={<Error />} />
                    </Routes>
                    {/* <Footer /> */}
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
