import AttachmentsLink, { LinkType } from './Link/Attachments-Link';
import AttachmentVideo, { VideoType } from './Video/Attachment-Video';

export type AttachmentsTypes = { type: 'video'; video: VideoType } | { type: 'link'; link: LinkType };

export default function Attachments({ attachments }: { attachments: AttachmentsTypes[] }) {
  const linkAttachment = attachments.find((item) => item.type === 'link');
  const videoAttachment = attachments.find((item) => item.type === 'video');

  return (
    <div className='Attachments'>
      {!!videoAttachment && videoAttachment.type === 'video' && <AttachmentVideo {...videoAttachment.video} />}
      {!!linkAttachment && linkAttachment.type === 'link' && <AttachmentsLink {...linkAttachment.link} />}
    </div>
  );
}
