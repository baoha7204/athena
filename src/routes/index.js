import config from '~/config';

// Layouts
import { HeaderOnly, OnlyContent } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Art from '~/pages/Art';
import Music from '~/pages/Music';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Stats from '~/pages/Stats';
import Collection from '~/pages/Collection/Collection';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.art, component: Art },
    { path: config.routes.music, component: Music },
    { path: config.routes.upload, component: Upload, layout: OnlyContent },
    { path: config.routes.profile, component: Profile, layout: HeaderOnly },
    { path: config.routes.stats, component: Stats, layout: null },
    { path: config.routes.collection, component: Collection, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
