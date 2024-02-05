import { FC } from 'react';

type Size = {
  height: number;
  type: string;
  url: string;
  width: number;
};

type Photo = {
  album_id: number;
  date: number;
  id: number;
  owner_id: number;
  text: string;
  sizes: Size[];
};

export type LinkType = {
  caption: string;
  description: string;
  is_favourite: boolean;
  photo?: Photo;
  title: string;
  url: string;
};

const AttachmentsLink: FC<LinkType> = ({ title, url, photo }) => (
  <div className='Attachment-Link'>
    <a href={url} className='Link-Ancor'>
      {title}
    </a>
    {!!photo && <img src={photo.sizes[4].url} alt={title} />}
  </div>
);

export default AttachmentsLink;
