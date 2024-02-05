import { memo } from 'react';
import ItemFooter, { Comments, Likes, Reposts, Views } from './Footer/Item-Footer';
import ItemHeader from './Header/Item-Header';
import ItemContent from './Content/Item-Content';
import { AttachmentsTypes } from './Content/Attachment/Attachment';

export type NewsPortalItemProps = {
  attachments: AttachmentsTypes[];
  comments?: Comments;
  date: number;
  from_id: number;
  id: number;
  is_favorite: boolean;
  likes?: Likes;
  marked_as_ads: 1 | 0;
  owner_id: number;
  post_source: {
    type: string;
  };
  post_type: string;
  reposts?: Reposts;
  text: string;
  views?: Views;
};

const NewsPortalItem = memo(({ ...props }: NewsPortalItemProps) => {
  console.log(props);
  const { attachments, comments, date, from_id, likes, reposts, text, views } = props;

  return (
    <article className='Item'>
      <ItemHeader id={from_id} date={date} />
      <ItemContent text={text} attachments={attachments} />
      <ItemFooter reposts={reposts} likes={likes} views={views} comments={comments} />
    </article>
  );
});

export default NewsPortalItem;
