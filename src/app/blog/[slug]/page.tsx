import styles from './singlePost.module.css'
import Image from "next/image";
import {usePathname} from "next/navigation";
import {getPost} from "../../../lib/data";
const SinglePostPage = async ({slug}) => {

    console.log("slug is: "+slug);
    const post = await getPost(slug);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                {post.img && <Image
                    src={post.img}
                    alt={'post image'} fill className={styles.img}/>}
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>

                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Terry Jefferson</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>{post.createdAt.toString().slice(4,16)}</span>
                    </div>
                </div>
                <div className={styles.content}>
                    {post.desc}
                </div>
            </div>
        </div>
    )
}
export default SinglePostPage
