import { useEffect } from "react";
import { postApi } from "../api/PostService";
import { useInView } from "react-intersection-observer";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../1. app/storeProvider/hooks/redux";
import { postsSlice } from "../../../1. app/storeProvider/reducers/postsSlice";
import { scrollSlice } from "../../../1. app/storeProvider/reducers/scrollSlice";
import PostItem from "../../../5. entities/Post/ui/PostItem";

const PostsList = () => {
  const { increment } = postsSlice.actions;
  const { addValue } = scrollSlice.actions;
  const dispatch = useAppDispatch();
  const { current } = useAppSelector((state) => state.postsTotalSlice);
  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  const { value } = useAppSelector((state) => state.scrollSlice);
  const { data, error } = postApi.useFetchPostQuery(current);

  useEffect(() => {
    window.scrollTo({
      top: value,
      // behavior: "smooth",
    });
  }, [value]);

  useEffect(() => {
    if (inView) {
      dispatch(increment());
    }
  }, [dispatch, inView, increment]);

  return error ? (
    <div className="post-item">
      <div className="error">Ошибка загрузки данных</div>
    </div>
  ) : (
    <div className="posts-block">
      {data?.map((item) => (
        <div
          key={item.id}
          ref={ref}
          onClick={() => dispatch(addValue(window.scrollY))}>
          <div>
            <PostItem post={item} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
