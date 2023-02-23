import { IPost, TSort } from "../models/types";



function sortedPosts(posts: IPost[], sort: TSort): IPost[] {
    if (sort) {
        return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return posts;
}


export function sortedAndSearchedPosts(posts: IPost[], sort: TSort, searchDelay: string): IPost[] {
    const sortedPost = sortedPosts(posts, sort);

    return sortedPost.filter(post => post.title.toLowerCase().includes(searchDelay.toLowerCase()));
}