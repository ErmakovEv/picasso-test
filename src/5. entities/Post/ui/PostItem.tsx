import { IPost } from '../model/models/IPost';
import CustomButton from '../../../6. shared/ui/CustomButton';

type PostItemProps = {
  post: IPost;
};

function PostItem({ post }: PostItemProps) {
  return (
    <div className="post-item">
      <div className="post-item__content">
        <div className="post-item__content-title">
          <span className="post-item__id">{`${post.id}.  `}</span>
          <span className="post-item__title">{post.title}</span>
        </div>
        <div className="post-item__content-body">
          {post.body.length > 50 ? `${post.body.slice(0, 57)}...` : post.body}
        </div>
      </div>
      <div className="post-item__ux">
        <CustomButton link={post.id}>
          <div>Просмотр</div>
        </CustomButton>
      </div>
    </div>
  );
}

export default PostItem;
