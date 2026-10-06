//NoticeBoard.tsx
"use client";

import type {
    Notice
} from "@/types/post";

import NoticeExplorer
    from "./NoticeExplorer";


type NoticeBoardProps = {
    initialNotices: Notice[];
};


export default function NoticeBoard(
    props: NoticeBoardProps
) {

    return (
        <div className="postBoard">
            <section className="writeSection">
                <div className="writeSectionHeader">
                    <div>
                        <span className="sectionLabel">
                            WRITE
                        </span>

                        <h2>
                            새 공지사항 작성
                        </h2>
                    </div>

                    <p className="postCount">
                        현재 공지사항 {props.initialNotices.length}개
                    </p>
                </div>


                <form className="postForm">
                    <label className="formField">
                        <span>
                            카테고리
                        </span>

                        <select>
                            <option value="학사">학사</option>
                            <option value="시설">시설</option>
                            <option value="행사">행사</option>
                            <option value="기타">기타</option>
                        </select>
                    </label>


                    <label className="formField">
                        <span>
                            제목
                        </span>

                        <input
                            type="text"
                            placeholder="공지사항 제목을 입력하세요."
                        />
                    </label>


                    <label className="formField">
                        <span>
                            내용
                        </span>

                        <textarea
                            placeholder="공지사항 내용을 입력하세요."
                            rows={6}
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
                            공지사항 등록
                        </button>
                    </div>
                </form>
            </section>


            <section className="postSearchSection">
                <div className="sectionHeader">
                    <div>
                        <span className="sectionLabel">
                            NOTICES
                        </span>

                        <h2>
                            공지사항 둘러보기
                        </h2>
                    </div>
                </div>

                <NoticeExplorer
                    notices={props.initialNotices}
                />
            </section>
        </div>
    );

}