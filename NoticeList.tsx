import { Notice } from "@/types/post";
import NoticeCard from "./NoticeCard"

type NoticeListProps = {
    notices : Notice[]
}


export default function NoticeList(props : NoticeListProps) {
  return (
    <div className="cardList">
      {
        // 아래 article 이하 부분을 component로 분리하고
        // props로 데이터를 전달받을 수 있도록 개발
        props.notices.map((n) => (
          <NoticeCard
            key={n.id}
            notice={n}
          ></NoticeCard>
        ))
      }
    </div>
  );
}
