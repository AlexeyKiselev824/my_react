import { IPost } from "../models/IPost";
import { ISort } from "../models/ISort";


function sortedPosts(posts: IPost[], sort: ISort): IPost[] {
    if (sort) {
        return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return posts;
}


export function sortedAndSearchedPosts(posts: IPost[], sort: ISort, searchDelay: string): IPost[] {
    const sortedPost = sortedPosts(posts, sort);

    return sortedPost.filter(post => post.title.toLowerCase().includes(searchDelay.toLowerCase()));
}