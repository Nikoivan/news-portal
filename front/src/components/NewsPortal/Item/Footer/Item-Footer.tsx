import { Visibility, FavoriteBorder, ChatBubbleOutline, Reply } from '@mui/icons-material';

import './Item-Footer.css';

export type Views = {
  count: number;
};

export type Likes = {
  can_like: 1 | 0;
  can_publish: 1 | 0;
  count: number;
  user_likes: 0;
};

export type Comments = {
  can_post: 1 | 0;
  count: number;
  groups_can_post: boolean;
};

export type Reposts = {
  count: number;
  user_reposted: number;
};

type ItemFooterProps = {
  views?: Views;
  likes?: Likes;
  comments?: Comments;
  reposts?: Reposts;
};

const ItemFooter = ({ views, likes, comments, reposts }: ItemFooterProps) => (
  <div className='Item-Footer'>
    <div className='Item-Wrap'>
      <div className='Wrap-Element'>
        <FavoriteBorder />
        {!!likes?.count && <span className='Item-Count'>{likes.count}</span>}
      </div>
      <div className='Wrap-Element'>
        <ChatBubbleOutline />
        {!!comments?.count && <span className='Item-Count'>{comments.count}</span>}
      </div>
      <div className='Wrap-Element'>
        <Reply />
        {!!reposts?.count && <span className='Item-Count'>{reposts.count}</span>}
      </div>
    </div>
    <div className='Wrap-Element'>
      <Visibility />
      {!!views?.count && <span className='Item-Count'>{views.count}</span>}
    </div>
  </div>
);

export default ItemFooter;
