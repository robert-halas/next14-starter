"use client"

import styles from './links.module.css'
import NavLink from "./navLink/navLink";
import {useState} from "react";
import Image from "next/image";

const links = [
    {
        title: "Homepage",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Contact",
        path: "/contact",
    },{
        title: "Blog",
        path: "/blog",
    },
];
const Links = () => {

    const [open,setOpen] = useState(false)

    // TEMPORARY
    const session= true
    const isAdmin = true

    return(
        <div>
            <div className={styles.links}>
                {links.map((link => (
                    <NavLink item={link} key={link.title}/>
                )))}
                {session ? (
                    <>
                        {isAdmin && (<NavLink item={{title: "Admin", path: "/admin"}}/>)}
                        <button className={styles.logout}>Logout</button>
                    </>
                ) : (
                    <NavLink item={{title: "Login", path: "/login"}}/>
                )}
            </div>
            <Image src={'/menu.png'} alt={'menu link'} width={30} height={30} onClick={()=>setOpen(prev=>!prev)} className={styles.menuButton}/>
            {open && <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title}/>

                        ))}
            </div>
            }
        </div>
    );
};
export default Links
