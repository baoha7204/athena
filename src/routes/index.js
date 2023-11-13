import config from "~/config";

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Art from '~/pages/Art';
import Music from '~/pages/Music';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Stats from '~/pages/Stats';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.art, component: Art },
    { path: config.routes.music, component: Music },
    { path: config.routes.upload, component: Upload },
    { path: config.routes.profile, component: Profile, layout: HeaderOnly },
    { path: config.routes.stats, component: Stats, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };