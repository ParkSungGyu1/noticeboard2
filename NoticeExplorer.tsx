"use client"

import { Notice } from "@/types/post";
import NoticeList from "./NoticeList";
import { useState } from "react";

type NoticeExplorerProps = {
    notices: Notice[]
}


// 공지사항의 제목을 기준으로 검색이 가능하도록 기능을 개발하라.
export default function NoticeExplorer(props : NoticeExplorerProps) {

    const[keyword, setKeyword] = useState("");

    const normalizedKeyword = keyword.trim().toLowerCase()

    const filteredNotices = props.notices.filter((notice) => {
        return (notice.title.toLowerCase().includes(normalizedKeyword))
    })

    return (
        <div>
            <input
                className="searchInput"
                type="text"
                placeholder="공지사항 제목 검색"
                value={keyword}
                onChange={(event) => (setKeyword(event.target.value))}
            />

            <NoticeList
                notices={filteredNotices}
            >

            </NoticeList>
        </div>
    )
}
