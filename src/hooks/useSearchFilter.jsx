import { useState } from 'react';

const useSearchFilter = (posts) => {
  const [query, setQuery] = useState('');

  const filteredPosts = posts.filter(post =>
    post.sender.name.toLowerCase().includes(query.toLowerCase())
  );

  return { filteredPosts, setQuery };
};

export default useSearchFilter;
