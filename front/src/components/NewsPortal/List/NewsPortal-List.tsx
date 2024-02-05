import NewsPortalItem, { NewsPortalItemProps } from '../Item/NewsPortal-Item';

type NewsPortalListProps = {
  news: NewsPortalItemProps[];
};

const NewsPortalList = ({ news }: NewsPortalListProps) => {
  return (
    <ul className='NewsPortal-List'>
      {news.map((item) => (
        <NewsPortalItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default NewsPortalList;
