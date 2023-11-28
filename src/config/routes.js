export const categories = {
    home: '/',
    art: '/category/art',
    music: '/category/music',
};

export const collectionCategories = {
    items: '/',
    offers: '/offers',
    analytics: '/analytics',
    activity: '/activity',
};

const routes = {
    ...categories,
    profile: '/@:nickname',
    upload: '/upload',
    stats: '/stats',
    collection: '/collection',
};

export default routes;
