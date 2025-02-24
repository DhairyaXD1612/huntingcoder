import { NextResponse } from "next/server";
import * as fs from "fs/promises";
import path from "path";

export async function GET() {
    const blogDir = "blogData";
    let allBlogs = await fs.readdir(blogDir);
    let blogData = [];

    for (const blog of allBlogs) {
        const filePath = path.join(blogDir, blog);
        const fileContent = await fs.readFile(filePath, "utf-8");
        blogData.push(JSON.parse(fileContent));
    }

    return NextResponse.json({ blogs: blogData });
}
