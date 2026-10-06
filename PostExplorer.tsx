"use client"

import { Post } from "@/types/post";
import PostList from "./PostList";
import { useState } from "react";


type postExplorerProps = {
    posts : Post[]
}
export default function PostExplorer(props : postExplorerProps) {

    // keyword
    const[keyword, setKeyword] = useState("")

    // 공백을 가지고 검색
    // 대문자/소문자 구분 없이 검색
    const normalizedKeyword = keyword.trim().toLowerCase()

    const filteredPosts = props.posts.filter((post) => {
        return (
            post.title.toLowerCase().includes(normalizedKeyword)
        )
    })


    return (
        
        <div>
            <input 
                className="searchInput"
                type="text" 
                placeholder="게시글 검색" 
                value={keyword}
                onChange={(event) => {setKeyword(event.target.value)}}
            />

            <PostList
                posts={filteredPosts}
            >
            </PostList>
        </div>
    )
}
