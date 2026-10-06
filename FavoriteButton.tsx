"use client";

import { useState } from "react"

export default function FavoriteButton() {

    // useState로 true/false를 관리
    // 변수명 isFavorite, 초기값 false인 
    // 상태관리되는 변수 isFavorite, 
    // 함수 setIsFavorite를 useState로 만들어 주세요

    const[isFavorite, setIsFavorite] = useState(false);


    function handleFavoriteClick(){
        setIsFavorite(!isFavorite)
    }

    return (
        <button
            className = {
                isFavorite ? "favoriteButton active" : "favoriteButton"
            }
            onClick={handleFavoriteClick}
        >찜하기</button>
    )
}

