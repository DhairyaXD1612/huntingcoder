"use client"; // If using Next.js app router
import { useEffect, useState } from "react";
import Blog from "../components/Blog"; // Import your Blog component

export default function BlogsPage() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("/api/blogAPI")
            .then((res) => res.json())
            .then((data) => setBlogs(data.blogs))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="container mx-auto p-4">
            {blogs.map((blog, index) => (
                <Blog key={index} title={blog.title} content={blog.content} />
            ))}
        </div>
    );
}
