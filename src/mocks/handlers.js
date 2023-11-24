import { http, HttpResponse, delay } from 'msw';
import accountsData from './accounts.json';
import collectionsData from './collections.json';

export const handlers = [
    http.get('/api/accounts', async () => {
        await delay(1000);
        return HttpResponse.json(
            accountsData.map((account) => ({
                id: account.id,
                name: account.name,
                avt: account.avt,
            })),
            { status: 200 },
        );
    }),
    http.get('/api/accounts/:accountId', async ({ params }) => {
        await delay(1000);
        const { accountId } = params;
        return HttpResponse.json(
            accountsData.find((account) => account.id === parseInt(accountId)),
            { status: 200 },
        );
    }),
    http.get('/api/collections', async () => {
        await delay(1000);
        return HttpResponse.json(
            collectionsData.map((collection) => ({
                id: collection.id,
                name: collection.name,
                avt: collection.avt,
                numOfItems: collection.numOfItems,
                price: collection.price,
            })),
            { status: 200 },
        );
    }),
    http.get('/api/collections/:collectionId', async ({ params }) => {
        await delay(1000);
        const { collectionId } = params;
        return HttpResponse.json(
            collectionsData.find((collection) => collection.id === parseInt(collectionId)),
            { status: 200 },
        );
    }),
    // rest.get('/api/articles/:articleId/comments', (req, res, ctx) => {
    //     mockDelay(500);
    //     const { articleId } = req.params;
    //     const userCommentsForArticle = userComments[articleId] || [];
    //     return res(
    //         ctx.status(200),
    //         ctx.json({
    //             articleId: parseInt(articleId),
    //             comments: commentsData
    //                 .filter((comment) => comment.articleId === parseInt(articleId))
    //                 .concat(userCommentsForArticle),
    //         }),
    //     );
    // }),
    // rest.post('/api/articles/:articleId/comments', (req, res, ctx) => {
    //     mockDelay(500);
    //     const { articleId } = req.params;
    //     const commentResponse = {
    //         id: commentsData.length,
    //         articleId: parseInt(articleId),
    //         text: JSON.parse(req.body).comment,
    //     };

    //     if (userComments[articleId]) {
    //         userComments[articleId].push(commentResponse);
    //     } else {
    //         userComments[articleId] = [commentResponse];
    //     }

    //     return res(ctx.status(200), ctx.json(commentResponse));
    // }),
];
