"use client"

import { useState } from "react"


// 좋아요 + 만 가능하도록 버튼을 만들어서
// NoticeCard 하단에 위치
export default function NoticeLikeButton() {
    const[likeCount, setLikeCount] = useState(0);

    function handleLikeClick(){
        setLikeCount(likeCount + 1)
    }

    return (
        <button
            onClick={handleLikeClick}
        >
            좋아요 {likeCount}
        </button>
    )
}
