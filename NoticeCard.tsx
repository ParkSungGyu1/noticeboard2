import { Notice } from "@/types/post";
import NoticeLikeButton from "./NoticeLikeButton";
import NoticeBookMarkButton from "./NoticeBookMarkButton";

type NoticeCardProps = {
    notice: Notice
}

export default function NoticeCard(props: NoticeCardProps) {
  return (
    <article className="noticeCard" key={props.notice.id}>
      <span className="categoryBadge">{props.notice.category}</span>

      <h3>{props.notice.title}</h3>
      <NoticeLikeButton></NoticeLikeButton>
      <NoticeBookMarkButton></NoticeBookMarkButton>
    </article>
  );
}
