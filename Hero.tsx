type HeroProps ={
  recentPostCount: number;
  noticeCount:number;
}

export default function Hero(props: HeroProps) {
  return (
    <section className="hero">
      <div className="container heroInner">
        <div className="heroText">
          <span className="eyebrow">CAMPUS COMMUNITY</span>

          <h1>
            학교 생활을
            <br />한 곳에서
          </h1>

          <p>
            공지사항부터 스터디, 자유게시판까지 CampusBoard에서 빠르게
            확인하세요.
          </p>

          <button className="primaryButton">게시글 둘러보기</button>
        </div>

        <div className="heroPanel">
          <div className="heroPanelTop">오늘의 CampusBoard</div>

          <div className="statGrid">
            <div className="statCard">
              <strong>{props.recentPostCount}</strong>

              <span>최근 게시글</span>
            </div>

            <div className="statCard">
              <strong>{props.noticeCount}</strong>

              <span>새 공지</span>
            </div>

            <div className="statCard">
              <strong>12</strong>

              <span>진행 중 스터디</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
