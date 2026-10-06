// 기본세팅 합시다.
// 함수의 이름은 txs 파일 이름과 동일
// 이름은 무조건 대문자로 시작
export default function Header() {
  return (
    <header className="siteHeader">
      <div className="container headerInner">
        <div className="logo">CampusBoard</div>

        <nav className="navigation">
          <span>홈</span>
          <span>게시판</span>
          <span>스터디</span>
        </nav>
      </div>
    </header>
  );
}
