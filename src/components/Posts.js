import { useSelector } from 'react-redux';
import Photo from './Photo';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  return (
    <div>
      <div className="photo-grid">
        {posts.map((post, index) => (
          <Photo key={index} index={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
