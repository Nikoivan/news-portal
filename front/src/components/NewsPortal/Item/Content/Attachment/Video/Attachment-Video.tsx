import { FC } from 'react';

export type VideoType = {
  access_key: string;
  can_add: 1 | 0;
  comments: number;
  date: number;
  description: string;
  duration: number;
  first_frame: {
    height: number;
    url: string;
    width: number;
  }[];
  height: number;
  id: number;
  is_favourite: boolean;
  owner_id: number;
  title: string;
  track_code: string;
  type: 'video';
  views: number;
  width: number;
  image: {
    height: number;
    url: string;
    width: number;
    with_padding: 1 | 0;
  }[];
};
const AttachmentVideo: FC<VideoType> = ({ image, title }) => (
  <div className='Attachment-Video'>{!!image.length && <img alt={title} src={image[3].url} />}</div>
);

export default AttachmentVideo;
