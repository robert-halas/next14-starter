"use client"

import styles from './contact.module.css'
import Image from "next/image";
import {useEffect, useState} from "react";

export const metadata = {
    title: 'Contact',
    description: 'Next.js starter app contact page',
}
const ContactPage = () => {

    useEffect(() => {
        setIsClient(true);
    }, []);

    const [isClient, setIsClient] = useState(false)
    const a= Math.random()
    console.log(a)

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src={'/contact.png'} alt={'Contact page'} fill className={styles.img}/>
            </div>
            <div className={styles.formContainer}>
                <p>{isClient && a}</p>
                <form action={''} className={styles.form}>
                    <input type={'text'} placeholder={'Name and Surname'}/>
                    <input type={'text'} placeholder={'Email Address'}/>
                    <input type={'text'} placeholder={'Phone Number (Optional)'}/>
                    <textarea
                    name={''}
                    id={''}
                    cols={30}
                    rows={10}
                    placeholder={'Message'}>

                    </textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}
export default ContactPage
