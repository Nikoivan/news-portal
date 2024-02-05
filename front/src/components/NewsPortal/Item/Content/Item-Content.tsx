import { FC } from 'react';
import Attachment, { AttachmentsTypes } from './Attachment/Attachment';

type ItemContentProps = {
  text: string;
  attachments: AttachmentsTypes[];
};

const ItemContent: FC<ItemContentProps> = ({ text, attachments }) => {
  return (
    <div className='Item-Content'>
      <p className='Content-Text'>{text}</p>
      <Attachment attachments={attachments} />
    </div>
  );
};

export default ItemContent;
