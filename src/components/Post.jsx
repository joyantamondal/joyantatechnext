import React from 'react';
import { formatTimestamp } from '../utils/formatTimestamp';
import ImageLightbox from './ImageLightbox';

const Post = ({ post }) => {
  const { sender, content, timestamp, likes, comments } = post;
  
  return (
    <div className="post">
      <div className="post-header">
        <img className="avatar" src={sender.avatar} alt={sender.name} />
        <span className="username">{sender.name}</span>
        <span className="timestamp">{formatTimestamp(timestamp)}</span>
      </div>
      <p className="post-text">{content.text}</p>
      <div className="media-grid">
        {content.media.map((media, index) => (
          media.type === 'image' && (
            <img key={index} src={media.src} alt={`post-media-${index}`} />
          )
        ))}
      </div>
      <div className="post-footer">
        <span>{likes} Likes</span>
        <span>{comments} Comments</span>
      </div>
      <ImageLightbox images={content.media} />
    </div>
  );
};

export default Post;
