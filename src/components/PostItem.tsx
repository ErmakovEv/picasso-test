import { useEffect } from 'react';
import { postApi } from '../services/PostService';
import { useInView } from 'react-intersection-observer';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { totalSlice } from '../store/reducers/postsTotalSlice';

function PostItem() {
  const { increment } = totalSlice.actions;
  const dispatch = useAppDispatch();
  const { current } = useAppSelector((state) => state.postsTotalSlice);
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const { data } = postApi.useFetchPostQuery(current);

  useEffect(() => {
    console.log('!!!');
    dispatch(increment());
  }, [dispatch, inView, increment]);

  console.log(inView);

  return (
    <div className="posts-block">
      {data?.map((item) => (
        <div className="post-item" key={item.id} ref={ref}>
          {item.id} {item.title}
        </div>
      ))}
    </div>
  );
}

export default PostItem;
