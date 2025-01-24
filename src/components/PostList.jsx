import React from 'react';
import Post from './Post';

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.length > 0 ? (
        posts.map(post => <Post key={post.id} post={post} />)
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
};

export default PostList;
