import { http, HttpResponse, delay } from 'msw';
import accountsData from './accounts.json';
import collectionsData from './collections.json';

export const handlers = [
    http.get('/api/accounts/:accountId', async ({ params }) => {
        await delay(2000);
        const { accountId } = params;
        return HttpResponse.json(
            accountsData.find((account) => account.id === parseInt(accountId)),
            { status: 200 },
        );
    }),
    http.get('/api/accounts', async ({ request }) => {
        await delay(2000);
        const url = new URL(request.url);
        let searchTerm = url.searchParams.get('search');
        if (!searchTerm) {
            return new HttpResponse(null, { status: 404 });
        }
        searchTerm = searchTerm.trim().toLowerCase();
        const searchedAccounts = accountsData.filter((account) => {
            return account.name.toLowerCase().includes(searchTerm);
        });
        return HttpResponse.json(searchedAccounts, { status: 200 });
    }),
    http.get('/api/accounts', async () => {
        await delay(2000);
        return HttpResponse.json(
            accountsData.map((account) => ({
                id: account.id,
                name: account.name,
                avt: account.avt,
            })),
            { status: 200 },
        );
    }),
    http.get('/api/collections?search=', async ({ request }) => {
        await delay(2000);
        const url = new URL(request.url);
        let searchTerm = url.searchParams.get('search');
        if (!searchTerm) {
            return new HttpResponse(null, { status: 404 });
        }
        searchTerm = searchTerm.trim().toLowerCase();
        const cearchedCollections = collectionsData.filter((collection) => {
            return collection.name.toLowerCase().includes(searchTerm);
        });
        return HttpResponse.json(cearchedCollections, { status: 200 });
    }),
    http.get('/api/collections/:collectionId', async ({ params }) => {
        await delay(2000);
        const { collectionId } = params;
        return HttpResponse.json(
            collectionsData.find((collection) => collection.id === parseInt(collectionId)),
            { status: 200 },
        );
    }),
    http.get('/api/collections', async () => {
        await delay(2000);
        return HttpResponse.json(
            collectionsData.map((collection) => ({
                id: collection.id,
                name: collection.name,
                avt: collection.avt,
                quantity: collection.quantity,
                price: collection.price,
            })),
            { status: 200 },
        );
    }),
    http.get('/api/spotlights', async () => {
        await delay(2000);
        return HttpResponse.json(
            collectionsData.map((collection) => ({
                id: collection.id,
                name: collection.name,
                avt: collection.avt,
                quantity: collection.quantity,
                price: collection.price,
            })),
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
