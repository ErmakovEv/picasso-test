import { useEffect } from 'react';
import { postApi } from '../services/PostService';
import { useInView } from 'react-intersection-observer';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { postsSlice } from '../store/reducers/postsSlice';
import { scrollSlice } from '../store/reducers/scrollSlice';
import PostItem from './PostItem';

const PostsList = () => {
  const { increment } = postsSlice.actions;
  const { addValue } = scrollSlice.actions;
  const dispatch = useAppDispatch();
  const { current } = useAppSelector((state) => state.postsTotalSlice);
  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  const { value } = useAppSelector((state) => state.scrollSlice);
  const { data } = postApi.useFetchPostQuery(current);

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

  return (
    <div className="posts-block">
      {data?.map((item) => (
        <div key={item.id} ref={ref} onClick={() => dispatch(addValue(window.scrollY))}>
          <div>
            <PostItem post={item} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
