"use client"

import { useState } from "react"


// 북마크 토글버튼을 만들어서 
// NoticeCard 하단에 위치
export default function NoticeBookMarkButton() {

    const[isBookMark, setIsBookMark] = useState(false)

    function handleBookMark(){
      setIsBookMark(!isBookMark)
    }

    return (
      <button
        className= {
          isBookMark ? "favoriteButton active" : "favoriteButton"
        }
        onClick={handleBookMark}
      >
        북마크
      </button>
    )
}
