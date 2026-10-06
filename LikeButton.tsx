"use client";
import { useState } from "react";

 
// 하위 컴포넌트는 사용자와 상호작용을 한다

export default function LikeButton() {
    // useState
    //const[변수명, 변수를세팅할함수] = useState(초기값);
    // 초기값은 뭐가 들어가든 상관 없지만 최초로 들어간 값이
    // 해당 변수의 데이터 타입 고정
    const[likeCount, setLikeCount] = useState(0); //2개

    // const likeCount = 0
    // function setLikeCount(){} 생긴거임
    // 위 함수는 likeCount를 수정하는 함수

    function handleLikeClick(){ // 버튼이 눌렸을 때 수행하는 함수
        setLikeCount(likeCount + 1) // likeCount를 높여주는 함수
    }
    
    function handleLikeCountDown(){
        setLikeCount(likeCount - 1)
    }

    return (
        
        <div>
            <button
                className="likeButton"
                onClick={handleLikeCountDown}
            >빼기</button>
            <span>{likeCount}</span>
            <button
                className="likeButton"
                onClick={handleLikeClick}
            >더하기</button>
        </div>

    )
}
