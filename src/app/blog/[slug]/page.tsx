import styles from './singlePost.module.css'
import Image from "next/image";
const SinglePostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src={'https://images.pexels.com/photos/20309714/pexels-photo-20309714/free-photo-of-venice-gondolas.jpeg'}
                    alt={'post image'} fill className={styles.img}/>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}></h1>
                <div className={styles.detail}>
                    <Image
                        src={'https://images.pexels.com/photos/20309714/pexels-photo-20309714/free-photo-of-venice-gondolas.jpeg'}
                        alt={'avatar image'} width={50} height={50}  className={styles.avatar}/>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Terry Jefferson</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
               <div className={styles.content}>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus deserunt incidunt ipsam laudantium maiores rerum similique temporibus unde. Cumque dolorum excepturi laudantium necessitatibus quibusdam quidem rerum similique voluptatem? Dolorum, nisi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda, beatae cumque earum explicabo, facilis ipsa ipsam laboriosam minus perspiciatis praesentium quibusdam quos sed temporibus tenetur voluptas voluptatem. Iusto, temporibus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet aut doloribus earum est eum excepturi harum hic illum iure odio omnis pariatur perferendis rem, repellendus sint suscipit, tempore voluptas!
               </div>
            </div>
        </div>
    )
}
export default SinglePostPage
