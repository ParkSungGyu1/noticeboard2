//PostBoard.tsx
// 강의자료 11일차
// 10번 복사 붙여넣기

// 강의자료 11일차 - 12번 css 복사후 global.css 하단에 이어서 붙이기
"use client";


import { useState } from "react";
import type {
    Post
} from "../types/post";

import PostExplorer
    from "./PostExplorer";


type PostBoardProps = {
    initialPosts: Post[];
};


export default function PostBoard(
    props: PostBoardProps
) {
    const[title, setTitle] = useState("")
    
    const[author, setAuthor] = useState("")
    
    // select 창도 동일하게 하시면 됩니다 input이랑 동일합니다!
    const[category, setCategory] = useState("자유")
    
    // textarea 이것도 동일합니다 input이랑! value랑 onChange 쓰인다는 말임!
    const[content, setContent] = useState("")

    const[statePosts, setStatePosts] = useState(props.initialPosts) // Post[]


    return (
        <div className="postBoard">
            <section className="writeSection">
                <div className="writeSectionHeader">
                    <div>
                        <span className="sectionLabel">
                            WRITE
                        </span>

                        <h2>
                            새 게시글 작성
                        </h2>
                    </div>

                    <p className="postCount">
                        현재 게시글 {props.initialPosts.length}개
                    </p>
                </div>


                <form 
                    className="postForm"
                    onSubmit={(event) => {
                        // 새로고침 방지
                        // submit 버튼을 눌러도 새로고침이 안된다
                        event.preventDefault()


                        // 사용자가 입력한 값으로 이루어진 새로운 객체를 만든다 
                        const newPost : Post = {
                            id: statePosts.length + 1, // 기존 배열의 길이 + 1
                            title: title,
                            category: category,
                            author: author,
                            content: content,
                            viewCount: 0
                        }

                        // 해당 객체를 기존 배열(statePosts) 에 추가한다
                        setStatePosts([
                            ...statePosts, // 기존껀 유지하고
                            newPost// 그 다음칸에 이걸 넣으세요
                        ])
                        

                        

                        // 그러면 알아서 그림을 새로 그린다
                    }}
                >
                    <label className="formField">
                        <span>
                            카테고리
                        </span>

                        <select
                            value={category}
                            onChange={(event) => (setCategory(event.target.value))}
                        >
                            <option value="자유">자유</option>
                            <option value="스터디">스터디</option>
                            <option value="프로젝트">프로젝트</option>
                            <option value="질문">질문</option>
                        </select>
                    </label>


                    <label className="formField">
                        <span>
                            제목
                        </span>

                        <input
                            type="text"
                            placeholder="제목을 입력하세요."
                            value={title}
                            onChange={(event) => (setTitle(event.target.value))}
                        />
                    </label>


                    <label className="formField">
                        <span>
                            작성자
                        </span>

                        <input
                            type="text"
                            placeholder="작성자 이름"
                            value={author}
                            onChange={(event) => (setAuthor(event.target.value))}
                        />
                    </label>


                    <label className="formField">
                        <span>
                            내용
                        </span>

                        <textarea
                            placeholder="게시글 내용을 입력하세요."
                            rows={6}
                            value={content}
                            onChange={(event) => (setContent(event.target.value))}
                        />
                    </label>


                    <div className="formActions">
                        <button
                            className="secondaryButton"
                            type="button"
                        >
                            초기화
                        </button>

                        <button
                            className="primaryButton"
                            type="submit"
                        >
                            게시글 등록
                        </button>
                    </div>
                </form>
            </section>


            <section className="postSearchSection">
                <div className="sectionHeader">
                    <div>
                        <span className="sectionLabel">
                            POSTS
                        </span>

                        <h2>
                            게시글 둘러보기
                        </h2>
                    </div>
                </div>

                <PostExplorer
                    posts={statePosts}
                />
            </section>
        </div>
    );

}