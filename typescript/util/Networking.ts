import IArticle from "../schema/article";
import { INewsApiResponse, INewsApiArticle } from "../schema/NewsApi";
import axios, { AxiosResponse } from 'axios';



export async function getArticles(): Promise<IArticle[]> {
    return [
        {
            title: 'article.title',
            thumbnail: 'https://picsum.photos/200',
            body: 'article.content',
            source: 'article.author',
            publishDate: new Date()
        }
    ];
    const url: string = '';
    const response: AxiosResponse<INewsApiResponse> = await axios.get<INewsApiResponse>(url);

    const parsedArticles: IArticle[] = [];

    response.data.articles.forEach((article: INewsApiArticle, index: number) => {
        const parsedForm: IArticle = {
            title: article.title,
            thumbnail: article.urlToImage,
            body: article.content,
            source: article.author,
            publishDate: new Date(article.publishedAt)
        };
        parsedArticles.push(parsedForm);
    })

    return parsedArticles;
}
