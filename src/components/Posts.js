import { useSelector } from 'react-redux';

const posts = useSelector((state) => state.posts);
const comments = useSelector((state) => state.comments);
const Posts = () => <div className="photo-grid">{comments}</div>;

export default Posts;
