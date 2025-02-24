# 🚀 Next.js Blog App  

This project is a **Next.js-based blog application** that dynamically fetches and displays blog posts from JSON files stored in the `blogData` folder.  

## 📌 Features  
- ✅ Fetches blog data from an API (`/api/blogs`)  
- ✅ Renders blog posts dynamically  
- ✅ Uses `dangerouslySetInnerHTML` to display HTML content from JSON  
- ✅ Styled with Tailwind CSS  

## 📂 Folder Structure  
/my-blog-app
├── /app (App Router) OR /pages (Pages Router)
│ ├── /api
│ │ ├── /blogs
│ │ │ ├── route.js (App Router) OR blogs.js (Pages Router)
│ ├── /blogs
│ │ ├── page.js (App Router) OR blogs.js (Pages Router)
├── /components
│ ├── Blog.js
├── /blogData
│ ├── blog1.json
│ ├── blog2.json
├── README.md
├── package.json
├── next.config.js
├── tailwind.config.js

bash
Copy code

## 🔧 Setup & Installation  
1️⃣ Clone the repository:  
```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
2️⃣ Install dependencies:

sh
Copy code
npm install
3️⃣ Run the development server:

sh
Copy code
npm run dev
Visit http://localhost:3000 in your browser.

📝 API Route (/api/blogs)
This API reads JSON files from the blogData folder and serves them.

Example JSON file (blogData/blog1.json):
json
Copy code
{
  "title": "How to Learn JavaScript",
  "content": "<div class='p-4 bg-gray-100 rounded-lg shadow-md'><h2 class='text-xl font-bold mb-2'>How to Learn JavaScript</h2><ul class='list-decimal list-inside space-y-2'><li><strong>Understand the Basics:</strong> Learn about variables, data types, functions, and loops.</li></ul></div>"
}
API Response (GET /api/blogs):
json
Copy code
{
  "blogs": [
    {
      "title": "How to Learn JavaScript",
      "content": "<div class='p-4 bg-gray-100 rounded-lg shadow-md'><h2 class='text-xl font-bold mb-2'>How to Learn JavaScript</h2>...</div>"
    }
  ]
}
📜 Blog Component (components/Blog.js)
javascript
Copy code
export default function Blog({ title, content }) {
    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
}
📄 Blogs Page (/blogs)
javascript
Copy code
"use client";
import { useEffect, useState } from "react";
import Blog from "@/components/Blog";

export default function BlogsPage() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("/api/blogs")
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
🛠 API Route (/api/blogs)
javascript
Copy code
import { NextResponse } from "next/server";
import * as fs from "fs/promises";
import path from "path";

export async function GET() {
    try {
        const blogDir = "blogData";
        let allBlogs = await fs.readdir(blogDir);
        let blogData = [];

        for (const blog of allBlogs) {
            const filePath = path.join(blogDir, blog);
            const fileContent = await fs.readFile(filePath, "utf-8");
            blogData.push(JSON.parse(fileContent));
        }

        return NextResponse.json({ blogs: blogData });
    } catch (error) {
        return NextResponse.json({ error: "Failed to load blogs" }, { status: 500 });
    }
}