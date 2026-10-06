import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NoticeBoard from "@/components/NoticeBoard";
import NoticeCard from "@/components/NoticeCard";
import NoticeExplorer from "@/components/NoticeExplorer";
import NoticeList from "@/components/NoticeList";
import PostBoard from "@/components/PostBoard";
import PostCard from "@/components/PostCard";
import PostExplorer from "@/components/PostExplorer";
import PostList from "@/components/PostList";
import { Post } from "@/types/post";



const notices = [
    {
        id: 1,
        title: "2026학년도 2학기 수강신청 안내",
        category: "학사"
    },
    {
        id: 2,
        title: "도서관 시험기간 운영시간 변경 안내",
        category: "시설"
    }
];


const recentPosts : Post[] = [
    {
        id: 1,
        title: "Spring 스터디 같이 하실 분 구합니다",
        author: "김학생",
        category: "스터디",
        content: "매주 수요일 저녁에 Spring을 함께 공부할 분을 모집합니다.",
        viewCount: 128
    },
    {
        id: 2,
        title: "프론트엔드 프로젝트 팀원 구해요",
        author: "이학생",
        category: "프로젝트",
        content: "프론트엔드 프로젝트 팀원을 구합니다 경력 상관 없습니다 열정만 있으면 됩니다.",
        viewCount: 10
    },
    {
        id: 3,
        title: "교내 축제 부스 추천해주세요",
        author: "박학생",
        category: "자유",
        content: "교내에서 축제를 곧 한다고 들었는데 괜찮은 부스 있으면 추천해주세요!!",
        viewCount: 66
    }
];

export default function Home() {

    return (
        <main>
            <Header></Header>


            <Hero 
              recentPostCount={recentPosts.length}
              noticeCount={notices.length}
            
            ></Hero>


            <section className="contentSection">
                <div className="container contentGrid">
                    <div className="boardSection">
                        <div className="sectionHeader">
                            <div>
                                <span className="sectionLabel">
                                    NOTICE
                                </span>

                                <h2>
                                    공지사항
                                </h2>
                            </div>

                            <span className="sectionLink">
                                전체보기
                            </span>
                        </div>

                        

                        <NoticeBoard
                            initialNotices={notices}
                        >
                        </NoticeBoard>
                    </div>


                    <div className="boardSection">
                        <div className="sectionHeader">
                            <div>
                                <span className="sectionLabel">
                                    RECENT
                                </span>

                                <h2>
                                    최근 게시글
                                </h2>
                            </div>

                            <span className="sectionLink">
                                전체보기
                            </span>
                        </div>

                        <PostBoard
                            initialPosts={recentPosts}
                        ></PostBoard>
                    </div>
                </div>
            </section>


            <footer className="footer">
                <div className="container">
                    <strong>
                        CampusBoard
                    </strong>

                    <p>
                        Campus life, connected.
                    </p>
                </div>
            </footer>
        </main>
    );

}