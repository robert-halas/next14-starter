import {Post, User} from "./models";
import {connectToDb} from "./utils";
import {unstable_noStore as noStore} from "next/cache";


export const getPosts = async () => {
    try
    {
        connectToDb();
        return await Post.find()
    }
    catch(err)
    {
        console.log(err)
        throw new Error("Failed to fetch posts")
    }
}

export const getPost = async (slug) => {
    try
    {
        connectToDb();
        return await Post.findOne({slug})
    }
    catch(err)
    {
        console.log(err)
        throw new Error("Failed to fetch post")
    }
}

export const getUser = async (id) => {
    noStore()
    try
    {
        await connectToDb();
        return await User.findById(id)
    }
    catch(err)
    {
        console.log(err)
        throw new Error("Failed to fetch user")
    }
}

export const getUsers = async () => {
    try
    {
        await connectToDb();
        return await User.find()
    }
    catch(err)
    {
        console.log(err)
        throw new Error("Failed to fetch users")
    }
}
