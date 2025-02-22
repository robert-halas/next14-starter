import styles from './singlePost.module.css'
import Image from "next/image";
import {getPost} from "../../../lib/data";
import {Suspense} from "react";
import PostUser from "../../../components/postUser/postUser";

export const generateMetadata = async ({ params }) => {
    const {slug} = params
    const post = await getPost(slug)
    return {
        title:post.title,
        description:post.desc
    }
}

const SinglePostPage = async ({params}) => {

    const {slug} = params
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
                    {post && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <PostUser userId={post.userId} />
                        </Suspense>
                    )}
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>{post.createdAt??<p>eee jbg</p>}</span>
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
