import {getUser} from "../../lib/data";
import styles from './postUser.module.css'
import Image from "next/image";

const postUser = async ({ userId }) =>
{

const user = await getUser(userId);
    console.log(user);
return (
    <div className={styles.container}>
        {user.img &&  <Image
            src={user.img ? user.img : '/noavatar.png'}
            alt={'avatar image'} width={50} height={50} className={styles.avatar}/>}
        <div className={styles.texts}>
            <div className={styles.title}>Author</div>
            <div className={styles.username}>{user.username}</div>
        </div>
    </div>
);
}

export default postUser
