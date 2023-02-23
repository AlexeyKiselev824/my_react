export type TLimit = 5 | 10 | 25 | -1;

export type TSort = "" | 'title' | 'body';

export interface IPost {
    id: number;
    title: string;
    body: string;
}