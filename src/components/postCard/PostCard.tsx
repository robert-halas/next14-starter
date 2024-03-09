import styles from './postCard.module.css'
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image
                        src={'https://images.pexels.com/photos/20309714/pexels-photo-20309714/free-photo-of-venice-gondolas.jpeg'}
                        alt={'post image'} fill className={styles.img}/>
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
            <h1 className={styles.title}>Where does it come from ? -
                Contrary to popular belief, Lorem Ipsum is not simply random text.</h1>
                <p className={styles.desc}>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                <Link href={'/blog/post'} className={styles.link}>READ MORE</Link>
            </div>
        </div>
    )
}
export default PostCard
