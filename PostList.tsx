// PostList.tsx

import { Post } from "@/types/post";
import PostCard from "./PostCard";

type PostListProps = {
    posts: Post[]
}

export default function PostList(props: PostListProps){
    return (
            <div className="cardList">
                {props.posts.map(
                    (p) => {
                    
                        return (
                            <PostCard
                              key={p.id}
                              post={p}
                            
                            ></PostCard>
                        );
                    
                    }
                )}
            </div>
    );
}