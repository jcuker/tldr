export interface INewsApiResponse {
    status: string;
    totalNumber: number;
    articles: INewsApiArticle[];
}

export interface INewsApiArticle {
    source: {
        id: string;
        name: string;
    },
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}