import { IPost } from "../models/IPost";
import { ISort } from "../models/ISort";


function sortedPosts(posts: IPost[], sort: ISort) {
    if (sort) {
        return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return posts;
}


export function sortedAndSearchedPosts(posts: IPost[], sort: ISort, searchDelay: string) {
    const sortedPost = sortedPosts(posts, sort);

    return sortedPost.filter(post => post.title.toLowerCase().includes(searchDelay.toLowerCase()));
}