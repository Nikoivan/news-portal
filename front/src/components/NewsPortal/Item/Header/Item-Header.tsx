import { FC } from 'react';
import { getAuthorById } from '../../../../services/getUrl.util';
import { getDate } from '../../../../services/utility';

type ItemHeaderProps = {
  id: number;
  date: number;
};

const ItemHeader: FC<ItemHeaderProps> = ({ id, date }) => (
  <div className='Item-Header'>
    <h3 className='Item-Title'>{getAuthorById(id)}</h3>
    <span className='Item-'>{getDate(date)}</span>
  </div>
);

export default ItemHeader;
