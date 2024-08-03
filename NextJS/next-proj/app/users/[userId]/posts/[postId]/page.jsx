import React from 'react';

function PostDetail({ params }) {
  return (
    <div>
      <h1>User ID: {params.userId}</h1>
      <h1>Post ID: {params.postId}</h1>
    </div>
  );
}

export default PostDetail;
