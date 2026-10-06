import { Post } from "@/types/post";
import LikeButton from "./LikeButton";
import FavoriteButton from "./FavoriteButton";

type PostCardProps = {
    post: Post;
}
export default function PostCard(props: PostCardProps) {

    return (
        <article className="postCard" key={props.post.id}>
            <span className="categoryBadge">
                {props.post.category}
            </span>

            <h3>
                {props.post.title}
            </h3>

            <p>
                {props.post.author}
            </p>
            <LikeButton></LikeButton>
            <FavoriteButton></FavoriteButton>
        </article>
    );

}