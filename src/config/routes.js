const categories = {
    home: '/',
    art: '/category/art',
    music: '/category/music',
};

const routes = {
    ...categories,
    profile: '/@:nickname',
    upload: '/upload',
    stats: '/stats',
    collection: '/collection',
};

export default routes;
