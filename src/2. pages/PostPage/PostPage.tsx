import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../1. app/storeProvider/hooks/redux';
import { useEffect, useState } from 'react';
import { IPost } from '../../5. entities/Post/model/models/IPost';
import CustomButton from '../../6. shared/ui/CustomButton';

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
    <div className="post-page">
      <div className="post-page__content">
        <div className="post-page__content-header">
          <h3>{currentPost?.id}</h3>
          <span>{currentPost?.title}</span>
        </div>
        <div className="post-page__content-body">
          <p>{currentPost?.body}</p>
        </div>
      </div>
      <div className="post-page__ux">
        <CustomButton link={'/'}>
          <div>Назад</div>
        </CustomButton>
      </div>
    </div>
  );
}

export default PostPage;
