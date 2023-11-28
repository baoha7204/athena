import Header from '~/layouts/components/Header';
import HorizontalNav from '../components/HorizontalNav';
import { categories } from '~/config/routes';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="myContainer pt-12">
                <div className="flex flex-col w-full px-[32px] gap-14">
                    <HorizontalNav categories={categories} />
                    <div className="content">{children}</div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
