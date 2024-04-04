import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { useEffect, useState } from "react";
import { IPost } from "../models/IPost";

function PostPage() {
  const { id } = useParams();
  const { posts } = useAppSelector((state) => state.postsTotalSlice);
  const [currentPost, setCurrentPost] = useState<IPost | undefined>(undefined);

  useEffect(() => {
    let post: IPost | undefined;
    if (id) {
      post = posts.find((item) => item.id === +id);
    }
    setCurrentPost(post);
  }, [id, posts]);

  return (
    <div>
      <h4 style={{ color: "black" }}>{currentPost?.id}</h4>;
      <h4 style={{ color: "black" }}>{currentPost?.title}</h4>;
      <p style={{ color: "black" }}>{currentPost?.body}</p>;
      <Link to={"/"}>На главную</Link>
    </div>
  );
}

export default PostPage;
