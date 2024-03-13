import styles from './blog.module.css'
import PostCard from "../../components/postCard/PostCard";
import {getPosts} from "../../lib/data";

interface Post {
    id: string,
    userId: string,
    title: string,
    desc: string,
    slug: string,
    img: string
}

const BlogPage = async () => {

    const posts = await getPosts();

    return (
        <div className={styles.container}>
            {posts.map((post: Post) => (
                <div className={styles.post} key={post.id}>
                    <PostCard post={post}/>
                </div>
            ))}
        </div>
    )
}
export default BlogPage
